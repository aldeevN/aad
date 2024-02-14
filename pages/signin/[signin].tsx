import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import SignInComponent from "../../pageComponents/SignIn/SignInComponent"


const SignInPage = () => {
    const router = useRouter()

    useEffect(() => {
        router.prefetch("/")
    }, [router])



    return (
        <>
            <SignInComponent />
        </>
    )
}


export default SignInPage