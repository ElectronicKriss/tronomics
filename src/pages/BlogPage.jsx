import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Operational Risks Every Business Should Monitor',
      category: 'Risk Management',
      author: 'Sarah Johnson',
      date: 'May 1, 2026',
      excerpt: 'Learn about the most critical operational risks and how to mitigate them...',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Building High-Performing Remote Teams',
      category: 'Talent',
      author: 'James Okonkwo',
      date: 'April 28, 2026',
      excerpt: 'Strategies for recruiting, managing, and retaining remote talent...',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for SMEs',
      category: 'Technology',
      author: 'Emma Chen',
      date: 'April 25, 2026',
      excerpt: 'Essential cybersecurity measures that small and medium enterprises need...',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Compliance Trends in 2026',
      category: 'Compliance',
      author: 'Michael Adeyemi',
      date: 'April 22, 2026',
      excerpt: 'What regulatory changes you need to be aware of this year...',
      readTime: '8 min read'
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Blog & Insights</h1>
          <p className="text-xl text-gray-300">Latest articles on risk, talent, and technology</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition group">
                <div className="h-40 bg-gradient-to-br from-blue-400 to-emerald-400" />
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-semibold">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-600 border-t pt-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-gray-600 mb-8">Get the latest insights and articles delivered to your inbox</p>
          
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
