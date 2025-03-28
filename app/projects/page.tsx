"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Globe } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js and Sanity",
    image: "https://www.figma.com/community/resource/93345af7-7f6f-456f-b529-22fdf437189b/thumbnail",
    github: "https://github.com/tahiralatif/Hackathon-Nextjs-E-comm-web.git",
    live: "https://hackathon-nextjs-e-comm-web.vercel.app/",
    tags: ["Next.js", "Sanity", "Tailwind CSS", "Shadcn"],
  },
  {
    title: "Unit Convertor",
    description: "Streamlit unit converter for all measurements",
    image: "https://media.istockphoto.com/id/483424683/photo/euro-and-dollar-symbol-eur-usd-pair.jpg?s=612x612&w=0&k=20&c=sxpJ59whk1IQbv2O22UE0zYEmZ9zZA76-iJBsrsAa_I=",
    github: "https://github.com/tahiralatif/unit_convertor.git",
    live: "https://unitconvertorgit-aqbmnb7wygb6kskjzewcls.streamlit.app/",
    tags: ["python", "Streamlit"],
  },
  {
    title: " Frontend Flower Website",
    description: "Simple Static Frontend Flower Website",
    image: "https://grovehousechicago.com/cdn/shop/files/20230513021525_IMG_2487.jpg?v=1684118394&width=1946",
    github: "https://github.com/tahiralatif/flower-website.git",
    live: "https://flower-web-project.vercel.app/",
    tags: ["Next.js", "Tailwind.CSS", "Shadcn" ],
  },
  {
    title: " Agentia World",
    description: "AI Agentia world Website",
    image: " https://images.stockcake.com/public/6/b/6/6b60fdb5-9b15-4bd1-91ba-e18204ba8167_large/friendly-robot-guardian-stockcake.jpg",
    github: "https://github.com/tahiralatif/Agentia-World.git",
    live: "https://agentia-world-psi.vercel.app/",
    tags: ["Next.js", "Tailwind.CSS", "Shadcn", "Framer Motion"],
  },

  {
    title: "Tech Educa",
    description: "Tech Educa Static Frontend Single page responsive website",
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw2ZyCmlRm96NOHl1dDKh2WjkLyO8gJrICSw&s",
    github: "https://github.com/tahiralatif/my-website.git",
    live: "https://my-website-xi-neon.vercel.app/",
    tags: ["HTML", "CSS"],
  },

  {
    title: "Modern Frontend website using Figma",
    description: "A modern Frontend  Website Figma Design to next.js ",
    image: " https://strapi.dhiwise.com/uploads/618fa90c201104b94458e1fb_64118c75881062e29035e408_Best_Figma_plugins_for_React_An_In_depth_Analysis_OG_Image_d7f6d80275.jpg",
    github: "https://github.com/tahiralatif/modern-web-using-figma.git",
    live: "https://modern-web-using-figma.vercel.app/",
    tags: ["Next.js", "Tailwind.CSS", "Shadcn"],
  },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-8 text-center text-4xl font-bold">Featured Projects</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}