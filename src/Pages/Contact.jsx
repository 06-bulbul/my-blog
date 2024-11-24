import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cacb3383-3400-4f20-a270-61ad04ebbf31");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
        <Nav />
        <div className="h-[90vh] md:h-[120vh] flex flex-col items-center justify-center bg-center" 
        style={{ backgroundImage: 'url("https://t4.ftcdn.net/jpg/03/48/34/83/360_F_348348330_QrvBjavPIcKKN6SxTYakAfIZljM0kKi0.jpg")'}}>
            <div className='md:w-1/3 w-3/4 bg-white p-7 m-3 rounded-lg'>
            <h1 className="text-4xl text-teal-500 text-center p-2 font-bold">Contact Us</h1>
            
            <form className="flex flex-col mt-3 space-y-4" onSubmit={onSubmit}>
                <label className="text-lg text-gray-700">Name</label>
                <input
                className="p-3 bg-[#f3f2f2] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name..."
                />
                
                <label className="text-lg text-gray-700">Email</label>
                <input
                className="p-3 bg-[#f3f2f2] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email..."
                />

                <label className="text-lg text-gray-700">Message</label>
                <textarea
                className="p-3 bg-[#f3f2f2] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your message..."
                rows="5"
                id="message"
                name="message"
                required
                ></textarea>
                
                <button
                className="py-3 bg-teal-500 text-white rounded-lg cursor-pointer hover:bg-teal-600 transition duration-200"
                type="submit"
                >
                Send Message
                </button>
            </form>

            <div className="mt-4 text-center text-gray-700">{result}</div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Contact
