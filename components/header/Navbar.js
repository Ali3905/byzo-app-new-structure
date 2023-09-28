"use client"; // This is a client component

import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Image from 'next/image';

const NavBar = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
      // Add more options as needed based on your data
    ];
  
    const handleSelection = (selectedValue) => {
      setSelectedOption(selectedValue);
    };

  return (
    <nav className="nav">
        
      <img src="/logo/byzo-logo.jpg" alt="Logo"  />
      <Dropdown options={options} onSelect={handleSelection} />

      <label htmlFor="search" className='search'>

      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
        <g clip-path="url(#clip0_124_5439)">
        <path d="M19.0056 17.3283L14.5682 12.8909C15.6699 11.53 16.3332 9.80088 16.3332 7.91758C16.3332 3.55262 12.7815 0.000976562 8.41656 0.000976562C4.05161 0.000976562 0.5 3.55258 0.5 7.91754C0.5 12.2825 4.05164 15.8341 8.4166 15.8341C10.2999 15.8341 12.0291 15.1708 13.3899 14.0692L17.8273 18.5066C17.9898 18.6691 18.2031 18.7508 18.4165 18.7508C18.6298 18.7508 18.8432 18.6691 19.0057 18.5066C19.3315 18.1808 19.3315 17.6541 19.0056 17.3283ZM8.4166 14.1675C4.96996 14.1675 2.16666 11.3642 2.16666 7.91754C2.16666 4.47089 4.96996 1.6676 8.4166 1.6676C11.8632 1.6676 14.6665 4.47089 14.6665 7.91754C14.6665 11.3642 11.8632 14.1675 8.4166 14.1675Z" fill="#868889"/>
        </g>
        <defs>
        <clipPath id="clip0_124_5439">
        <rect width="20" height="20" fill="white" transform="translate(0.5)"/>
        </clipPath>
        </defs>
      </svg>

      <input type="text" name='search' id='search' placeholder='Search for Products..' />
      </label>
      <button className='btn_primary btn_login'>Log in</button>
      <button className='btn_primary btn_cart'>
        <img src="/icons/cart-shopping.svg" alt="cart" id='cart' />
        My Cart
      </button>
      <button className='btn_grid'>
        <Image
        src="/Grid.svg" 
        height={24}
        width={24}
        alt="grid" 
        id='grid' 
        />
      </button>

    </nav>
  )
}

export default NavBar
