"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import homeImg from "../public/abot-img.png"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-6xl"
      >
        <div className="grid items-center gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="order-2 text-center md:order-1 md:text-left"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">
              Hi, {"I'm Tahira Rajput"}
              <br />
              <span className="bg-gradient-to-r from-gray-800 to-slate-800 bg-clip-text text-transparent dark:text-white">
                Full Stack Developer
              </span>
            </h1>

            <p className="mb-8 text-lg leading-8 text-muted-foreground">
              {`I'm a Next.js Developer, skilled in both frontend and backend development.
              I create modern, responsive websites with Next.js, Tailwind CSS, Node.js, and
               Sanity CMS to deliver seamless digital experiences`}
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 md:justify-start">
              <Link 
                href="https://github.com/tahiralatif" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/tahira-rajput-983aa82b6/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link 
                href="tara378581@gmail.com"
                className="transition-transform hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="order-1 flex justify-center md:order-2"
          >
            <div className="relative h-[300px] w-[300px] md:h-[500px] md:w-[500px]">
              <Image
                src={homeImg}
                alt="John Doe"
                fill
                className="rounded-full object-cover shadow-2xl"
                priority
              />
              <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl opacity-20" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}