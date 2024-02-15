import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillInstagram,AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
   <footer>
      <div>

        <img src={"https://avatars.githubusercontent.com/u/97937630?v=4"} alt="Founder" />

        <h2>Samrajya Chand</h2>
        <p>Motivation is temporary but discipline lasts forever</p>
        </div>
        <aside>

          <h2>Social Media</h2>
          <article>
            <a href="https://www.instagram.com/_saammu/"
            target={'blank'}>
              <AiFillInstagram/>
            </a>

            <a href="https://github.com/therealsamrajya"
            target={'blank'}>
              <AiFillGithub/>
            </a>

            <a href="https://www.facebook.com/kratos.ho.3/"
            target={'blank'}>
              <AiFillFacebook/>
            </a>
          </article>
        </aside>
        <a href="#home">
          <AiOutlineArrowUp/>
        </a>

     

   </footer>
  )
}

export default Footer