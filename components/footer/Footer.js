import React from 'react'
import Link  from "next/link"


const Footer = () => {
  return (
    <footer className='footer'>
      <h3>Categories</h3>
      <div className='footer_top'>
        <ul>
            <li><Link href="#">Paan Corner</Link ></li>
            <li><Link href="#">Fruits & Vegetable</Link ></li>
            <li><Link href="#">Homegrown Brands</Link ></li>
            <li><Link href="#">Breakfast & Sauces</Link ></li>
            <li><Link href="#">Cleaning Essentials</Link ></li>
        </ul>
        <ul>
            <li><Link href="#">Paan Corner</Link ></li>
            <li><Link href="#">Fruits & Vegetable</Link ></li>
            <li><Link href="#">Homegrown Brands</Link ></li>
            <li><Link href="#">Breakfast & Sauces</Link ></li>
            <li><Link href="#">Cleaning Essentials</Link ></li>
        </ul>
        <ul>
            <li><Link href="#">Paan Corner</Link ></li>
            <li><Link href="#">Fruits & Vegetable</Link ></li>
            <li><Link href="#">Homegrown Brands</Link ></li>
            <li><Link href="#">Breakfast & Sauces</Link ></li>
            <li><Link href="#">Cleaning Essentials</Link ></li>
        </ul>
        <ul>
            <li><Link href="#">Paan Corner</Link ></li>
            <li><Link href="#">Fruits & Vegetable</Link ></li>
            <li><Link href="#">Homegrown Brands</Link ></li>
            <li><Link href="#">Breakfast & Sauces</Link ></li>
            <li><Link href="#">Cleaning Essentials</Link ></li>
        </ul>
        <ul>
            <li><Link href="#">Paan Corner</Link ></li>
            <li><Link href="#">Fruits & Vegetable</Link ></li>
            <li><Link href="#">Homegrown Brands</Link ></li>
            <li><Link href="#">Breakfast & Sauces</Link ></li>
            <li><Link href="#">Cleaning Essentials</Link ></li>
        </ul>
        
      </div>

      <div className='footer_bottom'>
        <div className="socials">
            <img src="/assets/logo.svg" alt="logo" id='logo'/>
            <div>
                <img src="assets/Linkedin.svg" alt="Linkedin" />
                <img src="assets/Instagram.svg" alt="instagram" />
                <img src="/assets/Twitter.svg" alt="twitter" />
                <img src="assets/Whatsapp.svg" alt="watsapp" />
                <img src="assets/Facebook.svg" alt="facebook" />
            </div>
        </div>
        <ul>
            <li><Link href="#">Home</Link ></li>
            <li><Link href="#">Delivery Areas</Link ></li>
            <li><Link href="#">Careers</Link ></li>
            <li><Link href="#">Customer Support</Link ></li>
            <li><Link href="#">Press</Link ></li>
        </ul>
        <ul>
            <li><Link href="#">Privacy Policy</Link ></li>
            <li><Link href="#">Terms of Use</Link ></li>
            <li><Link href="#">Responsible Disclosure Policy</Link ></li>
        </ul>
        <div className="downloads">
            <h3>Download App</h3>
            <div  className='downloads_child'>
                <img src="/assets/Group 427320822.svg" alt="google" />
                <span>
                    <img src="/assets/getiton.svg" alt="app" id='getit'/>
                    <img src="/assets/googleplay.svg" alt="app" />
                </span>
              
            </div>
            <div className='downloads_child'>
                <img src="/assets/_Group_.svg" alt="app" />
                <span>
                    <img src="/assets/download.svg" alt="app" />
                    <img src="/assets/app.svg" alt="app" />
                </span>
            </div>
        </div>
        
      </div>

    </footer>
  )
}

export default Footer
