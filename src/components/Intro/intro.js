import React from 'react';
import Button from '../Button/button';
import './intro.css'
import Title from '../title/Title';


const Intro=()=> {
    return (
        <div className="intro-area">

          <Title title="Follow Me" social height="260px" />
  
          <div>
            <div className="intro">
              <div className="intro-text">
                <div className='d-flex flex-column align-items-start'>
                <p>Hello! I am</p>
                <h1>Apeksha More</h1>
                <h3>Software Developer</h3>
                </div>
               
                <ul>
                  <li>Web Developer</li>
                  <li>Programmer</li>
                  <li>Software Engineer</li>
                </ul>
                <div className="action">
                  <Button
                    link="https://drive.google.com/uc?export=download&id=1plhlceU59HhwVYcE6bQqJyZb6IrVgsnW"
                    target="__self"
                    title={'Get Resume'}
                    bgColor={'#00cf5d'}
                    color={'white'}
                   />
                  <Button clickEvent link="#about"
                   title={'About Me'}
                   color={'#00cf5d'}
                   ml={'20px'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Intro