import { Calendar, User, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function BlogPage() {
  const posts = [
    {
      title: '10 Essential Python Libraries for Data Science in 2024',
      excerpt: 'Discover the must-know Python libraries that every data scientist should master, from NumPy and Pandas to advanced deep learning frameworks.',
      author: 'Dr. Rajesh Kumar',
      date: '2025-11-15',
      readTime: '8 min read',
      category: 'Tutorial',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800',
      tags: ['Python', 'Data Science', 'Libraries']
    },
    {
      title: 'Career Roadmap: From Fresher to Data Scientist',
      excerpt: 'A comprehensive guide to building a successful career in data science, including skills to learn, certifications to pursue, and common pitfalls to avoid.',
      author: 'Meera Kulkarni',
      date: '2025-11-12',
      readTime: '12 min read',
      category: 'Career',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      tags: ['Career', 'Data Science', 'Guide']
    },
    {
      title: 'Understanding Transformer Architecture: BERT and GPT Explained',
      excerpt: 'Deep dive into the transformer architecture that revolutionized NLP. Learn how BERT and GPT models work and when to use each.',
      author: 'Amit Patel',
      date: '2025-11-10',
      readTime: '15 min read',
      category: 'Deep Dive',
      image: 'https://images.unsplash.com/photo-1676299081847-c0326f61a7e9?w=800',
      tags: ['NLP', 'Transformers', 'AI']
    },
    {
      title: 'Building Production-Ready ML Pipelines with MLOps',
      excerpt: 'Learn best practices for deploying machine learning models to production, including CI/CD, monitoring, and model versioning.',
      author: 'Sneha Desai',
      date: '2025-11-08',
      readTime: '10 min read',
      category: 'MLOps',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
      tags: ['MLOps', 'DevOps', 'Production']
    },
    {
      title: 'Computer Vision Projects for Your Portfolio',
      excerpt: 'Five impressive computer vision projects that will make your portfolio stand out to recruiters and demonstrate your practical skills.',
      author: 'Priya Sharma',
      date: '2025-11-05',
      readTime: '9 min read',
      category: 'Projects',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
      tags: ['Computer Vision', 'Projects', 'Portfolio']
    },
    {
      title: 'Salary Negotiation Tips for Data Science Roles',
      excerpt: 'Expert advice on negotiating your first data science job offer, including market research, talking points, and common mistakes to avoid.',
      author: 'Career Team',
      date: '2025-11-01',
      readTime: '7 min read',
      category: 'Career',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      tags: ['Career', 'Salary', 'Negotiation']
    }
  ];

  const resources = [
    { title: 'Python Cheat Sheet for Data Science', type: 'PDF', size: '2.5 MB' },
    { title: 'SQL Interview Questions & Answers', type: 'PDF', size: '1.8 MB' },
    { title: 'Machine Learning Algorithms Comparison', type: 'PDF', size: '3.2 MB' },
    { title: 'Deep Learning Mathematics Guide', type: 'PDF', size: '4.1 MB' }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-gray-900 mb-4">Blog & Resources</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights in data science, 
            machine learning, and artificial intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-2 space-y-6">
            {posts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-12">
                  <div className="md:col-span-4">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:col-span-8 pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-gray-900 mb-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>
                            {new Date(post.date).toLocaleDateString('en-IN', { 
                              month: 'short', 
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" size="sm">
                      Read More <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 rounded hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-colors">
                    Tutorial (12)
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-colors">
                    Career (8)
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-colors">
                    Deep Dive (15)
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-colors">
                    MLOps (6)
                  </button>
                  <button className="w-full text-left px-3 py-2 rounded hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-colors">
                    Projects (10)
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Downloadable Resources */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-orange-600" />
                  <h3 className="text-gray-900">Resources</h3>
                </div>
                <div className="space-y-3">
                  {resources.map((resource, index) => (
                    <div key={index} className="border-b border-gray-100 pb-3 last:border-0">
                      <p className="text-gray-900 text-sm mb-1">{resource.title}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {resource.type} • {resource.size}
                        </span>
                        <Button variant="ghost" size="sm" className="text-orange-600 h-auto p-0">
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-100">
              <CardContent className="pt-6">
                <h3 className="text-gray-900 mb-2">Newsletter</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get weekly insights and tutorials delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <Button size="sm" className="w-full">Subscribe</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
