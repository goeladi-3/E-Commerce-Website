import React from 'react'
import { assets } from "../assets/frontend_assets/assets.js";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 mb-4 text-sm">
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Discover premium fashion crafted for comfort, quality, and style. We bring you the latest trends with exceptional customer service, secure shopping, and fast delivery. Shop with confidence and redefine your wardrobe with timeless pieces.
          </p>
          
          <div className="flex items-center gap-4 mt-6">
            <div className="w-11 h-11 rounded-full border border-gray-300 hover:border-black hover:bg-gray-300 transition-all duration-300 flex items-center justify-center cursor-pointer">
              <img
                src={assets.facebook_icon}
                alt="Facebook"
                className="w-5 h-5 brightness-0"
              />
            </div>

            <div className="w-11 h-11 rounded-full border border-gray-300 hover:border-black hover:bg-gray-300 transition-all duration-300 flex items-center justify-center cursor-pointer">
              <img
                src={assets.twitter_icon}
                alt="Twitter"
                className="w-5 h-5 brightness-0"
              />
            </div>

            <div className="w-11 h-11 rounded-full border border-gray-300 hover:border-black hover:bg-gray-300 transition-all duration-300 flex items-center justify-center cursor-pointer">
              <img
                src={assets.linkedin_icon}
                alt="LinkedIn"
                className="w-5 h-5 brightness-0"
              />
            </div>

          </div>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>📞 +91 6289233962</li>
            <li>📧 contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="border-gray-200" />
        <p className='py-5 text-sm text-center'>
          © 2026 Forever.com. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
