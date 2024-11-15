import React from "react"
import Button from '../Button/button';
import Title from '../title/Title';

import "./contactMe.css"

const conatctMe = () => {
  return (
    <div id="contact" className="contact-area">
      <div>
        <Title side="right" title="Contact"  height={'260px'}/>
        <div className="contact">
          <div className="contact-status">
            <p>
              I am interested in working with company that thinks my skill
              will be helpful for them. If you are looking for someone like me,
              please let me know. Or you can just 'say hi' to me.
            </p>
            <div>
              <Button
                title="Contact Me"
                mt="25px"
                bgColor="#00cf5d"
                color="#fff"
                link="mailto:apekshamore44@gmail.com"
              />
            </div>
          </div>
          <div className="contact-details">
            <ul>
              <li>
                <h5>Email</h5>
                <p>
                 apekshamore44@gmail.com <span>(Recommended)</span>
                </p>
              </li>
              <li>
                <h5>Social </h5>
                <p>
               LinkedIn: @apeksha-more
                </p>
              </li>
              <li>
                <h5>Contact Number</h5>
                <p>
                  +91 7666929833
                </p>
              </li>
              <li>
                <h5>Address</h5>
                <p>Vishrantwadi, Pune</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default conatctMe;