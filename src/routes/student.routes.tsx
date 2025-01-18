import AdminDashboard from "../pages/admin/AdminDashboard";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  { name: "Profile", path: "profile", element: <AdminDashboard /> },
  { name: "Get Course", path: "get-course", element: <AdminDashboard /> },
];
