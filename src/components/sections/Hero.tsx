import React from 'react';
import { Link } from 'react-router-dom';
import { achievements, trainingPrograms, blogPosts, testimonials } from '../../data/mockdata';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="fade-in-up">Vimal Singh</h1>
            <p className="hero-subtitle fade-in-up">AI-HR Expert & Transformation Leader</p>
            <p className="hero-description fade-in-up">
              Empowering organizations to harness the power of AI in human resources. 
              With 13+ years of experience and $1.5M+ in cost savings delivered, 
              I help companies transform their HR operations through intelligent automation.
            </p>
            <Link to="/contact" className="cta-button fade-in-up">
              Start Your AI-HR Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Proven Results</h2>
            <p>Real impact delivered through AI-HR transformation</p>
          </div>
          <div className="grid grid-4">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="achievement-card fade-in-up">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-value">{achievement.value}</div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Training Programs</h2>
            <p>Comprehensive AI-HR training designed for leaders and teams</p>
          </div>
          <div className="grid grid-3">
            {trainingPrograms.slice(0, 3).map((program) => (
              <div key={program.id} className={`card program-card ${program.popular ? 'popular' : ''}`}>
                <div className="card-header">
                  <h3 className="card-title">{program.title}</h3>
                  <div className="program-price">{program.price}</div>
                  <div className="program-duration">{program.duration}</div>
                </div>
                <p className="mb-3">{program.description}</p>
                <ul className="program-features">
                  {program.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Link to="/training" className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/training" className="btn btn-secondary">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Latest Insights</h2>
            <p>Thoughts on AI-HR trends and transformation strategies</p>
          </div>
          <div className="blog-grid">
            {blogPosts.slice(0, 3).map((post) => (
              <article key={post.id} className="card blog-card">
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="blog-title">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="blog-excerpt">{post.excerpt}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/blog" className="btn btn-secondary">
              Read All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-4">
            <h2>What Leaders Say</h2>
            <p>Testimonials from executives who've transformed their organizations</p>
          </div>
          <div className="grid grid-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">{testimonial.name}</div>
                <div className="testimonial-role">{testimonial.role}, {testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>Ready to Transform Your HR?</h2>
            <p className="mb-4">
              Join 80+ CXOs who've already started their AI-HR transformation journey
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                Schedule a Consultation
              </Link>
              <Link to="/training" className="btn btn-secondary">
                Explore Training
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;