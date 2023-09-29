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
				title: 'Crm Categories',
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
				key: 'apps.sales',
				path: '',
				title: 'Sales',
				translateKey: 'nav.appsSales.sales',
				icon: 'sales',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [
					{
						key: 'appsSales.dashboard',
						path: `${APP_PREFIX_PATH}/sales/dashboard`,
						title: 'Dashboard',
						translateKey: 'nav.appsSales.dashboard',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsSales.productList',
						path: `${APP_PREFIX_PATH}/sales/product-list`,
						title: 'Product List',
						translateKey: 'nav.appsSales.productList',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsSales.productEdit',
						path: `${APP_PREFIX_PATH}/sales/product-edit/12`,
						title: 'Product Edit',
						translateKey: 'nav.appsSales.productEdit',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsSales.productNew',
						path: `${APP_PREFIX_PATH}/sales/product-new`,
						title: 'New Product',
						translateKey: 'nav.appsSales.productNew',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsSales.orderList',
						path: `${APP_PREFIX_PATH}/sales/order-list`,
						title: 'Order List',
						translateKey: 'nav.appsSales.orderList',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsSales.orderDetails',
						path: `${APP_PREFIX_PATH}/sales/order-details/95954`,
						title: 'Order Details',
						translateKey: 'nav.appsSales.orderDetails',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
				]
			},
			{
				key: 'apps.knowledgeBase',
				path: '',
				title: 'Knowledge Base',
				translateKey: 'nav.appsknowledgeBase.knowledgeBase',
				icon: 'knowledgeBase',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [
					{
						key: 'appsknowledgeBase.helpCenter',
						path: `${APP_PREFIX_PATH}/knowledge-base/help-center`,
						title: 'Help Center',
						translateKey: 'nav.appsknowledgeBase.helpCenter',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsknowledgeBase.article',
						path: `${APP_PREFIX_PATH}/knowledge-base/article?id=rZjCbSyae5`,
						title: 'Article',
						translateKey: 'nav.appsknowledgeBase.article',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsknowledgeBase.manageArticles',
						path: `${APP_PREFIX_PATH}/knowledge-base/manage-articles`,
						title: 'Manage Articles',
						translateKey: 'nav.appsknowledgeBase.manageArticles',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsknowledgeBase.editArticle',
						path: `${APP_PREFIX_PATH}/knowledge-base/edit-article?id=rZjCbSyae5&categoryLabel=Survey&categoryValue=survey`,
						title: 'Edit Article',
						translateKey: 'nav.appsknowledgeBase.editArticle',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
				]
			},
			{
				key: 'apps.account',
				path: '',
				title: 'Account',
				translateKey: 'nav.appsAccount.account',
				icon: 'account',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [
					{
						key: 'appsAccount.settings',
						path: `${APP_PREFIX_PATH}/account/settings/profile`,
						title: 'Settings',
						translateKey: 'nav.appsAccount.settings',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsAccount.invoice',
						path: `${APP_PREFIX_PATH}/account/invoice/36223`,
						title: 'Invoice',
						translateKey: 'nav.appsAccount.invoice',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsAccount.activityLog',
						path: `${APP_PREFIX_PATH}/account/activity-log`,
						title: 'Activity Log',
						translateKey: 'nav.appsAccount.activityLog',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsAccount.kycForm',
						path: `${APP_PREFIX_PATH}/account/kyc-form`,
						title: 'KYC Form',
						translateKey: 'nav.appsAccount.kycForm',
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