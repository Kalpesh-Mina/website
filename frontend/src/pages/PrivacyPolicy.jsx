import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, ArrowRight } from 'lucide-react';
import '../styles/legal.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            {/* Hero */}
            <div className="legal-hero legal-hero-privacy">
                <div className="legal-hero-content">
                    <Link to="/" className="legal-back-link" style={{ color: 'rgba(255,255,255,0.85)' }}>
                        <ArrowLeft size={18} /> Back to Home
                    </Link>
                    <div className="delete-icon-circle">
                        <Shield size={40} className="legal-hero-icon" />
                    </div>
                    <h1>Privacy Policy</h1>
                    <p className="delete-subtitle">How we protect and use your personal data</p>
                    <p className="legal-effective-date">Effective Date: February 19, 2026</p>
                </div>
            </div>

            {/* Content */}
            <div className="legal-content">
                <div className="legal-card legal-card-enhanced">
                    <p className="legal-intro">
                        At Health Grow, your privacy is our priority. This Privacy Policy explains how we collect,
                        use, store, and protect your personal information when you use our platform. By using
                        Health Grow, you agree to the practices described in this policy.
                    </p>

                    <div className="legal-section">
                        <h2>Information We Collect</h2>
                        <h3>Personal Information</h3>
                        <p>When you create an account or use our services, we may collect:</p>
                        <ul>
                            <li>Name, email address, and phone number</li>
                            <li>Date of birth and blood group</li>
                            <li>Profile photo (if uploaded)</li>
                        </ul>
                        <h3>Health Data</h3>
                        <p>To provide our core features, we may collect:</p>
                        <ul>
                            <li>Medicine names, dosage, and reminder schedules</li>
                            <li>Medical reports and health documents you upload</li>
                            <li>Health-related queries sent to our AI assistant</li>
                        </ul>
                        <h3>Usage Data</h3>
                        <p>We automatically collect device information, app usage analytics, and crash reports
                            to improve the platform's performance and reliability.</p>
                    </div>

                    <div className="legal-section">
                        <h2>How We Use Your Information</h2>
                        <p>We use your information to:</p>
                        <ul>
                            <li>Deliver medicine reminders and health notifications</li>
                            <li>Analyze your medical reports using AI and provide health insights</li>
                            <li>Personalize your dashboard and health experience</li>
                            <li>Improve our platform, fix bugs, and develop new features</li>
                            <li>Communicate important updates and service announcements</li>
                        </ul>
                    </div>

                    <div className="legal-section">
                        <h2>Data Storage &amp; Security</h2>
                        <p>Your data is stored securely using industry-standard encryption and cloud
                            infrastructure. We use Firebase Authentication for secure sign-in and
                            Supabase for encrypted cloud storage of your health records.</p>
                        <p>We implement strict access controls so that only you can view your personal
                            health data. We do not sell or rent your personal information to anyone.</p>
                    </div>

                    <div className="legal-section">
                        <h2>Third-Party Services</h2>
                        <p>Health Grow integrates with trusted third-party services to deliver a seamless experience:</p>
                        <ul>
                            <li><strong>Firebase</strong> — Authentication and user management</li>
                            <li><strong>Supabase</strong> — Secure cloud storage for health reports</li>
                            <li><strong>PostHog</strong> — Privacy-friendly analytics to improve the app</li>
                            <li><strong>AI Services</strong> — To power report analysis and health assistant features</li>
                        </ul>
                        <p>These services have their own privacy policies, and we encourage you to review them.</p>
                    </div>

                    <div className="legal-section">
                        <h2>Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access, update, or delete your personal information at any time</li>
                            <li>Request a copy of all data we hold about you</li>
                            <li>Withdraw consent and delete your account</li>
                            <li>Opt out of non-essential communications</li>
                        </ul>
                    </div>

                    <div className="legal-section">
                        <h2>Data Retention</h2>
                        <p>We retain your personal data only for as long as your account is active or as
                            needed to provide you our services. If you delete your account, we will
                            remove your data within 30 days, except where retention is required by law.</p>
                    </div>

                    <div className="legal-section">
                        <h2>Children's Privacy</h2>
                        <p>Health Grow is not intended for children under 13 years of age. We do not
                            knowingly collect personal information from children. If you believe a child
                            has provided us with personal data, please contact us immediately.</p>
                    </div>

                    <div className="legal-section">
                        <h2>Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. We will notify you of
                            any significant changes through the app or via email. Continued use of
                            Health Grow after changes constitutes acceptance of the updated policy.</p>
                    </div>

                    <div className="legal-section">
                        <h2>Contact Us</h2>
                        <p>If you have any questions or concerns about this Privacy Policy, contact us:</p>
                        <div className="legal-contact-card">
                            <p><strong>Health Grow</strong></p>
                            <p>Email: <a href="mailto:healthgrow.in@gmail.com">healthgrow.in@gmail.com</a></p>
                        </div>
                    </div>

                    <Link to="/terms" className="legal-cross-link">
                        Read our Terms of Service <ArrowRight size={16} />
                    </Link>
                </div>
            </div>

            {/* Simple Footer */}
            <footer className="legal-footer">
                © 2026 Health Grow. All rights reserved. Made with ❤️ in India
            </footer>
        </div>
    );
};

export default PrivacyPolicy;
