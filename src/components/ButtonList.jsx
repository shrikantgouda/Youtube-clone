import React from 'react'
import Button from './Button'

const btnList = ['All','Gaming', 'News', 'APIs', 'Live', 'Music', 'Cricket', 'Thoughts', 'Motivation' , 'Lifestyle']

const ButtonList = () => {
  return (
    
    <div className='flex'>
      {btnList.map((btn) => {
         return <Button key={btn} btn={btn}/>
       
   })}
   
    </div>
  )
}

export default ButtonList

