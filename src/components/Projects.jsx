"use client"

import React, { useState, memo } from 'react';
import GlareHover from './GlareHover';
import { Highlighter } from "@/components/ui/highlighter";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

// --- 1. Import your project images ---
import project1Img from '../assets/projects/bug_story.jpg';
import project2Img from '../assets/projects/project2.png';
import project5Img from '../assets/projects/project5.png';
import project6Img from '../assets/projects/project6.png';
import project8Img from '../assets/projects/project8.png';
import project9Img from '../assets/projects/project9.png';

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
    tags: ['Python', 'Streamlit', 'LangChain-Groq', 'Mermaid.js'],
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
    tags: ['PHP', 'MySQL'],
  },
  {
    title: 'ONS Trading Application',
    description: 'A real-time trading application using Django and Bootstrap 5.',
    videoUrl:
      'https://res.cloudinary.com/dktapziq9/video/upload/v1764395357/1764395325884939_lrg7f4.mp4',
    imageUrl: project5Img,
    liveUrl: 'https://ons-trading.onrender.com',
    repoUrl: 'https://github.com/Deadcoder001/ons_trading.git',
    tags: ['Django', 'yfinance', 'Bootstrap 5'],
  },
  {
    title: 'Creatorhub',
    description: 'An Influencer Marketing platform for Creators and brands built with React.',
    videoUrl:
      'https://res.cloudinary.com/dktapziq9/video/upload/v1764396382/1764396334647746_qruqaf.mp4',
    liveUrl: 'https://creatorhub.in',
    repoUrl: '#',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Tea Country',
    description: 'A Tourist website created with React.',
    imageUrl: project2Img,
    liveUrl: 'https://teacountry.in',
    repoUrl: '#',
    tags: ['React', 'Vue', 'Tailwind CSS'],
  },
  {
    title: 'Scabbard Tech',
    description: 'A Digital Marketing website built with React, Vue and Tailwind CSS.',
    videoUrl:
      'https://res.cloudinary.com/dktapziq9/video/upload/v1764397211/1764397136159111_zlcckk.mp4',
    liveUrl: 'https://scabbardtech.com',
    repoUrl: '#',
    tags: ['React', 'Vue', 'Tailwind CSS'],
  },
  {
    title: 'Jana Kalyan Swastha sewa',
    description: 'A Healthcare website built with HTML and php.',
    imageUrl: project6Img,
    liveUrl: 'https://jkssewa.org',
    repoUrl: '#',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
  {
    title: 'Janaewa',
    description: 'A NGO website built with HTML, CSS and JavaScript.',
    imageUrl: project8Img,
    liveUrl: 'https://janasewa.org',
    repoUrl: '#',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Earmacs',
    description: 'A Hotel Management website built with Wordpress and PHP.',
    imageUrl: project9Img,
    liveUrl: 'https://earmacs.com',
    repoUrl: '#',
    tags: ['Wordpress', 'PHP'],
  },
];

const stableKey = (project, index) =>
  project.title ? project.title : `project-${index}`;

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
            className="w-full h-1/2 object-cover"
            poster={imageUrl}
            aria-label={`${title} preview`}
          />
        ) : (
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className="w-full h-1/2 object-cover"
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
  const displayedProjects = showAll ? projectData : projectData.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative w-full text-black py-16 overflow-hidden bg-white"
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

      <div className="relative z-10 px-2">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold font-pixel underline-wavy-yellow inline-block">
            <Highlighter action="underline" color="#FFD700">
              Projects 🚀
            </Highlighter>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-screen-lg mx-auto">
          {displayedProjects.map((project, index) => (
            <div key={stableKey(project, index)} className="aspect-square">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          {!showAll && projectData.length > 3 && (
            <button onClick={() => setShowAll(true)} className="btn">
              View More
            </button>
          )}

          {showAll && (
            <button onClick={() => setShowAll(false)} className="btn">
              View Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
