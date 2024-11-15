import React from 'react'
import Button from '../Button/button';
import Title from '../title/Title';
import profile from '../icons/profile.jpg'
import './aboutMe.css'


const AboutMe = () => {
  return (
    <div id="about" className="about-area">
    <div className='mt-5'>
      <Title side="right" title="About Me" height={'260px'}/>
      <div className="about" >
        <div className="about-details">
          <p style={{textAlign:'left', paddingLeft : '30px'}}>
          Hi, I'm Apeksha, a software developer with 3.8 years of experience specializing in React and React Native. 
          I have a passion for building dynamic and user-friendly web and mobile applications that prioritize both 
          functionality and aesthetics. I thrive on solving complex problems and love collaborating with teams to 
          bring creative solutions to life. My goal is to continuously grow my skills, explore new technologies,
          and contribute to projects that make a meaningful impact. I am available for any kind of job
          opportunity that suits my interests.
          </p>
          <div className="about-action">
          <Button
            link="https://drive.google.com/uc?export=download&id=1plhlceU59HhwVYcE6bQqJyZb6IrVgsnW"
            target="__self"
            title={'Get Resume'}
            bgColor={'#00cf5d'}
            color={'white'}
           />        
            <Button 
            clickEvent 
            link="#contact" 
            ml="15px" 
            title="My Contact" />
          </div>
        </div>
        <div className="about-image">
          <div className="image mb-3">
            <img alt="profile" src={profile} height={450} />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutMe;
