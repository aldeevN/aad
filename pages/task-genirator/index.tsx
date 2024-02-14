import LayoutAside from '@/layouts/LendingAside/LendingAsede.component'
import React, { ReactElement } from 'react'

const TaskGenerator = () => {
    return (
        <div>TaskGenerator</div>
    )
}

TaskGenerator.getLayout = (page: ReactElement) => {
    return (
        <>
            <LayoutAside>{page}</LayoutAside>
        </>
    )
}

export default TaskGenerator