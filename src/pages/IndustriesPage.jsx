import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { industries } from '../data/services';

export default function IndustriesPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl text-gray-300">Proven expertise across diverse sectors</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <Link
                key={idx}
                to="/booking"
                className="group p-8 border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition bg-white"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition">
                  <span className="text-2xl font-bold text-blue-600 group-hover:text-white transition">{industry.name.charAt(0)}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">{industry.name}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <span className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition">
                  Explore <ArrowRight className="ml-2" size={20} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Your Industry, Our Expertise</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't see your industry? We work across all sectors. Let's discuss your specific needs.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition font-semibold"
          >
            Schedule Consultation
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
