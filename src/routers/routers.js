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
        path: '/app/groups',
        exact: true,
        redirect: '/app/groups/groups-index',
        component: GroupList,
        meta: { title: 'My Groups' },
        children: [
            {
                path: '/app/groups/groups-index',
                exact: true,
                component: GroupList,
                meta: { title: 'Groups List' }
            },
            {
                path: '/app/groups/groups-detail',
                exact: true,
                component: GroupDetail,
                meta: { title: 'Detail Group' }
            },
            {
                path: '/app/groups/groups-create',
                exact: true,
                component: GroupCreate,
                meta: { title: 'Create new group' }
            },
        ]
    },
    {
        path: '/app/bills',
        exact: true,
        redirect: '/app/bills-index',
        component: BillList,
        meta: { title: 'My Bills' },
        children: [
            {
                path: '/app/bills/bills-index',
                exact: true,
                component: BillList,
                meta: { title: 'Bills List' }
            },
            {
                path: '/app/bills/bills-detail',
                exact: true,
                component: BillDetail,
                meta: { title: 'Detail Bill' }
            },
            {
                path: '/app/bills/bills-create',
                exact: true,
                component: BillCreate,
                meta: { title: 'Create new bill' }
            },
        ]
    },
]