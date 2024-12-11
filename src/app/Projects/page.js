import React from 'react'
import InstagramPost from '../components/instapost'

const page = () => {
  const urlp=`https://www.instagram.com/rainaxsinhaa/reel/DDCS_AgvYyh/`
  const instaurl=`instagram_oembed?url=${urlp}&access_token=${process.env.AcessTokenR}`
 
  
  
  
  return (
    <div>
      <InstagramPost url={instaurl}/>
    </div>
  )
}

export default page
