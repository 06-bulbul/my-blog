import React, { useState } from 'react'
import { TiThMenuOutline } from "react-icons/ti"
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    {
      name: "HOME",
      target: ""
    },
    {
      name: "ABOUT",
      target: "about"
    },
    {
      name: "CONTACT",
      target: "contact"
    },
    {
      name: "WRITE",
      target: "write"
    },
  ];

  return (
    <>
    <header className="p-[10px] pb-1">
      <div className='flex p-3 shadow-lg'>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-2"
          >
          <TiThMenuOutline size={30} />
          </button>
        </div>

        <nav className="hidden lg:flex list-none gap-12 ml-[32%] text-[16px] font-semibold">
            {links.map((link, index) => (
              <NavLink
                key={index}
                className="cursor-pointer flex items-center gap-2 hover:border-b-2 hover:border-teal-500 hover:text-teal-500"
                to={`/${link.target}`}
              >
                {link.icon}
                <li>{link.name}</li>
              </NavLink>
            ))}
        </nav>
        <div className='ml-auto mr-[20px]'> 
          <NavLink to="/Register">
            <img
              className="w-[40px] h-[40px] rounded-full cursor-pointer"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </NavLink>
        </div>
        <div>

          {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:hidden`}
        >
          <nav className="list-none flex text-[12px] font-semibold">
            {links.map((link, index) => (
              <NavLink
                key={index}
                className="cursor-pointer flex items-center gap-2 p-2 mb-4"
                to={`/${link.target}`}
                onClick={() => setIsMenuOpen(false)} 
              >
                {link.icon}
                <li>{link.name}</li>
              </NavLink>
            ))}
          </nav>
        </div>
        </div>
      </div>
      </header>
    </>
  )
}

export default Nav