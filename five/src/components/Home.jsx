import React, { useRef, useEffect } from 'react';
import { animate, motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs';
import me from '../assets/logo.png';

const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  useEffect(() => {
    if (clientCount.current) {
      animate(0, 100, {
        duration: 1,
        onUpdate: (v) => (clientCount.current.textContent = v.toFixed())
      });
    }
    if (projectCount.current) {
      animate(0, 500, {
        duration: 1,
        onUpdate: (v) => (projectCount.current.textContent = v.toFixed())
      });
    }
  }, []);

  const animations = {
    h1: {
      initial: {
        x: '-100%',
        opacity: 0
      },
      whileInView: {
        x: 0,
        opacity: 1
      }
    },
    button: {
      initial: {
        y: '-100%',
        opacity: 0
      },
      whileInView: {
        y: 0,
        opacity: 1
      }
    }
  };

  return (
    <div id='home'>
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Samrajya Chand
          </motion.h1>

          <Typewriter
            options={{
              strings: ['A Developer', 'A Designer', 'A Creator'],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: 'typewriterpara'
            }}
          />
          <div>
            <a href='mailto:samrajyabahadurchand@gmail.com'>Hire Me</a>
            <a href='#work'>
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
              <span ref={clientCount}></span>
            </p>
            <span>Clients WorldWide</span>
          </article>

          <aside>
            <article>
              <p>
                +
                <span ref={projectCount}>500</span>
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>samrajyabahadurchand@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt='Samrajya' />
        <BsChevronDown />
      </section>
    </div>
  );
};

export default Home;
