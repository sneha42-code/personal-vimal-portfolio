export interface Achievement {
  id: string;
  title: string;
  value: string;
  description: string;
  icon: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: string;
  category: string;
  image: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  videoId: string;
  publishedAt: string;
  thumbnail: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Cost Savings Delivered',
    value: '$1.5M+',
    description: 'Achieved through AI-HR transformation initiatives',
    icon: '💰'
  },
  {
    id: '2',
    title: 'CXOs Trained',
    value: '80+',
    description: 'Senior executives trained in AI-HR strategies',
    icon: '👥'
  },
  {
    id: '3',
    title: 'Years of Experience',
    value: '13+',
    description: 'Deep expertise in HR technology and transformation',
    icon: '🚀'
  },
  {
    id: '4',
    title: 'Organizations Transformed',
    value: '50+',
    description: 'Companies successfully transitioned to AI-powered HR',
    icon: '🏢'
  }
];

export const trainingPrograms: TrainingProgram[] = [
  {
    id: '1',
    title: 'AI-HR Transformation Bootcamp',
    description: 'Comprehensive program for HR leaders to master AI integration in human resources',
    duration: '8 weeks',
    price: '$2,999',
    features: [
      'AI strategy development',
      'Change management techniques',
      'ROI measurement frameworks',
      'Hands-on tool implementation',
      'Personalized coaching sessions',
      'Certificate of completion'
    ],
    popular: true
  },
  {
    id: '2',
    title: 'Executive AI Leadership Program',
    description: 'Strategic program designed for C-suite executives to lead AI transformation',
    duration: '4 weeks',
    price: '$4,999',
    features: [
      'Executive-level AI strategy',
      'Board presentation frameworks',
      'Risk assessment methodologies',
      'Industry best practices',
      'Peer networking sessions',
      'Strategic implementation roadmap'
    ]
  },
  {
    id: '3',
    title: 'HR Analytics & AI Workshop',
    description: 'Practical workshop focusing on data-driven HR decision making',
    duration: '2 days',
    price: '$899',
    features: [
      'Predictive analytics in HR',
      'Data visualization techniques',
      'AI tool demonstrations',
      'Case study analysis',
      'Hands-on exercises',
      'Resource toolkit'
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Human Resources: Trends for 2025',
    excerpt: 'Explore the transformative trends shaping AI-HR integration and what organizations need to prepare for.',
    content: `
      <p>The landscape of human resources is rapidly evolving with artificial intelligence at the forefront of transformation. As we look toward 2025, several key trends are emerging that will fundamentally reshape how organizations manage their human capital.</p>
      
      <h3>1. Predictive Analytics in Talent Acquisition</h3>
      <p>AI-powered predictive analytics are revolutionizing how we identify and attract top talent. Machine learning algorithms can now analyze vast datasets to predict candidate success, reducing time-to-hire by up to 40% and improving quality of hire significantly.</p>
      
      <h3>2. Personalized Employee Experience</h3>
      <p>AI is enabling hyper-personalized employee experiences through intelligent recommendations for career development, learning paths, and even daily task prioritization. This level of personalization is driving engagement scores up by 25% in early adopter organizations.</p>
      
      <h3>3. Automated Performance Management</h3>
      <p>Traditional annual reviews are being replaced by continuous, AI-driven performance insights. Real-time feedback systems and predictive performance modeling are helping managers make more informed decisions about their teams.</p>
      
      <p>Organizations that embrace these trends early will gain a significant competitive advantage in attracting and retaining top talent while optimizing their HR operations for maximum efficiency.</p>
    `,
    publishedAt: '2024-12-15',
    readTime: '5 min read',
    category: 'AI Strategy',
    image: '/api/placeholder/400/250'
  },
  {
    id: '2',
    title: 'ROI Measurement in AI-HR Implementation',
    excerpt: 'Learn how to measure and demonstrate the return on investment of AI initiatives in human resources.',
    content: `
      <p>Measuring the ROI of AI-HR initiatives is crucial for securing continued investment and demonstrating value to stakeholders. Here's a comprehensive framework for tracking and reporting AI-HR ROI.</p>
      
      <h3>Key Metrics to Track</h3>
      <ul>
        <li>Time-to-hire reduction</li>
        <li>Cost per hire optimization</li>
        <li>Employee retention improvements</li>
        <li>Performance prediction accuracy</li>
        <li>Process automation savings</li>
      </ul>
      
      <h3>Implementation Strategy</h3>
      <p>Start with baseline measurements before AI implementation, then track improvements over time. Use A/B testing where possible to isolate the impact of AI tools from other variables.</p>
      
      <p>Remember that ROI isn't just about cost savings—it's about enabling strategic HR decisions that drive business value.</p>
    `,
    publishedAt: '2024-12-10',
    readTime: '7 min read',
    category: 'ROI & Metrics',
    image: '/api/placeholder/400/250'
  },
  {
    id: '3',
    title: 'Building an AI-Ready HR Team',
    excerpt: 'Essential strategies for upskilling your HR team and preparing them for AI integration.',
    content: `
      <p>The success of AI-HR transformation depends heavily on having a team that's prepared and excited about the change. Here's how to build an AI-ready HR organization.</p>
      
      <h3>Skill Development Framework</h3>
      <p>Focus on developing both technical and soft skills. Technical skills include data analysis, AI tool proficiency, and basic programming concepts. Soft skills encompass change management, strategic thinking, and continuous learning mindset.</p>
      
      <h3>Change Management</h3>
      <p>Address concerns about AI replacing human jobs by positioning AI as an augmentation tool that enhances human capabilities rather than replacing them. Involve team members in the AI selection and implementation process.</p>
      
      <h3>Training Programs</h3>
      <p>Implement structured training programs that combine theoretical knowledge with hands-on practice. Partner with AI vendors for specialized training on their tools and platforms.</p>
    `,
    publishedAt: '2024-12-05',
    readTime: '6 min read',
    category: 'Team Development',
    image: '/api/placeholder/400/250'
  }
];

export const videos: Video[] = [
  {
    id: '1',
    title: 'AI-HR Transformation: Getting Started',
    description: 'A comprehensive guide to beginning your AI-HR journey with practical first steps.',
    videoId: 'dQw4w9WgXcQ',
    publishedAt: '2024-12-20',
    thumbnail: '/api/placeholder/320/180'
  },
  {
    id: '2',
    title: 'ROI Measurement in AI-HR: Real Case Studies',
    description: 'Learn from real-world examples of organizations that achieved significant ROI through AI-HR.',
    videoId: 'dQw4w9WgXcQ',
    publishedAt: '2024-12-18',
    thumbnail: '/api/placeholder/320/180'
  },
  {
    id: '3',
    title: 'Common AI-HR Implementation Mistakes',
    description: 'Avoid these critical pitfalls when implementing AI in your HR processes.',
    videoId: 'dQw4w9WgXcQ',
    publishedAt: '2024-12-15',
    thumbnail: '/api/placeholder/320/180'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Chief Human Resources Officer',
    company: 'TechCorp Solutions',
    content: 'Vimal\'s AI-HR transformation program completely revolutionized our hiring process. We reduced time-to-hire by 45% and improved candidate quality significantly.',
    rating: 5,
    image: '/api/placeholder/60/60'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CEO',
    company: 'InnovateNow',
    content: 'The ROI from Vimal\'s training was immediate. Within 6 months, we saw $500K in cost savings and dramatically improved employee satisfaction.',
    rating: 5,
    image: '/api/placeholder/60/60'
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    role: 'Head of People Operations',
    company: 'GrowthTech',
    content: 'Vimal\'s expertise in AI-HR is unmatched. His practical approach and deep understanding of both technology and human psychology made our transformation seamless.',
    rating: 5,
    image: '/api/placeholder/60/60'
  }
];