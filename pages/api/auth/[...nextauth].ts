import axios from "axios";
import { API_URL } from "../../../core/axios";

// next
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from "next";

interface ResponseRefreshToken {
    access: string;
    refresh: string;
    lifetime_refresh: number;
    lifetime_access: number;
}

async function refreshAccessToken(tokenObject: JWT) {
    try {
        const tokenResponse = await axios.post<ResponseRefreshToken>(API_URL + "auth/jwt/refresh/", {
            refresh: tokenObject.refreshToken,
        });

        return {
            ...tokenObject,
            accessToken: tokenResponse.data.access,
            refreshToken: tokenResponse.data.refresh,
        };
    } catch (error) {
        return {
            ...tokenObject,
            error: "RefreshAccessTokenError",
        };
    }
}

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
    NextAuth(req, res, {
        providers: [
            CredentialsProvider({
                name: "Credentials",
                credentials: {
                    email: {
                        label: "email",
                        type: "email",
                    },
                    password: {
                        label: "password",
                        type: "password",
                    },
                },
                authorize: async (credentials) => {
                    try {
                        const user = await axios.post<{ access: string; refresh: string }>(
                            API_URL + "auth/jwt/create/",
                            {
                                email: credentials?.email,
                                password: credentials?.password,
                            }
                        );
                        if (user?.data.access) {
                            console.log("authorize access");
                            return user.data;
                        }
                        console.log("authorize null");
                        return null;
                    } catch (e: unknown) {
                        console.log(e);
                        if (axios.isAxiosError(e)) {
                            // @ts-ignore
                            throw new Error(e.response?.data.Error[0]);
                        }

                        return null;
                    }
                },
            }),
        ],

        callbacks: {
            jwt: async ({ token, user }) => {
                if (user) {
                    token.accessToken = user.access;
                    // token.accessTokenExpiry = user.lifetime_refresh;
                    // token.refreshToken = user?.refresh;
                }
                // @ts-ignore
                if (token.lifetime_access > Date.now()) {
                    return Promise.resolve(token);
                }

                token = await refreshAccessToken(token);

                return Promise.resolve(token);
            },

            session: async ({ session, token }) => {
                session.accessToken = token.accessToken;
                session.lifetime_access = token.lifetime_access;
                session.error = token.error;

                return Promise.resolve(session);
            },
        },

        pages: {
            signIn: `/sign-in/sign-in`,
            signOut: "/",
        },
        secret: "secter",
    });

export default Auth;
