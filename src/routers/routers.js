import GroupCreate from "../pages/Group/GroupCreate";
import GroupDetail from "../pages/Group/GroupDetail";
import GroupList from "../pages/Group/GroupList";
import BillCreate from "../pages/MyBill/BillCreate";
import BillDetail from "../pages/MyBill/BillDetail";
import BillList from "../pages/MyBill/BillList";
import Profile from "../pages/Profile/Profile";
import Friend from "../pages/Friend/Friend";
import FriendCreate from "../pages/Friend/FriendCreate";
import Login from "../pages/Login/Login";
import Sandbox from "../pages/Sandbox/Sandbox";

export const routes = [
  {
    path: "/sandbox",
    exact: true,
    redirect: "/my-profile",
    component: Sandbox,
    meta: { title: "Sandbox" },
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/my-profile",
    exact: true,
    component: Profile,
    meta: { title: "My Profile" },
    children: [
      {
        path: "/my-profile",
        exact: true,
        component: Profile,
        meta: { title: "My Profile" },
      },
    ],
  },
  {
    path: "/my-profile/friends",
    exact: true,
    redirect: "/my-profile/friends/friends-index",
    component: Friend,
    meta: { title: "My Friends" },
    children: [
      {
        path: "/my-profile/friends/friends-index",
        exact: true,
        component: Friend,
        meta: { title: "Friends list" },
      },
      {
        path: "/my-profile/friends/friends-create",
        exact: true,
        component: FriendCreate,
        meta: { title: "Add friend" },
      },
    ],
  },
  {
    path: "/my-profile/groups",
    exact: true,
    redirect: "/my-profile/groups/groups-index",
    component: GroupList,
    meta: { title: "My Groups" },
    children: [
      {
        path: "/my-profile/groups/groups-index",
        exact: true,
        component: GroupList,
        meta: { title: "Groups List" },
      },
      {
        path: "/my-profile/groups/groups-detail",
        exact: true,
        component: GroupDetail,
        meta: { title: "Detail Group" },
      },
      {
        path: "/my-profile/groups/groups-create",
        exact: true,
        component: GroupCreate,
        meta: { title: "Create new group" },
      },
    ],
  },
  {
    path: "/my-profile/bills",
    exact: true,
    redirect: "/my-profile/bills-index",
    component: BillList,
    meta: { title: "My Bills" },
    children: [
      {
        path: "/my-profile/bills/bills-index",
        exact: true,
        component: BillList,
        meta: { title: "Bills List" },
      },
      {
        path: "/my-profile/bills/bills-detail",
        exact: true,
        component: BillDetail,
        meta: { title: "Detail Bill" },
      },
      {
        path: "/my-profile/bills/bills-create",
        exact: true,
        component: BillCreate,
        meta: { title: "Create new bill" },
      },
    ],
  },
];
