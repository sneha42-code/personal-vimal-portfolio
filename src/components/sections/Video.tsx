import React, { useState } from 'react';
import { videos } from '../../data/mockdata';

const Videos: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="videos">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>AI-HR Video Library</h1>
            <p className="hero-subtitle">Learn from Expert Insights & Case Studies</p>
            <p className="hero-description">
              Watch practical demonstrations, case studies, and expert insights 
              on AI-HR transformation. Learn at your own pace with our comprehensive video library.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Featured Video</h2>
            <p>Start your AI-HR journey with this comprehensive overview</p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card">
              <div 
                style={{ 
                  position: 'relative', 
                  paddingBottom: '56.25%', 
                  height: 0, 
                  overflow: 'hidden',
                  borderRadius: '15px',
                  background: '#000',
                  cursor: 'pointer'
                }}
                onClick={() => openVideo(videos[0].videoId)}
              >
                <img 
                  src={videos[0].thumbnail} 
                  alt={videos[0].title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    color: 'var(--primary-color)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  className="play-button"
                >
                  ▶
                </div>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3>{videos[0].title}</h3>
                <p>{videos[0].description}</p>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  Published: {new Date(videos[0].publishedAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Video Library</h2>
            <p>Explore our collection of AI-HR educational content</p>
          </div>
          <div className="video-grid">
            {videos.slice(1).map((video :any) => (
              <div key={video.id} className="video-card">
                <div 
                  style={{ position: 'relative', cursor: 'pointer' }}
                  onClick={() => openVideo(video.videoId)}
                >
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="video-thumbnail"
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '60px',
                      height: '60px',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      color: 'var(--primary-color)'
                    }}
                  >
                    ▶
                  </div>
                </div>
                <div className="video-content">
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-description">{video.description}</p>
                  <div className="video-meta">
                    Published: {new Date(video.publishedAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Categories */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Video Categories</h2>
            <p>Organized content for targeted learning</p>
          </div>
          <div className="grid grid-3">
            <div className="card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
              <h4>Getting Started</h4>
              <p>Introduction to AI-HR concepts and basic implementation strategies</p>
              <button className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                Watch Series
              </button>
            </div>
            <div className="card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
              <h4>Case Studies</h4>
              <p>Real-world examples of successful AI-HR transformations</p>
              <button className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                Watch Series
              </button>
            </div>
            <div className="card text-center">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔧</div>
              <h4>Tool Demos</h4>
              <p>Hands-on demonstrations of popular AI-HR tools and platforms</p>
              <button className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                Watch Series
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Channel CTA */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center">
            <h2>Subscribe for More Content</h2>
            <p className="mb-4">
              Join thousands of HR professionals learning AI transformation strategies
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="https://youtube.com/@vimalsingh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Subscribe to YouTube Channel
              </a>
              <a 
                href="#newsletter" 
                className="btn btn-secondary"
              >
                Get Email Updates
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '2rem'
          }}
          onClick={closeVideo}
        >
          <div 
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '900px',
              paddingBottom: '56.25%',
              height: 0
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideo}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer',
                zIndex: 1
              }}
            >
              ×
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="Video Player"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;