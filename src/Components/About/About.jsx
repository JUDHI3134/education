import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow's Leaders Today</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut consectetur pariatur non possimus praesentium impedit labore omnis delectus odit. Quia itaque incidunt, odit minus modi repudiandae quis? Modi, numquam veritatis.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa consequatur explicabo neque beatae ut sed dolores ipsum eaque eum voluptatem. Tempora officia, rem voluptate accusantium cumque aperiam laboriosam expedita commodi et perferendis obcaecati non id fugit voluptatibus nobis? Facilis eaque assumenda quae consectetur, temporibus asperiores laborum exercitationem eos beatae at qui, repudiandae laboriosam ab adipisci delectus eligendi harum est debitis.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi mollitia inventore alias. Ipsum voluptate omnis soluta culpa totam quaerat, ut vitae repudiandae explicabo debitis perspiciatis in corrupti amet, velit optio. Consequatur impedit quam modi vero reiciendis dolores eius amet necessitatibus.</p>
      </div>
    </div>
  )
}

export default About
