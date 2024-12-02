import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <nav className='bg-gray-700 p-4 w-full text-white'>
    <div className='container mx-auto flex justify-between item-center'>
        <div className='text-2xl font-bold'> Blog Management</div>
            <ul className='flex space-x-4'>
            <li>
                <Link to="/" className='hover:text-gray-400'>Home</Link>
            </li>
            <li>
                <Link to="/add" className='hover:text-gray-400'>Add Blog</Link>
            </li>
            <li>
                <Link to="/edit/:id" className='hover:text-gray-400'>Edit blog</Link>
            </li>
            <li>
                <Link to="/about" className='hover:text-gray-400'>About</Link>
            </li>
            </ul>
       

    </div>
   </nav>
  )
}

export default Navbar