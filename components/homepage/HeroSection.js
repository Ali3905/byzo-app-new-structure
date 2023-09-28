import Image from "next/image";
import React from "react";


const HeroSection = () => {
  return (
    <section className="hero_section">
      <div className="hero_left">
        <h1>
          Make Healthy life with <span>Quality </span>Products
        </h1>
        <p>
          Get Best quality and most delicious grocery in the world you can get
          on our website. Fresh grocery for your family everyday.
        </p>
        <div>
          <button>Shop Now</button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
            >
              <path
                d="M28.5 16C28.5 22.6274 23.1274 28 16.5 28C9.87258 28 4.5 22.6274 4.5 16C4.5 9.37258 9.87258 4 16.5 4C23.1274 4 28.5 9.37258 28.5 16Z"
                stroke="#418C51"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5021 15.1125C20.9472 15.4092 21.1697 15.5576 21.2473 15.7446C21.3151 15.9081 21.3151 16.0919 21.2473 16.2554C21.1697 16.4424 20.9472 16.5908 20.5021 16.8875L15.4917 20.2278C14.953 20.5869 14.6836 20.7665 14.4603 20.7531C14.2657 20.7415 14.0859 20.6453 13.9683 20.4899C13.8333 20.3114 13.8333 19.9877 13.8333 19.3402V12.6598C13.8333 12.0123 13.8333 11.6886 13.9683 11.5101C14.0859 11.3547 14.2657 11.2585 14.4603 11.2469C14.6836 11.2335 14.953 11.4131 15.4917 11.7722L20.5021 15.1125Z"
                stroke="#418C51"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Watch Video
          </button>
        </div>
        <div className="hero_downloads">
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
    </section>
  );
};

export default HeroSection;
