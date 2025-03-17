import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, Plus, Settings } from 'lucide-react';

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg h-full flex flex-col">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
              isActive ? 'bg-gray-100 border-l-4 border-blue-500' : ''
            }`
          }
        >
          <LayoutDashboard className="w-5 h-5 mr-3" />
          Dashboard
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
              isActive ? 'bg-gray-100 border-l-4 border-blue-500' : ''
            }`
          }
        >
          <Package className="w-5 h-5 mr-3" />
          Products
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
              isActive ? 'bg-gray-100 border-l-4 border-blue-500' : ''
            }`
          }
        >
          <ShoppingCart className="w-5 h-5 mr-3" />
          Orders
        </NavLink>
        <NavLink
          to="/products/new"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
              isActive ? 'bg-gray-100 border-l-4 border-blue-500' : ''
            }`
          }
        >
          <Plus className="w-5 h-5 mr-3" />
          Add New Product
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
              isActive ? 'bg-gray-100 border-l-4 border-blue-500' : ''
            }`
          }
        >
          <Settings className="w-5 h-5 mr-3" />
          Settings
        </NavLink>
      </nav>
      <div className="p-4 border-t">
        <div className="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="Admin"
            className="w-8 h-8 rounded-full"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-800">Admin User</p>
            <p className="text-xs text-gray-500">admin@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;