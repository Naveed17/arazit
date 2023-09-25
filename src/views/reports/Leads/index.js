import React, { useState, useMemo } from 'react'
import { Loading } from 'components/shared'
import { Input, Select, DatePicker, Button, } from 'components/ui'
import { DataTable } from 'components/shared'
import { colourOptions, data10, StatisticData } from './components/data'
import useThemeClass from 'utils/hooks/useThemeClass'
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
import TableTools from './components/TableTools';
import Statistic from './components/Statistic'
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
const Leads = () => {
    const [state, setState] = useState({
        product: "",
        start_date: new Date(),
        end_date: new Date(),
        status: '',
        open_close: "",
        type: "",
        users: "",
        marketing: ""
    })
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
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 xl:gap-y-8">
                    <Input
                        onChange={(e) => setState({
                            ...state,
                            product: e.target.value,
                        })}
                        value={state.product}
                        type="text"
                        name="product"
                        placeholder="Product" size="sm" />
                    <Select placeholder="Status" size="sm"
                        onChange={(newValue) => setState({
                            ...state,
                            status: newValue.label,
                        })}
                        options={colourOptions}></Select>
                    <Select placeholder="Type"
                        onChange={(newValue) => setState({
                            ...state,
                            type: newValue.label,
                        })}
                        size="sm" options={colourOptions}></Select>
                    <Select
                        onChange={(newValue) => setState({
                            ...state,
                            open_close: newValue.label,
                        })}
                        placeholder="Open/Close" size="sm" options={colourOptions}></Select>
                    <Select
                        onChange={(newValue) => setState({
                            ...state,
                            users: newValue.label,
                        })}
                        placeholder="Users" size="sm" options={colourOptions}></Select>
                    <Select
                        onChange={(newValue) => setState({
                            ...state,
                            marketing: newValue.label,
                        })}

                        placeholder="Marketing" size="sm" options={colourOptions}></Select>
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
                <Statistic data={StatisticData} />
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


            </Loading>
        </div>
    )
}

export default Leads