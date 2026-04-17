// import React from 'react'
// import { Plus } from 'lucide-react'

// const EmployeePage = () => {
//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">

//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-2xl font-bold">Directory</h1>
//           <p className="text-gray-500 text-sm">
//             Manage and curate your global workforce database.
//           </p>
//         </div>

//         <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
//           <Plus size={18} />
//           Add New Employee
//         </button>
//       </div>

//       {/* Top Cards */}
//       <div className="grid grid-cols-4 gap-4 mb-6">

//         <div className="bg-white p-4 rounded-xl shadow-sm">
//           <p className="text-sm text-gray-400">TOTAL PERSONNEL</p>
//           <h1 className="text-2xl font-bold mt-2">1,284</h1>
//         </div>

//         <div className="bg-white p-4 rounded-xl shadow-sm">
//           <p className="text-sm text-gray-400">DEPARTMENTS</p>
//           <h1 className="text-2xl font-bold mt-2">18</h1>
//         </div>

//         <div className="bg-white p-4 rounded-xl shadow-sm">
//           <p className="text-sm text-gray-400">ACTIVE PROJECTS</p>
//           <h1 className="text-2xl font-bold mt-2">42</h1>
//         </div>

//         <div className="bg-white p-4 rounded-xl shadow-sm">
//           <p className="text-sm text-gray-400">RETENTION RATE</p>
//           <h1 className="text-2xl font-bold mt-2">94.2%</h1>
//         </div>

//       </div>

//       {/* Table Section */}
//       <div className="bg-white rounded-xl shadow-sm p-5">

//         {/* Tabs */}
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex gap-2">
//             <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm">
//               All Employees
//             </button>
//             <button className="px-3 py-1 bg-gray-100 rounded-lg text-sm">
//               Contractors
//             </button>
//             <button className="px-3 py-1 bg-gray-100 rounded-lg text-sm">
//               Remote
//             </button>
//           </div>

//           <p className="text-sm text-gray-400">Filter</p>
//         </div>

//         {/* Table */}
//         <table className="w-full text-left">

//           <thead className="text-gray-400 text-sm border-b">
//             <tr>
//               <th className="py-2">Employee</th>
//               <th>ID</th>
//               <th>Department</th>
//               <th>Role</th>
//               <th>Status</th>
//             </tr>
//           </thead>

//           <tbody className="text-sm">

//             {/* Row */}
//             <tr className="border-b">
//               <td className="py-3 flex items-center gap-3">
//                 <img src="https://i.pravatar.cc/40" className="rounded-full" />
//                 <div>
//                   <p className="font-semibold">Julian De Marco</p>
//                   <p className="text-gray-400 text-xs">julian@mail.com</p>
//                 </div>
//               </td>
//               <td>#EMP-8291</td>
//               <td>Design & Architecture</td>
//               <td>Lead Architect</td>
//               <td>
//                 <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
//                   Active
//                 </span>
//               </td>
//             </tr>

//             <tr className="border-b">
//               <td className="py-3 flex items-center gap-3">
//                 <img src="https://i.pravatar.cc/41" className="rounded-full" />
//                 <div>
//                   <p className="font-semibold">Sarah Chen</p>
//                   <p className="text-gray-400 text-xs">sarah@mail.com</p>
//                 </div>
//               </td>
//               <td>#EMP-7402</td>
//               <td>Software Engineering</td>
//               <td>Senior Dev</td>
//               <td>
//                 <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
//                   Active
//                 </span>
//               </td>
//             </tr>

//             <tr className="border-b">
//               <td className="py-3 flex items-center gap-3">
//                 <img src="https://i.pravatar.cc/42" className="rounded-full" />
//                 <div>
//                   <p className="font-semibold">Marcus Kray</p>
//                   <p className="text-gray-400 text-xs">marcus@mail.com</p>
//                 </div>
//               </td>
//               <td>#EMP-9110</td>
//               <td>Business Operations</td>
//               <td>Manager</td>
//               <td>
//                 <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs">
//                   On Leave
//                 </span>
//               </td>
//             </tr>

//             <tr className="border-b">
//               <td className="py-3 flex items-center gap-3">
//                 <img src="https://i.pravatar.cc/43" className="rounded-full" />
//                 <div>
//                   <p className="font-semibold">Elena Thorne</p>
//                   <p className="text-gray-400 text-xs">elena@mail.com</p>
//                 </div>
//               </td>
//               <td>#EMP-6204</td>
//               <td>Human Resources</td>
//               <td>HR Director</td>
//               <td>
//                 <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
//                   Active
//                 </span>
//               </td>
//             </tr>

//             <tr>
//               <td className="py-3 flex items-center gap-3">
//                 <img src="https://i.pravatar.cc/44" className="rounded-full" />
//                 <div>
//                   <p className="font-semibold">Liam Wright</p>
//                   <p className="text-gray-400 text-xs">liam@mail.com</p>
//                 </div>
//               </td>
//               <td>#EMP-5531</td>
//               <td>Software Engineering</td>
//               <td>Fullstack Engineer</td>
//               <td>
//                 <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
//                   Inactive
//                 </span>
//               </td>
//             </tr>

