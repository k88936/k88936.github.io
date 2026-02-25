"use client";

import {useEffect, useRef, useState} from "react";

const projects = [
    {
        title: "Project One",
        description:
            "A full-stack web application built with Next.js and PostgreSQL. Features user authentication, real-time updates, and a modern UI.",
        tech: ["Next.js", "TypeScript", "PostgreSQL"],
        github: "https://github.com",
        live: "https://example.com",
    },
    {
        title: "Project Two",
        description:
            "An open-source CLI tool for developers. Simplifies common workflows and improves productivity.",
        tech: ["Node.js", "TypeScript"],
        github: "https://github.com",
    },
    {
        title: "Project Three",
        description:
            "A mobile-first e-commerce platform with a focus on performance and accessibility.",
        tech: ["React", "Node.js", "MongoDB"],
        github: "https://github.com",
        live: "https://example.com",
    },
];

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {threshold: 0.1}
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" ref={ref} className="py-24 px-6 bg-foreground/5">
            <div
                className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
                <h2 className="text-3xl font-bold mb-8">Projects</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className="p-6 bg-background rounded-lg border border-foreground/10 hover:border-foreground/20 transition-colors duration-200 group"
                            style={{transitionDelay: `${index * 100}ms`}}
                        >
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-foreground/80 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-foreground/60 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-2 py-1 text-xs bg-foreground/5 rounded"
                                    >
                    {t}
                  </span>
                                ))}
                            </div>
                            <div className="flex gap-4 text-sm">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground/60 hover:text-foreground transition-colors"
                                >
                                    GitHub
                                </a>
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground/60 hover:text-foreground transition-colors"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
