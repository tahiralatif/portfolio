"use client"

import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "Frontend Development", progress: 95, description: "Next.js, HTML, Tailwind CSS" },
  { name: "Backend Development", progress: 80, description: "Node.js, Sanity CMS" },
  { name: "SEO Services", progress: 85, description: "Technical SEO, Performance Optimization, Google Analytics" },
  { name: "UI/UX Design", progress: 90, description: "Figma (Wireframing & Prototyping)" },
  { name: "E-commerce Development", progress: 75, description: "Scalable online stores, Secure payments" },
  { name: "API Development", progress: 70, description: "Basic REST API integration" },
];

export default function Skills() {
  return (
    <div className="container mx-auto px-4 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-8 text-center text-4xl font-bold">Skills & Expertise</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>{skill.name}</CardTitle>
                  <CardDescription>{skill.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress
                    value={skill.progress}
                    className="h-2 transition-all duration-300 hover:bg-primary/80"
                  />
                  <p className="mt-2 text-sm text-muted-foreground">
                    {skill.progress}% Proficiency
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
