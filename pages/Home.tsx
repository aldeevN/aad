// react
import { ReactElement } from "react";

//next
import Head from "next/head";

// layout
import LayoutAside from "@/layouts/LendingAside/LendingAsede.component";

// pages components
import { Home } from "../pageComponents/Home/Home";



const HomePage = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>LearnLMS</title>
                <meta name="description" content="ForceInSystem-Home" />
            </Head>
            <Home />
        </>
    );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
    return <LayoutAside>{page}</LayoutAside>;
};

export default HomePage;
