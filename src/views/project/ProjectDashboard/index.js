import React, { useEffect } from 'react'
import reducer from './store'
import { injectReducer } from 'store/index'
import { getProjectDashboardData } from './store/dataSlice'
import { Loading } from 'components/shared'
import ProjectDashboardHeader from './components/ProjectDashboardHeader'
import TaskOverview from './components/TaskOverview'
import Statistic from './components/Statistic'
import { useDispatch, useSelector } from 'react-redux'
import { statisticData } from './components/data'
injectReducer('projectDashboard', reducer)
const ProjectDashboard = () => {
	const dispatch = useDispatch()
	const {
		projectOverviewData,
	} = useSelector((state) => state.projectDashboard.data.dashboardData)

	const loading = useSelector((state) => state.projectDashboard.data.loading)

	useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const fetchData = () => {
		dispatch(getProjectDashboardData())

	}

	return (
		<div className="flex flex-col gap-4 h-full">
			<Loading loading={loading}>
				<ProjectDashboardHeader />
				<Statistic data={statisticData} />
				<div className="flex flex-col gap-4 flex-auto">
					<TaskOverview data={projectOverviewData} />
				</div>
			</Loading>
		</div>
	)
}

export default ProjectDashboard