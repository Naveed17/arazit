import React from 'react'
import { APP_PREFIX_PATH } from 'constants/route.constant'
import { ADMIN, USER } from 'constants/roles.constant'

const appsRoute = [
    {
        key: 'appsProject.dashboard',
        path: `${APP_PREFIX_PATH}/dashboard`,
        component: React.lazy(() => import('views/project/ProjectDashboard')),
        authority: [ADMIN, USER],

    },
    {
        key: 'appsCrm.category',
        path: `${APP_PREFIX_PATH}/crm/category`,
        component: React.lazy(() => import('views/crm/Category')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsReports.leads',
        path: `${APP_PREFIX_PATH}/reports/leads`,
        component: React.lazy(() => import('views/reports/Leads')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsReports.marketing',
        path: `${APP_PREFIX_PATH}/reports/marketing`,
        component: React.lazy(() => import('views/reports/Marketing')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsReports.activityLogs',
        path: `${APP_PREFIX_PATH}/reports/activity-logs`,
        component: React.lazy(() => import('views/reports/ActivityLogs')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsReports.salesPerformance',
        path: `${APP_PREFIX_PATH}/reports/sales-performance`,
        component: React.lazy(() => import('views/reports/SalesPerformance')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsUsers.allUsers',
        path: `${APP_PREFIX_PATH}/users/all-users`,
        component: React.lazy(() => import('views/users/Allusers')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsUsers.clients',
        path: `${APP_PREFIX_PATH}/users/clients`,
        component: React.lazy(() => import('views/users/Clients')),
        authority: [ADMIN, USER],
    },

    {
        key: 'appsLeads.dashboard',
        path: `${APP_PREFIX_PATH}/leads`,
        component: React.lazy(() => import('views/leads')),
        authority: [ADMIN, USER],
    },
    // {

    //     path: `${APP_PREFIX_PATH}/leads/create-lead`,
    //     component: React.lazy(() => import('views/leads/CreateLead')),
    //     authority: [ADMIN, USER],
    // },

    {
        key: 'appsAccount.settings',
        path: `${APP_PREFIX_PATH}/account/settings/:tab`,
        component: React.lazy(() => import('views/account/Settings')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Settings',
            headerContainer: true
        }
    },
    {
        key: 'appsAccount.invoices',
        path: `${APP_PREFIX_PATH}/account/invoices`,
        component: React.lazy(() => import('views/account/Invoices')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsAccount.revenue',
        path: `${APP_PREFIX_PATH}/account/revenue`,
        component: React.lazy(() => import('views/account/Revenue')),
        authority: [ADMIN, USER],
    },

]

export default appsRoute