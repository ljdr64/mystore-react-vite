import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FcShop } from 'react-icons/fc';
import { LuAlignJustify } from 'react-icons/lu';

const Navbar = () => {
  const Links = [
    { name: 'Clothes', link: '/clothes' },
    { name: 'Electronics', link: '/electronics' },
    { name: 'Furnitures', link: '/furnitures' },
    { name: 'Toys', link: '/toys' },
    { name: 'Others', link: '/others' },
  ];
  const User = [
    { name: 'MyAccount', link: '/my-account' },
    { name: 'SignIn', link: '/sign-in' },
  ];
  const email = 'laure@mail.com';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <nav className="flex items-center fixed z-10 top-0 w-full min-w-72 py-2 px-8 text-sm font-light bg-white shadow-md">
      <div className="lg:hidden justify-between flex items-center w-full lg:w-auto">
        <div className="flex items-center">
          <FcShop size={30} />
          <NavLink to="/" className="font-semibold text-lg ml-2">
            Shopi
          </NavLink>
        </div>
        <button className="lg:hidden text-xl" onClick={toggleMenu}>
          <LuAlignJustify />
        </button>
      </div>
      <div
        ref={menuRef}
        className={`flex lg:flex lg:justify-between lg:items-center gap-10 fixed lg:static bg-white lg:bg-transparent w-full shadow-md lg:shadow-none ${
          isMenuOpen ? 'top-12 left-0 pl-8' : 'hidden'
        }`}
      >
        <ul className="flex flex-col lg:flex-row lg:gap-10 lg:items-center">
          <li className="hidden lg:flex items-center w-full lg:w-auto">
            <div className="flex items-center">
              <FcShop size={30} />
              <NavLink to="/" className="font-semibold text-lg ml-2">
                Shopi
              </NavLink>
            </div>
            <button className="lg:hidden text-xl" onClick={toggleMenu}>
              <LuAlignJustify />
            </button>
          </li>
          {Links.map((link) => (
            <li className="lg:m-0 mt-5 mb-5 ml-2" key={link.name}>
              <NavLink to={link.link} onClick={closeMenu}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col lg:flex-row lg:gap-10 lg:items-center">
          <li className="lg:m-0 mt-5 mb-5 ml-2">{email}</li>
          {User.map((link) => (
            <li className="lg:m-0 mt-5 mb-5 ml-2" key={link.name}>
              <NavLink to={link.link} onClick={closeMenu}>
                {link.name}
              </NavLink>
            </li>
          ))}
          {!isMenuOpen && <li className="lg:m-0 mt-5 mb-5 ml-2">🛒0</li>}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
