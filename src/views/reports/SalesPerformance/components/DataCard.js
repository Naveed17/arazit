import React from 'react'
import { Card } from 'components/ui'
function DataCard() {
    return (
        <Card>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <p className='text-xs font-medium'>Total Leads</p>
                    <h6>10</h6>
                </div>
                <div className="flex justify-between items-center">
                    <p className='text-xs font-medium'>Pending Leads</p>
                    <h6 className='text-red-500'>4</h6>
                </div>
                <div className="flex justify-between items-center">
                    <p className='text-xs font-medium'>Follow Up</p>
                    <h6>5</h6>
                </div>
                <div className="flex justify-between items-center">
                    <p className='text-xs font-medium'>No Replay</p>
                    <h6 className='text-green-500'>5</h6>
                </div>
            </div>

        </Card>
    )
}

export default DataCard