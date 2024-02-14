import LayoutAside from '@/layouts/LendingAside/LendingAsede.component'
import React, { ReactElement } from 'react'

const About = () => {
    return (
        <div>About</div>
    )
}

About.getLayout = (page: ReactElement) => {
    return (
        <>
            <LayoutAside>{page}</LayoutAside>
        </>
    )
}

export default About