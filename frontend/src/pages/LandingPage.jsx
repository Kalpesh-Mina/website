import React, { useState, useRef, useEffect } from 'react';
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

const REVIEWS = [
  {
    name: "Priya Sharma",
    city: "Mumbai, Maharashtra",
    avatar: "PS",
    rating: 5,
    date: "March 2026",
    review: "Ekdum mast app hai! Medicine reminders ne meri life badal di. Ab kabhi dose miss nahi hoti. Bahut easy to use hai aur design bhi kaafi sundar hai."
  },
  {
    name: "Rahul Verma",
    city: "New Delhi",
    avatar: "RV",
    rating: 5,
    date: "April 2026",
    review: "Heart rate monitor feature is amazing! Doctor ne bola tha apna BP track karo, yeh app perfect hai uske liye. AI health assistant bhi bohot helpful hai reports samjhane mein."
  },
  {
    name: "Ananya Iyer",
    city: "Bengaluru, Karnataka",
    avatar: "AI",
    rating: 5,
    date: "April 2026",
    review: "I uploaded my blood test reports and the AI explained everything in simple English. It's like having a doctor friend available 24/7. Highly recommend to everyone!"
  },
  {
    name: "Suresh Patel",
    city: "Ahmedabad, Gujarat",
    avatar: "SP",
    rating: 4,
    date: "February 2026",
    review: "Maro favourite health app chhe. Medicine reminder ane report store banne features superb chhe. Family na badhane install karavi didhu che. Khub sari app!"
  },
  {
    name: "Kavitha Reddy",
    city: "Hyderabad, Telangana",
    avatar: "KR",
    rating: 5,
    date: "March 2026",
    review: "My mother is diabetic and this app helps her track everything beautifully. The reminders work even without internet. Best health app I've used so far!"
  },
  {
    name: "Arjun Mehta",
    city: "Pune, Maharashtra",
    avatar: "AM",
    rating: 5,
    date: "April 2026",
    review: "Security aur privacy ke mamle mein full marks. Mera data safe hai aur app ek dum smooth chalta hai. Made in India with quality — proud feeling aati hai!"
  }
];

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const reviewsRef = useRef(null);

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

  // Auto-scroll reviews carousel via requestAnimationFrame
  useEffect(() => {
    const el = reviewsRef.current;
    if (!el) return;
    let animId;
    let paused = false;

    const tick = () => {
      if (!paused) {
        // Seamless infinite loop: jump back by half when we reach the clone
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        } else {
          el.scrollLeft += 0.6;
        }
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    const pause  = () => { paused = true; };
    const resume = () => { paused = false; };

    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend',   resume);

    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend',   resume);
    };
  }, []);

  const scrollReviews = (dir) => {
    const el = reviewsRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 320, behavior: 'smooth' });
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
              <a href="https://github.com/Kalpesh-Mina/website/releases/download/V3.00/Health-Grow.apk" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box' }}>
                Download Health Grow
              </a>
              <div className="download-sticker">
                <span className="sticker-icon">👆</span>
                <span className="sticker-text">Click to start download</span>
              </div>

              {/* Download Stats Bar */}
              <div className="download-stats-bar">
                <div className="stats-divider"></div>
                <div className="stats-content">
                  <div className="stat-item">
                    <div className="stat-stars">
                      {'★★★★★'.split('').map((s, i) => (
                        <span key={i} className="star filled">{s}</span>
                      ))}
                    </div>
                    <span className="stat-label">4.8 / 5 Rating</span>
                  </div>
                  <div className="stat-separator">|</div>
                  <div className="stat-item">
                    <span className="stat-count">10,000+</span>
                    <span className="stat-label">Downloads</span>
                  </div>
                  <div className="stat-separator">|</div>
                  <div className="stat-item">
                    <span className="stat-count">500+</span>
                    <span className="stat-label">Reviews</span>
                  </div>
                </div>
              </div>
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
          <span>Proudly Made in India ❤️</span>
          <span>•</span>
          <span>100% Private & Secure 🔒</span>
          <span>•</span>
          <span>AI-Powered Insights ⚡</span>
        </div>
      </div>

      {/* Indian User Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <div className="section-header">
            <div className="reviews-badge">⭐ User Reviews</div>
            <h2 className="text-navy">Loved Across India ❤️</h2>
            <p>Real reviews from real Health Grow users</p>
          </div>

          {/* Carousel Controls */}
          <div className="reviews-carousel-wrapper">
            <button className="carousel-btn carousel-btn-prev" onClick={() => scrollReviews(-1)} aria-label="Previous review">&#8592;</button>
            <div className="reviews-track" ref={reviewsRef}>
              {/* Original set */}
              {REVIEWS.map((review, idx) => (
                <div key={`a-${idx}`} className="review-card">
                  <div className="review-header">
                    <div className="reviewer-avatar">{review.avatar}</div>
                    <div className="reviewer-info">
                      <h4 className="reviewer-name">{review.name}</h4>
                      <span className="reviewer-city">📍 {review.city}</span>
                    </div>
                    <div className="review-verified">✓ Verified</div>
                  </div>
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`review-star ${i < review.rating ? 'filled' : 'empty'}`}>★</span>
                    ))}
                    <span className="review-date">{review.date}</span>
                  </div>
                  <p className="review-text">"{review.review}"</p>
                </div>
              ))}
              {/* Cloned set for seamless loop */}
              {REVIEWS.map((review, idx) => (
                <div key={`b-${idx}`} className="review-card" aria-hidden="true">
                  <div className="review-header">
                    <div className="reviewer-avatar">{review.avatar}</div>
                    <div className="reviewer-info">
                      <h4 className="reviewer-name">{review.name}</h4>
                      <span className="reviewer-city">📍 {review.city}</span>
                    </div>
                    <div className="review-verified">✓ Verified</div>
                  </div>
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`review-star ${i < review.rating ? 'filled' : 'empty'}`}>★</span>
                    ))}
                    <span className="review-date">{review.date}</span>
                  </div>
                  <p className="review-text">"{review.review}"</p>
                </div>
              ))}
            </div>
            <button className="carousel-btn carousel-btn-next" onClick={() => scrollReviews(1)} aria-label="Next review">&#8594;</button>
          </div>
          {/* Overall Rating Summary */}
          <div className="rating-summary">
            <div className="rating-big-score">4.8</div>
            <div className="rating-summary-right">
              <div className="rating-stars-large">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i} className="star-large filled">{s}</span>
                ))}
              </div>
              <p className="rating-summary-text">Based on <strong>500+ reviews</strong> from verified users</p>
            </div>
          </div>
        </div>
      </section>

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
              <p style={{ marginTop: '0.5rem', color: '#0EA5E9', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase', fontSize: '0.9rem' }}>A Product of KP Ventures</p>
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