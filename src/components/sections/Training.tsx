import React from 'react';
import { Link } from 'react-router-dom';
import { trainingPrograms } from '../../data/mockdata';

const Training: React.FC = () => {
  return (
    <div className="training">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>AI-HR Training Programs</h1>
            <p className="hero-subtitle">Transform Your Team's AI Capabilities</p>
            <p className="hero-description">
              Comprehensive training programs designed to help HR professionals 
              and executives master AI integration and drive organizational transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Choose Your Learning Path</h2>
            <p>Programs designed for different roles and experience levels</p>
          </div>
          <div className="grid grid-3">
            {trainingPrograms.map((program:any) => (
              <div key={program.id} className={`card program-card ${program.popular ? 'popular' : ''}`}>
                <div className="card-header">
                  <h3 className="card-title">{program.title}</h3>
                  <div className="program-price">{program.price}</div>
                  <div className="program-duration">{program.duration}</div>
                </div>
                <p className="mb-3">{program.description}</p>
                <ul className="program-features">
                  {program.features.map((feature: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary">
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-4">
            <h2>What You'll Learn</h2>
            <p>Core competencies developed through our training programs</p>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">🧠 AI Strategy Development</h3>
              </div>
              <p>
                Learn to create comprehensive AI strategies that align with business 
                objectives and drive measurable results in your HR operations.
              </p>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">📊 Data-Driven Decision Making</h3>
              </div>
              <p>
                Master the art of using HR analytics and AI insights to make 
                informed decisions that improve employee experiences and outcomes.
              </p>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">🔧 Tool Implementation</h3>
              </div>
              <p>
                Gain hands-on experience with leading AI-HR tools and platforms, 
                including implementation best practices and troubleshooting.
              </p>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">📈 ROI Measurement</h3>
              </div>
              <p>
                Develop frameworks for measuring and demonstrating the return 
                on investment of AI initiatives to stakeholders and executives.
              </p>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">👥 Change Management</h3>
              </div>
              <p>
                Learn proven strategies for managing organizational change and 
                helping teams adapt to AI-powered HR processes.
              </p>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">⚖️ Ethical AI Practices</h3>
              </div>
              <p>
                Understand the importance of ethical AI implementation and 
                learn to build fair, transparent, and unbiased AI systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Methodology */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Our Training Approach</h2>
            <p>Proven methodology for effective AI-HR learning</p>
          </div>
          <div className="grid grid-4">
            <div className="card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📚</div>
              <h4>Theory & Fundamentals</h4>
              <p>Solid foundation in AI concepts and HR applications</p>
            </div>
            <div className="card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛠️</div>
              <h4>Hands-On Practice</h4>
              <p>Real-world exercises with actual AI-HR tools</p>
            </div>
            <div className="card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💼</div>
              <h4>Case Studies</h4>
              <p>Learn from successful AI-HR transformations</p>
            </div>
            <div className="card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
              <h4>Personal Coaching</h4>
              <p>One-on-one guidance tailored to your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Who Should Attend</h2>
            <p>Our programs cater to various roles and experience levels</p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">HR Professionals</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>✓ HR Directors and Managers</li>
                <li>✓ Talent Acquisition Specialists</li>
                <li>✓ Learning & Development Leaders</li>
                <li>✓ HR Business Partners</li>
                <li>✓ People Operations Teams</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">C-Suite Executives</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>✓ Chief Executive Officers</li>
                <li>✓ Chief Human Resources Officers</li>
                <li>✓ Chief Technology Officers</li>
                <li>✓ Chief Operating Officers</li>
                <li>✓ VP of People</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Consultants & Coaches</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>✓ HR Consultants</li>
                <li>✓ Organizational Development Specialists</li>
                <li>✓ Executive Coaches</li>
                <li>✓ Change Management Professionals</li>
                <li>✓ Business Analysts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Training Success Stories</h2>
            <p>Real results from our training participants</p>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <h4>"Increased Efficiency by 60%"</h4>
              <p>
                "After completing Vimal's AI-HR Transformation Bootcamp, our team 
                implemented automated screening processes that reduced our time-to-hire 
                by 60% while improving candidate quality significantly."
              </p>
              <div style={{ marginTop: '1rem', fontWeight: '600' }}>
                - Sarah Johnson, HR Director at TechCorp
              </div>
            </div>
            <div className="card">
              <h4>"$500K Cost Savings in 6 Months"</h4>
              <p>
                "The Executive AI Leadership Program gave me the strategic framework 
                to implement AI across our HR operations. We achieved $500K in cost 
                savings within 6 months of graduation."
              </p>
              <div style={{ marginTop: '1rem', fontWeight: '600' }}>
                - Michael Chen, CEO at InnovateNow
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center">
            <h2>Ready to Start Learning?</h2>
            <p className="mb-4">
              Join hundreds of HR professionals who've already transformed 
              their careers and organizations through AI-HR training.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                Schedule a Consultation
              </Link>
              <Link to="/videos" className="btn btn-secondary">
                Watch Sample Videos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;