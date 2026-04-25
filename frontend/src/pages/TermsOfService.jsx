import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft, ArrowRight } from 'lucide-react';
import '../styles/legal.css';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            {/* Hero */}
            <div className="legal-hero legal-hero-terms">
                <div className="legal-hero-content">
                    <Link to="/" className="legal-back-link" style={{ color: 'rgba(255,255,255,0.85)' }}>
                        <ArrowLeft size={18} /> Back to Home
                    </Link>
                    <div className="delete-icon-circle">
                        <FileText size={40} className="legal-hero-icon" />
                    </div>
                    <h1>Terms of Service</h1>
                    <p className="delete-subtitle">Our service terms and user agreement</p>
                    <p className="legal-effective-date">Effective Date: February 19, 2026</p>
                </div>
            </div>

            {/* Content */}
            <div className="legal-content">
                <div className="legal-card legal-card-enhanced">
                    <p className="legal-intro">
                        Welcome to Health Grow. These Terms of Service govern your access to and use of our
                        platform, including our mobile app and website. By creating an account or using our
                        services, you agree to be bound by these terms.
                    </p>

                    <div className="legal-section">
                        <h2>Acceptance of Terms</h2>
                        <p>By accessing or using Health Grow, you confirm that you are at least 13 years old
                            and agree to comply with and be bound by these Terms of Service. If you do not
                            agree, please do not use our platform.</p>
                    </div>

                    <div className="legal-section">
                        <h2>Description of Service</h2>
                        <p>Health Grow is a healthcare management platform that provides:</p>
                        <ul>
                            <li>Smart medicine reminders and health notifications</li>
                            <li>AI-powered medical report analysis</li>
                            <li>Secure cloud storage for health records</li>
                            <li>AI health assistant for health-related queries</li>
                            <li>Personal health dashboard and tracking</li>
                        </ul>
                    </div>

                    <div className="legal-section">
                        <h2>User Accounts</h2>
                        <p>You are responsible for maintaining the confidentiality of your account credentials.
                            You agree to provide accurate and complete information when creating your account
                            and to update it as necessary.</p>
                        <p>You are solely responsible for all activity that occurs under your account. You
                            must notify us immediately if you suspect any unauthorized use of your account.</p>
                    </div>

                    <div className="legal-section">
                        <h2>User Responsibilities</h2>
                        <p>When using Health Grow, you agree to:</p>
                        <ul>
                            <li>Use the platform only for lawful purposes</li>
                            <li>Provide accurate health information for your own use</li>
                            <li>Not attempt to reverse-engineer, modify, or disrupt the platform</li>
                            <li>Not upload malicious content, viruses, or harmful files</li>
                            <li>Not impersonate any other person or misrepresent your identity</li>
                        </ul>
                    </div>

                    <div className="legal-section">
                        <h2>Medical Disclaimer</h2>
                        <p><strong>Health Grow is not a substitute for professional medical advice, diagnosis,
                            or treatment.</strong> The AI-powered health insights and report analysis are for
                            informational purposes only. Always consult a qualified healthcare provider for
                            medical decisions.</p>
                        <p>We do not guarantee the accuracy or completeness of AI-generated health insights.
                            You acknowledge that reliance on any information provided by Health Grow is at
                            your own risk.</p>
                    </div>

                    <div className="legal-section">
                        <h2>Intellectual Property</h2>
                        <p>All content, features, and functionality of Health Grow — including the design,
                            logos, text, and software — are the exclusive property of Health Grow and are
                            protected by copyright, trademark, and other intellectual property laws.</p>
                        <p>You may not reproduce, distribute, or create derivative works from any part of
                            the platform without our prior written consent.</p>
                    </div>

                    <div className="legal-section">
                        <h2>Limitation of Liability</h2>
                        <p>To the maximum extent permitted by law, Health Grow and its team shall not be
                            liable for any indirect, incidental, special, or consequential damages arising
                            from your use of the platform.</p>
                        <p>Our total liability for any claim related to the service shall not exceed the
                            amount you paid us (if any) in the 12 months preceding the claim.</p>
                    </div>

                    <div className="legal-section">
                        <h2>Termination</h2>
                        <p>We reserve the right to suspend or terminate your account at any time if you
                            violate these Terms of Service or engage in behavior that is harmful to other
                            users or the platform.</p>
                        <p>You may delete your account at any time through the app settings. Upon deletion,
                            your data will be removed in accordance with our Privacy Policy.</p>
                    </div>

                    <div className="legal-section">
                        <h2>Governing Law</h2>
                        <p>These Terms of Service are governed by and construed in accordance with the laws
                            of India. Any disputes arising from these terms shall be subject to the exclusive
                            jurisdiction of the courts in India.</p>
                    </div>

                    <div className="legal-section">
                        <h2>Changes to Terms</h2>
                        <p>We may update these Terms of Service from time to time. We will notify you of
                            significant changes through the app or via email. Your continued use of
                            Health Grow after any changes constitutes acceptance of the updated terms.</p>
                    </div>

                    <div className="legal-section">
                        <h2>Contact Us</h2>
                        <p>For questions about these Terms of Service, contact us:</p>
                        <div className="legal-contact-card">
                            <p><strong>Health Grow</strong></p>
                            <p>Email: <a href="mailto:healthgrow.in@gmail.com">healthgrow.in@gmail.com</a></p>
                        </div>
                    </div>

                    <Link to="/privacy" className="legal-cross-link">
                        Read our Privacy Policy <ArrowRight size={16} />
                    </Link>
                </div>
            </div>

            {/* Simple Footer */}
            <footer className="legal-footer">
                <p>© 2026 KP Ventures. All rights reserved. Made with ❤️ in India</p>
                <p style={{ marginTop: '0.5rem', opacity: 0.8, fontSize: '0.9rem' }}>A Product of KP Ventures</p>
            </footer>
        </div>
    );
};

export default TermsOfService;
