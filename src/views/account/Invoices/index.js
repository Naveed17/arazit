import React, { useState, useMemo } from 'react'
import { Loading, DataTable } from 'components/shared'
import { Select, DatePicker, Button, Badge } from 'components/ui'
import { colourOptions, data10 } from './components/data'
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
import useThemeClass from 'utils/hooks/useThemeClass'
import TableTools from './components/TableTools';
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
const StatusColumn = () => {
	return (
		<div className='flex items-center'>
			<Badge className="bg-emerald-500" />
			<span className="ml-1 rtl:mr-1 font-semibold text-emerald-500 dark:text-gray-100 text-xs">Completed</span>
		</div>
	)
}
const Invoices = () => {
	const [state, setState] = useState({
		start_date: new Date(),
		end_date: new Date(),
		status: ""
	})
	const columns = useMemo(() => [
		{
			Header: 'Client Name',
			accessor: 'name',
			sortable: false,

		},
		{
			Header: 'Number',
			accessor: 'phone',
			sortable: false,

		},
		{
			Header: 'Client Id',
			accessor: 'clientId',
			sortable: false,

		},
		{
			Header: 'Invoice Id',
			accessor: 'invoiceId',
			sortable: false,

		},
		{
			Header: 'Date',
			accessor: 'date',
			sortable: false,

		},
		{
			Header: 'Status',
			id: 'status',
			accessor: (row) => row,
			Cell: props => <StatusColumn row={props.id} />
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
				<h6 className="font-semibold mb-10">Invoices</h6>
				<div className="grid grid-cols-1 xl:grid-cols-4 gap-4 gap-y-8 mb-10">
					<Select
						onChange={(newValue) => setState({
							...state,
							marketing: newValue.label,
						})}

						placeholder="Status" size="sm" options={colourOptions} />
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
				<div className="flex flex-col gap-4">
					<TableTools />
					<DataTable columns={columns}
						data={data10}
						skeletonAvatarColumns={[0]}
						skeletonAvatarProps={{ className: 'rounded-md' }}
						pagingData={{ pageIndex: 0, pageSize: 10, total: data10.length }}
						pagination
					/>
				</div>
			</Loading>
		</div >
	)
}

export default Invoices