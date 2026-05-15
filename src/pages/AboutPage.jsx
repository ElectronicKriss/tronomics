import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Globe, CheckCircle } from 'lucide-react';
import { trustIndicators } from '../data/services';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Tronomics</h1>
            <p className="text-xl text-gray-300">
              Your trusted partner in risk management, talent acquisition, and digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses to reduce operational risk, build high-performing teams, and leverage technology for sustainable growth.
              </p>
              <p className="text-lg text-gray-600">
                We believe that success comes from the intersection of informed risk management, strategic talent investment, and technological innovation.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the go-to partner for African businesses seeking integrated solutions in risk, talent, and technology.
              </p>
              <p className="text-lg text-gray-600">
                We strive to create value not just for our clients, but for entire industries by promoting best practices in risk management and business excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', desc: 'We conduct business with honesty and transparency' },
              { title: 'Excellence', desc: 'We pursue the highest standards in everything' },
              { title: 'Innovation', desc: 'We embrace new ideas and continuous improvement' },
              { title: 'Partnership', desc: 'We invest in long-term client success' }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">By The Numbers</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{trustIndicators.yearsInBusiness}+</div>
              <p className="text-gray-600">Years in Business</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">{trustIndicators.projectsCompleted}</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">{trustIndicators.clientsServed}</div>
              <p className="text-gray-600">Clients Served</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">{trustIndicators.industryServed}+</div>
              <p className="text-gray-600">Industries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Leadership */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            Led by industry veterans with deep expertise in risk management, talent acquisition, and technology
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'John Okafor', role: 'Founder & CEO', bg: 'from-blue-400' },
              { name: 'Amara Eze', role: 'Head of Risk Services', bg: 'from-emerald-400' },
              { name: 'David Mensah', role: 'Head of Technology', bg: 'from-purple-400' }
            ].map((leader, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden border border-gray-200">
                <div className={`h-48 bg-gradient-to-br ${leader.bg} to-gray-400`} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                  <p className="text-gray-600">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Certifications & Standards</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustIndicators.certifications.map((cert, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-lg border border-gray-200 text-center hover:border-blue-300 transition">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <p className="font-semibold text-gray-900">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Journey</h2>

          <div className="space-y-8">
            {[
              { year: '2009', title: 'Founded', desc: 'Tronomics started as a risk assessment consultancy' },
              { year: '2012', title: 'Expanded Services', desc: 'Added talent acquisition and recruitment services' },
              { year: '2016', title: 'Tech Division', desc: 'Launched IT services and digital transformation' },
              { year: '2020', title: 'Regional Growth', desc: 'Expanded operations across multiple African countries' },
              { year: '2026', title: 'Innovation Focus', desc: 'Introducing AI-powered assessment tools and analytics' }
            ].map((milestone, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="w-32 pt-2 text-right">
                  <div className="text-3xl font-bold text-blue-600">{milestone.year}</div>
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with Tronomics to reduce risk, build talent, and drive technology success
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition font-semibold"
          >
            Start Your Journey
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
