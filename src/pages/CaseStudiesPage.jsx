import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { caseStudies } from '../data/services';

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="text-emerald-400" size={32} />
              <span className="text-emerald-400 font-semibold">Success Stories</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Real Results from Real Clients
            </h1>
            <p className="text-xl text-gray-300">
              See how we've helped businesses transform and achieve measurable success
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-300 transition group">
                {/* Industry Badge */}
                <div className="h-2 bg-gradient-to-r from-blue-600 to-emerald-600" />
                
                <div className="p-6">
                  <div className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">
                    {study.industry}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                    {study.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Client:</strong> {study.client}
                  </p>

                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <p className="text-gray-700">
                      {study.problem}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Result:</strong>
                    </p>
                    <p className="text-lg font-bold text-emerald-600">
                      {study.result}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2">
                    {study.metrics.map((metric, idx) => (
                      <span key={idx} className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Study Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Detailed Case Study</h2>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-64 bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="w-16 h-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">40% Downtime Reduction</h3>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
                  <p className="text-gray-700 mb-4">
                    A leading energy sector company was experiencing frequent operational disruptions that resulted in significant revenue loss and damaged client relationships. The company lacked a comprehensive understanding of their operational risks.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Frequent unplanned downtime</li>
                    <li>• Unclear risk factors</li>
                    <li>• No mitigation protocols</li>
                    <li>• N50M+ annual losses</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
                  <p className="text-gray-700 mb-4">
                    We implemented a comprehensive risk assessment program followed by targeted mitigation protocols across their operations.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Full operational risk assessment</li>
                    <li>✓ Identified critical failure points</li>
                    <li>✓ Developed mitigation strategies</li>
                    <li>✓ Implemented 24/7 monitoring</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Results</h3>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">40%</div>
                    <p className="text-gray-600">Downtime Reduction</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">3 mo</div>
                    <p className="text-gray-600">Implementation Time</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">N50M+</div>
                    <p className="text-gray-600">Annual Savings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve similar results
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition font-semibold"
          >
            Get Started Today
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
