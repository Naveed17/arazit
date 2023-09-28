import React, { useState } from 'react'
import { Loading } from 'components/shared'
import { Select, DatePicker, Button, } from 'components/ui'
import { colourOptions, StatisticData } from './components/data'
import Statistic from './components/Statistic'

function ActivityLogs() {
    const [state, setState] = useState({
        start_date: new Date(),
        end_date: new Date(),
        users: "",

    })
    return (
        <div className="flex flex-col gap-4 h-full">
            <Loading loading={false}>
                <p className="font-semibold mb-10">Activity <span className='text-gray-400 text-xs'>Report</span></p>
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
                <div className='flex items-center'>
                    <p className="font-semibold text-lg">User Name <span className='text-gray-400 italic text-xs ml-4 font-normal'>Report: 01/06/2023 - 02/06/2023</span></p>
                </div>
                <div className="mb-5">
                    <Statistic data={StatisticData} />
                </div>
            </Loading>
        </div>
    )
}

export default ActivityLogs