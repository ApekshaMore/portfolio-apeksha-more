import React from "react"
import "./title.css"
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa"



 const Title = ({ title, social, side, height }) => {
  return (
    <div
      style={{ height }}
      className={`title ${side} ${social ? "social" : ""}`}
    >
      {social && (
     <div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/apekshamore"
            >
              <FaGithub />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/apeksha_more_"
            >
              <FaInstagram />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/apeksha-more-3225a6135"
            >
              <FaLinkedinIn />
            </a>
          </div>
         
        </div>
      )}
      <p>{title}</p>
    </div>
  )
}

Title.defaultProps = {
  side: "left",
  height: "160px",
}

export default Title;