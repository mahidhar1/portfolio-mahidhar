'use client'

import { motion } from 'framer-motion'
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "CSS/SCSS", level: 90 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Material UI", level: 85 },
  { name: "Redux", level: 80 },
  { name: "GraphQL", level: 75 },
]

export function Skills() {
  return (
    <section id="skills" className="w-full py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
      <div className="max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

