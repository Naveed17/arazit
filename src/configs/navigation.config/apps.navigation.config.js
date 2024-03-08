import { APP_PREFIX_PATH } from 'constants/route.constant'
import { NAV_ITEM_TYPE_TITLE, NAV_ITEM_TYPE_COLLAPSE, NAV_ITEM_TYPE_ITEM } from 'constants/navigation.constant'
import { ADMIN, USER } from 'constants/roles.constant'

const appsNavigationConfig = [
	{
		key: 'apps',
		path: '',
		title: 'APPS',
		translateKey: 'nav.apps',
		icon: 'apps',
		type: NAV_ITEM_TYPE_TITLE,
		authority: [ADMIN, USER],
		subMenu: [
			{
				key: 'appsProject.dashboard',
				path: `${APP_PREFIX_PATH}/dashboard`,
				title: 'Dashboard',
				translateKey: 'nav.appsProject.dashboard',
				icon: 'project',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [

				]
			},
			{
				key: 'apps.leads',
				path: '',
				title: 'Leads',
				translateKey: 'nav.appsCrypto.leads',
				icon: 'forms',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [
					{
						key: 'appsLeads.dashboard',
						path: `${APP_PREFIX_PATH}/leads`,
						title: 'Leads',
						translateKey: 'nav.appsCrypto.leads',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
				]
			},
			{
				key: 'apps.crm',
				path: '',
				title: 'Categories',
				translateKey: 'nav.appsCrm.crmCategories',
				icon: 'sharedComponentDoc',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [
					{
						key: 'appsCrm.category',
						path: `${APP_PREFIX_PATH}/crm/category`,
						title: 'Category',
						translateKey: 'appsCrm.category',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},

				]
			},
			{
				key: 'apps.reports',
				path: '',
				title: 'Reports',
				translateKey: 'appsReports.reports',
				icon: 'sales',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [
					{
						key: 'appsReports.leads',
						path: `${APP_PREFIX_PATH}/reports/leads`,
						title: 'Leads',
						translateKey: 'appsReports.leads',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsReports.marketing',
						path: `${APP_PREFIX_PATH}/reports/marketing`,
						title: 'Marketing',
						translateKey: 'appsReports.marketing',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsReports.activityLogs',
						path: `${APP_PREFIX_PATH}/reports/activity-logs`,
						title: 'Activity Logs',
						translateKey: 'appsReports.activityLogs',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsReports.salesPerformance',
						path: `${APP_PREFIX_PATH}/reports/sales-performance`,
						title: 'Sales Performance',
						translateKey: 'appsReports.salesPerformance',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},

				]
			},
			{
				key: 'apps.users',
				path: '',
				title: 'Users',
				translateKey: 'nav.appsUsers.users',
				icon: 'crm',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [
					{
						key: 'appsUsers.allUsers',
						path: `${APP_PREFIX_PATH}/users/all-users`,
						title: 'All Users',
						translateKey: 'nav.appsUsers.allUsers',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsUsers.clients',
						path: `${APP_PREFIX_PATH}/users/clients`,
						title: 'Clients',
						translateKey: 'nav.appsUsers.clients',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					}
				]
			},

			{
				key: 'apps.account',
				path: '',
				title: 'Account',
				translateKey: 'nav.appsAccount.account',
				icon: 'crypto',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [

					{
						key: 'appsAccount.invoices',
						path: `${APP_PREFIX_PATH}/account/invoices`,
						title: 'Invoices',
						translateKey: 'nav.appsAccount.invoices',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsAccount.revenue',
						path: `${APP_PREFIX_PATH}/account/revenue`,
						title: 'Revenue',
						translateKey: 'nav.appsAccount.revenue',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},

				]
			},
		]
	}
]

export default appsNavigationConfig