import React from 'react'
import { Search, Bell } from 'lucide-react'

const HomePage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm w-[400px]">
          <Search className="text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search employees, documents, or reports..."
            className="ml-2 outline-none w-full"
          />
        </div>

        <div className="flex items-center gap-4">
          <Bell />
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">Alex Rivers</p>
              <p className="text-xs text-gray-400">Super Admin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Organization Pulse</h1>
        <p className="text-gray-500 text-sm">
          Curation of workforce health and operational metrics for Q3.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-sm text-gray-400">TOTAL EMPLOYEES</p>
          <h1 className="text-2xl font-bold mt-2">1,284</h1>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-sm text-gray-400">NEW HIRES (MONTH)</p>
          <h1 className="text-2xl font-bold mt-2">42</h1>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-sm text-gray-400">UPCOMING LEAVE</p>
          <h1 className="text-2xl font-bold mt-2">18</h1>
        </div>

        <div className="bg-blue-600 text-white p-4 rounded-xl shadow-sm">
          <p className="text-sm">RETENTION RATE</p>
          <h1 className="text-2xl font-bold mt-2">98.4%</h1>
        </div>

      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-3 gap-4">

        {/* Department */}
        <div className="col-span-2 bg-white p-5 rounded-xl shadow-sm">
          <h2 className="font-semibold mb-4">Departmental Distribution</h2>

          {/* Bar */}
          <div className="mb-4">
            <p className="text-sm mb-1">Engineering & Development</p>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-blue-600 h-2 w-[70%] rounded-full"></div>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm mb-1">Creative & Architecture</p>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-indigo-400 h-2 w-[50%] rounded-full"></div>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm mb-1">Operations & Logistics</p>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-gray-600 h-2 w-[60%] rounded-full"></div>
            </div>
          </div>

          <div>
            <p className="text-sm mb-1">Sales & Marketing</p>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-orange-500 h-2 w-[40%] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Activity */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h2 className="font-semibold mb-4">Recent Activity</h2>

          <div className="text-sm mb-3">
            <p className="font-semibold">New Hire</p>
            <p className="text-gray-500">Joined UI/UX team</p>
          </div>

          <div className="text-sm mb-3">
            <p className="font-semibold">Policy Update</p>
            <p className="text-gray-500">New rules updated</p>
          </div>

          <div className="text-sm">
            <p className="font-semibold">Leave Approved</p>
            <p className="text-gray-500">Annual leave approved</p>
          </div>
        </div>

      </div>

      {/* Bottom Card */}
      <div className="bg-white p-5 rounded-xl shadow-sm mt-6 flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/80"
          className="w-16 h-16 rounded-xl"
          alt=""
        />
        <div>
          <p className="text-xs text-blue-500 font-semibold">
            EMPLOYEE OF THE QUARTER
          </p>
          <h2 className="font-bold text-lg">Sarah Chen</h2>
          <p className="text-sm text-gray-500">
            Delivered project ahead of schedule with 100% client satisfaction.
          </p>
        </div>
      </div>

    </div>
  )
}

export default HomePage