"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Dropdown from '@/components/product_card/DropDown'

const ProductDetails = () => {
  let width = 0
    const [selectedOption, setSelectedOption] = useState("")
    const [hideDetails, sethideDetails] = useState(null)
    const [hideBtn, setHideBtn] = useState(null)
    const [data, setData] = useState({
      title: "YADU Natural Sulphurless double refined Sugar",
      details: "New with box: A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original box or bag) and/or with the original tags attached New with box: A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original box or bag) and/or with the original tags attached",
      originalPrice: 300,
      discountedPrice: 200,
      weightVariations:  [
          { value: "1", label: "1 kg" },
          { value: "2", label: "2 kg" },
          { value: "3", label: "3 kg" },
          // Add more options as needed based on your data
        ],
      quantity: 1,
      images: [ "/assets/product.svg", "/assets/p1.svg",  "/assets/p3.svg", "/assets/p4.svg", "/assets/p5.svg" ],
      mainImg: "/assets/product.svg",
  })

   const increment = (sign) => {
    if (sign==="+") {
      setData({...data, quantity: data.quantity+1})
    }else if(sign==="-"){
      if(data.quantity>1){
        setData({...data, quantity: data.quantity-1})
      }else{

      }
    }
   }

    const handleSelection = (selectedValue) => {
        setSelectedOption(selectedValue);
      };

    const handleChangeImg = (i) => {
      setData({...data, mainImg: data.images[i]})
    }

    const changeClasses = (prev) => {
      sethideDetails(!prev)
    }

    useEffect(()=>{
      window.addEventListener('resize', ()=> {
        width = window.innerWidth
        if(window.innerWidth < 769){
          sethideDetails(true)
          setHideBtn(false)
          console.log("I am small");
        }else{
          console.log("I am Large");
          sethideDetails(false)
          setHideBtn(true)
        }
        })

      if (window.innerWidth<769) {
        console.log("main choti bachi hun");
        
        sethideDetails(true)
        setHideBtn(false)
      }else{
        sethideDetails(false)
        setHideBtn(true)
      }
    },[])

  return (
    <>
    <div className='product_details'>
      <div className="pics">
        <div className="pics_group">
            {data.images.map((ele, i)=>{
                return <Image 
                key={i}
                src={ele}
                height={60}
                width={60}
                onClick={()=>handleChangeImg(i)}
                />
            })}
        </div>
        <div className="main_pic">
            <Image 
            src={data.mainImg}
            height={370}
            width={370}
            />
        </div>
      </div>
      <div className="details">
        <h2>{data.title}</h2>
        <p className='about_txt'>
          About Product 
          <Image 
          src="/assets/rightArrowWithoutTail.svg"
          width={100}
          height={250}
          alt='about'
          className={`${hideBtn?"hidden":"inline_block"}`}
          onClick={()=>changeClasses(hideDetails)}
          />
        </p>
        <p className={`${hideDetails?"hidden":"inline_block"}  description`}>{data.details}</p>
        <div className='quantity_container'>

        <div>
        <p className='quantity_txt'>Quantity</p>
        <Dropdown options={data.weightVariations} onSelect={handleSelection}/>
        </div>
        <div className='quantity'>
            <button className='btn_quantity' onClick={()=>increment("-")}>-</button>
            <p>{data.quantity}</p>
            <button className='btn_quantity' onClick={()=>increment("+")}>+</button>
        </div>
        <div className='price'>
            <p>{data.originalPrice}&#8377;</p>
            <p>{data.discountedPrice}&#8377;</p>
        </div> 
        </div>
            <button className='btn_cart'>Add to Cart</button>
      </div>
    </div>
    </>
  )
}

export default ProductDetails
