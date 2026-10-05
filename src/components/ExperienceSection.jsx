import React from "react";
import { motion } from "framer-motion";
import ssiLogo from "../assets/ssi-logo.jpg";
import tapsnclicksLogo from "../assets/tapsnclicks.png";
import fiverLogo from "../assets/Fiverr-Logo.png";
import boost79Logo from "../assets/boost79.jpg";
import all3dLogo from "../assets/all3d_logo.png";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "ALL3D",
      title: "Web Engineer",
      dateRange: "June 2025 - Present",
      type: "Full-time",
      location: "Remote - United States",
      responsibilities: [
        "Built backend services for an AI image generation, editing, and video generation product, implementing the Aurora Serverless data layer and CloudWatch logging for its FastAPI orchestration server",
        "Built batch image generation with AWS Lambda on EventBridge-scheduled runs, storing outputs in S3, with bulk image export and downloads",
        "Migrated the frontend from React 16 to React 19 with Tailwind CSS, cutting page-load times by 40-60% through code splitting, removing unused dependencies, and optimizing data fetching",
        "Automated go-to-market workflows, including data processing, batching, and email verification and validation",
      ],
      companyLogo: all3dLogo,
      technologies: ["Python", "FastAPI", "React", "AWS Lambda", "Aurora Serverless", "S3", "EventBridge"],
    },
    {
      company: "Strategic Systems International",
      title: "Senior Software Engineer (promoted from Software Engineer)",
      dateRange: "June 2022 - June 2025",
      type: "Full-time",
      location: "Lahore, Pakistan",
      responsibilities: [
        "Owned and enhanced an internal Angular and Ignite UI frontend framework used across 2 client applications",
        "Reduced tab-switching time from 3 seconds to under 1 second by resolving an Angular change detection issue",
        "Developed core Intellify platform features using .NET, Node.js, and Angular, including an Excel bulk-import feature that reduced data-entry time by 80%",
        "Implemented dynamic list views and caching strategies, reducing page-load times to under 2 seconds",
        "Migrated the frontend from Angular 9 to Angular 15",
      ],
      companyLogo: ssiLogo,
      technologies: ["Angular", "Ignite UI", ".NET", "Node.js", "TypeScript"],
    },
    {
      company: "Boost79.hu",
      title: "Full Stack Software Engineer",
      dateRange: "October 2020 - May 2022",
      type: "Contract",
      location: "Remote - Hungary",
      responsibilities: [
        "Led development of a chat web application and a peer-to-peer parking rental platform",
        "Designed and integrated backend services with frontend interfaces",
        "Set up CI and automated testing for deployments; worked with stakeholders to define scope and deliverables",
      ],
      companyLogo: boost79Logo,
      technologies: ["React", "React Native", "Next.js", "Node.js", "Firebase", "Stripe"],
    },
    {
      company: "TapsNClicks",
      title: "Full Stack Web Developer (Intern)",
      dateRange: "March 2021 - October 2021",
      type: "Internship",
      location: "Lahore, Pakistan",
      responsibilities: [
        "Built an admin dashboard and engagement analytics for a short video sharing app",
        "Improved content moderation workflows, reducing response time from 24 hours to under 4 hours",
      ],
      companyLogo: tapsnclicksLogo,
      technologies: ["React", "Node.js", "Firebase", "Express"],
    },
    {
      company: "Fiverr",
      title: "Freelance Full Stack Software Engineer",
      dateRange: "March 2019 - Present",
      type: "Freelance",
      location: "Remote",
      responsibilities: [
        "Delivered high quality Web, Android, AI and Data Science solutions",
        "50+ Projects completed across diverse industries",
        "40+ Perfect Reviews with 5-star ratings",
      ],
      companyLogo: fiverLogo,
      technologies: ["React", "Node.js", "Python", "React Native", "Firebase"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Work Experience
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A track record of delivering impactful solutions across diverse industries
            and technologies
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-gradient-to-b from-primary-500 via-primary-300 to-primary-100 hidden md:block" />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-8 hidden md:flex items-center justify-center ${
                    index % 2 === 0
                      ? "right-0 md:right-auto md:left-1/2 transform md:-translate-x-1/2"
                      : "left-0 md:left-1/2 transform md:-translate-x-1/2"
                  }`}
                >
                  <div className="w-4 h-4 bg-primary-500 rounded-full ring-4 ring-primary-100" />
                </div>

                {/* Card */}
                <motion.div
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
                  whileHover={{ y: -5 }}
                >
                  {/* Gradient accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500" />

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-white flex-shrink-0 shadow-sm flex items-center justify-center border border-gray-200 p-1.5">
                      {experience.companyLogo ? (
                        <img
                          src={experience.companyLogo}
                          alt={experience.company}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="text-xl font-bold text-primary-600">
                          {experience.company.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900">
                        {experience.company}
                      </h3>
                      <p className="text-primary-600 font-semibold">
                        {experience.title}
                      </p>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-3 mb-4 text-sm">
                    <span className="inline-flex items-center gap-1 text-gray-500">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {experience.dateRange}
                    </span>
                    <span className="inline-flex items-center gap-1 text-gray-500">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {experience.location}
                    </span>
                    <span className="px-2 py-0.5 bg-primary-50 text-primary-600 rounded-full text-xs font-medium">
                      {experience.type}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2 mb-4">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
