import React from 'react';
import Nav from '../Components/Nav'
import Footer from '../Components/Footer';

const About = () => {
  return (
    <>
      <Nav />
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-8">
          <h1 className="text-3xl text-teal-500 text-center p-2 m-3 font-bold">About Our Blog</h1>
          <p className="text-[1rem] text-gray-700">
            Welcome to our official company blog! Here, we share insights, innovations, and the latest trends in
            the industry. Our blog is the place where we connect with our community, offer expertise, and
            explore how we can solve real-world problems with our products and services.
          </p>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-8">
          <h1 className="text-3xl text-teal-500 text-center p-2 m-3 font-bold">Company Overview</h1>
          <p className="text-[1rem] text-gray-700">
            Our company has been at the forefront of innovation for over two decades. We specialize in providing
            world-class technology solutions that empower businesses to thrive in the digital age. Through our products, 
            we aim to simplify complex challenges and help our customers succeed.
          </p>
          <p className="text-[1rem] text-gray-700 mt-4">
            Our mission is to create products that not only solve today's problems but also anticipate the challenges
            of tomorrow. The blog is an extension of this philosophy – to inform, inspire, and offer practical advice
            to those who want to stay ahead in the fast-paced world of technology.
          </p>
        </div>

        <div className="bg-gray-100 p-5 mb-8 rounded-lg shadow-md">
          <h1 className="text-3xl text-teal-500 text-center p-2 m-3 font-bold">Our Blog's Mission</h1>
          <p className="text-[1rem] text-gray-700">
            Our blog is dedicated to bringing you the most relevant and up-to-date content in the tech industry. 
            From insightful product updates and case studies to deep dives into industry trends, we strive to provide content
            that adds value to our readers’ personal and professional growth.
          </p>
          <p className="text-[1rem] text-gray-700 mt-4">
            Whether you're a business owner, a developer, or a technology enthusiast, our content will help you understand 
            the rapidly changing landscape of technology and how to leverage it to achieve your goals.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center bg-gray-100 p-8 m-3 rounded-lg shadow-md mb-8">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img 
              src="https://thumbs.dreamstime.com/b/diverse-business-team-office-cartoon-style-ready-work-concept-startup-enterprise-generative-ai-stock-272693572.jpg" 
              alt="Our Team"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h1 className="text-3xl text-teal-500 text-center p-2 m-3 font-bold">Meet Our Team</h1>
            <p className="text-lg text-gray-700 mb-4">
              Our team is composed of passionate individuals who bring unique perspectives and expertise to every
              project we undertake. From developers and engineers to marketing and content creators, each member plays
              a vital role in our company’s success and the growth of our blog.
            </p>
            <p className="text-lg text-gray-700">
              Together, we share a vision to provide our readers with the best content available, ensuring that our
              blog serves as a trusted resource for those seeking expert advice in the ever-changing world of technology.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-8">
          <h1 className="text-3xl text-teal-500 text-center p-2 m-3 font-bold">Join Our Community</h1>
          <p className="text-lg text-gray-700 mb-4">
            We encourage open dialogue and engagement with our readers. Our blog is not just a platform to share information; 
            it's a place where we can connect with our audience, answer questions, and discuss ideas.
          </p>
          <p className="text-lg text-gray-700">
            Stay tuned for our upcoming posts, and feel free to reach out to us through our social media channels or leave a comment
            on our blog posts. We value your feedback and look forward to growing this community with you!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
