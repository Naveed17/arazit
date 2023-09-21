import React from 'react'
import { Card } from 'components/ui'
import NumberFormat from 'react-number-format'
import { GrowShrinkTag } from 'components/shared'

const StatisticCard = ({ data = {}, label, valuePrefix }) => {
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

	return (
		<div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
			<StatisticCard
				data={data?.revenue}
				valuePrefix="$"
				label="Leads Transferred"
				tagSuffix="%"

			/>
			<StatisticCard
				data={data?.orders}
				label="Closed"
				tagSuffix="%"

			/>
			<StatisticCard
				data={data?.purchases}
				valuePrefix="$"
				label="Follow Up"
				tagSuffix="%"

			/>
			<StatisticCard
				data={data?.purchases}
				valuePrefix="$"
				label="Sales"
				tagSuffix="%"

			/>
		</div>
	)
}

export default Statistic