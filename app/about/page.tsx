"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import aboutImg from "../../public/abot-img.png"

export default function About() {
  return (
    <div className="container mx-auto px-4 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-12 md:grid-cols-2"
      >
        <div className="flex items-center justify-center">
        <motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.5 }}
  className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto overflow-hidden rounded-xl"
>
  <Image
    src={aboutImg}
    alt="Profile"
    className="object-cover w-full h-auto"
  />
</motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col justify-center pr-12"
        >
          <h1 className="mb-6 text-4xl font-bold">About Me</h1>
          <p className="mb-4 text-lg text-muted-foreground">
            I'm a passionate Full Stack Developer with over 5 years of experience in building
            web applications. I specialize in JavaScript technologies across the whole stack
            (Node.js, React, Next.js).
          </p>
          <p className="mb-4 text-lg text-muted-foreground">
            When I'm not coding, you'll find me contributing to open source projects,
            writing technical blog posts, or exploring new technologies.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold">Education</h3>
              <p className="text-muted-foreground">B.S. Computer Science</p>
              <p className="text-sm text-muted-foreground">University of Technology</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Experience</h3>
              <p className="text-muted-foreground">5+ Years</p>
              <p className="text-sm text-muted-foreground">Full Stack Development</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}