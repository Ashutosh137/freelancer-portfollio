"use client";
import React, { useState } from 'react';
import logo from '@/public/logotp.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-slate-50 fixed h-20 inset-0 w-full z-50 border-gray-200">
            <div className="max-w-screen-xl mx-4 flex flex-wrap items-center justify-between w-full p-4">
                <a href="https://flowbite.com/" className="rtl:space-x-reverse">
                    <Image src={logo} className="h-16 w-full sm:mx-3 py-1" alt="Logo" />
                </a>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen ? 'true' : 'false'}
                >
                    <svg
                        className="w-10 h-10"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={`hidden w-full md:block md:w-auto md:ml-auto`}
                    id="navbar-default"
                >
                    <ul className="font-medium text-xl flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white text-black dark:border-gray-700">
                        <li >
                            <a
                                href="#"
                                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <AnimatePresence>

                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: isMenuOpen ? 0 : '-100%' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-40 md:hidden ${isMenuOpen ? 'block' : 'hidden'
                        }`}
                >
                    <ul className="font-medium text-xl flex flex-col p-4 mt-4 text-black">
                        <li onClick={toggleMenu}>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li onClick={toggleMenu}>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                            >
                                About
                            </a>
                        </li>
                        <li onClick={toggleMenu}>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                            >
                                Services
                            </a>
                        </li>
                        <li onClick={toggleMenu}>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </motion.div>
            </AnimatePresence>

        </nav>
    );
}

export default Navbar;



import {
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

    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.15) {
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
                    duration: 0.3,
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
