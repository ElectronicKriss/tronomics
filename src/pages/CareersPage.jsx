import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, MapPin, Clock } from 'lucide-react';

export default function CareersPage() {
  const openPositions = [
    {
      id: 1,
      title: 'Senior Risk Assessment Consultant',
      department: 'Risk Management',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      level: 'Senior'
    },
    {
      id: 2,
      title: 'Talent Acquisition Specialist',
      department: 'Talent Solutions',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      level: 'Mid-level'
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      department: 'IT Services',
      location: 'Remote',
      type: 'Full-time',
      level: 'Mid-level'
    },
    {
      id: 4,
      title: 'HSE Compliance Officer',
      department: 'Risk Management',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      level: 'Entry-level'
    },
    {
      id: 5,
      title: 'Cybersecurity Consultant',
      department: 'IT Services',
      location: 'Remote',
      type: 'Contract',
      level: 'Senior'
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Careers at Tronomics</h1>
          <p className="text-xl text-gray-300">Join our team and help shape the future of risk, talent, and technology</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're looking for talented individuals who share our passion for excellence and innovation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Competitive compensation',
                'Professional development',
                'Flexible work arrangements',
                'Health & wellness benefits',
                'Collaborative culture',
                'Impact-driven work'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-emerald-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-8">Open Positions</h2>

          <div className="space-y-4">
            {openPositions.map((job) => (
              <Link
                key={job.id}
                to="/contact"
                className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                      <div className="flex items-center space-x-1">
                        <Briefcase size={16} />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-semibold text-sm">
                      {job.level}
                    </span>
                    <ArrowRight className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition" size={24} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Internship & Contractor Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Internship Program</h3>
              <p className="text-gray-600 mb-6">
                Gain practical experience and develop your skills with mentorship from industry experts. Our internship program runs throughout the year.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
              >
                Apply Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition" size={20} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contractor Network</h3>
              <p className="text-gray-600 mb-6">
                We work with talented contractors and consultants on project-based engagements. If you're interested in flexible work opportunities, let's connect.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
              >
                Join Our Network
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Send us your resume and let's discuss how we can work together
          </p>
          <a
            href="mailto:careers@tronomics.com"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition font-semibold"
          >
            Send Your Application
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
