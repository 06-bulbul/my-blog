import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

const Write = () => {
  return (
    <>
        <Nav />
        <h1 className="text-4xl text-teal-500 text-center p-2 mt-7 font-bold">Write a Blog</h1>
        <div className="mt-8 mb-8 mx-auto ml-[10%] mr-[10%]"> 
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden">
                <img
                src="https://studybay.com/storage/upload/how_to_write_a_review_paper.jpg"
                alt="card-image"
                className="w-full h-40 md:h-64 object-cover rounded-t-lg"
                />
                <form className="px-6 py-8">
                    <div className="mb-6">
                        <label htmlFor="fileInput" className="cursor-pointer text-3xl text-teal-500 hover:text-teal-700">
                        <i className="fas fa-plus"></i>
                        </label>
                        <input id="fileInput" type="file" className="hidden" />
                    </div>

                    <div className="mb-6">
                        <input
                        className="w-full text-2xl p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-teal-500"
                        placeholder="Enter the title"
                        type="text"
                        autoFocus={true}
                        />
                    </div>

                    <div className="mb-6">
                        <textarea
                        className="w-full text-lg p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-teal-500"
                        placeholder="Tell your story..."
                        rows="6"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                        className="text-white bg-teal-500 hover:bg-teal-600 py-2 px-6 rounded-lg text-lg font-semibold transition-colors duration-300"
                        type="submit"
                        >
                        Publish
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Write