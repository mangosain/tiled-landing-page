"use client";

import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import {
  FaInstagram,
  FaBehance,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-full h-[98vh] bg-white rounded-3xl p-4 flex gap-4">
      <HeroContainer1 />
      <HeroContainer2 />
    </div>
  );
};

export default Hero;

const HeroContainer1 = () => {
  return (
    <div className="h-full w-1/3 flex flex-col gap-4">
      <div className="h-2/5 overflow-hidden">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.3 }}
          className="h-full w-full p-5 text-white"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1720329461027-f34c265b1d91?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            borderRadius: "1rem",
          }}
        >
          <h1 className="text-6xl font-bold uppercase">Lorem, ipsum dolor.</h1>
          <p className="text-lg mt-10 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dicta
            eaque tempore, earum ullam iusto similique numquam, inventore natus
            nobis non placeat nihil amet ipsa facilis magni veritatis pariatur
            possimus?
          </p>
        </motion.div>
      </div>
      <motion.div className="h-3/5 rounded-md">
        <div
          className="h-full w-full p-5 text-white flex flex-col justify-between"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1704189125621-55e8c6cfd166?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            borderRadius: "1rem",
          }}
        >
          <div>
            <div className="w-fit h-fit overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1 }}
                className="text-8xl font-bold origin-bottom uppercase"
              >
                Lorem,
              </motion.h1>
            </div>
            <div className="w-fit h-fit overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-7xl font-bold origin-bottom uppercase"
              >
                ipsum dolor.
              </motion.h1>
            </div>
          </div>
          <div className="h-14 w-2/5 border-2 rounded-full bottom-0 flex justify-start items-center p-5 relative hover:cursor-pointer">
            <h1 className="text-xl font-semibold">Explore</h1>
            <div className="h-12 w-12 bg-white rounded-full absolute right-0.5 flex justify-center items-center">
              <HiOutlineArrowUpRight className="text-black text-2xl transition-all ease-in-out duration-50 hover:rotate-45" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const HeroContainer2 = () => {
  const word = "welcome";
  return (
    <div className="h-full w-2/3 relative">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="h-full w-full absolute top-0 left-0 object-cover rounded-2xl"
      >
        <source
          src="https://videos.pexels.com/video-files/18069235/18069235-uhd_2560_1440_24fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="w-full p-4 absolute flex justify-between items-center">
        <div className="flex gap-12 text-black text-lg">
          <FaInstagram />
          <FaBehance />
          <FaFacebookF />
          <FaPinterestP />
          <FaTwitter />
          <FaTiktok />
        </div>

        <div className="h-12 w-1/6 border border-black rounded-full bottom-0 flex justify-start items-center p-5 relative hover:cursor-pointer">
          <h1 className="text-xl font-semibold">Products</h1>
          <div className="h-10 w-10 bg-black rounded-full absolute right-0.5 flex justify-center items-center">
            <HiOutlineArrowUpRight className="text-white text-2xl transition-all ease-in-out duration-50 hover:rotate-45" />
          </div>
        </div>
      </div>

      <div className="bg-white absolute left-0 top-1/3 p-4 pr-6 rounded-r-2xl overflow-hidden whitespace-nowrap">
        {word.split("").map((letter, index) => {
          return (
            <motion.span
              className="font-bold text-8xl uppercase inline-block"
              key={index}
              variants={{
                hidden: { opacity: 0, y: "-100%" },
                visible: { opacity: 1, y: "0%" },
              }}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.1 * index,
                type: "spring",
                bounse: 0.25,
              }}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>

      <div className="h-60 w-1/3 bg-white absolute left-4 bottom-4 rounded-xl bg-opacity-40 backdrop-blur-md border border-white shadow-xl p-5">
        <h1 className="text-3xl font-semibold">Lorem ipsum dolor sit.</h1>
        <p className="text-justify mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          quia blanditiis nulla ad minus consectetur voluptate earum repellendus
          itaque odio!
        </p>
      </div>

      <div className="h-40 w-40 bg-white absolute bottom-0 right-0 pt-4 pl-4 rounded-tl-2xl">
        <div className="h-full w-full bg-black rounded-tl-lg rounded-br-xl flex justify-center items-center hover:cursor-pointer">
          <HiOutlineArrowUpRight className="text-white text-6xl transition-all ease-in-out hover:rotate-45" />
        </div>
      </div>
    </div>
  );
};
