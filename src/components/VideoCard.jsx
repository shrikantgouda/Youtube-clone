import React from 'react'

const VideoCard = ({ infovideo }) => {

    const { snippet , statistics } = infovideo;
    const { channelTitle, title, thumbnails } = snippet
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url} />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  )
}

export const HoComponent = ({infovideo}) =>{

  return( 
    <div className='p-1 m-1 border-blue-500'>
     <VideoCard infovideo={infovideo}/>
    
    </div>
  )
}

export default VideoCard