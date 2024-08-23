import React from 'react'
import './MyWork.css'
import theme_pattrn from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import Showmore from './Showmore'


const MyWork = () => {
  
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattrn} alt="" />
      </div>
      <div className="mywork-continer">
        {mywork_data.map((work,index)=>{
          return <a rel="" key={index} href={work.linkurl} target="_blank"><img key={index} src={work.w_img} /></a>
        })}
      </div>
      
      <div className="mywork-showmore" onClick={event =>  window.location.href={Showmore}} >
        <p>Show More</p>
        <img src={arrow_icon}/>
      </div>

    </div>
  )
}

export default MyWork