"use client"

import React, { useState, memo } from 'react';
import GlareHover from './GlareHover';
import { Highlighter } from "@/components/ui/highlighter";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

// --- Import only images used by the first 3 projects ---
import project1Img from '../assets/projects/bug_story.jpg';
import project2Img from '../assets/projects/project2.png';
import project5Img from '../assets/projects/project5.png';

const projectData = [
  {
    title: 'BUG ANATOMY',
    description:
      'An AI-powered diagnostic copilot that bridges the gap between raw stack traces and intuitive human understanding.',
    videoUrl:
      'https://res.cloudinary.com/dktapziq9/video/upload/v1764394626/1764393871242766_dqfnqn.mp4',
    imageUrl: project1Img,
    liveUrl: 'https://bug-anatomy-visual-storyteller-adhi.streamlit.app/',
    repoUrl: 'https://github.com/radithyan2004-stack/bug-anatomy-visual-storyteller',
    tags: ['Python', 'Streamlit', 'LangChain-Groq', 'Mermaid.js']
  },
  {
    title: 'CampusCare',
    description:
      'CampusCare helps students submit and track complaints, contact college staff, and receive updates. Includes role-based dashboards, private conversations, and light/dark themes.',
    videoUrl:
      'https://res.cloudinary.com/dktapziq9/video/upload/v1764395075/1764395026924189_ij9257.mov',
    imageUrl: project2Img,
    liveUrl: '#',
    repoUrl: '#',
    tags: ['PHP', 'MySQL']
  },
  {
    title: 'ONS Trading Application',
    description: 'A real-time trading application using Django and Bootstrap 5.',
    videoUrl:
      'https://res.cloudinary.com/dktapziq9/video/upload/v1764395357/1764395325884939_lrg7f4.mp4',
    imageUrl: project5Img,
    liveUrl: 'https://ons-trading.onrender.com',
    repoUrl: 'https://github.com/Deadcoder001/ons_trading.git',
    tags: ['Django', 'yfinance', 'Bootstrap 5']
  }
];

const stableKey = (project, index) =>
  (project && project.title) ? project.title : `project-${index}`;

const ProjectCard = memo(({ project }) => {
  const { title, description, videoUrl, imageUrl, repoUrl, tags } = project;

  return (
    <GlareHover
      glareColor="#ffffff"
      glareOpacity={0.3}
      glareAngle={-30}
      glareSize={300}
      transitionDuration={1350}
      playOnce={true}
      width="100%"
      height="100%"
      background="#fff"
      borderRadius="16px"
      className="h-full"
      style={{ border: '1px solid #e5e7eb' }}
    >
      <div className="flex flex-col h-full bg-white rounded-[12px] overflow-hidden">
        {videoUrl ? (
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-48 sm:h-56 lg:h-64 object-cover"
            poster={imageUrl}
            aria-label={`${title} preview`}
          />
        ) : (
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className="w-full h-48 sm:h-56 lg:h-64 object-cover"
          />
        )}

        <div className="p-3 flex-grow flex flex-col">
          <h3 className="text-base font-bold text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-600 text-xs mb-2 flex-grow">{description}</p>

          <div className="flex flex-wrap gap-1 mb-2">
            {Array.isArray(tags) &&
              tags.map((tag, i) => (
                <span
                  key={`${tag}-${i}`}
                  className="bg-gray-200 text-gray-800 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
          </div>

          <div className="flex items-center space-x-3 mt-auto pt-1">
            {repoUrl && repoUrl !== '#' && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 font-semibold text-xs transition-colors duration-300"
                aria-label={`View code for ${title}`}
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </GlareHover>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  // projectData only contains first 3 projects now; View More not needed
  const displayedProjects = projectData;

  return (
    <section
      id="projects"
      className="relative w-full text-black py-12 overflow-hidden bg-white"
    >
      <InteractiveGridPattern
        className={cn(
          'absolute inset-0 h-full w-full',
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
        width={20}
        height={20}
        squares={[80, 80]}
        squaresClassName="fill-gray-100"
      />

      <div className="relative z-10 px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold font-pixel underline-wavy-yellow inline-block">
            <Highlighter action="underline" color="#FFD700">Projects 🚀</Highlighter>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {displayedProjects.map((project, index) => (
            <div key={stableKey(project, index)} className="aspect-square max-w-[360px] mx-auto">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
