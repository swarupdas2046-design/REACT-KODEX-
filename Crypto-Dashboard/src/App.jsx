import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import MainLayout from './components/layout/';
import CryptoDashboard from './pages/CryptoDashboard';
import Analytics from './pages/Analytics';
import MainLayout from './components/Layout/MainLayout';
import Profile from './pages/Profile';
import Login from './pages/Login';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>, // The layout wraps all children
    errorElement: <div className="p-6 text-red-500">Something went wrong!</div>,
    children: [
      {
        index: true, // This is the default route ("/")
        element: <CryptoDashboard />,
      },
      {
        path: 'analytics',
        element: <Analytics />,
      },
      { 
        path: 'profile', 
        element: <Profile /> 
      },
      { 
        path: 'login', 
        element: <Login /> 
      },
      {
        path: 'settings',
        element: <div className="p-6"><h1 className="text-2xl font-bold">Settings</h1></div>,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;