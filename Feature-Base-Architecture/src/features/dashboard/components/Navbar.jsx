import React from 'react'
import { NavLink } from 'react-router'
import { LayoutDashboard, Users, UserPlus, FileText, Settings } from 'lucide-react'

const Navbar = () => {
  const linkClass =
    "flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all"

  const activeClass =
    "bg-blue-100 text-blue-600 font-semibold"

  return (
    <aside className="w-64 h-screen bg-white border-r flex flex-col justify-between p-5">

      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-10">
          <div className="bg-blue-600 text-white p-2 rounded-lg">
            <LayoutDashboard size={20} />
          </div>
          <div>
            <h1 className="font-bold text-lg">Architect ERP</h1>
            <p className="text-xs text-gray-400">Admin Console</p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-2">

          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/dashboard/employee"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <Users size={18} />
            Directory
          </NavLink>

          <NavLink
            to="/dashboard/registration"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <UserPlus size={18} />
            Registration
          </NavLink>

          <NavLink
            to="/dashboard/reports"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <FileText size={18} />
            Reports
          </NavLink>

          <NavLink
            to="/dashboard/settings"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <Settings size={18} />
            Settings
          </NavLink>

        </nav>
      </div>

      {/* Bottom Section */}
      <div>
        <button className="w-full bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-500 py-2 rounded-lg transition">
          Logout
        </button>
      </div>

    </aside>
  )
}

export default Navbar