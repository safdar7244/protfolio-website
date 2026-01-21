import { useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({
  name,
  description,
  technologies,
  screenshot,
  sourceCodeLink,
  demoLink,
  hasDemo,
  hasSourceCode,
  category,
  featured,
  index,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 relative"
      whileHover={{ y: -8 }}
      layout
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full shadow-lg">
            Featured
          </span>
        </div>
      )}

      {/* Category badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full shadow-sm">
          {category}
        </span>
      </div>

      {/* Image container */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        {screenshot ? (
          <img
            src={screenshot}
            alt={`${name} Screenshot`}
            className="w-full h-full object-contain object-center transform group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
            <span className="text-5xl font-bold text-white/90">{name.charAt(0)}</span>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick action buttons */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {hasDemo && (
            <motion.a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-4 bg-white text-gray-900 rounded-lg font-medium text-sm text-center hover:bg-gray-100 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
            </motion.a>
          )}
          {hasSourceCode && (
            <motion.a
              href={sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-4 bg-gray-900 text-white rounded-lg font-medium text-sm text-center hover:bg-gray-800 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              Source Code
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {name}
        </h3>
        <div className="mb-4">
          <p className={`text-gray-600 ${isExpanded ? "" : "line-clamp-2"}`}>
            {description}
          </p>
          {description.length > 100 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-1 transition-colors"
            >
              {isExpanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((technology, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-primary-50 hover:text-primary-600 transition-colors"
            >
              {technology}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-medium">
              +{technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action links for mobile */}
        <div className="flex gap-3 mt-4 md:hidden">
          {hasSourceCode && (
            <a
              href={sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Code
            </a>
          )}
          {hasDemo && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
