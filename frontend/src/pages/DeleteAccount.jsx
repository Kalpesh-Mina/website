import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, AlertTriangle, CheckCircle, Mail, Smartphone } from 'lucide-react';
import '../styles/legal.css';

const DeleteAccount = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const steps = [
        { icon: Smartphone, title: 'Open the Health Grow app', description: 'Launch the application on your mobile device' },
        { icon: CheckCircle, title: 'Go to profile section', description: 'Navigate to your account settings' },
        { icon: Trash2, title: 'Tap Delete Account', description: 'Select the delete account option' },
        { icon: AlertTriangle, title: 'Verify your account', description: 'Complete the verification when prompted' },
        { icon: CheckCircle, title: 'Confirm the deletion request', description: 'Review and finalize the deletion' },
    ];

    return (
        <div className="legal-page">
            {/* Hero */}
            <div className="legal-hero delete-account-hero">
                <div className="legal-hero-content">
                    <Link to="/" className="legal-back-link" style={{ color: 'rgba(255,255,255,0.85)' }}>
                        <ArrowLeft size={18} /> Back to Home
                    </Link>
                    <div className="delete-icon-circle">
                        <Trash2 size={40} className="legal-hero-icon" />
                    </div>
                    <h1>Delete your Health Grow Account</h1>
                    <p className="delete-subtitle">Permanent account removal and data deletion</p>
                </div>
            </div>

            {/* Content */}
            <div className="legal-content">
                <div className="legal-card delete-account-card">
                    <p className="legal-intro">
                        We understand you want to delete your account. This action will permanently remove your account and all associated data from our system. Please follow the steps below to proceed.
                    </p>

                    {/* Warning Box */}
                    <div className="delete-warning-box">
                        <AlertTriangle size={24} />
                        <div>
                            <h3>⚠️ Important Notice</h3>
                            <p>This action is <strong>permanent and irreversible</strong>. Once deleted, your account, health records, medical reports, and all profile information cannot be recovered.</p>
                        </div>
                    </div>

                    {/* Steps Section */}
                    <div className="legal-section">
                        <h2>How to Delete Your Account</h2>
                        <div className="delete-steps-container">
                            {steps.map((step, index) => {
                                const IconComponent = step.icon;
                                return (
                                    <div key={index} className="delete-step-card">
                                        <div className="delete-step-number">{index + 1}</div>
                                        <div className="delete-step-icon">
                                            <IconComponent size={28} />
                                        </div>
                                        <div className="delete-step-content">
                                            <h3>{step.title}</h3>
                                            <p>{step.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* What Gets Deleted */}
                    <div className="legal-section">
                        <h2>Data Deleted Upon Confirmation</h2>
                        <div className="delete-info-grid">
                            <div className="delete-info-item">
                                <span className="delete-info-icon">📋</span>
                                <span>All health records and documents</span>
                            </div>
                            <div className="delete-info-item">
                                <span className="delete-info-icon">📊</span>
                                <span>Medical reports and uploads</span>
                            </div>
                            <div className="delete-info-item">
                                <span className="delete-info-icon">👤</span>
                                <span>Profile information and settings</span>
                            </div>
                            <div className="delete-info-item">
                                <span className="delete-info-icon">💊</span>
                                <span>Medicine reminders and logs</span>
                            </div>
                            <div className="delete-info-item">
                                <span className="delete-info-icon">💬</span>
                                <span>Chat history with AI assistant</span>
                            </div>
                            <div className="delete-info-item">
                                <span className="delete-info-icon">⚙️</span>
                                <span>All preferences and configurations</span>
                            </div>
                        </div>
                    </div>

                    {/* Support Section */}
                    <div className="legal-section">
                        <h2>Need Help?</h2>
                        <div className="delete-support-box">
                            <p>If you cannot access the app or need assistance with account deletion, our support team is here to help.</p>
                            <div className="delete-contact-info">
                                <Mail size={20} />
                                <a href="mailto:healthgrow.in@gmail.com">healthgrow.in@gmail.com</a>
                            </div>
                            <p className="delete-support-note">We typically respond to support requests within 24-48 hours.</p>
                        </div>
                    </div>

                    {/* Final Note */}
                    <div className="delete-final-note">
                        <p>
                            Once your account is deleted, the process cannot be undone. All your data will be permanently removed from our servers and backups within 30 days.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteAccount;
