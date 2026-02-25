"use client";

import {useEffect, useRef, useState} from "react";

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            id="hero"
            ref={ref}
            className="min-h-screen flex items-center justify-center px-6"
        >
            <div
                className={`text-center transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-4">k88936</h1>
                <p className="text-xl md:text-2xl text-foreground/70 mb-8">
                    Full Stack Developer
                </p>
                <p className="text-lg text-foreground/60 max-w-md mx-auto mb-12">
                    Building beautiful, performant web experiences with modern
                    technologies.
                </p>
                <div className="flex justify-center gap-6">
                    {[
                        {name: "GitHub", href: "https://github.com/k88936"},
                        {name: "Blogs", href: "https://k88936.github.io/blogs"},
                        {name: "Twitter", href: "https://twitter.com"},
                    ].map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/60 hover:text-foreground transition-colors duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                <div className="mt-16 animate-bounce">
                    <button
                        onClick={() =>
                            document
                                .getElementById("about")
                                ?.scrollIntoView({behavior: "smooth"})
                        }
                        className="text-foreground/40 hover:text-foreground/60 transition-colors"
                        aria-label="Scroll to about"
                    >
                        <svg
                            className="w-6 h-6 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
