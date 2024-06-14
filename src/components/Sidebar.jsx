import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const ismenuOpen = useSelector(store => store.app.isMenuOpen)
//early return pattern
  if(!ismenuOpen) return null
  return (
    <div className='p-5 shadow-lg w-44 '>
      <ul>
        <li className='font-bold'> <Link to='/'>Home </Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        <li>music</li>
        <li>sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch later</h1>
      <ul>
        <li>music</li>
        <li>sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

    </div>
  )
}

export default Sidebar