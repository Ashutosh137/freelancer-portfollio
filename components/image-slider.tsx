// components/ImageSlider.tsx
"use client";
import { cn } from "@/utiles/cn";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";

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
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

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
      intervalId && clearInterval(intervalId)

      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    if (autoplay) {
      const id = setInterval(handleNext, 5000);
      setIntervalId(id);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoplay, intervalId]);

  return (
    <div>

    <div className={cn(className, "relative w-full ")}>
     
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
              className="w-full h-full object- object-center"
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
            // layout=""
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
      {overlay && (
        <div className={cn("absolute bg-black/55 inset-0 z-10", overlayClassName)}>{overlay}</div>
      )}
      {children}

    </div>

    <div className="w-full flex pt-10">
      <div className="flex justify-between w-80 ml-auto mr-10">
        <button className="border p-2 border-red-300">left</button>
        <button>right</button>
      </div>
    </div>
    </div>
  );
};
