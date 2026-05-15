import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldAlert } from 'lucide-react';
import { services } from '../data/services';

export default function RiskAssessmentPage() {
  const service = services.riskAssessment;

  const assessmentTypes = [
    {
      title: 'Enterprise Risk',
      description: 'Comprehensive company-wide risk evaluation and mitigation strategies'
    },
    {
      title: 'Site Inspection',
      description: 'Physical on-site safety and compliance verification'
    },
    {
      title: 'Construction Risk',
      description: 'Project-specific risk assessment for construction sites'
    },
    {
      title: 'HSE Compliance',
      description: 'Health, Safety & Environment regulatory compliance audits'
    },
    {
      title: 'Vendor Risk',
      description: 'Third-party and supplier risk evaluation'
    },
    {
      title: 'Cyber Risk',
      description: 'Information security and data protection assessment'
    },
    {
      title: 'Risk Reporting',
      description: 'Detailed analysis reports with actionable recommendations'
    }
  ];

  const benefits = [
    'Identify critical business risks before they impact operations',
    'Ensure compliance with industry regulations and standards',
    'Reduce operational costs through preventive measures',
    'Improve safety and security across all operations',
    'Gain stakeholder and investor confidence',
    'Make data-driven strategic decisions'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-red-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-4">
              <ShieldAlert className="text-red-600" size={32} />
              <span className="text-red-600 font-semibold">Risk Assessment</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Protect Your Business with Comprehensive Risk Assessment
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Identify, analyze, and mitigate risks across your organization to ensure business continuity and regulatory compliance.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold"
            >
              Schedule Assessment
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Assessment Types */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Assessment Services</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            We offer specialized risk assessments tailored to your industry and business model
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assessmentTypes.map((type, idx) => (
              <div key={idx} className="p-6 border-2 border-gray-200 rounded-lg hover:border-red-300 hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Score Checker */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Risk Score Check</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get an initial assessment of your risk profile in just 5 minutes
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold"
            >
              Start Risk Assessment
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Key Benefits</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <CheckCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Assessment Process</h2>

          <div className="space-y-6">
            {[
              { step: 1, title: 'Initial Consultation', desc: 'Understand your business, industry, and specific risk concerns' },
              { step: 2, title: 'Data Collection', desc: 'Gather information through interviews, documentation review, and site visits' },
              { step: 3, title: 'Risk Analysis', desc: 'Systematically identify, evaluate, and prioritize risks' },
              { step: 4, title: 'Reporting', desc: 'Provide comprehensive report with findings and recommendations' },
              { step: 5, title: 'Implementation Support', desc: 'Help implement recommended mitigation strategies' }
            ].map(item => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
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
      <section className="py-16 md:py-24 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Assess Your Risks?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our risk assessment experts today
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-3 bg-white text-red-600 rounded-lg hover:bg-gray-50 transition font-semibold"
          >
            Book Your Assessment
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
