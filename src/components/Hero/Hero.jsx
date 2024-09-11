import { AuroraBackground } from '../ui/aurora-background'
import './Hero.css'
import { motion } from "framer-motion";
import MagicButton from "../button/MagicButton";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
const Hero = () => {
  return (
    <div className='relative w-screen pt-40 py-20 px-10 lg:px-20'>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.9,
          ease: "easeInOut",
        }}
        className=" relative flex flex-col  items-center justify-center"
      >
        <div className='flex gap-12 md:gap-0 lg:gap-16 flex-wrap md:flex-nowrap justify-center items-center'>
        <div className='flex flex-col justify-center items-center md:items-start'>
        <div className="text-2xl md:text-3xl lg:text-5xl w-[88%] md:w-[450px] lg:w-[700px]  font-bold text-center  md:text-start  text-center text-teal-950 ">
        Hi! I'm Ghaidaa, a React Developer based in Syria
        </div>
        <div className="font-extralight  text-lg md:text-2xl md:py-3 py-7 lg:py-6 text-center md:text-start sm:w-[65%] md:w-[450px] lg:w-[600px]">
        Frontend Developer | Html | JavaScript | CSS | React
        </div>
        <div className="font-extralight py-7 md:py-2 lg:py-4 text-lg text-center md:text-start sm:w-[70%] md:w-[450px] lg:w-[550px]">
        Turning ideas into interactive realities
        </div>
        <a href="#about">
          <MagicButton
            title="show my work"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="!bg-[#0d1123]"
          />
        </a>
        </div>
        <img src="/front.png" className='lg:w-2/5 md:w-2/6 sm:w-4/5' alt="" />
        </div>
      </motion.div>
    </div>

  )
}

export default Hero