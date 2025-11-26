import React from 'react';
import { ArrowRight, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section
            id="home"
            className="section"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Animated Background Mesh */}
            <div
                className="mesh-bg"
                style={{
                    top: '-10%',
                    right: '-5%',
                    background: 'radial-gradient(circle, var(--accent-cyan) 0%, transparent 70%)',
                    animationDelay: '0s'
                }}
            />
            <div
                className="mesh-bg"
                style={{
                    bottom: '-10%',
                    left: '-5%',
                    background: 'radial-gradient(circle, var(--accent-purple) 0%, transparent 70%)',
                    animationDelay: '5s'
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ maxWidth: '800px' }}
                >
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        style={{
                            color: 'var(--accent-cyan)',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            marginBottom: '1rem',
                            display: 'block',
                            textTransform: 'uppercase'
                        }}
                    >
                        Hello, I'm
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        style={{
                            fontSize: 'clamp(3.5rem, 6vw, 6rem)',
                            fontWeight: 800,
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                        }}
                    >
                        Mohammed <span className="gradient-text">ElShanti</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        style={{
                            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                            color: 'var(--text-secondary)',
                            marginBottom: '2rem',
                            fontWeight: 500,
                        }}
                    >
                        CEO of AJ Consulting.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        style={{
                            fontSize: '1.2rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '3rem',
                            maxWidth: '600px',
                            lineHeight: 1.8,
                        }}
                    >
                        Driving business growth and innovation through strategic leadership.
                        Specializing in management consulting, digital transformation, and organizational excellence.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
                    >
                        <a href="#contact" className="btn btn-primary">
                            Get in Touch <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mohammadelshanti/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                            style={{
                                border: '1px solid var(--glass-border)',
                                color: 'var(--text-primary)',
                                background: 'rgba(255,255,255,0.03)',
                                backdropFilter: 'blur(10px)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                                e.currentTarget.style.color = 'var(--accent-cyan)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                                e.currentTarget.style.color = 'var(--text-primary)';
                            }}
                        >
                            <Linkedin size={18} style={{ marginRight: '0.5rem' }} /> LinkedIn Profile
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
