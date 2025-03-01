import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      }}
      className="absolute flex flex-col -top-12 left-[15%] items-center justify-center z-10 pointer-events-none"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.8, delay: 0.2 },
        }}
        className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-[length:200%_auto] animate-gradient text-5xl font-black tracking-wider pb-5"
      >
        ADLANTIC
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.8, delay: 0.4 },
        }}
        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 bg-[length:200%_auto] animate-gradient-slow text-xl font-regular tracking-wider"
      >
        Leading Digital Ads
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.8, delay: 0.6 },
        }}
        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 bg-[length:200%_auto] animate-gradient-slow text-xl font-regular tracking-wider"
      >
        With Innovation
      </motion.p>
    </motion.div>
  );
};

export default HeroText;
