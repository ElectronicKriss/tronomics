import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code } from 'lucide-react';
import { services } from '../data/services';

export default function ITServicesPage() {
  const service = services.itServices;

  const serviceTypes = [
    { title: 'Web Development', description: 'Custom websites and web applications built with modern technologies' },
    { title: 'Mobile Apps', description: 'iOS and Android application development for iOS and Android platforms' },
    { title: 'Cloud Setup', description: 'Cloud infrastructure setup, migration, and optimization' },
    { title: 'Cybersecurity', description: 'Security solutions, penetration testing, and compliance' },
    { title: 'ERP/CRM', description: 'Enterprise resource planning and customer relationship management systems' },
    { title: 'Maintenance Plans', description: 'Ongoing IT support, monitoring, and maintenance services' }
  ];

  const benefits = [
    'Modern, scalable technology stack',
    'Expert development and engineering team',
    ' Agile development methodology',
    'Full project lifecycle support',
    '24/7 technical support available',
    'Cost-effective solutions without compromise'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-4">
              <Code className="text-emerald-600" size={32} />
              <span className="text-emerald-600 font-semibold">IT Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Digital Transformation Through Smart Technology Solutions
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              From web applications to cloud infrastructure, we deliver cutting-edge IT solutions that drive business growth.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition font-semibold"
            >
              Schedule Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            Complete IT solutions for every stage of your digital transformation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceTypes.map((type, idx) => (
              <div key={idx} className="p-6 border-2 border-gray-200 rounded-lg hover:border-emerald-300 hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Cost Calculator Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Estimate Your Project Cost</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get a quick estimate for website, app, or infrastructure projects
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition font-semibold"
            >
              Start Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Why Choose Our IT Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Technology Stack</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• React / Next.js</li>
                <li>• Vue.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Node.js / Express</li>
                <li>• Laravel / PHP</li>
                <li>• Python / Django</li>
                <li>• PostgreSQL / MongoDB</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Infrastructure</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AWS / Azure / GCP</li>
                <li>• Docker & Kubernetes</li>
                <li>• CI/CD Pipelines</li>
                <li>• DevOps Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Development Process</h2>

          <div className="space-y-6">
            {[
              { step: 1, title: 'Discovery & Planning', desc: 'Understand your business goals, requirements, and technical needs' },
              { step: 2, title: 'Design & Architecture', desc: 'Create wireframes, designs, and technical architecture' },
              { step: 3, title: 'Development', desc: 'Build your solution using best practices and modern technologies' },
              { step: 4, title: 'Testing & QA', desc: 'Rigorous testing for functionality, security, and performance' },
              { step: 5, title: 'Deployment', desc: 'Launch to production with monitoring and support' },
              { step: 6, title: 'Ongoing Support', desc: 'Maintenance, updates, and continuous improvement' }
            ].map(item => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our IT solutions can drive your digital transformation
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-3 bg-white text-emerald-600 rounded-lg hover:bg-gray-50 transition font-semibold"
          >
            Start Your Project
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
