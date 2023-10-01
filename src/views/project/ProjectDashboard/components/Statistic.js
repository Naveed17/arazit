import React from 'react'
import { Card } from 'components/ui'
import NumberFormat from 'react-number-format'
import { GrowShrinkTag } from 'components/shared'
import { useSelector } from 'react-redux'

const StatisticCard = ({ data = {}, label, valuePrefix, date }) => {
	return (
		<Card>
			<h6 className="font-semibold mb-4 text-sm">{label}</h6>
			<div className="flex justify-between items-center">
				<div>
					<h3 className="font-bold">
						<NumberFormat
							displayType="text"
							value={data?.value}
							thousandSeparator
							prefix={valuePrefix}
						/>
					</h3>

				</div>
				<GrowShrinkTag value={data?.growShrink} suffix="%" />
			</div>
		</Card>
	)
}

const Statistic = ({ data = {} }) => {

	const startDate = useSelector((state) => state.projectDashboard.state.startDate)

	return (
		<div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
			<StatisticCard
				data={data?.revenue}
				valuePrefix="$"
				label="Leads"
				tagSuffix="%"
				date={startDate}
			/>
			<StatisticCard
				data={data?.orders}
				label="Followup"
				tagSuffix="%"
				date={startDate}
			/>
			<StatisticCard
				data={data?.purchases}
				valuePrefix="$"
				label="Pre-Sales"
				tagSuffix="%"
				date={startDate}
			/>
			<StatisticCard
				data={data?.purchases}
				valuePrefix="$"
				label="Sales"
				tagSuffix="%"
				date={startDate}
			/>
		</div>
	)
}

export default Statistic