import React, { useState, useEffect, useRef } from 'react';
import { headerLogo } from '../../assets/assets';
import { Link } from 'react-router-dom';


const menu = [
  {
    id: 1,
    name:"Home",
    link: "/"
  },
  {
    id:2,
    name:"About Us",
    link: "/about-us"
  },
  {
    id: 3,
    name:"Products",
    link:"/products"

  },
  {
    id: 4,
    name:"Contact Us",
    link:"/contact"
  }
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
  <div className='w-11/12 mx-auto flex items-center gap-x-16 bg-white h-24 overflow-hidden'>
  <div className=' w-1/4'>    
  <img src={headerLogo} alt='' className='w-full h-full object-contain' />
  </div>
  <div className="w-3/5 flex items-center justify-between ">
    {
      menu.map((val)=>{
        return(
          <Link key={val.id} to={val.link} className='text-xl text-gray-600'>
          {val.name}
          </Link>
        )
      })
    }
  </div>

 </div>
  );
};

export default Navbar;
