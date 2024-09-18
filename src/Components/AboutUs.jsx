import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import { aboutusbanner, carbackground, carbackground2, aboutuscarvideo } from '../assets'
// import { FaBuilding, FaSmile, FaHandshake, FaCity, FaCar } from 'react-icons/fa';
import 'aos/dist/aos.css';

const AboutUs = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });

        const video = videoRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            },
            {
                threshold: 0.5, // Adjust this threshold as needed
            }
        );

        if (video) {
            observer.observe(video);
        }

        return () => {
            if (video) {
                observer.unobserve(video);
            }
        };
    }, []);

    const values = [
        {
            title: 'Integrity',
            description: 'We uphold the highest standards of integrity in all our actions.',
        },
        {
            title: 'Customer Commitment',
            description: 'We develop relationships that make a positive difference in our customers’ lives.',
        },
        {
            title: 'Quality',
            description: 'We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.',
        },
    ];

    return (
        <>
            <div>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                />
            </div>


            {/* About TRIPC */}
            <div
                className="relative isolate overflow-hidden px-6 py-12 sm:py-16 lg:py-32 lg:px-0 bg-gray-500/50 backdrop-blur-lg"
                style={{
                    backgroundImage: `url(${aboutusbanner})`
                }}
            >
                <div className="absolute inset-0 z-0"></div>
                <div className="relative z-10 mx-auto max-w-7xl lg:gap-8">
                    <div className="">
                        <div className="lg:col-span-1 lg:pr-8">
                            <h1 className="text-center mt-8 text-xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white" data-aos="slide-left" data-aos-delay="100">
                                About AIFBF
                            </h1>
                            <p className="text-center mt-4 text-sm sm:text-lg md:text-xl leading-8 font-bold text-white" data-aos="slide-right" data-aos-delay="200">
                                AIFBF is a well conceived idea to bring in the actionable insights to strengthen the  financial borrowers and offering the lawful solutions for running the business smoothly without any hurdles.
                            </p>
                            <p className="text-center mt-6 text-sm sm:text-lg md:text-xl leading-8 text-white" data-aos="slide-left" data-aos-delay="300">
                                With a vision for creating a transform India AIFBF acts a catalyst and intermediary between policy makers and the government. With forward looking approach AIFBF is very proactive and aggressive in its approach in empowering for a better future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* About Company People Information */}
            <div className="min-h-screen py-10 bg-gray-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
                        <p className="mt-4 text-gray-600">
                            Learn more about our mission, values, and the team behind our success.
                        </p>
                    </div>

                    <div className="mt-10 text-center">
                        <h2 className="text-3xl font-semibold text-gray-800">Our Team</h2>
                        <div className="mt-8 flex flex-wrap justify-center">
                            {/** Team Member 1 */}
                            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                <div className="bg-gray-400 rounded-lg shadow-lg p-6 h-full" data-aos="fade-up" data-aos-delay="200">
                                    <img className="w-24 h-24 rounded-full mx-auto" src={carbackground} alt="Team Member 1" />
                                    <h2 className="text-xl font-semibold text-gray-900 mt-4">Shri Dayanand Managing</h2>
                                    <p className="text-gray-800">Director</p>
                                </div>
                            </div>

                            {/** Team Member 2 */}
                            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                <div className="bg-gray-400 rounded-lg shadow-lg p-6 h-full" data-aos="fade-up" data-aos-delay="200">
                                    <img className="w-24 h-24 rounded-full mx-auto" src={carbackground2} alt="Team Member 2" />
                                    <h2 className="text-xl font-semibold text-gray-900 mt-4">Smt Pramila M Nesargi</h2>
                                    <p className="text-gray-800">Director</p>
                                </div>
                            </div>

                            {/** Team Member 3 */}
                            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                <div className="bg-gray-400 rounded-lg shadow-lg p-6 h-full" data-aos="fade-up" data-aos-delay="800">
                                    <img className="w-24 h-24 rounded-full mx-auto" src={aboutusbanner} alt="Team Member 3" />
                                    <h2 className="text-xl font-semibold text-gray-900 mt-4">Smt Prathibha Dayananda</h2>
                                    <p className="text-gray-800">Director</p>
                                </div>
                            </div>

                            {/** Team Member 4 */}
                            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                <div className="bg-gray-400 rounded-lg shadow-lg p-6 h-full" data-aos="fade-right" data-aos-delay="800">
                                    <img className="w-24 h-24 rounded-full mx-auto" src={aboutusbanner} alt="Team Member 4" />
                                    <h2 className="text-xl font-semibold text-gray-900 mt-4">Shri Shiv Shankar Agarwal</h2>
                                    <p className="text-gray-800">Director</p>
                                </div>
                            </div>

                            {/** Team Member 5 */}
                            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                <div className="bg-gray-400 rounded-lg shadow-lg p-6 h-full" data-aos="fade-right" data-aos-delay="800">
                                    <img className="w-24 h-24 rounded-full mx-auto" src={aboutusbanner} alt="Team Member 5" />
                                    <h2 className="text-xl font-semibold text-gray-900 mt-4">Shri Bhavesh Kumar Surana</h2>
                                    <p className="text-gray-800">Director</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Our Values Section */}
                    <div className="mt-10">
                        <h2 className="text-3xl font-semibold text-gray-800 text-center">Our Values</h2>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {values.map((value) => (
                                <div key={value.title} className="bg-gray-700 rounded-lg shadow-lg p-6 text-center" data-aos="flip-up" data-aos-delay="200">
                                    <h3 className="text-2xl font-semibold text-gray-100">{value.title}</h3>
                                    <p className="mt-2 text-white">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>



                </div>
            </div>

            {/* Why Choose Us Section with Video */}
            <div className="relative isolate overflow-hidden bg-gray-300 px-6 py-12 sm:py-16 lg:overflow-visible lg:px-0">
                <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="lg:col-span-1 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-700 sm:text-4xl">
                                Why Choose Us?
                            </h1>
                            <p className="mt-8 text-lg leading-8 text-gray-500">
                                Reliable Services: We offer a range of services tailored to your needs, ensuring a
                                smooth and hassle-free travel experience.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-500">
                                Experienced Team: Our team of professionals is dedicated to providing the best
                                possible service.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-500">
                                Customer Satisfaction: We prioritize your comfort and satisfaction, with a focus on
                                delivering exceptional value.
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-1 lg:pl-8 flex items-center justify-center">
                        <div className="lg:max-w-lg w-full">
                            <div className="aspect-w-16 aspect-h-9">
                                {/* <video
                                    ref={videoRef}
                                    className="w-full rounded-lg shadow-lg"
                                    loop
                                    muted
                                    style={{ height: '300px' }}
                                    src={aboutuscarvideo}
                                    type="video/mp4"
                                >
                                    Your browser does not support the video tag.
                                </video> */}
                                <img src="http://aifbf.org/wp-content/uploads/2024/09/all-india-borrowers-federations-1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
