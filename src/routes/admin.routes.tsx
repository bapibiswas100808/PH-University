import { NavLink } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { ReactNode } from "react";

type ItemType = {
  path: string;
  element: JSX.Element;
};
type TSidebarItem = {
  key: string;
  label?: ReactNode;
  children?: TSidebarItem[];
};

const items = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  { name: "Profile", path: "profile", element: <AdminDashboard /> },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];

export const AdminPaths = items.reduce((acc, item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }
  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }
  return acc;
}, [] as ItemType[]);

export const AdminNavs = items.reduce((acc, item) => {
  if (item.path && item.element) {
    acc.push({
      key: item.path,
      label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
    });
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
      })),
    });
  }
  return acc;
}, [] as TSidebarItem[]);

// export const AdminPaths = [
//   { index: true, element: <AdminDashboard /> },
//   { path: "dashboard", element: <AdminDashboard /> },
//   { path: "create-student", element: <CreateStudent /> },
//   { path: "create-admin", element: <CreateAdmin /> },
//   { path: "create-faculty", element: <CreateFaculty /> },
// ];
