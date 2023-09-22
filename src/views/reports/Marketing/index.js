import React, { useState, useMemo } from 'react'
import { Loading } from 'components/shared'
import { Select, DatePicker, Button, Tag } from 'components/ui'
import { DataTable } from 'components/shared'
import { colourOptions, data10, dataLeads } from './components/data'
import useThemeClass from 'utils/hooks/useThemeClass'
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
import TableTools from './components/TableTools';
const ActionColumn = () => {
    const { textTheme } = useThemeClass()
    const onEdit = () => {
    }
    const onDelete = () => {
    }
    return (
        <div className="flex justify-end text-lg">
            <span className={`cursor-pointer p-2 hover:${textTheme}`} onClick={onEdit}>
                <HiOutlinePencil />
            </span>
            <span className="cursor-pointer p-2 hover:text-red-500" onClick={onDelete}>
                <HiOutlineTrash />
            </span>
        </div>
    )
}
const AccessColumn = () => {
    return (
        <Tag className="bg-emerald-400 min-w-[60px] justify-center text-black  dark:bg-emerald-500/20 dark:text-emerald-100 border-0 rounded">85%</Tag>
    )
}
const Marketing = () => {
    const [state, setState] = useState({
        start_date: new Date(),
        end_date: new Date(),
        marketing: ""
    })
    const columnsLeads = useMemo(() => [
        {
            Header: 'Lead Source',
            accessor: 'leadSource',
            sortable: false,

        },
        {
            Header: 'Leads Created',
            accessor: 'leadsCreated',
            sortable: false,

        },
        {
            Header: 'Leads Closed',
            accessor: 'leadsClosed',
            sortable: false,
        },
        {
            Header: 'Type A',
            accessor: 'typeA',
            sortable: false,

        },
        {
            Header: 'Pre-Sales',
            accessor: 'preSales',
            sortable: false,

        },
        {
            Header: 'Sales',
            accessor: 'sales',
            sortable: false,

        },
        {
            Header: 'Success',
            id: 'success',
            accessor: (row) => row,
            Cell: props => <AccessColumn row={props} />
        },
    ], [])
    const columns = useMemo(() => [
        {
            Header: 'Name',
            accessor: 'name',
            sortable: false,

        },
        {
            Header: 'Phone',
            accessor: 'phone',
            sortable: false,

        },
        {
            Header: 'Status',
            accessor: 'status',
            sortable: false,
        },
        {
            Header: 'Type',
            accessor: 'type',
            sortable: false,

        },
        {
            Header: 'Product',
            accessor: 'product',
            sortable: false,

        },
        {
            Header: 'Assigned User',
            accessor: 'assignedUser',
            sortable: false,

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
                <p className="font-semibold mb-10">Marketing <span className='text-gray-400'>Report</span></p>
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 gap-y-8 mb-10">
                    <Select
                        onChange={(newValue) => setState({
                            ...state,
                            marketing: newValue.label,
                        })}

                        placeholder="Marketing" size="sm" options={colourOptions} />
                    <DatePicker
                        size="sm"
                        placeholder="Start Date"
                        value={state.start_date}
                        onChange={(date) =>
                            setState({ ...state, start_date: date })}

                    />
                    <DatePicker
                        size="sm"
                        placeholder="End Date"
                        value={state.end_date}
                        onChange={(date) =>
                            setState({ ...state, end_date_date: date })}

                    />
                    <Button size="sm" variant="solid" className="!rounded-lg place-self-start px-10">Submit</Button>
                </div>
                <div className="flex flex-col gap-8">
                    <DataTable columns={columnsLeads}
                        data={dataLeads}
                        skeletonAvatarColumns={[0]}
                        skeletonAvatarProps={{ className: 'rounded-md' }}


                    />
                    <div className="flex flex-col gap-4">
                        <TableTools />
                        <DataTable columns={columns}
                            data={data10}
                            selectable
                            skeletonAvatarColumns={[0]}
                            skeletonAvatarProps={{ className: 'rounded-md' }}
                            pagingData={{ pageIndex: 0, pageSize: 10, total: data10.length }}
                            pagination
                        />
                    </div>
                </div>
            </Loading>
        </div>
    )
}

export default Marketing