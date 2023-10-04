import React, { useState } from 'react'
import { Loading } from 'components/shared'
import { Select, DatePicker, Button, } from 'components/ui'
import { colourOptions, StatisticData, overviewData } from './components/data'
import Statistic from './components/Statistic'
import DataCard from './components/DataCard'
import Overview from './components/Overview'

function SalesPerformance() {
    const [state, setState] = useState({
        start_date: new Date(),
        end_date: new Date(),
        users: "",

    })
    return (
        <div className="flex flex-col gap-4 h-full">
            <Loading loading={false}>
                <p className="font-semibold mb-10 text-base text-black dark:text-white">User Sales Performance</p>
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
                    <Select

                        onChange={(newValue) => setState({
                            ...state,
                            users: newValue.label,
                        })}

                        placeholder="User" size="sm" options={colourOptions} />
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
                <div className='grid grid-cols-1 xl:grid-cols-4 gap-4'>
                    <DataCard />
                    <DataCard />
                </div>
                <Overview data={overviewData} />


            </Loading>
        </div>
    )
}

export default SalesPerformance