//           </tbody>
//         </table>

//         {/* Footer */}
//         <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
//           <p>Showing 5 of 1,284 entries</p>
//           <div className="flex gap-2">
//             <button className="px-2 py-1 bg-blue-600 text-white rounded">1</button>
//             <button className="px-2 py-1 bg-gray-100 rounded">2</button>
//             <button className="px-2 py-1 bg-gray-100 rounded">3</button>
//           </div>
//         </div>

//       </div>

//       {/* Bottom Section */}
//       <div className="grid grid-cols-3 gap-4 mt-6">

//         <div className="col-span-2 bg-blue-700 text-white p-6 rounded-xl">
//           <h2 className="text-xl font-semibold mb-2">
//             Automate Your Onboarding
//           </h2>
//           <p className="text-sm mb-4">
//             Synchronize employee profiles with payroll and security systems.
//           </p>
//           <button className="bg-white text-blue-700 px-4 py-2 rounded-lg">
//             Explore Integrations
//           </button>
//         </div>

//         <div className="bg-white p-5 rounded-xl shadow-sm">
//           <h2 className="font-semibold mb-3">Recent Activity</h2>
//           <p className="text-sm text-gray-500">
//             • Admin updated employee data
//           </p>
//           <p className="text-sm text-gray-500 mt-2">
//             • System generated reports
//           </p>
//         </div>

//       </div>

//     </div>
//   )
// }

// export default EmployeePage





import React from 'react';
import { 
  Search, Bell, HelpCircle, UserPlus, Filter, FileText, 
  Share2, MoreHorizontal, ChevronLeft, ChevronRight, BarChart2,
  Network
} from 'lucide-react';

// --- Mock Data ---
const statsData = [
  { label: 'TOTAL PERSONNEL', value: '1,284', trend: '+12%', trendColor: 'text-blue-600' },
  { label: 'DEPARTMENTS', value: '18', subtext: 'Global' },
  { label: 'ACTIVE PROJECTS', value: '42', subtext: 'Urgent', subtextColor: 'text-red-600' },
  { label: 'RETENTION RATE', value: '94.2%', icon: true },
];

