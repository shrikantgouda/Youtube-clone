import React from 'react'
import ButtonList from './ButtonList'
import Videocontainer from './Videocontainer'

const MainContainer = () => {
  return (
    <div className='col-span-10'>
        <ButtonList />
        <Videocontainer />
    </div>
  )
}

export default MainContainer