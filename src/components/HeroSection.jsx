import React, { useEffect, useRef } from 'react';
import { ArrowDown, Star } from 'lucide-react';

const HeroSection = () => {
    const particlesRef = useRef(null);

    useEffect(() => {
        const container = particlesRef.current;
        if (!container) return;
        for (let i = 0; i < 18; i++) {
            const p = document.createElement('div');
            p.className = 'hero-particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.top = Math.random() * 100 + '%';
            p.style.animationDelay = Math.random() * 6 + 's';
            p.style.animationDuration = (5 + Math.random() * 8) + 's';
            p.style.width = p.style.height = (3 + Math.random() * 5) + 'px';
            container.appendChild(p);
        }
        return () => { if (container) container.innerHTML = ''; };
    }, []);

    return (
        <section className="hero" id="home">
            {/* Background */}
            <div className="hero-background">
                <img
                    src="/hero_samosa_premium_1772274466853.png"
                    alt="Premium Hot Samosa"
                    className="hero-image"
                />
                <div className="hero-overlay"></div>
                <div className="hero-gradient-layer"></div>
            </div>

            {/* Floating Particles */}
            <div className="hero-particles" ref={particlesRef}></div>

            {/* Floating Side Badge */}
            <div className="hero-side-badge">
                <div className="badge-inner">
                    <Star size={14} fill="currentColor" />
                    <span>Homemade</span>
                    <Star size={14} fill="currentColor" />
                </div>
                <span className="badge-sub">Premium Quality</span>
            </div>

            {/* Main Content */}
            <div className="container hero-content">
                <div className="hero-text-container">

                    {/* Tag line */}
                    <div className="hero-tag hero-anim" style={{ animationDelay: '0.1s' }}>
                        <span className="tag-dot"></span>
                        <span>Est. 1989 — Okara, Pakistan</span>
                        <span className="tag-dot"></span>
                    </div>

                    {/* Title */}
                    <h1 className="hero-title hero-anim" style={{ animationDelay: '0.3s' }}>
                        The Legacy of Taste:
                        <br />
                        <span className="text-gold hero-gold-line">From Okara to Lahore.</span>
                    </h1>

                    {/* Short description */}
                    <p className="hero-description hero-anim" style={{ animationDelay: '0.5s' }}>
                        Homemade samosas with <strong>35+ years</strong> of authentic tradition.
                    </p>

                    {/* CTAs */}
                    <div className="hero-actions hero-anim" style={{ animationDelay: '0.65s' }}>
                        <a href="#menu" className="btn btn-gold btn-hero-glow">
                            View Our Menu
                        </a>
                        <a
                            href="https://wa.me/923226923192"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp"
                        >
                            Order Now
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <a href="#menu" aria-label="Scroll to menu">
                    <span className="scroll-text">Scroll</span>
                    <ArrowDown size={28} className="text-gold bounce" />
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
