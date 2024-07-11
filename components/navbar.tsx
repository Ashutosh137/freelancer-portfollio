"use client";
import React from 'react'
import logo from '@/public/logotp.png'
import Image from 'next/image'
function Navbar() {
    return (
        <nav className=" bg-gray-900/50 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image className='w-20 object-cover mix-blend-darken' src={logo} alt='logo' />
                    {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Artillo</span> */}
                </a>
                <a href='#connect' className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Connect Us</button>
                </a>

            </div>
        </nav>

    )
}


import { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utiles/cn";

export const FloatingNav = ({
    className,
}: {
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    className
                )}
            >

                <Navbar />
            </motion.div>
        </AnimatePresence>
    );
};
