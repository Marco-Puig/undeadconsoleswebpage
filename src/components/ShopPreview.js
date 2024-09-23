import React from 'react';
import img from '../images/handheld-game-console.svg'; 
import img2 from '../images/retro.svg';
import img3 from '../images/modern.svg';
import img4 from '../images/components.svg';

const Portfolio = () => {
    return (

        <div id='shop'>
            <div className="py-4">
                <h2 className="my-2 text-center text-3xl text-red-900 uppercase font-bold">Shop</h2>
                
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-red-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-right" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-center text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-8">Handheld Systems</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-35">
                                    Peer into your mystical orb... on the go! We sell a wide variety of refurbished handheld systems at competitive prices.
                                </p>
                                <img alt="card img" className="my-5 rounded-t group-hover:bg-gray-500 transition duration-1000 ease-in-out" src={img} />
                                <div className="flex justify-center my-4">
                                    <a href="https://www.ebay.com/usr/kazi-8477" className="text-white bg-red-900 hover:bg-red-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        View Products
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </a>
                                </div>                       
                        </div>
                        </div>
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-center text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-8">Retro Consoles</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-35">
                                    Ancient magic in a modern world! Available to you for reasonable prices, our refurbished retro consoles that can bring back the nostalgia. 
                                </p>
                                <img alt="card img" className="my-5 rounded-t group-hover:bg-gray-500 transition duration-1000 ease-in-out" src={img2} />
                                <div className="flex justify-center my-4">
                                    <a href="https://www.ebay.com/usr/kazi-8477" className="text-white bg-red-900 hover:bg-red-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        View Products
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </a>
                                </div>                       
                        </div>
                        </div>
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-center text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-8">Modern Systems</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-35">
                                    Cast enchants within the modern age! We sell a wide variety of recent and modern systems at competitive prices.
                                </p>
                                <img alt="card img" className="my-5 rounded-t group-hover:bg-gray-500 transition duration-1000 ease-in-out" src={img3} />
                                <div className="flex justify-center my-4">
                                    <a href="https://www.ebay.com/usr/kazi-8477" className="text-white bg-red-900 hover:bg-red-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        View Products
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </a>
                                </div>                       
                        </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-center text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-8">Components</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-35">
                                    Spell components for the aspiring necromancer. We have a library of OEM components pulled from old systems.
                                </p>
                                <img alt="card img" className="my-5 rounded-t group-hover:bg-gray-500 transition duration-1000 ease-in-out" src={img4} />
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