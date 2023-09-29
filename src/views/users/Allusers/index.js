import React, { useMemo } from 'react'
import { Loading, DataTable } from 'components/shared'
import { Button, Tag } from 'components/ui'
import { data10 } from './components/data'
import useThemeClass from 'utils/hooks/useThemeClass'
import { HiOutlinePencil } from 'react-icons/hi';
const StatusColumn = () => {
    return (
        <Tag className="bg-emerald-400 min-w-[60px] justify-center text-black  dark:bg-emerald-500/20 dark:text-emerald-100 border-0 rounded">Active</Tag>
    )
}
const ActionColumn = () => {
    const { textTheme } = useThemeClass()
    const onEdit = () => {
    }
    return (
        <div className="flex justify-end text-lg">
            <span className={`cursor-pointer p-2 hover:${textTheme}`} onClick={onEdit}>
                <HiOutlinePencil />
            </span>
        </div>
    )
}
function AllUsers() {
    const columns = useMemo(() => [
        {
            Header: 'Name',
            accessor: 'name',
            sortable: false,

        },
        {
            Header: 'Number',
            accessor: 'number',
            sortable: false,

        },
        {
            Header: 'Designation',
            accessor: 'designation',
            sortable: false,
        },
        {
            Header: 'Status',
            id: "status",
            accessor: (row) => row,
            Cell: props => <StatusColumn />

        },
        {
            Header: 'Edit',
            id: 'action',
            accessor: (row) => row,
            Cell: props => <ActionColumn row={props.id} />
        },
    ], [])
    return (
        <div className="flex flex-col gap-4 h-full">
            <Loading loading={false}>
                <p className="font-semibold mb-10 text-black text-[17px]">All Users</p>
                <div className="flex flex-col gap-2">
                    <Button size="sm" variant="solid" className="!rounded-lg self-end px-10">Add Users</Button>
                    <DataTable columns={columns}
                        data={data10}
                        skeletonAvatarColumns={[0]}
                        skeletonAvatarProps={{ className: 'rounded-md' }}
                        pagingData={{ pageIndex: 0, pageSize: 10, total: data10.length }}
                        pagination
                    />
                </div>
            </Loading>
        </div>
    )
}

export default AllUsers