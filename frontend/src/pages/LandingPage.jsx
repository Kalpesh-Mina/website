import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import {
  User,
  Pill,
  LineChart,
  CheckCircle2
} from 'lucide-react';
import logo from '../assets/logo.png';
import heartRateMockup from '../assets/heartrate_mockup.png';
import medicineMockup from '../assets/medicine_reminder_mockup.png';
import aiMockup from '../assets/claudy_ai_mockup.png';
import reportMockup from '../assets/report_store_mockup.png';
import '../styles/landing.css';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const scrollToGetStarted = () => {
    document.getElementById('get-started-form')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const howItWorks = [
    {
      icon: User,
      title: "Create Profile",
      description: "Sign up in seconds and set up your personalized health profile."
    },
    {
      icon: Pill,
      title: "Add Medicines",
      description: "Log your medications or upload health reports for AI analysis."
    },
    {
      icon: LineChart,
      title: "Track & Grow",
      description: "Receive timely reminders and deeply personalized health insights."
    }
  ];

  return (
    <div className="landing-page">
      {/* Navigation Header */}
      <nav className="nav-header">
        <div className="nav-content">
          <div className="nav-logo">
            <img src={logo} alt="Health Grow Logo" className="!rounded-[50px]" />
          </div>
          <div className="nav-links bg-white/90 backdrop-blur-md md:bg-transparent md:backdrop-blur-none" id="nav-menu">
            <a href="#medicine" className="nav-link">Reminders</a>
            <a href="#heart-rate" className="nav-link">Heart Rate</a>
            <a href="#ai-health" className="nav-link">AI Assistant</a>
            <a href="#report-store" className="nav-link">Reports</a>
            <button onClick={scrollToGetStarted} className="btn-nav-cta">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title text-navy">Your Smart Health Companion</h1>
              <p className="hero-subtitle">
                India ka apna smart healthcare management platform. Track medicines, monitor heart rate, and get AI insights—all in one place.
              </p>
              <a href="/health-grow.apk" download="health-grow.apk" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box' }}>
                Download Now
              </a>
            </div>
            <div className="hero-image-container">
              <video
                src={`${process.env.PUBLIC_URL}/Health Grow.mp4`}
                className="hero-video"
                autoPlay
                loop
                muted
                playsInline
                title="Health Grow Display Video"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Banner */}
      <div className="social-proof-banner">
        <div className="container">
          <span>Proudly Made in India 🇮🇳</span>
          <span>•</span>
          <span>100% Private & Secure 🔒</span>
          <span>•</span>
          <span>AI-Powered Insights ⚡</span>
        </div>
      </div>

      {/* Feature 1: Medicine Reminders */}
      <section id="medicine" className="feature-section">
        <div className="container">
          <div className="feature-grid reverse">
            <div className="feature-image">
              <img src={medicineMockup} alt="Medicine Reminders" className="feature-mockup" />
            </div>
            <div className="feature-content">
              <h2 className="feature-title text-navy">Never miss a dose again.</h2>
              <p className="feature-description">
                Smart, timely medicine reminders keep your health on track. Easy to set up, impossible to forget. Focus on living, we'll handle the schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Heart Rate Monitor (Dark Theme) */}
      <section id="heart-rate" className="feature-section feature-dark">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-content">
              <h2 className="feature-title">Monitor your heart, instantly.</h2>
              <p className="feature-description">
                Check your heart rate anytime using our advanced wellness tracker with real-time graphs. Take control of your cardiovascular health with precision.
              </p>
            </div>
            <div className="feature-image">
              <img src={heartRateMockup} alt="Heart Rate Monitor" className="feature-mockup" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: AI Health Assistant */}
      <section id="ai-health" className="feature-section bg-soft">
        <div className="container">
          <div className="feature-grid reverse">
            <div className="feature-image">
              <img src={aiMockup} alt="AI Health Assistant" className="feature-mockup" />
            </div>
            <div className="feature-content">
              <h2 className="feature-title text-navy">Meet your AI Health Expert.</h2>
              <p className="feature-description">
                Upload medical reports and let our advanced AI simplify complex medical jargon into insights you can actually understand. Knowledge is the best medicine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Report Store */}
      <section id="report-store" className="feature-section">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-content">
              <h2 className="feature-title text-navy">Secure Medical Records Vault.</h2>
              <p className="feature-description">
                Store, manage, and access all your lab reports and prescriptions in one safe place. Never lose a paper report again.
              </p>
            </div>
            <div className="feature-image">
              <img src={reportMockup} alt="Report Store" className="feature-mockup" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <h2 className="text-navy">How It Works</h2>
            <p>Simple. Clean. Easy.</p>
          </div>

          <div className="steps-grid">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="step-card">
                <div className="step-icon-wrapper">
                  <step.icon size={32} strokeWidth={2.5} />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="get-started-form" className="final-cta-section">
        <div className="container">
          {submitted ? (
            <div style={{ padding: '4rem 0' }}>
              <CheckCircle2 size={64} color="#14B8A6" style={{ margin: '0 auto 1.5rem' }} />
              <h2 style={{ marginBottom: '1rem' }}>Thanks for Registering!</h2>
              <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                Welcome to Health Grow! Check your email for next steps.
              </p>
            </div>
          ) : (
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <h2>Start Your Healthy Journey Today</h2>
              <p style={{ fontSize: '1.15rem', opacity: 0.8, marginBottom: '2.5rem' }}>
                Join thousands of users managing their health better with Health Grow.
              </p>

              <form onSubmit={handleEmailSubmit} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    padding: '1rem 1.5rem',
                    borderRadius: '999px',
                    border: 'none',
                    width: '100%',
                    maxWidth: '350px',
                    fontSize: '1rem'
                  }}
                />
                <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                  Get Started
                </button>
              </form>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', opacity: 0.8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={20} /> Free to start
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={20} /> Secure & Private
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src={logo} alt="Health Grow Logo" className="footer-logo" />
              <p>Health is the biggest wealth</p>
            </div>
            <div className="footer-links">
              <a href="#medicine" className="footer-link">Features</a>
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-link">Terms of Service</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 KP Ventures. All rights reserved. Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;