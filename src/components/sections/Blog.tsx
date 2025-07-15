import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/mockdata';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>AI-HR Insights & Strategies</h1>
            <p className="hero-subtitle">Thought Leadership in AI-Powered Human Resources</p>
            <p className="hero-description">
              Discover the latest trends, strategies, and best practices for 
              implementing AI in human resources. Stay ahead with actionable insights.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Latest Articles</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              {categories.map((category) => (
                <button
                  key={String(category)}
                  onClick={() => setSelectedCategory(category)}
                  className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="blog-grid">
            {filteredPosts.map((post) => (
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <Link to={`/blog/${post.id}`} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center">
            <h2>Stay Updated</h2>
            <p className="mb-4">
              Subscribe to get the latest AI-HR insights delivered to your inbox
            </p>
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  style={{
                    flex: '1',
                    padding: '1rem',
                    border: '2px solid var(--border)',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    minWidth: '250px'
                  }}
                />
                <button className="btn btn-primary">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Popular Topics</h2>
            <p>Explore our most-read content categories</p>
          </div>
          <div className="grid grid-3">
            <div className="card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
              <h4>AI Implementation</h4>
              <p>Step-by-step guides for implementing AI tools in HR processes</p>
              <Link to="/blog" className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                Read Articles
              </Link>
            </div>
            <div className="card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
              <h4>ROI & Metrics</h4>
              <p>How to measure and maximize return on AI-HR investments</p>
              <Link to="/blog" className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                Read Articles
              </Link>
            </div>
            <div className="card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👥</div>
              <h4>Team Development</h4>
              <p>Building AI-ready HR teams and managing organizational change</p>
              <Link to="/blog" className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                Read Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;