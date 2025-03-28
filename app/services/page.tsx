"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code2,
  Database,
  Layout,
  Smartphone,
  Terminal,
  Wrench,
} from "lucide-react"

const services = [
  {
    title: "Next.js Web Development",
    description:
      "High-performance, SEO-friendly, and scalable websites using Next.js and Tailwind CSS.",
    icon: Code2,
  },
  {
    title: "Frontend Development",
    description:
      "Modern, responsive, and visually appealing UI using Next.js, Tailwind CSS, and Figma designs.",
    icon: Layout,
  },
  {
    title: "Backend Development",
    description:
      "Secure and scalable backend solutions with Node.js, Sanity CMS, and API development.",
    icon: Database,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Building feature-rich online stores with secure payments and optimized performance.",
    icon: Smartphone,
  },
  {
    title: "SEO Optimization",
    description:
      "Improving search engine rankings with technical SEO, performance optimization, and analytics.",
    icon: Terminal,
  },
  {
    title: "Website Maintenance & Support",
    description:
      "Ensuring your website runs smoothly with regular updates and performance monitoring.",
    icon: Wrench,
  },
];


export default function Services() {
  return (
    <div className="container mx-auto px-4 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-8 text-center text-4xl font-bold">Services</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <service.icon className="mb-4 h-12 w-12 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}