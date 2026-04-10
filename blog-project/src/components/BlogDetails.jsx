// import React, { useState } from 'react'
import { FiArrowLeft, FiUser, FiCalendar, FiClock } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router';
import { GetAuth } from '../context/AllContext';
const BlogDetails = () => {
    const navigate = useNavigate();
    let { id } = useParams();
    let { Publish, logUser , date} = GetAuth();
    
    // PROBLEM SOLVED: useState hata diya aur direct find kar liya
    // Agar id match karega toh data aayega, warna empty object {} assign ho jayega
    let data = Publish.find((item) => item.id === id) || {};
    
    // Agar data nahi milta (galat ID URL mein daal di)
    if (!data.title) {
        return <div className="text-white text-center mt-20">Article not found!</div>;
    }
 
  return (
   <div className="min-h-[150vh] mb-5 absolute top-0 left-0  w-full bg-[#050505] text-white flex justify-center">
      

      <div className="w-full max-w-3xl px-6 md:px-8 py-12 pt-20 md:py-16  mt-12 ">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')} 
          className="flex mt-5 items-center gap-2 text-[#888888] hover:text-white transition-colors text-sm mb-10 md:mb-14"
        >
          <FiArrowLeft className="text-lg" />
          Back to Articles
        </button>

        {/* Article Header (Title & Meta Info) */}
        <header className="mb-10 border-b border-[#222222] pb-8 md:pb-10">
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {data.title}
          </h1>

          {/* Metadata Row (Author, Date, Read Time) */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#888888]">
            
            {/* Author */}
            <div className="flex items-center gap-2">
              <FiUser className="text-[16px]" />
              <span className="font-medium text-gray-300">{logUser.Name}</span>
            </div>
            
            {/* Date */}
            <div className="flex items-center gap-2">
              <FiCalendar className="text-[16px]" />
              <span>{date}</span>
            </div>
            
            {/* Read Time */}
            <div className="flex items-center gap-2">
              <FiClock className="text-[16px]" />
              <span>1 min read</span>
            </div>
            
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-base md:text-[17px] leading-[1.8] font-light">
           {data.content}
          </p>
        </article>

      </div>
    </div>
  
  )
}

export default BlogDetails
