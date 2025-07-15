import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import ScrollToTop from './components/layout/ScrollToTop';
import About from './components/sections/About';
import Blog from './components/sections/Blog';
import BlogPost from './components/sections/BlogPost';
import Training from './components/sections/Training';
import Videos from './components/sections/Video';
import Contact from './components/sections/Contact';
import Home from './components/sections/Hero';
function App() {
  return (
    <Router basename="/vimal-singh-ai-hr">
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/training" element={<Training />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;