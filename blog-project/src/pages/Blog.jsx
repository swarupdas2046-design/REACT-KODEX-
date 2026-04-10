import React, { useState } from "react";
import { GetAuth } from "../context/AllContext";
import { GoPersonFill } from "react-icons/go";
import { FaRegCalendarDays } from "react-icons/fa6";
import { Outlet, useNavigate, useParams } from "react-router";
const Blog = () => {
  let { Publish, logUser,date } = GetAuth();
  let navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-black text-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <section className="mb-15 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Welcome to <span className="text-[#007E69]">Inkwell</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-gray-400">
            Discover thoughtful articles on technology, programming, and
            software engineering from passionate writers.
          </p>
        </section>

        <section>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white tracking-tight">
              Latest Articles
            </h2>
            <span className="text-sm text-gray-400"> {Publish.length} articles </span>
          </div>
        </section>

        <div className="grid grid-cols-1 self-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Publish.map((item) => {
            return (
              <div onClick={()=> navigate(`/blog/${item.id}`)} key={item.id} className=" bg-[#0A0E11] text-card-foreground px-4  flex flex-col gap-6 rounded-xl border cursor-pointer  border-gray-700 py-6 shadow-sm group  transition-all duration-300 hover:border-green-800 hover:shadow-2xl ">
                <h1>{item.tags}</h1>
                <h1>{item.title}</h1>
                <p>{item.excerpt}</p>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <GoPersonFill /> {item.AuthorName}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegCalendarDays /> {date}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default Blog;
