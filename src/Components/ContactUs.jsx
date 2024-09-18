import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { contactbanner, whatsapp, phone, contactus, contactusdetails, gmail, mappointer, instagram, linkedin, twitter, facebook } from '../assets'; 
import { containerClasses, headingClasses, gridClasses, inputClasses, buttonClasses } from './ContactFormUtils.js';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  
  return (
    <>
      <div
        className={containerClasses}
        style={{
          backgroundImage: `url(${contactbanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '700px',
        }}
      >
        <h1 className={headingClasses} style={{ color: 'white' }} data-aos="fade-down" data-delay="400">
          Contact Us <br />{' '}
          <span className="text-xl font-semibold text-gray-200">
            Need Assistance? Contact Us at +91 9741134001
          </span>
        </h1>
      </div>
      
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto p-4 lg:p-8 space-y-8 lg:space-y-0 lg:space-x-32">
          {/* Form */}
          <div className="w-full lg:w-1/2 bg-gray-100 p-4 lg:p-8 rounded-lg">
            <form>
              <div className={gridClasses}>
                <div>
                  <label className="block text-gray-700 text-lg">First Name</label>
                  <input type="text" className={inputClasses} required />
                </div>
                <div>
                  <label className="block text-gray-700 text-lg">Last Name</label>
                  <input type="text" className={inputClasses} required />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-lg">Email</label>
                <input type="email" className={inputClasses} required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-lg">Phone Number</label>
                <input type="tel" className={inputClasses} required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-lg">Message</label>
                <textarea
                  placeholder="Enter Your Message"
                  className={inputClasses}
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className={buttonClasses}>
                  Submit Your Query
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="w-full lg:w-1/2">
            <img src={contactus} alt="" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
      
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto p-4 lg:p-8 space-y-8 lg:space-y-0 lg:space-x-32">

        {/* Image */}
        <div className="w-full lg:w-2/3">
            <img src={contactusdetails} alt=""  className="w-full h-auto rounded-lg" />
          </div>

          {/* Contact Information */}
          <div className="w-full bg-gray-100 p-4 lg:p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl text-gray-900 font-extrabold mb-8">Contact Information</h2>
            <div className="space-y-10">
              <p className="flex items-center text-gray-800">
                <span className="mr-4">
                  <img src={phone} className="w-8 h-8" alt="Phone" />
                </span>
                <span>+91 9741134001</span>
              </p>
              <p className="flex items-center text-gray-800 mt-10">
                <span className="mr-4">
                  <img src={whatsapp} className="w-8 h-8" alt="WhatsApp" />
                </span>
                <span>+91 9741134001</span>
              </p>
              <p className="flex items-center text-gray-800 mt-10">
                <span className="mr-4">
                  <img src={gmail} className="w-8 h-8" alt="Email" />
                </span>
                <span> info@aifbf.org</span>
              </p>
              <p className="flex items-center text-gray-800 mt-10">
                <a href="https://maps.app.goo.gl/uRatwdFoNfzJaRJv9" className="mr-4">
                  <img src={mappointer} className="w-8 h-8" alt="Map Pointer" />
                </a>
                <span>43, ASVNV Bhavana, 4th floor, Kempegowda Road, Bangalore 560009</span>
              </p>
            </div>
            <div className="flex gap-6 items-center mt-16">
              <a href="https://www.facebook.com" className="transition-transform transform hover:scale-110">
                <img src={facebook} className="w-8 h-8" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com" className="transition-transform transform hover:scale-110">
                <img src={instagram} className="w-8 h-8" alt="Instagram" />
              </a>
              <a href="https://www.twitter.com" className="transition-transform transform hover:scale-110">
                <img src={twitter} className="w-8 h-8" alt="Twitter" />
              </a>
              <a href="https://www.linkedin.com" className="transition-transform transform hover:scale-110">
                <img src={linkedin} className="w-8 h-8" alt="LinkedIn" />
              </a>
            </div>
          </div>
          
         
        </div>
      </div>
    </>
  );
};

export default ContactUs;
