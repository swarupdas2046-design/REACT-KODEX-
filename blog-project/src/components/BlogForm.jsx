import React, { useEffect } from 'react'
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";
import { FiSave } from "react-icons/fi";
import { useNavigate, useParams } from 'react-router';
import { useForm } from 'react-hook-form'
import { GetAuth } from '../context/AllContext';
import { Bounce, toast } from 'react-toastify';
import { nanoid } from 'nanoid'

const BlogForm = () => {
    let { Blog, setBlog, Publish, setPublish, Draft, setDraft } = GetAuth();
    let navigate = useNavigate();
    
    // useParams se ID nikal lenge (Agar edit mode hai toh ID milegi, naya blog hai toh undefined hogi)
    let { id } = useParams(); 
    
    // setValue ko useForm se nikal liya
    let { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

    // EDIT MODE: Agar ID hai, toh form ko purane data se fill kardo
    useEffect(() => {
        if (id) {
            let existingPost = Blog.find(item => item.id === id);
            if (existingPost) {
                // Form ke inputs mein purana data bhar rahe hain
                setValue('title', existingPost.title);
                setValue('excerpt', existingPost.excerpt);
                setValue('content', existingPost.content);
                setValue('tags', existingPost.tags);
            }
        }
    }, [id, Blog, setValue]);

    let HandleFormSubmit = (data, status) => {
        // Agar id pehle se hai toh wahi use karo, warna nayi ID (nanoid) banao
        let currentId = id ? id : nanoid(); 
        let finalData = { ...data, status: status, id: currentId };
      console.log(finalData);
      
        // 1. Main Blog array update karein
        let updatedBlogs;
        if (id) {
            // EDIT MODE: Purane item ko naye data se replace karo
            updatedBlogs = Blog.map(item => item.id === currentId ? finalData : item);
        } else {
            // CREATE MODE: Naya item last mein add karo
            updatedBlogs = [...Blog, finalData];
        }
        setBlog(updatedBlogs);
        localStorage.setItem("blog", JSON.stringify(updatedBlogs));

        // 2. Draft aur Publish arrays ko smartly update karein (Status change ho sakta hai isliye)
        // Pehle dono arrays se yeh ID hata do (Clean Slate)
        let cleanPublish = Publish.filter(item => item.id !== currentId);
        let cleanDraft = Draft.filter(item => item.id !== currentId);

        // Phir naye status ke hisaab se sahi jagah par dal do
        if (status === 'Publish') {
            let newPublish = [...cleanPublish, finalData];
            setPublish(newPublish);
            localStorage.setItem("publish", JSON.stringify(newPublish));
            
            setDraft(cleanDraft); // Draft se hata diya
            localStorage.setItem("draft", JSON.stringify(cleanDraft));
        } 
        else if (status === 'draft') {
            let newDraft = [...cleanDraft, finalData];
            setDraft(newDraft);
            localStorage.setItem("draft", JSON.stringify(newDraft));
            
            setPublish(cleanPublish); // Publish se hata diya
            localStorage.setItem("publish", JSON.stringify(cleanPublish));
        }

        toast.success(id ? `Article updated successfully!` : (status === 'draft' ? 'Draft saved successfully!' : 'Blog published successfully!'), {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
        });
        
        reset();
        navigate('/dashboard'); // Save/Update hone ke baad seedha dashboard bhej do
    }

  return (
    <div className='min-h-[calc(100vh-4rem)] absolute top-0 left-0 w-full bg-black'>
        <div className='mx-auto max-w-4xl px-4 pt-23 pb-6'>
         <div onClick={() => navigate('/dashboard')} className="mb-6 text-gray-400 text-sm flex items-center gap-2 cursor-pointer w-fit hover:text-white transition-colors">
            <FaArrowLeft />
            Back to Dashboard
         </div>

      {/* Card */}
      <div className="max-w-4xl mx-auto border border-gray-800 bg-[#0A0E11] rounded-2xl p-8">

        {/* Heading dynamic kar di */}
        <h2 className="text-xl font-semibold mb-6">
            {id ? 'Edit Article' : 'Create New Article'}
        </h2>

        <form className="space-y-6">

             <div>
            <label className="text-sm text-gray-300 font-semibold">AuthorName</label>
            <input {...register('AuthorName',{required:true})}
              type="text"
              placeholder="Enter your name..."
              className="w-full mt-2 px-4 py-2 rounded-lg bg-[#111519] border border-gray-700 focus:outline-none focus:border-green-400 text-white"
            />
          </div>

          {/* Title */}
          <div>
            <label className="text-sm text-gray-300 font-semibold">Title</label>
            <input {...register('title',{required:true})}
              type="text"
              placeholder="Enter a compelling title..."
              className="w-full mt-2 px-4 py-2 rounded-lg bg-[#111519] border border-gray-700 focus:outline-none focus:border-green-400 text-white"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="text-sm text-gray-300 font-semibold">Excerpt</label>
            <textarea {...register('excerpt',{required:true})}
              placeholder="Write a brief summary of your article..."
              className="w-full mt-2 px-4 py-2 rounded-lg bg-[#111519] border border-gray-700 focus:outline-none focus:border-green-400 text-white"
            ></textarea>
            <p className="text-xs text-gray-500 mt-2">A short description that appears on the blog listing</p>
          </div>

          {/* Content */}
          <div>
            <label className="text-sm text-gray-300 font-semibold">Content</label>
            <textarea {...register('content',{required:true})}
              placeholder="Write your article content here... (Markdown supported)"
              className="w-full mt-2 px-4 py-2 rounded-lg bg-[#111519] border border-gray-700 focus:outline-none focus:border-green-400 text-white min-h-37.5"
            ></textarea>
            <p className="text-xs text-gray-500 mt-2">Supports Markdown: ## for headers, **bold**, *italic*, `code`, etc.</p>
          </div>

          {/* Tags */}
          <div>
            <label className="text-sm text-gray-300 font-semibold">Tags</label>
            <input  {...register('tags',{required:true})}
              type="text"
              placeholder="Add tags (e.g. React, JavaScript, Web)"
              className="w-full mt-2 px-4 py-2 rounded-lg bg-[#111519] border border-gray-700 focus:outline-none focus:border-green-400 text-white"
            />
            <p className="text-xs text-gray-500 mt-2">Add tags separated by commas</p>
          </div>

          {/* Buttons */}
        <div className="flex justify-between gap-4 pt-4">
            {errors.title || errors.excerpt || errors.content || errors.tags ? <p className='text-red-500'>All fields are required</p>: <div className="w-10"></div>}
            
            <div className="flex items-center gap-4">
            <button type="button" onClick={handleSubmit((data)=> HandleFormSubmit(data,'draft'))} className="flex items-center gap-2 border border-gray-700 px-4 py-2 rounded-lg text-sm hover:border-gray-500 transition text-white">
                <FiSave /> {id ? 'Update Draft' : 'Save as Draft'}
            </button>

            <button type="button" onClick={handleSubmit((data)=> HandleFormSubmit(data,'Publish'))} className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-sm font-medium text-black">
                <FaPaperPlane /> {id ? 'Update & Publish' : 'Publish'}
            </button>
            </div>
        </div>

        </form>
      </div>
      </div>
</div>
  )
}

export default BlogForm