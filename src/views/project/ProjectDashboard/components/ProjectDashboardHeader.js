import React from 'react'
import { DatePicker, Button } from 'components/ui'
import { HiOutlineFilter } from 'react-icons/hi'

const dateFormat = 'MMM DD, YYYY'

const { DatePickerRange } = DatePicker

const ProjectDashboardHeader = () => {


	return (
		<div className="lg:flex items-center justify-between mb-4 gap-3">
			<div className="mb-4 lg:mb-0">
				<h3>Overview</h3>
				<p>overview of leads</p>
			</div>
			<div className="flex flex-col lg:flex-row lg:items-center gap-3">
				<DatePickerRange
					inputFormat={dateFormat}
					size="sm"
					placeholder="Select date"
				/>
				<Button
					size="sm"
					icon={<HiOutlineFilter />}

				>
					Filter
				</Button>
			</div>
		</div>
	)
}

export default ProjectDashboardHeader