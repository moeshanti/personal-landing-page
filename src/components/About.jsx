import React from 'react';
import { User, Award, Zap, Globe, Cpu, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className="section" style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem' }}
                >
                    <span style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                        Who I Am
                    </span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>About Me</h2>
                    <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))', marginTop: '1rem', borderRadius: '2px' }} />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(12, 1fr)',
                        gap: '1.5rem',
                        gridAutoRows: 'minmax(180px, auto)'
                    }}
                >
                    {/* Bio Card - Large */}
                    <motion.div
                        variants={itemVariants}
                        className="glass-card"
                        style={{ gridColumn: 'span 12', md: { gridColumn: 'span 8' } }}
                    >
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', height: '100%' }}>
                            <div style={{ background: 'rgba(34, 211, 238, 0.1)', padding: '1rem', borderRadius: '1rem' }}>
                                <User size={32} color="var(--accent-cyan)" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                    Professional Management Consultant
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                                    With over 25 years of experience in management consulting, digital transformation, and technology innovation.
                                    I have held significant roles at multinational technology and consulting firms, driving strategic insights and practical solutions
                                    for complex business challenges. Currently leading AJ Consulting to deliver integrated, value-focused digital transformation services.
                                </p>
                            </div>
                        </div>
                        <style>{`
              @media (min-width: 768px) {
                .glass-card:first-child { grid-column: span 8 !important; }
              }
            `}</style>
                    </motion.div>

                    {/* Stats Card 1 */}
                    <motion.div
                        variants={itemVariants}
                        className="glass-card"
                        style={{ gridColumn: 'span 6', md: { gridColumn: 'span 4' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
                    >
                        <h4 style={{ fontSize: '3.5rem', fontWeight: 700, background: 'linear-gradient(to bottom right, var(--accent-cyan), var(--accent-purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>25+</h4>
                        <p style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Years Experience</p>
                        <style>{`
              @media (min-width: 768px) {
                .glass-card:nth-child(2) { grid-column: span 4 !important; }
              }
            `}</style>
                    </motion.div>

                    {/* Awards Card */}
                    <motion.div
                        variants={itemVariants}
                        className="glass-card"
                        style={{ gridColumn: 'span 6', md: { gridColumn: 'span 4' }, background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(30, 41, 59, 0.4))' }}
                    >
                        <Award size={32} color="var(--accent-purple)" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>4x Webby Winner</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            Judge and Member of the International Academy of Digital Arts and Sciences.
                        </p>
                        <style>{`
              @media (min-width: 768px) {
                .glass-card:nth-child(3) { grid-column: span 4 !important; }
              }
            `}</style>
                    </motion.div>

                    {/* Skills Grid */}
                    <motion.div
                        variants={itemVariants}
                        className="glass-card"
                        style={{ gridColumn: 'span 12', md: { gridColumn: 'span 8' }, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}
                    >
                        {[
                            { icon: <TrendingUp size={20} />, label: 'Strategy' },
                            { icon: <Globe size={20} />, label: 'Digital Tx' },
                            { icon: <Cpu size={20} />, label: 'AI & Cloud' },
                            { icon: <Zap size={20} />, label: 'Innovation' },
                        ].map((skill, index) => (
                            <div key={index} style={{
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: '0.75rem',
                                padding: '1rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                <div style={{ color: 'var(--accent-cyan)' }}>{skill.icon}</div>
                                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{skill.label}</span>
                            </div>
                        ))}
                        <style>{`
              @media (min-width: 768px) {
                .glass-card:nth-child(4) { grid-column: span 8 !important; }
              }
            `}</style>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;
