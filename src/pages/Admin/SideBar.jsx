import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdCategory, MdShoppingCart, MdAssignment } from "react-icons/md";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="bg-gray-800 text-white h-screen w-48 flex flex-col justify-between">
      <div className="py-8">
        <ul>
          <li className={`px-4 py-2 flex text-base items-center ${location.pathname === '/admin/categoryPage' ? 'bg-gray-700' : ''}`}>
            <MdCategory className="mr-2" />
            <Link to="/categories">Categories</Link>
          </li>
          <li className={`px-4 py-2 flex text-base items-center ${location.pathname === '/products' ? 'bg-gray-700' : ''}`}>
            <MdShoppingCart className="mr-2" />
            <Link to="/products">Products</Link>
          </li>
          <li className={`px-4 py-2 flex text-base items-center ${location.pathname === '/orders' ? 'bg-gray-700' : ''}`}>
            <MdAssignment className="mr-2" />
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
