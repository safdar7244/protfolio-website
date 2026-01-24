import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

import kozgoImg from "../assets/screenshots/kozgo.png";
import openstopeImg from "../assets/screenshots/openstope.png";
import rawImg from "../assets/screenshots/raw.png";
import googleBotImg from "../assets/screenshots/google-bot.jpg";
import parkingImg from "../assets/screenshots/parking.jpeg";
import universityImg from "../assets/screenshots/university-app.png";
import spotifyImg from "../assets/screenshots/spotify-bot.jpg";
import chatImg from "../assets/screenshots/chat-app.png";
import pawtnerImg from "../assets/screenshots/pawtner.jpeg";
import docTalkImg from "../assets/screenshots/doctalk.jpg";



const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      name: "DocTalk",
      description:
        "An AI-powered SaaS platform for document chat using RAG. Upload PDFs or Word files and interact through natural language. Features AWS Cognito auth, S3 storage, Lambda processing pipeline, and pgvector for semantic search.",
      technologies: ["Next.js", "React", "TypeScript", "AWS", "PostgreSQL", "OpenAI"],
      sourceCodeLink: "https://github.com/safdar7244/doctalk-new",
      demoLink: "https://doctalk-new-delta.vercel.app//",
      screenshot: docTalkImg,
      hasDemo: true,
      hasSourceCode: true,
      category: "AI/ML",
      featured: true,
    },
    {
      name: "Paw-tner",
      description:
        "A pet adoption platform connecting animal shelters with potential adopters. Features pet listings with filtering, personalized matching, favorites management, shelter dashboards with statistics, and photo uploads via Cloudinary.",
      technologies: ["React", "FastAPI", "PostgreSQL", "Tailwind CSS", "Cloudinary"],
      sourceCodeLink: "",
      demoLink: "https://paw-tner-qr3m.vercel.app/",
      screenshot: pawtnerImg,
      hasDemo: true,
      hasSourceCode: false,
      category: "Web",
      featured: true,
    },
    {
      name: "Kozgo",
      description:
        "A ride sharing platform connecting drivers and passengers. Built the complete web application along with the driver sign up flow and real-time tracking.",
      technologies: ["React", "Node.js", "Express", "MySQL"],
      sourceCodeLink: "https://github.com/safdar7244/Kozgo",
      demoLink: "http://www.kozgo.com/",
      screenshot: kozgoImg,
      hasDemo: true,
      hasSourceCode: true,
      category: "Web",
      featured: true,
    },
    {
      name: "Open Stope",
      description:
        "An AI-powered web application that predicts the stability of mining stope surfaces using multinomial logistic regression with 90%+ accuracy.",
      technologies: ["Angular", "Node.js", "Django", "Keras", "MySQL"],
      screenshot: openstopeImg,
      sourceCodeLink: "https://github.com/safdar7244/Open-Stope",
      demoLink: "https://openstope.com/",
      hasDemo: true,
      hasSourceCode: true,
      category: "AI/ML",
      featured: true,
    },
    {
      name: "Raw Admin App",
      description:
        "A comprehensive admin panel for Raw, a short video sharing platform. Features include user management, content moderation, and analytics dashboard.",
      technologies: ["React", "Node.js", "Firebase", "Express"],
      screenshot: rawImg,
      sourceCodeLink: "https://github.com/safdar7244/raw-app_frontend",
      demoLink: "https://play.google.com/store/apps/details?id=com.tnc.rawapp",
      hasDemo: true,
      hasSourceCode: true,
      category: "Web",
    },
    {
      name: "Home Parking",
      description:
        "The Airbnb for parking lots. A mobile app that enables users to rent out their parking spaces to other users and earn passive income.",
      technologies: ["React Native", "Firebase", "Node.js", "Stripe", "Google Maps"],
      screenshot: parkingImg,
      sourceCodeLink: "https://github.com/safdar7244/Parking_App",
      demoLink: "",
      hasDemo: false,
      hasSourceCode: true,
      category: "Mobile",
      featured: true,
    },
    {
      name: "Student On The Go",
      description:
        "An internal university mobile app featuring group chat, timetables, course details, professor information, and library resource links.",
      technologies: ["React Native", "Firebase", "Node.js"],
      screenshot: universityImg,
      sourceCodeLink: "https://github.com/safdar7244/School-on-Go",
      demoLink: "",
      hasSourceCode: true,
      hasDemo: false,
      category: "Mobile",
    },
    {
      name: "Google Chat Bot",
      description:
        "An automation bot that bridges Google Chat and Discord, reading messages from one platform and forwarding them to the other in real-time.",
      technologies: ["Node.js", "Puppeteer", "Discord API"],
      screenshot: googleBotImg,
      sourceCodeLink: "https://github.com/safdar7244/google_bot/",
      demoLink: "",
      hasDemo: false,
      hasSourceCode: true,
      category: "Automation",
    },
    {
      name: "Spotify Bot",
      description:
        "An automation tool that handles Spotify account creation, bypassing bot protection and CAPTCHAs using browser automation techniques.",
      technologies: ["Node.js", "Puppeteer"],
      screenshot: spotifyImg,
      sourceCodeLink: "https://github.com/safdar7244/Spotify_Bot/tree/main",
      demoLink: "",
      hasSourceCode: true,
      hasDemo: false,
      category: "Automation",
    },
    {
      name: "Random Chat App",
      description:
        "A real-time web application that connects two random users for anonymous chatting using WebSocket connections.",
      technologies: ["Node.js", "Firebase", "Socket.IO", "jQuery"],
      screenshot: chatImg,
      sourceCodeLink: "",
      demoLink: "",
      hasSourceCode: false,
      hasDemo: false,
      category: "Web",
    },
  ];

  const filters = ["All", "Web", "Mobile", "AI/ML", "Automation"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in full-stack
            development, mobile apps, and automation
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid gap-8 md:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.name} {...project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/safdar7244"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            whileHover={{ x: 5 }}
          >
            View more on GitHub
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
