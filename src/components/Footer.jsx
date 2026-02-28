import React from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">

                    <div className="footer-brand">
                        <h3 className="footer-title">Ismail Samosa Shop</h3>
                        <p className="footer-desc">
                            The legacy of taste from Okara since 1989, now serving premium quality homemade samosas and delicacies in Lahore.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon"><Facebook size={20} /></a>
                            <a href="#" className="social-icon"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#menu">Our Menu</a></li>
                            <li><a href="#highlights">Specialties</a></li>
                            <li><a href="#about">Our Story</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4 className="footer-heading">Contact Us</h4>
                        <ul className="contact-info">
                            <li>
                                <MapPin size={18} className="text-gold" />
                                <span>Lahore, Pakistan (Originated in Okara)</span>
                            </li>
                            <li>
                                <Phone size={18} className="text-gold" />
                                <span>0322-6923192</span>
                            </li>
                            <li>
                                <Clock size={18} className="text-gold" />
                                <span>Open for Pre-orders & Delivery</span>
                            </li>
                        </ul>
                        <a
                            href="https://wa.me/923226923192"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp w-full mt-4"
                        >
                            Order on WhatsApp
                        </a>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Ismail Samosa Shop. All rights reserved.</p>
                    <p className="developer-credit">Crafted with <span className="text-gold">❤</span> for a Legacy Brand.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
