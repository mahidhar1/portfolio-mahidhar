"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
// import { useToast } from "@/components/ui/use-toast"

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const { toast } = useToast()

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Here you would typically send the form data to a server
  //   console.log('Form submitted:', { name, email, message })
  //   toast({
  //     title: "Message sent!",
  //     description: "Thank you for your message. I'll get back to you soon.",
  //   })
  //   setName('')
  //   setEmail('')
  //   setMessage('')
  // }
  const handleSubmit = () => {};

  return (
    <section id="contact" className="w-full py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
      <motion.form
        className="max-w-md mx-auto"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <Textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </motion.form>
    </section>
  );
}
