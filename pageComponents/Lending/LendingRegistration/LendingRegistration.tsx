import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function LendingRegistration() {
    const session = useSession();
    console.log(session);

    return (
        <>
            {session?.data && <Link href="/profile">Profile</Link>}
            {session?.data ? (
                <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
                    Sign Out
                </Link>
            ) : (
                <Link href="/signin/signin">SignIn</Link>
            )}
        </>

    )
}
