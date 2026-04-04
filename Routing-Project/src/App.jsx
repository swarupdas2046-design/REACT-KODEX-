import React from 'react'
import Navbar from './components/Navbar'
import Allroutes from './routes/Allroutes'
const App = () => {
  return (
    <div className='min-h-full w-full bg-white text-black pt-[6%]'>
      
      <Navbar/>
      <Allroutes/>
    </div>
  )
}

export default App
