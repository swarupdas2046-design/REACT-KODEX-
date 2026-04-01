import { NavLink } from 'react-router-dom';
// ✅ User aur LogIn icons import kiye
import { LayoutDashboard, TrendingUp, Settings, User, LogIn } from 'lucide-react';

const Sidebar = ({ isOpen }) => {
  // ✅ navItems mein Profile aur Login add kar diye
  const navItems = [
    { name: 'Crypto', path: '/', icon: LayoutDashboard },
    { name: 'Analytics', path: '/analytics', icon: TrendingUp },
    { name: 'Profile', path: '/profile', icon: User },
    { name: 'Login', path: '/login', icon: LogIn },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <aside 
      className={`fixed lg:relative z-30 inset-y-0 left-0 w-64 bg-slate-900 text-slate-300 flex flex-col h-screen transition-all duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:-ml-64'
      }`}
    >
      <div className="h-16 flex items-center px-6 border-b border-slate-800 shrink-0">
        <span className="text-xl font-bold text-white tracking-wide">AdminKit</span>
      </div>
      
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-4">Pages</p>
        
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md transition-colors ${
                isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3 shrink-0" />
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;