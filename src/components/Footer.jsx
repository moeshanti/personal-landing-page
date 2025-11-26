import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" style={{ backgroundColor: 'rgba(3, 7, 18, 0.5)', padding: '4rem 0 2rem', borderTop: '1px solid var(--glass-border)' }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Let's Connect</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', marginBottom: '2rem' }}>
                        Interested in discussing business opportunities or consulting services? Feel free to reach out.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a
                            href="https://www.linkedin.com/in/mohammadelshanti/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card"
                            style={{ padding: '1rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Linkedin size={24} color="var(--text-primary)" />
                        </a>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <p>&copy; {new Date().getFullYear()} Mohammed ElShanti. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
