import React from 'react'
import { useNavigate } from 'react-router'

const About = () => {
  let navigate = useNavigate()
  return (
    <div className=''>
      <h1 className='text-3xl text-center text-green-600 p-3 font-bold'>About</h1>
      {/* <button onClick={()=>{navigate('/contact')}} className='px-5 py-2 rounded-xl active:scale-95 border-none bg-cyan-500 cursor-pointer font-bold'>Go to Contact</button> */}
    </div>
  )
}

export default About
