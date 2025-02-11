import { ACCOUNT_TYPE } from "../utils/constants";
export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "My Courses",
    path: "/dashboard/my-courses",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Add Course",
    path: "/dashboard/add-course",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscAdd",
  },
  {
    id: 5,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscMortarBoard",
  },
  {
    id: 6,
    id: 7,
    name: "Cart",
    path: "/dashboard/cart",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscBookmark",
  },
  {
    id:8,
    name: "Resume Templates",
    path: "/dashboard/resume-templates",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscFilePdf",
  },
  {
    id:9,
    name: "Test",
    path: "/dashboard/test",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscFileCode",
  },
  {
    id:10,
    name: "Applied jobs",
    path: "/dashboard/applied-jobs",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscFileBinary",
  },
  {
    id:11,
    name: "Available jobs",
    path: "/dashboard/available-jobs",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscFileBinary",
  },
 
  {
    name: "Admin Panel",
    path: "/dashboard/admin-panel",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscHistory",
  },
];
