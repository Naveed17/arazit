import React, { useMemo } from 'react'
import { Loading, DataTable } from 'components/shared'
import { Button, Tag, Input } from 'components/ui'
import { data10 } from './components/data'
import useThemeClass from 'utils/hooks/useThemeClass'
import { HiOutlinePencil } from 'react-icons/hi';
const StatusColumn = () => {
    return (
        <Tag className="bg-emerald-400 min-w-[60px] justify-center text-black  dark:bg-emerald-500/20 dark:text-emerald-100 border-0 rounded">Active</Tag>
    )
}
const ActionColumn = () => {
    const { textTheme } = useThemeClass();
    const onEdit = () => {
    }
    return (
        <div className="flex text-lg">
            <span className={`cursor-pointer p-2 hover:${textTheme}`} onClick={onEdit}>
                <HiOutlinePencil />
            </span>
        </div>
    )
}
function Clients() {

    const [state, setState] = React.useState({
        client: ""
    })
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
            Header: 'Client ID',
            accessor: 'clientId',
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
        {
            Header: 'Profile Created',
            accessor: "createdAt",
            sortable: false,


        },
    ], [])
    return (
        <div className="flex flex-col gap-4 h-full">
            <Loading loading={false}>
                <p className="font-semibold mb-10 text-black dark:text-white text-base">All Clients</p>
                <div className="flex flex-col gap-2">
                    <div className="flex md:flex-row flex-col items-center gap-2 md:justify-end">
                        <Input
                            onChange={(e) => setState({
                                ...state,
                                client: e.target.value,
                            })}
                            value={state.client}
                            type="text"
                            name="client"
                            className="md:w-auto"
                            placeholder="Search" size="sm" />
                        <Button size="sm" variant="solid" className="!rounded-lg px-10 w-full md:w-auto">Add Client</Button>
                    </div>

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

export default Clients