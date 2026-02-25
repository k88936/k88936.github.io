"use client";

import {useEffect, useRef} from "react";

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                if (window.scrollY > 50) {
                    navRef.current.classList.add("backdrop-blur-md", "bg-background/80");
                } else {
                    navRef.current.classList.remove("backdrop-blur-md", "bg-background/80");
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        >
            <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
                <button
                    onClick={() => scrollTo("hero")}
                    className="font-semibold text-lg hover:opacity-70 transition-opacity"
                >
                    k88936
                </button>
                <div className="flex gap-6 text-sm">
                    {["about", "projects", "contact"].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item)}
                            className="capitalize hover:opacity-70 transition-opacity"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
