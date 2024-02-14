import LayoutAside from '@/layouts/LendingAside/LendingAsede.component'
import React, { ReactElement } from 'react'

const SolveTask = () => {
    return (
        <div>SolveTask</div>
    )
}

SolveTask.getLayout = (page: ReactElement) => {
    return (
        <>
            <LayoutAside>{page}</LayoutAside>
        </>
    )
}

export default SolveTask