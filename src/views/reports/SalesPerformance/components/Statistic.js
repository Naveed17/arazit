import React from 'react'
import { Card } from 'components/ui'
import NumberFormat from 'react-number-format'
import { GrowShrinkTag } from 'components/shared'

const StatisticCard = ({ data = {}, label, valuePrefix }) => {
	return (
		<Card>
			<h6 className="font-normal mb-4 text-sm">{label}</h6>
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
			<p className="text-xs text-gray-500 mt-1">{data?.description}</p>
		</Card>
	)
}

const Statistic = ({ data = {} }) => {

	return (
		<div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
			<StatisticCard
				data={data?.revenue}
				valuePrefix="$"
				label="Conversion Ratio"
				tagSuffix="%"

			/>
			<StatisticCard
				data={data?.orders}
				label="Crm Activity Performance"
				tagSuffix="%"

			/>

		</div>
	)
}

export default Statistic