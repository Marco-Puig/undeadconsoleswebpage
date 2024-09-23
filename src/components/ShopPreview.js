import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (

        <div id='shop'>
            <div className="bg-gray-100 py-5">
                <h2 className="my-2 text-center text-3xl text-red-900 uppercase font-bold">Shop</h2>
                
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-red-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-right" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-center text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Handheld Systems</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Peer into your mystical orb... on the go! We sell a wide variety of restored retro and refurbished modern handheld systems at competitive prices. All our restored systems are backed by our money back guarantee. *insert link to money back guarantee, probably have a cheap lawyer service like rocketlawyer write it*
                                </p>
                                <div className="flex justify-center my-4">
                                    <a href="https://www.ebay.com/usr/kazi-8477" className="text-white bg-red-900 hover:bg-red-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        View Products
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </a>
                                </div>                       
                        </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-center text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Retro Consoles</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Ancient magic thought dead for aeons... available to you at reasonable prices! We sell a wide variety of retro consoles restored and backed by our money back guarantee.
                                </p>
                                <div className="flex justify-center my-4">
                                    <a href="https://www.ebay.com/usr/kazi-8477" className="text-white bg-red-900 hover:bg-red-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        View Products
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-center text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Modern Consoles</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    placeholder text
                                </p>
                                <div className="flex justify-center my-4">
                                    <a href="https://www.ebay.com/usr/kazi-8477" className="text-white bg-red-900 hover:bg-red-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        View Products
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-center text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Components</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Spell components for the aspiring necromancer. We have a library of OEM components pulled from old systems. If you're a DIYer (that's where we got our start) we'd be happy to sell them to you.
                                </p>
                                <div className="flex justify-center my-4">
                                    <a href="https://www.ebay.com/usr/kazi-8477" className="text-white bg-red-900 hover:bg-red-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        View Products
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
            </div>
        
    )
}

export default Portfolio;