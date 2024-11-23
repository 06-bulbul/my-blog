import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <>
        <Nav />
        <div className="h-[90vh] md:h-[120vh] flex flex-col items-center justify-center bg-center" 
        style={{ backgroundImage: 'url("https://t4.ftcdn.net/jpg/03/48/34/83/360_F_348348330_QrvBjavPIcKKN6SxTYakAfIZljM0kKi0.jpg")'}}>
            <div className='md:w-1/3 w-3/4 bg-white p-7 m-3 rounded-lg'>
            <h1 className="text-4xl text-teal-500 text-center p-2 font-bold">Contact Us</h1>
            
            <form className="flex flex-col mt-3 space-y-4">
                <label className="text-lg text-gray-700">Name</label>
                <input
                className="p-3 bg-[#f3f2f2] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                type="text"
                placeholder="Enter your name..."
                />
                
                <label className="text-lg text-gray-700">Email</label>
                <input
                className="p-3 bg-[#f3f2f2] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                type="email"
                placeholder="Enter your email..."
                />

                <label className="text-lg text-gray-700">Message</label>
                <textarea
                className="p-3 bg-[#f3f2f2] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your message..."
                rows="5"
                ></textarea>
                
                <button
                className="py-3 bg-teal-500 text-white rounded-lg cursor-pointer hover:bg-teal-600 transition duration-200"
                type="submit"
                >
                Send Message
                </button>
            </form>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Contact