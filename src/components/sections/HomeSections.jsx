import { Link } from 'react-router-dom';
import { ArrowRight, ShieldAlert, Users, Code, Zap, Globe, Layers, BarChart3, Headset } from 'lucide-react';

const iconMap = {
  'shield-alert': ShieldAlert,
  'users': Users,
  'code': Code,
  'zap': Zap,
  'globe': Globe,
  'layers': Layers,
  'bar-chart-3': BarChart3,
  'headset': Headset
};

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Reducing Business Risk. <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Building Strong Teams.
            </span>
            <br />
            Delivering Smart Technology.
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We help businesses reduce operational risk, build high-performing teams, and deploy reliable technology systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 hover:shadow-xl transition rounded-lg font-semibold group"
            >
              Book Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition" size={20} />
            </Link>
            <Link
              to="/services/risk-assessment"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:bg-white hover:text-blue-900 transition rounded-lg font-semibold"
            >
              Request Risk Audit
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-16 pt-8 border-t border-gray-600">
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-gray-400">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold">150+</div>
              <div className="text-gray-400">Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-gray-400">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceCardsSection({ services, title = "Our Core Services" }) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Link
                key={service.id}
                to={`/services/${service.id === 'risk' ? 'risk-assessment' : service.id === 'talent' ? 'talent-solutions' : 'it-services'}`}
                className={`p-8 rounded-xl border-2 hover:shadow-lg transition group cursor-pointer ${service.borderColor}`}
              >
                <div className={`w-14 h-14 rounded-lg mb-4 flex items-center justify-center ${service.color.replace('from-', 'from-').replace('to-', 'to-')}`}>
                  {IconComponent && <IconComponent className="text-white" size={28} />}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition">
                  Learn More <ArrowRight className="ml-2" size={20} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUsSection({ items }) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Tronomics</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proven expertise and commitment to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  {IconComponent && <IconComponent className="text-blue-600" size={24} />}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CaseStudiesPreviewSection({ caseStudies }) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from our proven solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {caseStudies.slice(0, 3).map((study) => (
            <Link
              key={study.id}
              to="/case-studies"
              className="group p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-300 transition"
            >
              <div className="text-sm font-semibold text-blue-600 mb-2">{study.industry}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                {study.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{study.problem}</p>
              <div className="flex flex-wrap gap-2">
                {study.metrics.slice(0, 2).map((metric, idx) => (
                  <span key={idx} className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                    {metric}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg hover:shadow-lg transition font-semibold group"
          >
            View All Case Studies
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Get started with a free consultation to understand your unique needs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:shadow-lg transition font-semibold"
            >
              Book Consultation
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
