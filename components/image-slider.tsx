// components/ImageSlider.tsx
"use client";
import { cn } from "@/utiles/cn";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

interface ImageSliderProps {
  images: StaticImageData[];
  children?: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}

export const ImageSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "down",
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {

      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    const id = setInterval(handleNext, 5000);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      clearInterval(id);
    };
  }, [autoplay]);

  return (
    <div>

      <div className={cn(className, "relative w-full h-[28rem] sm:h-screen")}>

        <div className="relative overflow-hidden w-full h-full">
          <AnimatePresence >
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full inset-0 h-full rounded"
            >
              <Image
                className="w-full h-full  shadow-xl object-center"
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {overlay && (
          <div className={cn("absolute bg-black/25 inset-0 z-10", overlayClassName)}>{overlay}</div>
        )}
        {children}

      </div>

      <div className="w-full flex pt-10">
        <div className="flex justify-between w-40 sm:w-80 ml-auto mr-10">
          <button onClick={handlePrevious} className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white  text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"><BiLeftArrow /></button>
          <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white e text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400" onClick={handleNext}><BiRightArrow /></button>
        </div>
      </div>
    </div>
  );
};
