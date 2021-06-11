import GroupCreate from "../pages/Group/GroupCreate";
import GroupDetail from "../pages/Group/GroupDetail";
import GroupList from "../pages/Group/GroupList";
import BillCreate from "../pages/MyBill/BillCreate";
import BillDetail from "../pages/MyBill/BillDetail";
import BillList from "../pages/MyBill/BillList";
import Sandbox from "../pages/Sandbox/Sandbox";

export const routes = [
    {
        path: '/sandbox',
        exact: true,
        component: Sandbox,
        meta: { title: 'Sandbox' }
    },
    {
        path: '/my-profile/groups',
        exact: true,
        redirect: '/my-profile/groups/groups-index',
        component: GroupList,
        meta: { title: 'My Groups' },
        children: [
            {
                path: '/my-profile/groups/groups-index',
                exact: true,
                component: GroupList,
                meta: { title: 'Groups List' }
            },
            {
                path: '/my-profile/groups/groups-detail',
                exact: true,
                component: GroupDetail,
                meta: { title: 'Detail Group' }
            },
            {
                path: '/my-profile/groups/groups-create',
                exact: true,
                component: GroupCreate,
                meta: { title: 'Create new group' }
            },
        ]
    },
    {
        path: '/my-profile/bills',
        exact: true,
        redirect: '/my-profile/bills-index',
        component: BillList,
        meta: { title: 'My Bills' },
        children: [
            {
                path: '/my-profile/bills/bills-index',
                exact: true,
                component: BillList,
                meta: { title: 'Bills List' }
            },
            {
                path: '/my-profile/bills/bills-detail',
                exact: true,
                component: BillDetail,
                meta: { title: 'Detail Bill' }
            },
            {
                path: '/my-profile/bills/bills-create',
                exact: true,
                component: BillCreate,
                meta: { title: 'Create new bill' }
            },
        ]
    },
]