import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import VideoCard, { HoComponent } from './VideoCard'
import { Link } from 'react-router-dom'

const Videocontainer = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    getVideos()
  },[])
  
  const getVideos = async () => {
     const data = await fetch(YOUTUBE_VIDEO_API)
     const json = await data.json()
     setVideos(json.items)
  }
  return (
    <div className='flex flex-wrap'>
     {videos[8] &&  <HoComponent infovideo={videos[8]}/> }
      {videos.map((video) => {
        return <Link key={video.id} to={"/watch?v=" + video.id}> <VideoCard  infovideo={video}/> </Link>
      })}
     
    </div>
  )
}

export default Videocontainer