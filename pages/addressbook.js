import React from 'react'
import Image from 'next/image'

const AddressBook = () => {
  return (
    <div className='address_book'>
      <Image
      src="/assets/location.png"
      alt='location'
      width={200}
      height={200}
      />
      <h3>Sit Tight! We’re Coming Soon!</h3>
      <p>Our team is working tirelessly to bring 10 minute deliveries to your location</p>
      <div className="socials">
            <Image width={35} height={35} src="/assets/Linkedin.svg" alt="Linkedin" />
            <Image width={35} height={35} src="/assets/Instagram.svg" alt="instagram" />
            <Image width={35} height={35} src="/assets/Twitter.svg" alt="twitter" />
            <Image width={35} height={35} src="/assets/Whatsapp.svg" alt="watsapp" />
            <Image width={35} height={35} src="/assets/Facebook.svg" alt="facebook" />
        </div>
    </div>
  )
}

export default AddressBook
