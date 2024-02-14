import LayoutAside from '@/layouts/LendingAside/LendingAsede.component'
import React, { ReactElement } from 'react'

const SectionsComponent = () => {
    return (
        <div>SectionsComponent</div>
    )
}

SectionsComponent.getLayout = (page: ReactElement) => {
    return (
        <>
            <LayoutAside>{page}</LayoutAside>
        </>
    )
}

export default SectionsComponent