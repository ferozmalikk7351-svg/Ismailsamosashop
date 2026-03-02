import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
    const particlesRef = useRef(null);

    useEffect(() => {
        const container = particlesRef.current;
        if (!container) return;
        for (let i = 0; i < 14; i++) {
            const p = document.createElement('div');
            p.className = 'hero-particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.top = Math.random() * 100 + '%';
            p.style.animationDelay = Math.random() * 6 + 's';
            p.style.animationDuration = (5 + Math.random() * 8) + 's';
            p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
            container.appendChild(p);
        }
        return () => { if (container) container.innerHTML = ''; };
    }, []);

    return (
        <section className="hero" id="home">

            {/* Background Image */}
            <div className="hero-bg">
                <img
                    src="/hero_samosa_premium_1772274466853.png"
                    alt="Premium Hot Samosa"
                    className="hero-bg-img"
                />
                {/* Strong cinematic gradient overlay */}
                <div className="hero-vignette" />
            </div>

            {/* Particles */}
            <div className="hero-particles" ref={particlesRef} />

            {/* ── Centred content ── */}
            <div className="hero-center">

                {/* Top label */}
                <p className="hero-label hero-anim" style={{ animationDelay: '0.1s' }}>
                    <span className="hero-label-line" />
                    Est. 1989 · Okara, Pakistan
                    <span className="hero-label-line" />
                </p>

                {/* Main title */}
                <h1 className="hero-headline hero-anim" style={{ animationDelay: '0.3s' }}>
                    Crafted Fresh.<br />
                    <span className="hero-headline-gold">Loved for 35 Years.</span>
                </h1>

                {/* Sub-text */}
                <p className="hero-sub hero-anim" style={{ animationDelay: '0.5s' }}>
                    The finest homemade samosas in Lahore — made with pure desi ghee & family recipes passed down through generations.
                </p>

                {/* CTAs */}
                <div className="hero-ctas hero-anim" style={{ animationDelay: '0.65s' }}>
                    <a href="#menu" className="hcta hcta-primary">
                        See Our Menu
                    </a>
                    <a
                        href="https://wa.me/923226923192"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hcta hcta-ghost"
                    >
                        Order on WhatsApp
                    </a>
                </div>

                {/* Stats row */}
                <div className="hero-stats-row hero-anim" style={{ animationDelay: '0.8s' }}>
                    <div className="hstat">
                        <span className="hstat-num">35+</span>
                        <span className="hstat-lbl">Years</span>
                    </div>
                    <div className="hstat-sep" />
                    <div className="hstat">
                        <span className="hstat-num">100%</span>
                        <span className="hstat-lbl">Desi Ghee</span>
                    </div>
                    <div className="hstat-sep" />
                    <div className="hstat">
                        <span className="hstat-num">Daily</span>
                        <span className="hstat-lbl">Fresh Made</span>
                    </div>
                </div>
            </div>

            {/* Scroll cue */}
            <a href="#menu" className="hero-scroll-cue" aria-label="Scroll to menu">
                <ChevronDown size={22} />
            </a>

        </section>
    );
};

export default HeroSection;
