import React from 'react';
import { Link } from 'react-router-dom';
import { achievements } from '../../data/mockdata';

const About: React.FC = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>About Vimal Singh</h1>
            <p className="hero-subtitle">AI-HR Expert & Transformation Leader</p>
            <p className="hero-description">
              Bridging the gap between human potential and artificial intelligence 
              to create more efficient, effective, and empathetic workplaces.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2>My Journey</h2>
              <p>
                With over 13 years of experience in human resources and technology, 
                I've witnessed the evolution of HR from manual processes to AI-powered 
                transformation. My passion lies in helping organizations harness the 
                power of artificial intelligence while maintaining the human touch 
                that makes great workplaces.
              </p>
              <p>
                I started my career in traditional HR, working with companies of all 
                sizes to optimize their human capital strategies. As technology evolved, 
                I saw an opportunity to revolutionize how we approach talent acquisition, 
                employee engagement, and organizational development.
              </p>
              <p>
                Today, I'm proud to have helped over 50 organizations transform their 
                HR operations, resulting in more than $1.5 million in cost savings 
                and dramatically improved employee experiences.
              </p>
            </div>
            <div>
              <img 
                src="/api/placeholder/500/400" 
                alt="Vimal Singh" 
                style={{ width: '100%', borderRadius: '20px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-4">
            <h2>My Impact</h2>
            <p>Measurable results from AI-HR transformation initiatives</p>
          </div>
          <div className="grid grid-4">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-value">{achievement.value}</div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Areas of Expertise</h2>
            <p>Core competencies in AI-HR transformation</p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">AI Strategy & Implementation</h3>
              </div>
              <p>
                Developing comprehensive AI strategies for HR departments, 
                including tool selection, implementation roadmaps, and 
                change management processes.
              </p>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Training & Development</h3>
              </div>
              <p>
                Creating and delivering training programs that upskill HR 
                professionals and executives in AI technologies and best practices.
              </p>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">ROI Optimization</h3>
              </div>
              <p>
                Helping organizations measure and maximize the return on 
                investment of their AI-HR initiatives through data-driven approaches.
              </p>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Process Automation</h3>
              </div>
              <p>
                Identifying and automating repetitive HR tasks to free up 
                time for strategic initiatives and improve operational efficiency.
              </p>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Talent Analytics</h3>
              </div>
              <p>
                Implementing predictive analytics for talent acquisition, 
                retention, and performance management to make data-driven decisions.
              </p>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Leadership Coaching</h3>
              </div>
              <p>
                Providing executive coaching to C-suite leaders on AI adoption 
                strategies and organizational transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-4">
            <h2>My Philosophy</h2>
            <p>The principles that guide my approach to AI-HR transformation</p>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Human-Centered AI</h3>
              </div>
              <p>
                AI should augment human capabilities, not replace human judgment. 
                The best AI-HR solutions enhance the human experience while 
                maintaining empathy and personal connection.
              </p>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Practical Implementation</h3>
              </div>
              <p>
                Technology should solve real problems. I focus on practical, 
                measurable solutions that deliver immediate value while building 
                foundation for long-term transformation.
              </p>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Continuous Learning</h3>
              </div>
              <p>
                The AI landscape evolves rapidly. I emphasize building learning 
                organizations that can adapt and evolve with new technologies 
                and best practices.
              </p>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Ethical AI</h3>
              </div>
              <p>
                AI in HR must be transparent, fair, and unbiased. I help 
                organizations implement ethical AI practices that protect 
                employee rights and promote inclusivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>Let's Transform Your HR Together</h2>
            <p className="mb-4">
              Ready to unlock the potential of AI in your human resources? 
              Let's discuss how we can drive meaningful change in your organization.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                Schedule a Consultation
              </Link>
              <Link to="/training" className="btn btn-secondary">
                Explore Training Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;