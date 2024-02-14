// next
import { useRouter } from "next/router";

// lib
import { mutate } from "swr";
import { useSession } from "next-auth/react";


const useLessonsList = (idCourse: string | string[] | undefined, setCurrentLessonNumber: (val: number) => void) => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleChangeLesson = (
    id: string | string[] | undefined,
    is_available: boolean,
    index: number
  ) => {
    if (is_available) {
      setCurrentLessonNumber(index);
      router.query["pk"] = id;
      router.push(router, undefined, { shallow: true });
      mutate([`/api/v1/lesson/${idCourse}/`, session?.accessToken]);
    } else return;
  };


  return {
    handleChangeLesson
  };
};

export default useLessonsList;