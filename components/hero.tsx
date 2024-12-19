"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-3"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, {`I 'm`} <span className="text-primary">Mahidhar Nyayapati</span>
      </motion.h1>
      <motion.div
        className="text-2xl md:text-4xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <TypeAnimation
          sequence={[
            "Fullstack Developer",
            1000,
            "React Expert",
            1000,
            "UI/UX Enthusiast",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.div>
      {/* <motion.p
        className="text-lg md:text-xl max-w-2xl mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        With 5 years of experience in the React ecosystem, I create beautiful,
        responsive, and user-friendly web applications.
      </motion.p>
      <motion.a
        href="#contact"
        className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get in Touch
      </motion.a> */}
    </section>
  );
}
