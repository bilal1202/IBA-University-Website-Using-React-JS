import React from 'react'
import './Campus.css'
import lifeoncampus_thumb1 from '../../assets/lifeoncampus-thumb1.jpg'
import lifeoncampus_thumb2 from '../../assets/lifeoncampus-thumb2.jpg'
import lifeoncampus_thumb3 from '../../assets/lifeoncampus-thumb3.jpg'
import lifeoncampus_thumb4 from '../../assets/lifeoncampus-thumb4.jpg'



const Campus = () => {
  return (
    <div className='campus'>
    <div className="gallery">
        <img src={lifeoncampus_thumb1} alt="" />
        <img src={lifeoncampus_thumb2} alt="" />
        <img src={lifeoncampus_thumb3} alt="" />
        <img src={lifeoncampus_thumb4} alt="" />
    </div>
    <button className='btn dark-btn'>See More Here</button>
    </div>
  )
}

export default Campus