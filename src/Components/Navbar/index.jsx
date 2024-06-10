import { useState, useEffect, useRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FcShop } from 'react-icons/fc';
import { LuAlignJustify } from 'react-icons/lu';
import { FaShoppingCart } from 'react-icons/fa';
import { ShoppingCartContext } from '../../Context';
import ShoppingCart from '../ShoppingCart';
import './styles.css';

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4';

  // Sign Out
  const signOut = localStorage.getItem('sign-out');
  const parsedSignOut = JSON.parse(signOut);
  const isUserSignOut = context.signOut || parsedSignOut;

  // Account
  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);

  // Has an account
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = parsedAccount
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const Links = [
    { name: 'All', link: '/' },
    { name: 'Clothes', link: '/clothes' },
    { name: 'Electronics', link: '/electronics' },
    { name: 'Jewelery', link: '/jewelery' },
    { name: 'Others', link: '/others' },
  ];
  let User = [
    { name: 'My Orders', link: '/my-orders' },
    { name: 'My Account', link: '/my-account' },
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

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem('sign-out', stringifiedSignOut);
    context.setSignOut(true);
    closeMenu();
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
    <nav
      className={`flex items-center fixed z-10 top-0 w-full min-w-[360px] py-2 px-8 text-sm font-light bg-white shadow-md ${
        isMenuOpen && 'z-30'
      }`}
    >
      <div className="lg:hidden justify-between flex items-center w-full lg:w-auto">
        <div className="flex items-center">
          <FcShop size={30} />
          <NavLink to="/" className="font-semibold text-lg ml-2">
            Shopi
          </NavLink>
        </div>

        <div className="flex gap-3 items-center">
          <button className="lg:hidden text-xl" onClick={toggleMenu}>
            <LuAlignJustify />
          </button>
          <ShoppingCart />
        </div>
      </div>
      <div
        ref={menuRef}
        className={`flex lg:flex lg:justify-between lg:items-center gap-10 fixed lg:static bg-white lg:bg-transparent w-full shadow-md lg:shadow-none ${
          isMenuOpen ? 'menu-open left-0 pl-8' : 'hidden'
        }`}
      >
        <ul className="flex flex-col lg:flex-row lg:gap-8 lg:items-center">
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
              <NavLink
                to={link.link}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col lg:flex-row lg:gap-8 lg:items-center">
          {hasUserAnAccount && !isUserSignOut && (
            <>
              <li className="lg:m-0 mt-5 mb-5 ml-2">{email}</li>
              {User.map((link) => (
                <li className="lg:m-0 mt-5 mb-5 ml-2" key={link.name}>
                  <NavLink
                    to={link.link}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </>
          )}
          <li className="lg:m-0 mt-5 mb-5 ml-2">
            <NavLink
              to="/sign-in"
              onClick={() => handleSignOut()}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {hasUserAnAccount && !isUserSignOut ? 'Sign out' : 'Sign in'}
            </NavLink>
          </li>
          {!isMenuOpen && <ShoppingCart />}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
