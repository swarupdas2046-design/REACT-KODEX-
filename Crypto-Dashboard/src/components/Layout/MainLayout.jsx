import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const MainLayout = () => {
  // By default desktop pe open rahega
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen w-full bg-gray-50 font-sans overflow-hidden relative">
      
      {/* Mobile Overlay - Jab sidebar open ho tab baaki screen dark karne ke liye */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Dynamic Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content Column */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Navbar with toggle function */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default MainLayout;