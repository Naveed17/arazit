import React, { useMemo } from 'react'
import { Loading, DataTable } from 'components/shared'
import { HiOutlinePencil } from 'react-icons/hi'
import useThemeClass from 'utils/hooks/useThemeClass'
import { Input, Select, Button, } from 'components/ui'
import { colourOptions, data10 } from './components/data'
const ActionColumn = () => {
	const { textTheme } = useThemeClass()
	const onEdit = () => {
	}
	return (
		<div className="flex justify-start text-lg">
			<span className={`cursor-pointer p-2 hover:${textTheme}`} onClick={onEdit}>
				<HiOutlinePencil />
			</span>
		</div>
	)
}
const CrmDashboard = () => {
	const columns = useMemo(() => [
		{
			Header: 'Category',
			accessor: 'category',
			sortable: false,

		},
		{
			Header: 'Subcategory Options',
			accessor: 'subcategoryOptions',
			sortable: false,

		},
		{
			Header: '#',
			accessor: 'no',
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
				<p className="font-semibold mb-10 text-black dark:text-white text-xl">Categories</p>
				<div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
					<Input
						className="sm:col-span-3 xl:col-span-1"
						size="sm"
						placeholder="Category Name"


					/>
					<Button size="sm" variant="outlined" className="xl:place-self-start">
						Add Category
					</Button>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
					<Select placeholder="Status" size="sm"
						options={colourOptions} />
					<Input
						size="sm"
						placeholder="Subcategory Name"


					/>
					<Button variant="solid" size="sm" className="xl:place-self-start">
						Add Subcategory
					</Button>
				</div>
				<DataTable columns={columns}
					data={data10}
					skeletonAvatarColumns={[0]}
					skeletonAvatarProps={{ className: 'rounded-md' }}

				/>
			</Loading>
		</div>
	)
}

export default CrmDashboard