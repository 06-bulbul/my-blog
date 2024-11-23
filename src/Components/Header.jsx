import React from 'react'

const Header = () => {
  return (
    <>
        <div className="mt-5 md:mt-[60px]">
            <div className="flex flex-col items-center text-[#444]">
                <span className="absolute top-[16%] md:top-[24%] text-[20px]">Fresh 🌱 Perspectives</span>
                <span className="absolute top-[18%] md:top-[25%] text-[100px] font-bold">BLOG</span>
            </div>
            <img
                className="w-[100%] h-[450px] mt-[100px] object-cover"
                src="https://images.unsplash.com/photo-1551651767-d5ffbdd04b83?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVubWFya3xlbnwwfHwwfHx8MA%3D%3D"
                alt=""
            />
        </div>
    </>
  )
}

export default Header