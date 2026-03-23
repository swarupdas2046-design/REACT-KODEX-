const User_Card = ({user,DeleteData,setEdit,setToggel}) => {
  // console.log(user);
    
  return (
    <div className='h-fit max-w-2xs  bg-linear-to-br from-gray-800 to-gray-900  hover:-translate-y-2 cursor-pointer transition-all ease-linear duration-350 text-white py-2 px-1 rounded-2xl flex flex-col gap-3 hover:shadow-[0px_0px_8px_rgb(246,246,246)]'>
        <img className='w-full h-50 object-cover rounded-xl' src={user.url} />
        <div className='px-4  mb-3 flex flex-col gap-1.5'>
            <h4 className='text-2xl mb-2 font-bold text-green-400 text-center'>{user.name}</h4>
            {/* <hr /> */}
            {/* <hr className="w-[70%] self-center"/> */}
            <p className='text-xl'>{user.Designation}</p>
            <p className='text-yellow-200'>{user.email}</p>
            <p>{user.empid}</p>
        </div>
        <div className='w-full flex justify-evenly mb-2'>
            <button onClick={()=>{
              setEdit(user)
              setToggel(false)
            }} className='px-7 py-2 font-bold  active:scale-95 cursor-pointer rounded-2xl text-amber-300 border-2 border-amber-300 hover:bg-amber-400 hover:text-black'>edit</button>
            <button onClick={()=>DeleteData(user.id)} className='px-7 py-2 font-bold  active:scale-95 cursor-pointer rounded-2xl text-red-500 border-2 border-red-500 hover:bg-red-600 hover:text-white'>remove</button>
        </div>
    </div>
  )
}

export default User_Card

// const User_Card = ({ user, DeleteData, setEdit, setToggel }) => {
//   return (
//     <div className='w-[280px] h-fit bg-linear-to-br from-gray-800 to-gray-900 hover:-translate-y-2 transition-all duration-300 rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-700'>
      
//       {/* Image */}
//       <div className='relative'>
//         <img
//           className='w-full h-[200px] object-cover'
//           src={user.url}
//           alt="user"
//         />
//       </div>

//       {/* Content */}
//       <div className='px-4 py-4 flex flex-col gap-2 text-white'>
//         <h4 className='text-2xl font-semibold text-blue-400 text-center tracking-wide'>
//           {user.name}
//         </h4>

//         <p className='text-md text-gray-400 text-center'>
//           {user.Designation}
//         </p>

//         <div className='text-sm text-gray-300 mt-2 space-y-1'>
//           <p className='text-yellow-100'> {user.email}</p>
//           <p> {user.empid}</p>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className='flex gap-3 px-4 pb-4'>
//         <button
//           onClick={() => {
//             setEdit(user);
//             setToggel(false);
//           }}
//           className='flex-1 py-2 rounded-lg border border-yellow-400 text-yellow-400 font-medium hover:bg-yellow-400 hover:text-black transition active:scale-95'
//         >
//           Edit
//         </button>

//         <button
//           onClick={() => DeleteData(user.id)}
//           className='flex-1 py-2 rounded-lg border border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-white transition active:scale-95'
//         >
//           Remove
//         </button>
//       </div>
//     </div>
//   );
// };

// export default User_Card;