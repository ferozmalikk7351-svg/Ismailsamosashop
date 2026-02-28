import React from 'react';
import { History, Heart, Award } from 'lucide-react';

const AboutSection = () => {
    return (
        <section className="section bg-light" id="about">
            <div className="container">
                <div className="about-grid">

                    <div className="about-content">
                        <h2 className="section-title">Our Story</h2>
                        <h3 className="about-subtitle">Starting from Okara in 1989</h3>
                        <div className="title-divider-left"></div>

                        <p className="about-text">
                            Our journey began 35 years ago in the heart of Okara. What started as a small,
                            family-run shop has now become a legacy of taste, trusted by thousands.
                            We've brought our secret recipes and decades of experience to Lahore,
                            maintaining the exact same homemade quality and hygiene that defined us in 1989.
                        </p>

                        <div className="about-features">
                            <div className="about-feature">
                                <div className="feature-icon"><History size={24} className="text-gold" /></div>
                                <div>
                                    <h4>35+ Years Legacy</h4>
                                    <p>Authentic recipes passed down through generations.</p>
                                </div>
                            </div>

                            <div className="about-feature">
                                <div className="feature-icon"><Heart size={24} className="text-gold" /></div>
                                <div>
                                    <h4>Homemade Quality</h4>
                                    <p>Prepared daily with farm-fresh ingredients and pure spices.</p>
                                </div>
                            </div>

                            <div className="about-feature">
                                <div className="feature-icon"><Award size={24} className="text-gold" /></div>
                                <div>
                                    <h4>Premium Hygiene</h4>
                                    <p>Uncompromising standards for health and safety.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-image-comp">
                        <div className="image-frame bounce-slow">
                            {/* Using the hero image or a generic placeholder if we don't have a specific historical one */}
                            <img src="/hero_samosa_premium_1772274466853.png" alt="Our Legacy" className="about-img main-img" />
                        </div>
                        <div className="experience-badge animate-fade-in delay-300">
                            <span className="exp-number">35</span>
                            <span className="exp-text">Years of<br />Excellence</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
