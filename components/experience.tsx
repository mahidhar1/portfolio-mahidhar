'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    period: "2021 - Present",
    description: "Lead frontend development for multiple high-profile projects, mentored junior developers, and implemented best practices for code quality and performance.",
  },
  {
    title: "Frontend Developer",
    company: "WebSolutions Co.",
    period: "2019 - 2021",
    description: "Developed and maintained various React-based web applications, collaborated with UX designers to implement responsive designs, and optimized application performance.",
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    period: "2018 - 2019",
    description: "Assisted in the development of company websites and internal tools, learned and applied modern web development practices and frameworks.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="w-full py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            className="mb-8 flex"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex flex-col items-center mr-4">
              <div className="w-4 h-4 bg-primary rounded-full" />
              <div className="w-1 h-full bg-primary" />
            </div>
            <div className="bg-card rounded-lg p-6 shadow-lg flex-grow">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-muted-foreground">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

