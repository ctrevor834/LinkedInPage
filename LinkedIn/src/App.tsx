import React, { useState, useEffect, ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Link, Sun, Moon, Globe } from "lucide-react";
import profile from "./data/profile.json";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

interface ThemeToggleProps {
  toggleTheme: () => void;
  darkMode: boolean;
}

function ThemeToggle({ toggleTheme, darkMode }: ThemeToggleProps) {
  return (
    <Button onClick={toggleTheme} variant="ghost" className="ml-auto">
      {darkMode ? <Sun /> : <Moon />}
    </Button>
  );
}

interface LayoutProps {
  children: ReactNode;
  toggleTheme: () => void;
  darkMode: boolean;
}

function Layout({ children, toggleTheme, darkMode }: LayoutProps) {
  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <nav className="flex justify-between items-center mb-4">
          <div className="space-x-4">
            <NavLink to="/" className={({ isActive }: { isActive: boolean }) => isActive ? "font-bold underline" : "hover:underline"}>About</NavLink>
            <NavLink to="/experience" className={({ isActive }: { isActive: boolean }) => isActive ? "font-bold underline" : "hover:underline"}>Experience</NavLink>
            <NavLink to="/education" className={({ isActive }: { isActive: boolean }) => isActive ? "font-bold underline" : "hover:underline"}>Education</NavLink>
            <NavLink to="/projects" className={({ isActive }: { isActive: boolean }) => isActive ? "font-bold underline" : "hover:underline"}>Projects</NavLink>
            <NavLink to="/certifications" className={({ isActive }: { isActive: boolean }) => isActive ? "font-bold underline" : "hover:underline"}>Certifications</NavLink>
          </div>
          <ThemeToggle toggleTheme={toggleTheme} darkMode={darkMode} />
        </nav>
        {children}
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="space-y-6">
      <Card className="rounded-2xl shadow-xl">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="w-48 h-48 rounded-full overflow-hidden">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold">{profile.name}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">{profile.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{profile.location}</p>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{profile.bio}</p>
              <div className="flex space-x-4 mt-4">
                <a href={`mailto:${profile.social.email}`} className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  <Mail className="w-5 h-5" />
                </a>
                <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
                <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={profile.social.portfolio} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
            <div className="flex flex-wrap gap-2">
              {profile.skills.technical.map((skill, i) => (
                <span key={i} className="bg-gray-200 dark:bg-gray-700 text-sm rounded-full px-3 py-1">
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Soft Skills</h2>
            <div className="flex flex-wrap gap-2">
              {profile.skills.soft.map((skill, i) => (
                <span key={i} className="bg-gray-200 dark:bg-gray-700 text-sm rounded-full px-3 py-1">
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Tools & Technologies</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">IDEs & Editors</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.tools.ides.map((tool, i) => (
                    <span key={i} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full px-3 py-1">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Version Control</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.tools.version_control.map((tool, i) => (
                    <span key={i} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full px-3 py-1">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Development Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.tools.development_tools.map((tool, i) => (
                    <span key={i} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full px-3 py-1">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Operating Systems</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.tools.operating_systems.map((os, i) => (
                    <span key={i} className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm rounded-full px-3 py-1">
                      {os}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Interests</h2>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest, i) => (
                <span key={i} className="bg-gray-200 dark:bg-gray-700 text-sm rounded-full px-3 py-1">
                  {interest}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</h2>
        {profile.experience.map((exp, i) => (
          <div key={i} className="space-y-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-xl text-gray-800 dark:text-gray-100">{exp.role}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{exp.company}</p>
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{exp.duration}</p>
            </div>
            <ul className="space-y-2 mt-3">
              {exp.description.map((bullet, j) => (
                <li 
                  key={j} 
                  className="flex items-start space-x-2 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-blue-500 dark:text-blue-400 mt-1.5">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function EducationSection() {
  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</h2>
        {profile.education.map((edu, i) => (
          <div key={i} className="space-y-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-xl text-gray-800 dark:text-gray-100">{edu.degree}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{edu.school}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{edu.year}</p>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">GPA: {edu.gpa}</p>
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Relevant Courses:</p>
              <div className="flex flex-wrap gap-2">
                {edu.relevant_courses.map((course, j) => (
                  <span 
                    key={j} 
                    className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 
                             text-gray-700 dark:text-gray-300 text-sm rounded-full px-4 py-1.5
                             border border-gray-200 dark:border-gray-700 hover:shadow-sm transition-shadow duration-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {edu.awards && edu.awards.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Awards & Achievements:</p>
                <div className="flex flex-wrap gap-2">
                  {edu.awards.map((award, j) => (
                    <span 
                      key={j} 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full px-4 py-1.5
                               hover:shadow-md transition-all duration-200 hover:scale-105"
                    >
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function ProjectsSection() {
  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-xl font-semibold">Projects</h2>
        {profile.projects.map((project, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-lg">{project.name}</p>
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 inline-flex items-center hover:underline"
            >
              <Link className="w-4 h-4 mr-1" /> View Project
            </a>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function CertificationsSection() {
  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-xl font-semibold">Certifications</h2>
        {profile.certifications.map((cert, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-lg">{cert.name}</p>
                <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">ID: {cert.id}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme") === "dark";
    setDarkMode(savedMode);
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev: boolean) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <Router>
      <Layout toggleTheme={toggleTheme} darkMode={darkMode}>
        <Routes>
          <Route path="/" element={<AboutSection />} />
          <Route path="/experience" element={<ExperienceSection />} />
          <Route path="/education" element={<EducationSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/certifications" element={<CertificationsSection />} />
        </Routes>
      </Layout>
    </Router>
  );
} 