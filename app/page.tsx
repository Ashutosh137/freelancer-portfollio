import { ImageSlider } from "@/components/image-slider";
import image1 from '@/public/1.jpg'
// import image2 from '@/public/poster 2024_1.jpg'
import image3 from '@/public/3.jpg'
import HomeImage from '@/public/4.jpg'
import image4 from '@/public/5.jpg'
import image6 from '@/public/6.jpg'
import { FloatingNav } from "@/layout/navbar";

import Image from "next/image";
import Marquee from "@/components/marcos";
import logo from "@/public/logotp.png"
import Input from "@/layout/input";
import Footer from "@/layout/footer";
export default function Home() {
  return (
    <div className="w-full">
      <FloatingNav />
      <div className="mt-16 relative w-full h-full z-10">
        {/* <div
          className="z-50 bg-black/35 w-full absolute inset-0 flex flex-col justify-center items-center"
        >
          <p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            The hero section slideshow <br /> nobody asked for
          </p>
          <button className="px-5 py-2 backdrop-blur-sm border bg-emerald-300/30 border-emerald-500/20 text-white mx-auto text-center rounded-3xl relative mt-4">
            <span>Join now →</span>
          </button>
        </div> */}
        <Image className="object-center w-full  sm:h-[90vh]" src={HomeImage} alt="home" />
      </div>


      {/* <div className="my-0">
        <ImageSlider images={[image1, image3, image4, image6]}>

        </ImageSlider>
      </div> */}
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

      <section className="sm:px-20 sm:h-screen bg-gray-400 flex-row flex sm:flex-row-reverse flex-wrap sm:flex-nowrap items-center justify-center py-10 rounded-xl space-y-6    px-3  ">

        <div className="w-full sm:pl-10">
          <Image className="object-center w-full rounded-r-3xl rounded-l-full " src={HomeImage} alt="home" />
        </div>
        <div className="w-full flex flex-col space-y-4">
          <h2 className="text-3xl sm:text-5xl font-bold capitalize">
            experties
          </h2>
          <p className="max-w-screen-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime molestias sint totam fugit, voluptatum illo hic error dolores ad ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quidem ipsa atque? Iure nesciunt impedit molestias porro quos incidunt eum, doloribus repellat eveniet dolorem nisi dolore, ex, tempora perspiciatis magnam!? Eligendi nihil perferendis minus sunt dolor? Veniam, distinctio alias!</p>
          <button className="px-5 py-2 bg-sky-500 text-black text-base font-medium rounded-xl hover:scale-105 transition-all ease-in  mr-auto capitalize">learn more →</button>
        </div>

      </section>

      <section className="sm:px-20 block my-16">
        <div className="  flex w-full justify-between space-x-3 items-center  ">
          <div className="w-full p-3 flex flex-col justify-center  text-lg space-y-3">
            <h1 className="text-3xl font-bold capitalize ">Fitting design</h1>
            <p>Lorem ipsum dolor sit ameectetur, adipisicing Exercitationem assumenda labore enim omnis quis corrupti expedita m?</p>
            <button className="px-5 py-2 bg-sky-500 text-black text-base font-medium  rounded-xl hover:scale-105 transition-all ease-in  mr-auto capitalize">learn more →</button>
          </div>
          <div className="w-full h-full ">
            <Image src={image6} className="w-full h-full clip rounded-3xl sm:px-3 " alt="logo" />
          </div>
        </div>
      </section>
      <section className="sm:mx-20 block my-20">
        <div className="flex flex-row-reverse space-x-3 w-full justify-between items-center  ">

          <div className="w-full p-3 mx-3 flex flex-col justify-center  text-lg space-y-3">
            <h1 className="text-3xl font-bold capitalize ">Fitting design</h1>
            <p>Lorem ipsum dolor sit amet consectetur tempore minima, eligendi provident distinctio sed?</p>
            <button className="px-5 py-2 bg-sky-500 text-black text-base font-normal my-2 rounded-xl hover:scale-105 transition-all ease-in  mr-auto capitalize">learn more →</button>
          </div>
          <div className="w-full h-full  ">
            <Image src={image6} className=" w-full h-full  clip rounded-3xl sm:px-3 " alt="logo" />
          </div>
        </div>
      </section>





      {/* <Input /> */}


      <Footer />


    </div>
  );
}
