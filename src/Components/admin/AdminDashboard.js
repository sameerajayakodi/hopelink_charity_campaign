import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const AdminDashboard = () => {
  const location = useLocation();
  const isNestedRoute =
    location.pathname.includes("/admin/manage-campaigns") ||
    location.pathname.includes("/admin/manage-users") ||
    location.pathname.includes("/admin/edit-user");

  return (
    <div className="flex">
      <div className="w-1/4 h-screen text-white bg-[#AF1B3F]">
        <div className="p-6 text-2xl font-bold">hopelink Admin</div>
        <nav className="mt-10">
          <ul>
            <li className="p-4 hover:bg-[#F76C6C] transition-colors duration-300">
              <Link
                to="/admin/"
                className="font-medium text-white hover:text-[#F9F2EC]"
              >
                Dashboard
              </Link>
            </li>
            <li className="p-4 hover:bg-[#F76C6C] transition-colors duration-300">
              <Link
                to="/admin/manage-campaigns"
                className="font-medium text-white hover:text-[#F9F2EC]"
              >
                Manage Campaigns
              </Link>
            </li>
            <li className="p-4 hover:bg-[#F76C6C] transition-colors duration-300">
              <Link
                to="/admin/manage-users"
                className="font-medium text-white hover:text-[#F9F2EC]"
              >
                Manage Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="w-3/4 h-screen p-10 bg-[#F9F2EC]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
