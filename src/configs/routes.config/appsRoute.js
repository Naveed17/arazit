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
        component: React.lazy(() => import('views/crm/CrmDashboard')),
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
        key: 'appsCrm.calendar',
        path: `${APP_PREFIX_PATH}/crm/calendar`,
        component: React.lazy(() => import('views/crm/Calendar')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsCrm.customers',
        path: `${APP_PREFIX_PATH}/crm/customers`,
        component: React.lazy(() => import('views/crm/Customers')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Customers',

        }
    },
    {
        key: 'appsCrm.customerDetails',
        path: `${APP_PREFIX_PATH}/crm/customer-details`,
        component: React.lazy(() => import('views/crm/CustomerDetail')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Customer Details',
            headerContainer: true
        }
    },
    {
        key: 'appsCrm.mail',
        path: `${APP_PREFIX_PATH}/crm/mail`,
        component: React.lazy(() => import('views/crm/Mail')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutterless',
            footer: false
        }
    },
    {
        key: 'appsCrm.mail',
        path: `${APP_PREFIX_PATH}/crm/mail/:category`,
        component: React.lazy(() => import('views/crm/Mail')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutterless',
            footer: false
        }
    },
    {
        key: 'appsSales.dashboard',
        path: `${APP_PREFIX_PATH}/sales/dashboard`,
        component: React.lazy(() => import('views/sales/SalesDashboard')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsSales.productList',
        path: `${APP_PREFIX_PATH}/sales/product-list`,
        component: React.lazy(() => import('views/sales/ProductList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsSales.productEdit',
        path: `${APP_PREFIX_PATH}/sales/product-edit/:productId`,
        component: React.lazy(() => import('views/sales/ProductEdit')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Edit Product',
        }
    },
    {
        key: 'appsSales.productNew',
        path: `${APP_PREFIX_PATH}/sales/product-new`,
        component: React.lazy(() => import('views/sales/ProductNew')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Add New Product',
        }
    },
    {
        key: 'appsSales.orderList',
        path: `${APP_PREFIX_PATH}/sales/order-list`,
        component: React.lazy(() => import('views/sales/OrderList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsSales.orderDetails',
        path: `${APP_PREFIX_PATH}/sales/order-details/:orderId`,
        component: React.lazy(() => import('views/sales/OrderDetails')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsLeads.dashboard',
        path: `${APP_PREFIX_PATH}/leads`,
        component: React.lazy(() => import('views/crypto/CryptoDashboard')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsCrypto.portfolio',
        path: `${APP_PREFIX_PATH}/crypto/portfolio`,
        component: React.lazy(() => import('views/crypto/Portfolio')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Portfolio',
        }
    },
    {
        key: 'appsCrypto.market',
        path: `${APP_PREFIX_PATH}/crypto/market`,
        component: React.lazy(() => import('views/crypto/Market')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Market',
        }
    },
    {
        key: 'appsCrypto.wallets',
        path: `${APP_PREFIX_PATH}/crypto/wallets`,
        component: React.lazy(() => import('views/crypto/Wallets')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Wallets',
        }
    },
    {
        key: 'appsknowledgeBase.helpCenter',
        path: `${APP_PREFIX_PATH}/knowledge-base/help-center`,
        component: React.lazy(() => import('views/knowledge-base/HelpCenter')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutterless',
        }
    },
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