import { Search, Bell, MessageSquare, Menu } from 'lucide-react';

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center flex-1">
        
        {/* Hamburger Menu Button */}
        <button 
          onClick={toggleSidebar}
          className="mr-4 text-gray-500 hover:text-blue-600 transition-colors focus:outline-none z-30"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Search Bar */}
        <div className="relative w-64 hidden sm:block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="w-4 h-4 text-gray-400" />
          </span>
          <input 
            type="text" 
            placeholder="Search projects..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-100 border-transparent rounded-full text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        
      </div>

      {/* Right side icons */}
      <div className="flex items-center space-x-4 text-gray-500">
        <button className="hover:text-blue-600 transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="hover:text-blue-600 transition-colors relative">
          <MessageSquare className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-blue-600 rounded-full"></span>
        </button>
        <img src="https://i.pinimg.com/1200x/78/04/8e/78048eaf429d3491ea50d2d697be2909.jpg" className='h-7 w-7 rounded-full' alt="" />
        <div className="w-9 h-9  bg-blue-500 text-white flex items-center justify-center font-semibold cursor-pointer">
          <img src="https://i.pinimg.com/736x/3a/de/ee/3adeeee1b2b2a7cd543a4187f9661f47.jpg" className='h-full w-full object-cover' />
        </div>
      </div>
    </header>
  );
};

export default Navbar;