const employeeData = [
  { id: '#EMP-8291', name: 'Julian De Marco', email: 'julian.d@archerp.com', dept: 'Design & Architecture', role: 'Lead Architect', status: 'ACTIVE', avatar: 'https://i.pravatar.cc/150?u=julian' },
  { id: '#EMP-7402', name: 'Sarah Chen', email: 's.chen@archerp.com', dept: 'Software Engineering', role: 'Senior Dev', status: 'ACTIVE', avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { id: '#EMP-9118', name: 'Marcus Kray', email: 'm.kray@archerp.com', dept: 'Business Operations', role: 'Operations Manager', status: 'ON LEAVE', avatar: 'https://i.pravatar.cc/150?u=marcus' },
  { id: '#EMP-6204', name: 'Elena Thorne', email: 'e.thorne@archerp.com', dept: 'Human Resources', role: 'HR Director', status: 'ACTIVE', avatar: 'https://i.pravatar.cc/150?u=elena' },
  { id: '#EMP-5531', name: 'Liam Wright', email: 'l.wright@archerp.com', dept: 'Software Engineering', role: 'Fullstack Engineer', status: 'INACTIVE', avatar: 'https://i.pravatar.cc/150?u=liam' },
];

const EmployeePage = () => {
  return (
    <div className="flex-1 bg-[#f4f7f9] min-h-screen font-sans text-slate-800">
      
      {/* Top Header Navigation */}
      <header className="bg-white flex items-center justify-between px-8 py-4 border-b border-slate-200">
        <div className="flex items-center gap-12 w-full max-w-4xl">
          <div>
            <h2 className="text-[15px] font-bold leading-tight">Employee</h2>
            <p className="text-[15px] font-bold leading-tight">Management</p>
          </div>
          
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-2.5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search directory..." 
              className="w-full bg-slate-100 border-none rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f4ed0] placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-5 pl-4">
          <Bell className="w-5 h-5 text-slate-600 cursor-pointer hover:text-slate-900" />
          <HelpCircle className="w-5 h-5 text-slate-600 cursor-pointer hover:text-slate-900" />
          <div className="h-8 w-px bg-slate-200 mx-2"></div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs font-bold text-slate-800">Admin Console</p>
              <p className="text-[10px] text-slate-400">v2.4.0-stable</p>
            </div>
            <img src="https://i.pravatar.cc/150?u=admin" alt="Admin" className="w-9 h-9 rounded-full object-cover border border-slate-200" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-8 max-w-[1400px] mx-auto">
        
        {/* Page Title & Action */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-1">Directory</h1>
            <p className="text-sm text-slate-500">Manage and curate your global workforce database.</p>
          </div>
          <button className="flex items-center gap-2 bg-[#0f4ed0] hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm">
            <UserPlus className="w-4 h-4" />
            + Add New Employee
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {statsData.map((stat, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
              <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-3">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
                {stat.trend && <span className={`text-xs font-bold ${stat.trendColor}`}>{stat.trend}</span>}
                {stat.subtext && <span className={`text-xs font-semibold ${stat.subtextColor || 'text-slate-400'}`}>{stat.subtext}</span>}
                {stat.icon && <BarChart2 className="w-4 h-4 text-[#0f4ed0] ml-1" />}
              </div>
            </div>
          ))}
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] mb-8">
          
          {/* Table Controls (Tabs & Filters) */}
          <div className="flex items-center justify-between p-5 border-b border-slate-100">
            <div className="flex items-center gap-6 text-sm font-semibold">
              <button className="text-[#0f4ed0] border-b-2 border-[#0f4ed0] pb-1">All Employees</button>
              <button className="text-slate-500 hover:text-slate-800 pb-1">Contractors</button>
              <button className="text-slate-500 hover:text-slate-800 pb-1">Remote</button>
              <div className="h-4 w-px bg-slate-200 mx-2"></div>
              <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
                <Filter className="w-4 h-4" /> Filter
              </button>
            </div>
            <div className="flex items-center gap-4 text-slate-500">
              <span className="text-xs font-semibold uppercase tracking-wider">Export:</span>
              <button className="hover:text-slate-800"><FileText className="w-4 h-4" /></button>
              <button className="hover:text-slate-800"><Share2 className="w-4 h-4" /></button>
            </div>
          </div>

          {/* Table Data */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  <th className="px-6 py-4">Employee Name</th>
                  <th className="px-6 py-4">ID Reference</th>
                  <th className="px-6 py-4">Department</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employeeData.map((emp, idx) => (
                  <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={emp.avatar} alt={emp.name} className="w-9 h-9 rounded-full object-cover bg-slate-200" />
                        <div>
                          <p className="text-sm font-bold text-slate-900">{emp.name}</p>
                          <p className="text-xs text-slate-500">{emp.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-slate-100 text-slate-600 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md">
                        {emp.id}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-700">{emp.dept}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{emp.role}</td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full
                        ${emp.status === 'ACTIVE' ? 'bg-blue-100 text-blue-700' : ''}
                        ${emp.status === 'ON LEAVE' ? 'bg-orange-100 text-orange-700' : ''}
                        ${emp.status === 'INACTIVE' ? 'bg-slate-200 text-slate-500' : ''}
                      `}>
                        {emp.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="text-slate-400 hover:text-[#0f4ed0]"><MoreHorizontal className="w-5 h-5 mx-auto" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 flex items-center justify-between border-t border-slate-100 text-sm text-slate-500">
            <p>Showing 5 of 1,284 entries</p>
            <div className="flex items-center gap-1">
              <button className="p-1 hover:text-slate-800"><ChevronLeft className="w-4 h-4" /></button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#0f4ed0] text-white font-bold shadow-sm">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-slate-100 font-semibold text-slate-700">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-slate-100 font-semibold text-slate-700">3</button>
              <span className="px-2 text-slate-400">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-slate-100 font-semibold text-slate-700">257</button>
              <button className="p-1 hover:text-slate-800"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        {/* Bottom Section (Banner & Activity) */}
        <div className="grid grid-cols-3 gap-6">
          
          {/* Onboarding Banner */}
          <div className="col-span-2 bg-[#0f4ed0] rounded-2xl p-8 text-white relative overflow-hidden flex items-center justify-between">
            {/* Background design elements */}
            <div className="absolute right-0 top-0 w-64 h-full bg-blue-800/20 skew-x-12 transform translate-x-10"></div>
            
            <div className="relative z-10 max-w-md">
              <h3 className="text-2xl font-bold mb-2">Automate Your Onboarding</h3>
              <p className="text-sm text-blue-100 mb-6 leading-relaxed">
                Synchronize new employee profiles directly with payroll and security systems using our Architect Connect API.
              </p>
              <button className="bg-white text-[#0f4ed0] px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-blue-50 transition-colors">
                Explore Integrations
              </button>
            </div>
            
            <div className="relative z-10 w-24 h-24 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center mr-8">
              <Network className="w-10 h-10 text-white/80" />
            </div>
          </div>

          {/* Recent Activity Card */}
          <div className="col-span-1 bg-slate-200/50 rounded-2xl p-6 border border-slate-200/60">
            <div className="w-8 h-8 bg-[#8b2c2c] rounded-lg flex items-center justify-center mb-4">
              <BarChart2 className="w-4 h-4 text-white" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Recent Activity</h4>
            <p className="text-xs text-slate-500 mb-5">Updates within last 24 hours</p>
            
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0f4ed0] mt-1.5 flex-shrink-0"></div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-900">Alex Rivera</span> modified entry #EMP-8291
                </p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8b2c2c] mt-1.5 flex-shrink-0"></div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-900">System</span> generated 4 payroll reports
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default EmployeePage;