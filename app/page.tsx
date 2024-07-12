"use client"
import { ImageSlider } from "@/components/image-slider";
import image1 from '@/public/1.jpg'
// import image2 from '@/public/poster 2024_1.jpg'
import image3 from '@/public/3.jpg'
import image4 from '@/public/4.jpg'
import HomeImage from '@/public/5.jpg'
import image6 from '@/public/6.jpg'
import { motion } from "framer-motion";
import { FloatingNav } from "@/components/navbar";

import { PlaceholdersAndVanishInput } from "@/components/input";
import Image from "next/image";
import Marquee from "@/components/marcos";
import logo from "@/public/logotp.png"
export default function Home() {
  return (
    <div className="w-full">
      <FloatingNav />


      <div className="pt-20 w-full h-full z-10">
        <Image className="object-center w-full  sm:h-full" src={HomeImage} alt="home" />
      </div>


      <div className="my-10">
        <ImageSlider images={[image1, image3, image4, image6]}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 w-full absolute inset-0 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              The hero section slideshow <br /> nobody asked for
            </motion.p>
            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Join now →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </motion.div>
        </ImageSlider>
      </div>
      <section className="py-10">
        <Marquee>
          <article className="mx-10 max-w-md border border-black bg-transparent rounded-xl p-5 py-3">
            <div className="flex  items-center mb-4">
              <img className="w-10 h-10 me-4 rounded-full" src="https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.jpg?s=612x612&w=0&k=20&c=bCUTB8vd8MnzZFIq-x645-SmLNk2sQzOvOvWCPGDfZ4=" alt="" />
              <div className="font-medium text-black">
                <p>Jese Leos <time className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
              </div>
            </div>
            <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <aside>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut minus nam, harum architecto officiis voluptatum dolorem ex recusandae fuga delectus?</p>

            </aside>
          </article>

        </Marquee>
      </section>



      <section className="my-60 mx-auto">
        <h1 className="text-6xl font-bold text-center my-10 capitalize">
          connect us
        </h1>
        <div className="flex justify-center mx-10">

          <PlaceholdersAndVanishInput onChange={() => { }} onSubmit={() => { }} placeholders={["enetr your email addree"]} />
        </div>
      </section>



        <footer className="bg-stone-100 w-full rounded-lg shadow  p-4">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="flex items-center justify-between">
              <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Image src={logo} className="h-16 w-16" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Contact</a>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
          </div>
        </footer>


    </div>
  );
}
