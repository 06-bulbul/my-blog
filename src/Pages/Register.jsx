import React from 'react'
import Nav from '../Components/Nav'
import { NavLink } from 'react-router-dom';
import Footer from '../Components/Footer'

const Register = () => {
  return (
    <>
        <Nav />
        <div className="h-[80vh] md:h-[90vh] flex flex-col items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: 'url("https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")' }}>
            <div className='md:w-1/3 w-3/4 bg-white p-7 m-3 rounded-lg'>
            <h1 className="text-5xl text-teal-500 text-center p-2 font-bold">Register</h1>
            <p className='text-center text-[1rem]'>Already have an account? <span className='hover:underline'><NavLink to={`/Login`}>Login</NavLink></span></p>
            <form className="flex flex-col mt-6 space-y-4">
                <label className="text-lg">Username</label>
                <input
                className="p-3 bg-[#f3f2f2] border-none rounded-lg focus:outline-teal-500"
                type="text"
                placeholder="Enter your username..."
                />
                
                <label className="text-lg">Email</label>
                <input
                className="p-3 bg-[#f3f2f2] border-none rounded-lg focus:outline-teal-500"
                type="email"
                placeholder="Enter your email..."
                />
                
                <label className="text-lg">Password</label>
                <input
                className="p-3 bg-[#f3f2f2] border-none rounded-lg focus:outline-teal-500"
                type="password"
                placeholder="Enter your password..."
                />
                
                <button
                className="mt-4 py-3 bg-teal-500 text-white rounded-lg cursor-pointer hover:bg-teal-600"
                type="submit"
                >
                Register
                </button>
            </form>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Register