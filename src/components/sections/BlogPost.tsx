import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../../data/mockdata';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <div className="blog-post">
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="blog-meta" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
              <span className="blog-category">{post.category}</span>
              <span>{post.readTime}</span>
            </div>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>{post.title}</h1>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Published on {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <img 
              src={post.image} 
              alt={post.title} 
              style={{ 
                width: '100%', 
                height: '400px', 
                objectFit: 'cover', 
                borderRadius: '20px',
                marginBottom: '3rem'
              }}
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div 
              className="blog-content"
              style={{ 
                fontSize: '1.125rem', 
                lineHeight: '1.8',
                color: 'var(--text-primary)'
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Author Section */}
            <div 
              className="card" 
              style={{ 
                marginTop: '3rem', 
                padding: '2rem',
                backgroundColor: 'var(--background-alt)',
                textAlign: 'center'
              }}
            >
              <img 
                src="/api/placeholder/100/100" 
                alt="Vimal Singh" 
                style={{ 
                  width: '100px', 
                  height: '100px', 
                  borderRadius: '50%',
                  margin: '0 auto 1rem'
                }}
              />
              <h4>Vimal Singh</h4>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                AI-HR Expert & Transformation Leader
              </p>
              <p>
                With 13+ years of experience, Vimal helps organizations transform 
                their HR operations through AI. He has delivered $1.5M+ in cost savings 
                and trained 80+ CXOs in AI-HR strategies.
              </p>
              <div style={{ marginTop: '1rem' }}>
                <Link to="/about" className="btn btn-primary">
                  Learn More About Vimal
                </Link>
              </div>
            </div>

            {/* Share Section */}
            <div style={{ textAlign: 'center', margin: '3rem 0' }}>
              <h4 style={{ marginBottom: '1rem' }}>Share This Article</h4>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    navigator.share?.({
                      title: post.title,
                      url: window.location.href
                    }) || window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
                  }}
                >
                  Share on Twitter
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank');
                  }}
                >
                  Share on LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <div className="text-center mb-4">
              <h2>Related Articles</h2>
              <p>More insights on {post.category}</p>
            </div>
            <div className="grid grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="card blog-card">
                  <img src={relatedPost.image} alt={relatedPost.title} className="blog-image" />
                  <div className="blog-meta">
                    <span className="blog-category">{relatedPost.category}</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                  <h3 className="blog-title">
                    <Link to={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                  </h3>
                  <p className="blog-excerpt">{relatedPost.excerpt}</p>
                  <Link to={`/blog/${relatedPost.id}`} className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    Read More
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>Ready to Implement These Ideas?</h2>
            <p className="mb-4">
              Let's discuss how these strategies can be applied to your organization
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

export default BlogPost;