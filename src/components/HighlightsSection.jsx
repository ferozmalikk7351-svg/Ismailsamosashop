import React from 'react';
import { ShieldCheck, Sparkles, Award } from 'lucide-react';

const HighlightsSection = () => {
    return (
        <section className="section section-dark" id="highlights">
            <div className="container">
                <div className="highlights-grid">

                    <div className="highlight-card special-highlight">
                        <div className="highlight-icon">
                            <Sparkles size={40} className="text-gold" />
                        </div>
                        <h3 className="highlight-title">Mini Samosas <span className="urdu-text text-gold">(چھوٹے سموسے)</span></h3>
                        <p className="highlight-text">
                            Perfect for parties, tea time, and children. Our bite-sized samosas pack the same
                            authentic 1989 flavor in a smaller, crispier package. Available on special pre-orders.
                        </p>
                        <ul className="highlight-features">
                            <li><ShieldCheck size={16} /> Ideal for Events</li>
                            <li><ShieldCheck size={16} /> Extra Crispy Texture</li>
                            <li><ShieldCheck size={16} /> Bulk Discounts Available</li>
                        </ul>
                    </div>

                    <div className="highlight-image-box">
                        <img src="/ismail_ghee_branded.png" alt="Ismail Desi Ghee" className="premium-image-round" />
                        <div className="premium-badge">
                            <Award size={24} />
                            <span>Premium Quality</span>
                        </div>
                    </div>

                    <div className="highlight-card special-highlight">
                        <div className="highlight-icon">
                            <Award size={40} className="text-gold" />
                        </div>
                        <h3 className="highlight-title">Pure Desi Ghee <span className="urdu-text text-gold">(دیسی گھی)</span></h3>
                        <p className="highlight-text">
                            Elevate your culinary experience. We offer pure, homemade Desi Ghee prepared using
                            traditional methods passed down through generations. Rich aroma and unparalleled taste.
                        </p>
                        <ul className="highlight-features">
                            <li><ShieldCheck size={16} /> 100% Organic & Pure</li>
                            <li><ShieldCheck size={16} /> Traditional Churning Process</li>
                            <li><ShieldCheck size={16} /> Rich Golden Color</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HighlightsSection;
