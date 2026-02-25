"use client";

import {useEffect, useRef, useState} from "react";

export default function Contact() {
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
        <section id="contact" ref={ref} className="py-24 px-6">
            <div
                className={`max-w-4xl mx-auto text-center transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-foreground/60 text-lg mb-8 max-w-md mx-auto">
                    I&apos;m currently open to new opportunities. Whether you have a
                    question or just want to say hi, feel free to reach out!
                </p>
                <div className="mt-12 flex justify-center gap-8">
                    {[
                        {name: "Email", href: "mailto:kvtodev@outlook.com"},
                    ].map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/50 hover:text-foreground transition-colors duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
