import React from 'react';
import img from '../images/web.svg'; 
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';

const Services = () => {

    return (
        <div id="services" className="py-3" >
            <div className="bg-gray-100 py-6">
            <section data-aos="zoom-in-down">

                        <h2 className="my-2 text-center text-3xl text-red-900 uppercase font-bold">Services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-red-900'></div>
                        </div>
                        <h2 className="mt-8 mx-12 text-center text-xl lg:text-2xl font-semibold text-red-900"></h2>

                    <div className="px-12" data-aos="fade-right" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-center text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Repair</h2>
                                    <p className="text-md font-medium">
                                        We specialize in repair all kinds of consoles. From retro to modern consoles, we have the expertise to bring your console back to life.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-center text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Buy Consoles</h2>
                                    <p className="text-md font-medium">
                                        We offer a store where you can buy consoles. We have a wide range of consoles available for purchase.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-center text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Sell Consoles</h2>
                                    <p className="text-md font-medium">
                                        You can sell your old or even broken consoles to us. We offer competitive prices for your old consoles.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-center text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Refurbishing</h2>
                                    <p className="text-md font-medium">
                                        Is your console looking old and worn out? We can refurbish your console to make it look brand new.
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>
        </div>
        </div>
    )
}

export default Services;