// import React from 'react'

// const Nav = ({setToggel,toggel}) => {
//   return (
//     <div className='w-full h-[10%] bg-blue-800/50 mb-4 rounded-b-xs flex z-99 items-center justify-between px-8 fixed left-0 top-0'>
//         <img src="https://i.pinimg.com/736x/aa/0b/a0/aa0ba04d7b5c534acbcf55de2dd51b85.jpg" className='w-15 h-15 object-cover rounded-full' />
//         <div className='flex gap-5 text-white font-bold text-xl cursor-pointer'>
//             <h1>Home</h1> 
//             <h1>About</h1>
//             <h1>Contact-Us</h1>
//         </div>
//         <button onClick={()=>{setToggel((prev)=>!prev)}} 
//         className='bg-black text-white px-5 py-2 rounded active:scale-95 cursor-pointer'>
//         {toggel?'Add User':'Show User'}</button>
//     </div>
//   )
// }

// export default Nav

import React from 'react'

const Nav = ({ setToggel, toggel }) => {
  return (
    <div className='w-full h-17.5 bg-linear-to-r from-[#0f172a] to-[#1e293b] shadow-lg flex items-center justify-between px-8 fixed top-0 left-0 z-50'>
      
      {/* Logo */}
      <div className='flex items-center gap-3'>
        <img
          src="https://i.pinimg.com/736x/aa/0b/a0/aa0ba04d7b5c534acbcf55de2dd51b85.jpg"
          className='w-11 h-11 object-cover rounded-full border-2 border-blue-500'
        />
        <h1 className='text-white font-semibold text-lg tracking-wide'>
          User Panel
        </h1>
      </div>

      {/* Links */}
      <div className='hidden md:flex gap-8 text-gray-300 font-medium'>
        <h1 className='hover:text-white transition cursor-pointer'>Home</h1>
        <h1 className='hover:text-white transition cursor-pointer'>About</h1>
        <h1 className='hover:text-white transition cursor-pointer'>Contact</h1>
      </div>

      {/* Button */}
      <button
        onClick={() => {
          setToggel((prev) => !prev)
        }}
        className='bg-linear-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-lg font-medium hover:scale-105 transition active:scale-95 shadow-md'
      >
        {toggel ? 'Add User' : 'Show User'}
      </button>
    </div>
  )
}

export default Nav