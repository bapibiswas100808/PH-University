import AdminDashboard from "../pages/admin/AdminDashboard";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  { name: "Profile", path: "profile", element: <AdminDashboard /> },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <AdminDashboard />,
  },
];
