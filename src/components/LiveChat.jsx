import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomMessage, generateRandomNames } from '../utils/helper'





const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState()
  const dispatch = useDispatch()

  const chatMessages = useSelector((store) => store.chat.messages)


  useEffect(() =>{
    const i = setInterval(() => {
      //API POLLING
      console.log('poll')
      dispatch(addMessage({
        name: generateRandomNames(),
        message:generateRandomMessage(10) +" lorem  "
      }))
    },2000);

    return () => clearInterval(i)
  },[])

  return (
  <>  
    <div className='w-full h-[530px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
     <div> { //disclaimer dont use index as key
       chatMessages.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message}/>
       ))}
       </div>
    
    </div>
       <form
         className='w-full p-2 ml-2 border border-black' 
         onSubmit={(e) => {
          e.preventDefault()
            console.log("on form submit",LiveMessage)
             dispatch(addMessage({
              name:"shrikant",
              message: LiveMessage
             }))
             setLiveMessage("")
            }}>
       <input 
         className='w-70 border border-black' 
         type="text" 
         value={LiveMessage} 
         onChange={(e) => setLiveMessage(e.target.value)}
       />
       <button className='px-2 mx-2 bg-green-100'>send</button>
     </form>
     </>
  )
}

export default LiveChat