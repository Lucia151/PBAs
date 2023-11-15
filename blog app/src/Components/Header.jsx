import React from 'react'
import  images  from "../Services/Logo.png"

function Header() {
  return (
    <section>
        <header className="container mx-auto px-5 flex justify-between py--4">
            <div className="">
            <img src={images} alt="logo" className="w-30 h-16" />
            </div>
            <div className="flex gap-x-9">
              <ul className="flex gap-x-5">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Article</a>
                </li>
                <li>
                  <a href="/">Write</a>
                </li>
                <li>
                  <a href="/">FAQs</a>
                </li>
              </ul>
              <button className="border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text">Sign in</button>
            </div>
        </header>
    </section>
  )
}

export default Header