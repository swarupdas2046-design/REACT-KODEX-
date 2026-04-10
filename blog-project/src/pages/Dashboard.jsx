import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { FiFileText, FiEdit, FiTrash2, FiEye } from "react-icons/fi";
import { Outlet, useNavigate } from "react-router"; 
import { GetAuth } from "../context/AllContext";
import { BsThreeDots } from "react-icons/bs";

const Dashboard = () => {
  let navigate = useNavigate();
  let { Blog, setBlog, logUser, Publish, Draft, setPublish, setDraft } = GetAuth();
  
  const [openMenuId, setOpenMenuId] = useState(null);
  
  // NAYA STATE: Delete Modal ko control karne ke liye
  // Agar yeh null hai, toh modal close rahega. Agar isme data hai, toh modal open ho jayega.
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    const handleClickOutside = () => setOpenMenuId(null);
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  // Delete Logic (Ab yeh direct call nahi hoga, Modal ke "Delete" button se call hoga)
  const handleDelete = (id, status) => {
    let updatedBlogs = Blog.filter(item => item.id !== id);
    setBlog(updatedBlogs);
    localStorage.setItem("blog", JSON.stringify(updatedBlogs));

    if (status === 'Publish') {
      let updatedPublish = Publish.filter(item => item.id !== id);
      setPublish(updatedPublish);
      localStorage.setItem("publish", JSON.stringify(updatedPublish));
    } else {
      let updatedDrafts = Draft.filter(item => item.id !== id);
      setDraft(updatedDrafts);
      localStorage.setItem("draft", JSON.stringify(updatedDrafts));
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] text-white bg-black relative">
      <div className="mx-auto max-w-5xl px-4 py-12 ">
        {/* Top Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-3xl font-semibold">Dashboard</h2>
            <p className="text-gray-400 text-sm mt-1">
              Manage your articles, {logUser.Name}
            </p>
          </div>
          <button
            onClick={() => navigate("/dashboard/new")}
            className="flex items-center gap-2 bg-[#007E69] hover:bg-[#026c5a] px-4 py-2 rounded-lg text-sm font-medium text-black"
          >
            <FaPlus /> New Article
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="border border-gray-800 rounded-xl p-6">
            <p className="text-gray-400 text-sm">Total Articles</p>
            <h3 className="text-3xl mt-2">{Blog.length}</h3>
          </div>
          <div className="border border-gray-800 rounded-xl p-6">
            <p className="text-gray-400 text-sm">Published</p>
            <h3 className="text-3xl mt-2 text-green-600">{Publish.length}</h3>
          </div>
          <div className="border border-gray-800 rounded-xl p-6">
            <p className="text-gray-400 text-sm">Drafts</p>
            <h3 className="text-3xl mt-2 text-gray-300">{Draft.length}</h3>
          </div>
        </div>

        {/* Articles Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Your Articles</h3>

          {/* Empty State */}
          <div className={`${Blog.length === 0 ? "border border-gray-800 rounded-xl py-16 flex flex-col items-center justify-center text-center" : "hidden"}`}>
            <FiFileText className="text-gray-500 text-5xl mb-4" />
            <h4 className="text-lg font-semibold mb-1">No articles yet</h4>
            <p className="text-gray-400 text-sm mb-4">Start writing your first article</p>
            <button
              onClick={() => navigate("/dashboard/new")}
              className="flex items-center gap-2  bg-[#007E69] hover:bg-[#026c5a] px-4 py-2 rounded-lg text-sm font-medium text-black"
            >
              <FaPlus /> Create Article
            </button>
          </div>
          
          {/* List of Articles */}
          <div className={`${Blog.length === 0 ? "hidden" : "block"}`}>
            {Blog.map((elem) => {
              return (
                <div key={elem.id} className="flex items-center mb-4 justify-between w-full p-5 md:p-6 border border-gray-800 bg-[#0A0E11] rounded-2xl transition-all hover:border-gray-700 cursor-pointer">
                  
                  {/* Left Side: Text Content */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-white text-lg font-semibold tracking-wide">
                        {elem.title}
                      </h3>
                      <span className={`${elem.status === 'Publish' ? 'bg-[#00A97F]' : 'bg-gray-600'} px-2.5 py-1 text-xs font-semibold text-black rounded-full`}>
                        {elem.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{elem.excerpt}</p>
                    <p className="text-[#666666] text-xs mt-2">
                      Last updated: Apr 10, 2026
                    </p>
                  </div>

                  {/* Right Side: Options Menu Icon & Dropdown */}
                  <div className="relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); 
                        setOpenMenuId(openMenuId === elem.id ? null : elem.id);
                      }}
                      className="text-gray-500 hover:text-white transition-colors p-2 rounded-full hover:bg-[#1a2229]"
                    >
                      <BsThreeDots className="text-xl" />
                    </button>

                    {/* Dropdown Menu */}
                    {openMenuId === elem.id && (
                      <div className="absolute right-0 mt-2 w-36 bg-[#111519] border border-gray-700 rounded-lg shadow-xl z-10 overflow-hidden">
                        <button 
                          onClick={(e) => { e.stopPropagation(); navigate(`/blog/${elem.id}`); setOpenMenuId(null); }} 
                          className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-300 hover:bg-[#1a2229] hover:text-white transition-colors"
                        >
                          <FiEye /> View
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); navigate(`/dashboard/edit/${elem.id}`); setOpenMenuId(null); }} 
                          className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-300 hover:bg-[#1a2229] hover:text-white transition-colors border-t border-gray-800"
                        >
                          <FiEdit /> Edit
                        </button>
                        <button 
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            // Yahan direct delete karne ki jagah state set karenge modal open karne ke liye
                            setItemToDelete(elem); 
                            setOpenMenuId(null); 
                          }} 
                          className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-400 hover:bg-[#1a2229] hover:text-red-300 transition-colors border-t border-gray-800"
                        >
                          <FiTrash2 /> Delete
                        </button>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Outlet />

      {/* --- CONFIRMATION MODAL UI --- */}
      {itemToDelete && (
        <div 
          // fixed inset-0 screen cover karega, bg-black/60 dark karega aur backdrop-blur piche ka blur karega
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setItemToDelete(null)} // Background par click karne se modal band hoga
        >
          {/* Modal Box */}
          <div 
            onClick={(e) => e.stopPropagation()} // Modal ke andar click karne se background click trigger nahi hoga
            className="bg-[#0A0E11] border border-gray-800 rounded-xl p-6 w-full max-w-md shadow-2xl"
          >
            <h3 className="text-lg font-semibold text-white mb-2">Delete Article</h3>
            
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Are you sure you want to delete "<span className="text-white font-medium">{itemToDelete.title}</span>"? This action cannot be undone.
            </p>

            <div className="flex items-center justify-end gap-3">
              <button 
                onClick={() => setItemToDelete(null)} 
                className="px-4 py-2 text-sm font-medium text-gray-300 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  handleDelete(itemToDelete.id, itemToDelete.status); // Asli Delete Action
                  setItemToDelete(null); // Modal close
                }} 
                className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Dashboard;