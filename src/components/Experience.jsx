import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'CEO',
            company: 'AJ Consulting then AJ²',
            period: 'Mar 2006 - Present',
            description: 'Leading the firm in providing top-tier management and cutting-edge technology consulting services and products. Overseeing strategic direction, client relations, and operational growth.',
            current: true,
        },
        {
            id: 2,
            role: 'Member and Judge',
            company: 'The Webby Awards',
            period: 'Feb 2017 - Dec 2023',
            description: 'Served as a judge for the International Academy of Digital Arts and Sciences, evaluating excellence on the internet.',
            current: false,
        },
        {
            id: 3,
            role: 'CEO',
            company: 'ArabJet Airlines',
            period: 'Jul 2005 - Apr 2011',
            description: 'Led the establishment and operations of the airline, managing regulatory compliance, fleet acquisition, and strategic partnerships.',
            current: false,
        },
        {
            id: 4,
            role: 'Regional Business Dev Manager and Consulting & Integration Practice Manager',
            company: 'HP',
            period: 'Mar 2003 - Jul 2005',
            description: ' drove business development initiatives across the region, focusing on enterprise solutions (SAP and Oracle ERP) and strategic alliances.',
            current: false,
        },
        {
            id: 5,
            role: 'Regional Principal',
            company: 'IBM',
            period: 'Sep 2000 - Mar 2003',
            description: 'Managed key tech consulting engagements and client relationships in the Middle East region.',
            current: false,
        },
        {
            id: 6,
            role: 'Regional Manager',
            company: 'Swiss International Air Lines',
            period: 'Jan 1999 - Sep 2000',
            description: 'Oversaw regional operations and strategy for the airline group specifically its technology offerings via SwissAir specialist tech firm (Atraxis).',
            current: false,
        },
        {
            id: 7,
            role: 'Senior Managing Consultant',
            company: 'PwC',
            period: 'Jan 1996 - Jan 1999',
            description: 'Led management consulting projects focusing on technology, ERP, process improvement and organizational change.',
            current: false,
        },
        {
            id: 8,
            role: 'Senior Consultant',
            company: 'KPMG',
            period: 'Sep 1994 - Jan 1996',
            description: 'Provided consulting services in financial management and operational efficiency.',
            current: false,
        },
        {
            id: 9,
            role: 'Consultant',
            company: 'Accenture',
            period: 'Sep 1993 - Sep 1994',
            description: 'Started career in technology and management consulting.',
            current: false,
        },
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem' }}
                >
                    <span style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                        Career Path
                    </span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Experience</h2>
                    <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))', marginTop: '1rem', borderRadius: '2px' }} />
                </motion.div>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                    {/* Vertical Line */}
                    <div
                        style={{
                            position: 'absolute',
                            left: '20px',
                            top: '0',
                            bottom: '0',
                            width: '2px',
                            background: 'rgba(255,255,255,0.1)',
                            zIndex: 0
                        }}
                    />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ marginBottom: '3rem', position: 'relative', paddingLeft: '3.5rem' }}
                        >
                            {/* Timeline Dot */}
                            <div
                                style={{
                                    position: 'absolute',
                                    left: '11px',
                                    top: '24px',
                                    width: '20px',
                                    height: '20px',
                                    background: exp.current ? 'var(--accent-cyan)' : 'var(--bg-space)',
                                    border: `2px solid ${exp.current ? 'var(--accent-cyan)' : 'var(--text-secondary)'}`,
                                    borderRadius: '50%',
                                    zIndex: 1,
                                    boxShadow: exp.current ? '0 0 15px var(--accent-cyan)' : 'none'
                                }}
                            />

                            <div className="glass-card" style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>{exp.role}</h3>
                                        <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-purple)', fontWeight: 500 }}>{exp.company}</h4>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            backgroundColor: 'rgba(255,255,255,0.05)',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '999px',
                                            fontSize: '0.9rem',
                                            color: 'var(--text-secondary)',
                                            height: 'fit-content',
                                            border: '1px solid rgba(255,255,255,0.05)'
                                        }}
                                    >
                                        <Calendar size={14} />
                                        {exp.period}
                                    </div>
                                </div>

                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
