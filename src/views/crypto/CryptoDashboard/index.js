import React, { useState } from 'react'
import { Loading } from 'components/shared'
import { Input, Select, DatePicker, Button } from 'components/ui'

const colourOptions = [
	{ value: 'ocean', label: 'Ocean', color: '#00B8D9' },
	{ value: 'blue', label: 'Blue', color: '#0052CC' },
	{ value: 'purple', label: 'Purple', color: '#5243AA' },
	{ value: 'red', label: 'Red', color: '#FF5630' },
	{ value: 'orange', label: 'Orange', color: '#FF8B00' },
	{ value: 'yellow', label: 'Yellow', color: '#FFC400' },
	{ value: 'green', label: 'Green', color: '#36B37E' },
	{ value: 'forest', label: 'Forest', color: '#00875A' },
	{ value: 'slate', label: 'Slate', color: '#253858' },
	{ value: 'silver', label: 'Silver', color: '#666666' },
]
const CryptoDashboard = () => {

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
	console.log(state)
	return (
		<div className="flex flex-col gap-4 h-full">
			<Loading loading={false}>
				<div className="grid grid-cols-1 xl:grid-cols-4 gap-4 gap-y-8">
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
					<Button size="sm" variant="solid" className="!rounded-lg">Submit</Button>
				</div>
			</Loading >
		</div >
	)
}

export default CryptoDashboard