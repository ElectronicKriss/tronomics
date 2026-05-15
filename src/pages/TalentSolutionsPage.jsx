import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users } from 'lucide-react';
import { services } from '../data/services';

export default function TalentSolutionsPage() {
  const service = services.talentSolutions;

  const serviceTypes = [
    { title: 'Recruitment', description: 'Full-cycle recruitment from sourcing to onboarding' },
    { title: 'Technical Staffing', description: 'Specialized tech talent acquisition and placement' },
    { title: 'Outsourcing', description: 'Team outsourcing and dedicated resource management' },
    { title: 'Executive Search', description: 'C-level and senior leadership recruitment' },
    { title: 'Contractor Management', description: 'Independent contractor solutions and administration' }
  ];

  const benefits = [
    'Access to pre-vetted, qualified talent pool',
    'Reduced time-to-hire and recruitment costs',
    'Dedicated account managers for ongoing support',
    'Flexible staffing solutions for project-based needs',
    'Comprehensive background checks and verifications',
    'Payroll and compliance management available'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="text-blue-600" size={32} />
              <span className="text-blue-600 font-semibold">Talent Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Build Your Dream Team with Strategic Talent Solutions
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              From recruitment to team management, we connect you with the right talent to drive your business forward.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Request Talent
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
            Comprehensive talent solutions tailored to your hiring needs and budget
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceTypes.map((type, idx) => (
              <div key={idx} className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Request Form */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Request Talent</h2>
            <p className="text-xl text-gray-600 mb-8">
              Tell us what you're looking for and we'll find the perfect candidates
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Submit Request
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Why Choose Our Talent Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Industries We Serve</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Technology', 'Finance', 'Healthcare', 'Oil & Gas', 'Manufacturing', 'Real Estate'].map(industry => (
              <div key={industry} className="p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-blue-300 hover:shadow-lg transition">
                <p className="font-semibold text-gray-900">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Recruitment Process</h2>

          <div className="space-y-6">
            {[
              { step: 1, title: 'Requirement Analysis', desc: 'Understand your role requirements, culture fit, and salary expectations' },
              { step: 2, title: 'Candidate Sourcing', desc: 'Access our network and actively recruit pre-vetted candidates' },
              { step: 3, title: 'Screening & Testing', desc: 'Rigorous evaluation including interviews and skills assessments' },
              { step: 4, title: 'Shortlisting', desc: 'Present top candidates matched to your specific criteria' },
              { step: 5, title: 'Placement & Support', desc: 'Handle negotiations, offer management, and onboarding support' }
            ].map(item => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
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
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Your Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's find the perfect talent for your organization
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition font-semibold"
          >
            Request Talent Now
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
