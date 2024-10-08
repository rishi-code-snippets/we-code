"use client";

import './page.css';

import HeroTxtAnimation from './HeroTxtAnimation';

import ComponentPreviews from './ComponentPreviews';

import Link from 'next/link';

const Components = () => {
    return(
        <>
            <section className="main-hero rounded-3xl p-[2px] m-4 shadow-lg component-page">
                <div className="flex relative rounded-3xl bg-gradient-to-b from-blue-50 to-blue-300 h-full lg:min-h-[20rem]">
                    <div className="circles absolute pointer-events-none">
                    <div className="circle w-[60rem] h-[60rem] lg:w-[80rem] lg:h-[80rem] border border-dashed border-blue-800/30 rounded-full">
                    <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                        <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                        <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                        <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                    </div>
                    <div className="circle w-[40rem] h-[40rem] lg:w-[60rem] lg:h-[60rem] border border-dashed border-blue-800/30 rounded-full">
                    <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                        <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                        <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                        <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                    </div>
                    <div className="circle w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem] border border-dashed border-blue-800/30 rounded-full">
                        <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                        <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                        <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                        <div className="w-5 h-5 bg-blue-700 rounded-full absolute"></div>
                    </div>
                    </div>
                    <div className="main-hero-cnts px-3 py-12 mx-auto my-0 flex flex-col gap-8 items-center justify-center z-10 relative overflow-hidden">
                        <HeroTxtAnimation/>
                        <p className='font-extrabold text-xl leading-snug lg:text-2xl txt-shadow lg:leading-tight text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-center'>We left everything up to you, The choice is yours!</p>
                        <div className="max-w-xl lg:max-w-3xl text-center flex flex-col gap-6 z-10">
                        {/* <button className="pri-btn self-center tracking-wide flex items-center justify-center relative">
                            Choose now
                            <span className="inline-block w-7 h-7 ml-2 animate-pulse absolute right-4"></span>
                        </button> */}
                        </div>
                        <div className="relative w-[100%] min-w-[28rem] md:min-w-[34rem] lg:w-[90%] lg:min-w-[40rem] h-[12rem] pointer-events-none">
                        <div className="hero-window w-[90%] min-h-80 bg-blue-500 rounded-2xl absolute top-[-4rem] p-4 flex flex-col gap-2 shadow-xl">
                            <div className="window-arrow w-8 h-8 absolute" data-txt="Hamburger Menu"></div>
                            <div className="flex items-center gap-2">
                            <div className="flex gap-2">
                                <span className="w-3 h-3 rounded-full bg-green-400 shadow-xl"></span>
                                <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-xl"></span>
                                <span className="w-3 h-3 rounded-full bg-red-400 shadow-xl"></span>
                            </div>
                            <div>
                                <p className="text-xs px-3 tracking-wide text-white">we-code.dev</p>
                            </div>
                            </div>
                            <div className="flex-1 bg-blue-400 rounded-md relative">
                                <div className="px-2 py-4 h-full flex flex-col gap-6 items-center justify-center text-center overflow-hidden">
                                    <ul className='flex bg-blue-200 rounded-full p-2 window-tab'>
                                        <li className='w-20 text-xs py-1 active'>Preview</li>
                                        <li className='w-20 text-xs py-1'>Code</li>
                                    </ul>
                                    <div className='w-full h-80 px-4 relative'>
                                        <div className='flex h-full gap-2'>
                                            <div className='bg-blue-100 flex-1 rounded-2xl'></div>
                                            <div className='w-8 h-full'>
                                                <span className="w-4 h-4 rounded-full bg-blue-100 inline-block mb-6 shadow-lg"></span>
                                                <ul className='flex items-center flex-col gap-2'>
                                                    <li className="w-5 h-5 rounded-full bg-blue-600 shadow-lg"></li>
                                                    <li className="w-5 h-5 rounded-full bg-slate-600 shadow-lg"></li>
                                                    <li className="w-5 h-5 rounded-full bg-yellow-400 shadow-lg"></li>
                                                </ul>
                                                <span className="w-4 h-4 rounded-full bg-blue-100 inline-block mt-6 shadow-lg"></span>
                                            </div>
                                        </div>
                                        <div className='w-full h-full absolute top-0 left-0 rounded-xl'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='wrapper py-6 lg:py-8 flex flex-col gap-6 lg:gap-10'>
                <div className='flex flex-col gap-6'>
                    <h2 className="font-extrabold text-2xl lg:text-3xl leading-tight txt-shadow text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text">Be Choosy!</h2>
                    <ul className="flex gap-2 breadcrumbs justify-center lg:justify-start">
                        <li>
                            <Link href="/">
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link href="components/" className='active'>
                            Components
                            </Link>
                        </li>
                    </ul>
                </div>
                <ComponentPreviews/>
            </section>
        </>
    )
}

export default Components;