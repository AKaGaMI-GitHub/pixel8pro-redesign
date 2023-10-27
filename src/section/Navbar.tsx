import { useState } from 'react'
import { Link } from "react-router-dom"
import { navbarData } from "../context/Context"
import GoogleLogo from "../assets/icon/google_logo.webp"
import Avatar from "../assets/icon/avatar.png";
import { LuAlignJustify } from "react-icons/lu"
import { HiOutlineSearch } from "react-icons/hi"
import { MdShoppingCart } from "react-icons/md"
import { FiX } from "react-icons/fi"

export default function Navbar() {

  type searchData = string;

  const setSearch = useState<searchData>();
  const [humberger, setHumberger] = useState<boolean>(false);
  
  const humbergerMenu = () => {
    if (humberger == true) {
      setHumberger(false)
    } else {
      setHumberger(true)
    }
  }

  return (
    <header className="sticky top-0 flex justify-center bg-white shadow-sm shadow-gray-300/50" style={{ zIndex: 99999 }}>
      <div className="flex items-center justify-between w-[95rem] px-4 py-4 md:px-8">
        <div className="flex flex-row items-center">
          {humberger ? (
            <FiX className="block w-5 h-full text-[#343434] mr-2 md:hidden" onClick={() => humbergerMenu()}/>
            ) : (  
            <LuAlignJustify className="block w-5 h-full text-[#343434] mr-2 md:hidden" onClick={() => humbergerMenu()}/>
          )}
          <img src={GoogleLogo} className="w-7 md:w-10 rounded-full mr-[20px]" alt="logo-google"/>
          <div className="hidden md:block">
            {navbarData.map((index) => (
              <Link to={index.link} className="text-[#343434] mx-2 text-[14px] hover:text-[#1A73E8]" key={index.id}>{index.nameList}</Link>
            ))}
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="bg-[#EFEFEF] text-[#505050] rounded-md py-2 md:py-2.5 px-4 flex flex-row items-center">
              <HiOutlineSearch className="text-[18px] md:text-[20px]"/>
              <input placeholder="Search..." onChange={() => {setSearch}} className="w-36 md:w-56 bg-[#EFEFEF] text-[14px] outline-none ml-2"></input>
          </div>
          <Link to={'https://store.google.com/us/cart?hl=en-US'}>
            <MdShoppingCart className="text-[#343434] text-[24px] md:text-[26px] mx-3 md:mx-4"/>
          </Link>
          <img src={Avatar} alt="logo-profile" className='w-8 md:w-10'/>
        </div>
      </div>
      <div className={`absolute top-16 flex flex-col w-full h-80 p-4 bg-white shadow shadow-gray-200/70 ${humberger ? `block` : `hidden`}`} style={{ zIndex: 999999 }} id="menuMobile">
        {navbarData.map((index) => (
          <Link to={index.link} className="text-[#343434] my-2 text-[14px]" key={index.id}>{index.nameList}</Link>
        ))}
      </div>
    </header>
  )
}
