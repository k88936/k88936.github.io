"use client";

import {useEffect, useRef, useState} from "react";
import Image from "next/image";

export default function About() {
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
        <section
            id="about"
            ref={ref}
            className="py-24 px-6"
        >
            <div
                className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
                <h2 className="text-3xl font-bold mb-8">About</h2>
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-1">
                        <div
                            className="w-48 h-48 mx-auto md:mx-0 rounded-full bg-linear-to-br from-foreground/10 to-foreground/5 flex items-center justify-center">
                            <Image
                                src="/icon.png"
                                alt="Profile icon"
                                width={192}
                                height={192}
                            />
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                            Hi, I&apos;m k88936! I&apos;m a passionate full-stack developer with
                            over 5 years of experience building web applications. I love
                            creating elegant solutions to complex problems.
                        </p>
                        <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                            When I&apos;m not coding, you can find me exploring new
                            technologies, contributing to open source, or enjoying a good cup
                            of coffee.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"].map(
                                (tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-sm bg-foreground/5 rounded-full"
                                    >
                    {tech}
                  </span>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
