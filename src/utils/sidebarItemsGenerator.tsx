import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "../types";

export const SidebarItemGenerator = (items: TUserPath[], role) => {
  const AdminNavs = items.reduce((acc, item) => {
    if (item.path && item.element) {
      acc.push({
        key: item.path,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
    return acc;
  }, [] as TSidebarItem[]);

  return AdminNavs;
};
