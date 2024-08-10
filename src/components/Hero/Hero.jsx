import { AuroraBackground } from '../ui/aurora-background'
import './Hero.css'
import { motion } from "framer-motion";
import MagicButton from "../button/MagicButton";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
const Hero = () => {
  return (
    <AuroraBackground className='relative'>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.9,
          ease: "easeInOut",
        }}
        className=" relative flex flex-col gap-12 lg:gap-10 items-center justify-center px-4"
      >
        <div className="font-extralight text-center  py-4 text-sm">
          DYNAMIC WEB MAGIC WITH REACT
        </div>
        <div className="text-3xl md:text-7xl font-bold  text-center text-teal-950">
          Transforming Concepts into Seamless User Experiences
        </div>
        <div className="font-extralight text-center md:text-4xl py-4 ">
          Hi! I'm Ghaidaa, a React Developer based in Syria
        </div>
        <a href="#about">
          <MagicButton
            title="show my work"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="!bg-[#0d1123]"
          />
        </a>
      </motion.div>
    </AuroraBackground>

  )
}

export default Hero