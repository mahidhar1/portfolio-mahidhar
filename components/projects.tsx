"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Read Swift",
    description:
      "An AI powered web based learning platform thatincludes courses, analytics and tests to improve reading speed.",
    image: "/read-swift_demo.png",
    tags: ["Next.js", "Shadcn", "Tailwind CSS"],
    github: "https://github.com/mahidhar1/read-swift",
    live: "https://read-swift.vercel.app",
  },
  {
    title: "Hours",
    description: "Utility App for Project Management with real-time updates",
    image: "/hours_demo.PNG",
    tags: ["React.js", "Redux", "Material UI"],
    github: "https://github.com/mahidhar1/hours-project-manager-app",
    live: "https://hours-project-manager-app.vercel.app",
  },

  {
    title: "Inventory management system",
    description:
      "An interactive inventory management system that provides detailed insights of the orders, costing and available goods.",
    image: "/inventory-management_demo.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/mahidhar1/inventory-app",
    live: "https://partner-with-us-millet-sourcing.vercel.app/",
  },
  {
    title: "E-commerce Store",
    description: "An online store for buying millet grains from local farms.",
    image: "/millet-sourcer_demo.png",
    tags: ["Next.js", "MongoDB", "Redux", "CSS"],
    github: "https://github.com/mahidhar1/food-ordering-app",
    live: "https://millet-sourcing-app.vercel.app",
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={100}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
