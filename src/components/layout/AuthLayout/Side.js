import React, { cloneElement } from 'react'
import { Avatar } from 'components/ui'
import Logo from 'components/template/Logo'
import { APP_NAME } from 'constants/app.constant'

const Side = ({ children, content, ...rest }) => {
	return (
		<div className="grid lg:grid-cols-3 h-full">
			<div
				className="bg-no-repeat bg-cover py-6 px-16 flex-col justify-between hidden lg:flex"
				style={{ background: `url('/img/others/auth-cover-bg-icon.svg') #F3676D no-repeat center center` }}
			>


			</div>
			<div className="col-span-2 flex flex-col justify-center items-center bg-white dark:bg-gray-800">
				<div className="xl:min-w-[450px] px-8">
					<div className="mb-8">
						{content}
					</div>
					{children ? cloneElement(children, { ...rest }) : null}
				</div>
			</div>
		</div>
	)
}

export default Side