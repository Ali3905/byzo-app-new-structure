"use client"

import React, { useEffect, useState } from 'react'
import Dropdown from '@/components/header/Dropdown'
import Image from 'next/image'
import Link from 'next/link'

const Cart = () => {
    const [selectedOption, setSelectedOption] = useState("")
    const [smallScreen, setSmallScrenn] = useState(null)

    const [data, setData] = useState({
        items: [{
            title: "YADU Natural Sulphurless double refined Sugar",
            // details: "New with box: A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original box or bag) and/or with the original tags attached New with box: A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original box or bag) and/or with the original tags attached",
            originalPrice: 300,
            discountedPrice: 200,
            weightVariations:  [
                { value: "1", label: "1 kg" },
                { value: "2", label: "2 kg" },
                { value: "3", label: "3 kg" },
                // Add more options as needed based on your data
              ],
            quantity: 5,
            // images: [ "/product.svg", "/p1.svg",  "/p3.svg", "/p4.svg", "/p5.svg" ],
            mainImg: "/products/product.png",
        }, {
            title: "YADU Natural Sulphurless double refined Sugar",
            // details: "New with box: A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original box or bag) and/or with the original tags attached New with box: A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original box or bag) and/or with the original tags attached",
            originalPrice: 300,
            discountedPrice: 200,
            weightVariations:  [
                { value: "1", label: "1 kg" },
                { value: "2", label: "2 kg" },
                { value: "3", label: "3 kg" },
                // Add more options as needed based on your data
              ],
            quantity: 5,
            // images: [ "/product.svg", "/p1.svg",  "/p3.svg", "/p4.svg", "/p5.svg" ],
            mainImg: "/products/product.png",
        },{
            title: "YADU Natural Sulphurless double refined Sugar",
            // details: "New with box: A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original box or bag) and/or with the original tags attached New with box: A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original box or bag) and/or with the original tags attached",
            originalPrice: 300,
            discountedPrice: 200,
            weightVariations:  [
                { value: "1", label: "1 kg" },
                { value: "2", label: "2 kg" },
                { value: "3", label: "3 kg" },
                // Add more options as needed based on your data
              ],
            quantity: 5,
            // images: [ "/product.svg", "/p1.svg",  "/p3.svg", "/p4.svg", "/p5.svg" ],
            mainImg: "/products/product.png",
        },],
        no_of_items: 0,
        items_total: 0,
        handling_charge: 0,
        delivery_charge: 0,
        total_discount: 0,
        to_pay: 0,
        shipping_address: "663x street no.8 PC road near 663x street no.8 PC road  Kanyakumari....   ",
        delivery_partner_tip: 0
    })

    const handleSelection = (selectedValue) => {
        setSelectedOption(selectedValue);
      };

      const increment = (sign, i) => {
        const newData = { ...data };
        const item = newData.items[i];

        if (sign === "+") {
            item.quantity += 1;
        } else if (sign === "-") {
            if (item.quantity > 0) {
                item.quantity -= 1;
            }
        }

        // Update total and other calculations here if needed

        setData(newData);
       }

       useEffect(()=>{
        window.addEventListener('resize', ()=> {
          if(window.innerWidth < 769){
            setSmallScrenn(true)
          }else{
            setSmallScrenn(false)
          }
          })
  
        if (smallScreen) {
          setSmallScrenn(true)
        }else{
          setSmallScrenn(false)
        }
      },[])

  return (
    <>
    {smallScreen && <ul className='small_screen_nav'>
            <li>
                <Image 
                src="/rightArrowWithoutTail.svg"
                width={25}
                height={35}
                />
            </li>
            <li>
                Cart(7 items)
            </li>
            <li>
                Empty Cart
            </li>
        </ul>}
    <div className='cart'>
        {!smallScreen && <h2>My Cart</h2>}
        <div className='cart_parent'>
            <div className="cart_child_left">
            {smallScreen && <div className="cart_discount_alert">
                    <p>You Saved 20 in this order</p>
                </div>}
                <div className='cart_items_parent'>
                    <div className='cart_items_head'>
                        <p>{data.items.length} items selected</p>
                        <p>&#8377;100</p>
                        <Image 
                        src="/assets/trash.svg"
                        alt='delete'
                        height={25}
                        width={25}
                        />
                    </div>
                    {data.items.map((ele, i)=>{
                        return <div className="cart_item" key={i}>
                        <div className="cart_item_img">
                            <Image 
                            src={ele.mainImg}
                            alt='product'
                            height={80}
                            width={80}
                            />
                        </div>
                        <div className="cart_item_details">
                            <h5>{ele.title}</h5>
                            <div className="cart_item_weight">
                                <p>Quantity</p>
                                <Dropdown options={ele.weightVariations} onSelect={handleSelection}/>
                            </div>
                        </div>
                        <div className="price_quantity">

                        <div className="cart_item_quantity">
                            <button className='btn_quantity' onClick={()=>increment("-", i)}>-</button>
                            <p>{data.items[i].quantity}</p>
                            <button className='btn_quantity' onClick={()=>increment("+", i)}>+</button>
                        </div>
                        <div className="cart_item_price">
                            <p>&#8377;{ele.originalPrice}</p>
                            <p>&#8377;{ele.discountedPrice}</p>
                        </div>
                        </div>
                        <Image
                        src="/assets/trash.svg"
                        alt='delete'
                        height={25}
                        width={25}
                        className='trash_img'
                        />
                    </div>
                        
                    })}
                </div>
                {!smallScreen && <div className="cart_instructions_parent">
                <h4>Delivery Instructions</h4>
                <div className="cart_instructions">
                    <div>
                        <Image 
                        src="/assets/door.svg"
                        alt='door'
                        width={75}
                        height={75}
                        />
                        <div className='cart_instructions_txt'>
                            <p>No Contact Delivery</p>
                            <p>Delivery partner will leave your order at the door</p>
                        </div>
                    </div>
                    <div className='cart_instructions_txt'>
                        <Image 
                        src="/assets/pet.svg"
                        alt='pet'
                        width={75}
                        height={75}
                        />
                        <div>
                            <p>Beware of pets</p>
                            <p>Delivery partner will leave your order at the door</p>
                        </div>
                    </div>
                </div>
                </div>}

                <div className="cart_delivery_partner_tip_parent">
                    <h4>Delivery Partner Tip</h4>
                    <p>Entire amount will be shared to your delivery partner</p>
                    <div className="cart_tip_option_parent">
                        <span className='cart_tip_option'>
                            <Image 
                            src="/assets/INRcoin.svg"
                            width={30}
                            height={30}
                            />
                            <p>&#8377;10</p>
                        </span>
                        <span className='cart_tip_option'>
                            <Image 
                            src="/assets/INRcoin.svg"
                            width={30}
                            height={30}
                            />
                            <p>&#8377;20</p>
                        </span>
                        <span className='cart_tip_option'>
                            <Image 
                            src="/assets/INRcoin.svg"
                            width={30}
                            height={30}
                            />
                            <p>&#8377;30</p>
                        </span>
                        <p className="custom_option">Add custom</p>  
                    </div>
                    
                </div>

            </div>
            <div className="cart_child_right">

                <div className='cart_avail_offer'>
                    <Image 
                    src="/assets/discount.svg"
                    alt='discount'
                    width={37}
                    height={37}
                    />
                    <p className='cart_avail_offer_txt'>Avail Offers and Coupons</p>
                    <Image 
                    src="/assets/rightArrowWithoutTail.svg"
                    alt='avail'
                    width={24}
                    height={24}
                    />
                </div>
                {!smallScreen && <div className="cart_discount_alert">
                    <p>You Saved 20 in this order</p>
                </div>}

                <div className="cart_bill_container">
                    <div>
                        <p>Item total <br /> <span className='cart_bill_sm_txt'>for 5 items</span></p>
                        <p>&#8377;1000.50</p>
                    </div>
                    <div>
                        <p>Handling Charge</p>
                        <span><p>&#8377;15</p><p>&#8377;5</p></span>
                    </div>
                    <div>
                        <p>Delivery Fee</p>
                        <span><p>&#8377;40</p><p>&#8377;0</p></span>
                    </div>
                    <span></span>
                    <div className='cart_bill_total_discount'>
                        <p>Total Discount</p>
                        <p>&#8377;50</p>
                    </div>
                    <div className='cart_bill_to_pay'>
                        <p>To Pay</p>
                        <p>&#8377;1040.40</p>
                    </div>
                    <p>You can choose a shipping method in the next step</p>
                </div>
                {smallScreen && <div className="cart_instructions_parent">
                <h4>Delivery Instructions</h4>
                <div className="cart_instructions">
                    <div>
                        <Image 
                        src="/door.svg"
                        alt='door'
                        width={75}
                        height={75}
                        />
                        <div className='cart_instructions_txt'>
                            <p>No Contact Delivery</p>
                            <p>Delivery partner will leave your order at the door</p>
                        </div>
                    </div>
                    <div className='cart_instructions_txt'>
                        <Image 
                        src="/pet.svg"
                        alt='pet'
                        width={75}
                        height={75}
                        />
                        <div>
                            <p>Beware of pets</p>
                            <p>Delivery partner will leave your order at the door</p>
                        </div>
                    </div>
                </div>
                </div>}
                <div className="cart_address">
                    <h6>Home</h6>
                    <p>{data.shipping_address}</p>
                    <Link href="/cart">Change Address</Link>
                    <button>Proceed to Checkout</button>
                </div>

            </div>
        </div>
      
    </div>
    </>
  )
}

export default Cart
