// react redux
import React, { ReactElement, useEffect } from "react";

// next
import { useRouter } from "next/router";
import Head from "next/head";

// layout
import LayoutLending from "../layouts/LayoutLending/LayoutLending.component";
import { Lending } from "../pageComponents/Lending/Lending.component";
const LendingPage = (): JSX.Element => {
  const router = useRouter();
  const { ref } = router.query;


  useEffect(() => {
    ref && sessionStorage.setItem("master_id", ref as string);
  }, [ref]);

  return (
    <>
      <Head>
        <title>LearnLMS</title>
        <link rel="shortcut icon" href="favicon/favicon.ico" />
        <meta name="description" content="ForceInSystem" />
      </Head>
      <Lending />
    </>
  );
};

LendingPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutLending>{page}</LayoutLending>;
};

export default LendingPage;
