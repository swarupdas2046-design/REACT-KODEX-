import React from 'react'
import { Link, useLocation } from 'react-router'

const BreadCrums = () => {
    let {pathname} = useLocation()
    let pathnames = pathname.split('/').filter(x => x)
    console.log('------>',pathnames);
    
    
  return (
    <div className='flex gap-4'>
      {pathnames.map((elem, index) => {
        return <Link to={`/${elem}`} key={index} className='text-blue-600'>{elem.toUpperCase()}</Link>
      })}
    </div>
  )
}

export default BreadCrums
