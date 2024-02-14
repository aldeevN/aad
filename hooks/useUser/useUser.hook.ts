// lib
import useSwr from "swr";
import { useSession } from "next-auth/react";
import { $api } from "../../core/axios";

// types 
import { IUser } from "./useUser.types";


const fetcher = (url: string, token: string) =>
  $api
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);


export const useUser = () => {
  const { data: session } = useSession();
  const { data: user, error: userError } = useSwr<IUser>(
    [`api/v1/user/detail/`, session?.accessToken],
    fetcher
  );

  return {
    userError,
    user,
    isLoading: !user,
  };
};
