import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    role: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitMessage('Thank you for your message! I\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Let's Transform Your HR Together</h1>
            <p className="hero-subtitle">Start Your AI-HR Journey Today</p>
            <p className="hero-description">
              Ready to revolutionize your human resources with AI? Let's discuss 
              how we can drive meaningful change in your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            {/* Contact Form */}
            <div>
              <h2>Get in Touch</h2>
              <p className="mb-4">
                Fill out the form below and I'll get back to you within 24 hours 
                to discuss your AI-HR transformation needs.
              </p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@company.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="role">Your Role</label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <option value="">Select your role</option>
                    <option value="ceo">CEO</option>
                    <option value="chro">CHRO/VP of People</option>
                    <option value="hr-director">HR Director</option>
                    <option value="hr-manager">HR Manager</option>
                    <option value="talent-acquisition">Talent Acquisition</option>
                    <option value="consultant">Consultant</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select service of interest</option>
                    <option value="consultation">AI-HR Consultation</option>
                    <option value="training">Training Programs</option>
                    <option value="implementation">Implementation Support</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="assessment">AI Readiness Assessment</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your AI-HR goals and challenges..."
                    rows={5}
                  />
                </div>

                <div className="form-submit">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      justifyContent: 'center'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>

                {submitMessage && (
                  <div 
                    style={{
                      marginTop: '1rem',
                      padding: '1rem',
                      borderRadius: '10px',
                      backgroundColor: submitMessage.includes('error') ? '#fee2e2' : '#dcfce7',
                      color: submitMessage.includes('error') ? '#dc2626' : '#16a34a',
                      textAlign: 'center'
                    }}
                  >
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="card">
                <h3>Contact Information</h3>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '0.5rem' }}>📧 Email</h4>
                  <p>vimal@aihrexpert.com</p>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '0.5rem' }}>📞 Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '0.5rem' }}>🌍 Location</h4>
                  <p>Global (Remote Consultations Available)</p>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '0.5rem' }}>⏰ Response Time</h4>
                  <p>Within 24 hours on business days</p>
                </div>
              </div>

              <div className="card" style={{ marginTop: '2rem' }}>
                <h3>Follow Me</h3>
                <div className="social-links" style={{ justifyContent: 'start', marginTop: '1rem' }}>
                  <a href="https://linkedin.com/in/vimalsingh" target="_blank" rel="noopener noreferrer">
                    in
                  </a>
                  <a href="https://twitter.com/vimalsingh" target="_blank" rel="noopener noreferrer">
                    𝕏
                  </a>
                  <a href="https://youtube.com/@vimalsingh" target="_blank" rel="noopener noreferrer">
                    ▶
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about AI-HR consulting and training</p>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <h4>How long does an AI-HR transformation take?</h4>
              <p>
                Timeline varies based on organization size and scope. Typically, 
                initial implementation takes 3-6 months, with full transformation 
                over 12-18 months.
              </p>
            </div>
            <div className="card">
              <h4>What's the typical ROI of AI-HR initiatives?</h4>
              <p>
                Most organizations see 3-5x ROI within the first year, with cost 
                savings ranging from $100K to $1M+ depending on company size.
              </p>
            </div>
            <div className="card">
              <h4>Do you work with small businesses?</h4>
              <p>
                Yes! I work with organizations of all sizes, from startups to 
                Fortune 500 companies. Solutions are tailored to your specific 
                needs and budget.
              </p>
            </div>
            <div className="card">
              <h4>Is remote consulting available?</h4>
              <p>
                Absolutely. Most of my consulting work is done remotely, with 
                on-site visits available for implementation and training phases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;