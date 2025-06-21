"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X, Play, Instagram, Youtube, MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"

export default function RTSPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [openDialogIndex, setOpenDialogIndex] = useState<number | null>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "work", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
            >
              RTS Production
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "What We Do" },
                { id: "work", label: "Our Work" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors hover:text-yellow-400 ${
                    activeSection === item.id ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black border-t border-gray-800"
          >
            <div className="px-4 py-4 space-y-4">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "What We Do" },
                { id: "work", label: "Our Work" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              RTS Production
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            We create, shoot, and edit impactful stories
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={() => scrollToSection("work")}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 px-8 py-3 text-lg font-semibold"
            >
              View Our Work
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2" />
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                We Do
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From concept to completion, we handle every aspect of your creative journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Content Creation",
                description:
                  "Strategic ideation and creative concepts that resonate with your audience and drive engagement.",
                icon: "💡",
              },
              {
                title: "Shooting",
                description:
                  "Professional photography and videography services with state-of-the-art equipment and expertise.",
                icon: "📸",
              },
              {
                title: "Post-Production",
                description: "Expert editing, color grading, and finishing touches that bring your vision to life.",
                icon: "🎬",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400/50 transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-yellow-400">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our portfolio of creative projects across different industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Food Shoots",
                description: "Mouth-watering food photography and videography for restaurants and brands",
                image: "/FOOD.JPG",
                category: "Photography",
              },
              {
                title: "E-commerce Product Shoots",
                description: "High-quality product photography that drives sales and showcases your products",
                image: "/BACKPACK.jpg",
                category: "Commercial",
              },
              {
                title: "Event Shoots",
                description: "Capturing memorable moments and creating lasting impressions of your events",
                image: "/placeholder.svg?height=300&width=400",
                category: "Events",
              },
            ].map((project, index) => (
              <Dialog key={project.title} open={openDialogIndex === index} onOpenChange={(open) => setOpenDialogIndex(open ? index : null)}>
                <DialogTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="group cursor-pointer"
                  >
                    <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400/50 transition-all duration-300 overflow-hidden">
                      <div className="relative overflow-hidden">
                        {index === 2 ? (
                          <video
                            src="/EVENT.mp4"
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                            poster="/event-poster.jpg"
                            style={{ aspectRatio: '9/16' }}
                            muted
                            playsInline
                          />
                        ) : (
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                          />
                        )}
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-yellow-400">{project.title}</h3>
                        <p className="text-gray-400">{project.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-xl mx-auto mt-8 bg-gray-900 border border-gray-800 rounded-lg p-0 overflow-hidden">
                  <div className="w-full flex flex-col items-center">
                    {index === 2 ? (
                      <video
                        src="/EVENT.mp4"
                        className="w-full max-h-[70vh] object-contain"
                        controls
                        autoPlay
                        playsInline
                        style={{ aspectRatio: '9/16' }}
                        poster="/event-poster.jpg"
                      />
                    ) : (
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full max-h-[70vh] object-contain"
                      />
                    )}
                    <div className="p-4 w-full">
                      <h3 className="text-xl font-bold mb-2 text-yellow-400">{project.title}</h3>
                      <p className="text-gray-400">{project.description}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to bring your creative vision to life? Let's discuss your next project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-yellow-400">Send us a message</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Your Name"
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      />
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      />
                    </div>
                    <Input
                      placeholder="Subject"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    />
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    />
                    <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 font-semibold">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-yellow-400" size={20} />
                    <span className="text-gray-300">Bangalore, India</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-yellow-400" size={20} />
                    <span className="text-gray-300">+91 8714465942</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-yellow-400" size={20} />
                    <span className="text-gray-300">rtsprodcution@gmail.com</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-gray-800 border-gray-700 text-white hover:bg-yellow-400 hover:text-black"
                  >
                    <Instagram size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-gray-800 border-gray-700 text-white hover:bg-yellow-400 hover:text-black"
                  >
                    <Youtube size={20} />
                  </Button>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="font-bold mb-2 text-yellow-400">Business Hours</h4>
                <div className="space-y-1 text-gray-300">
                  <p>Monday - Sunday: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2024 RTS Production. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button size="icon" className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg">
          <MessageCircle size={24} />
        </Button>
      </motion.div>
    </div>
  )
}
