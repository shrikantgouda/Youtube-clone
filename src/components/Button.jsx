import React from 'react'

const Button = ({btn}) => {
  return (
    <div>
        <button className='px-5 py-2 m-5 bg-gray-200 rounded-lg'>{btn}</button>
    </div>
  )
}

export default Button