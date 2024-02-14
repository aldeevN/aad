import { useRouter } from 'next/router'
import React, { useEffect } from 'react'



const SignUpPage = () => {
    const router = useRouter()

    useEffect(() => {
        router.prefetch("/")
    }, [router])



    return (
        <div>SignUpPage</div>
    )
}


export default SignUpPage