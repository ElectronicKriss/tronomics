import { useState } from 'react';
import { Calendar, Clock, MapPin, User, Mail, Phone, ArrowRight, CheckCircle } from 'lucide-react';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: 'risk-assessment',
    assessmentType: '',
    date: '',
    time: '',
    timezone: 'Africa/Lagos',
    message: '',
    agreeToTerms: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const assessmentTypes = {
    'risk-assessment': [
      'Enterprise Risk Assessment',
      'Site Inspection',
      'HSE Compliance Audit',
      'Vendor Risk Assessment',
      'Cyber Risk Assessment'
    ],
    'talent-solutions': [
      'Recruitment Consultation',
      'Team Outsourcing',
      'Executive Search',
      'Technical Staffing'
    ],
    'it-services': [
      'IT Infrastructure Consultation',
      'Cybersecurity Assessment',
      'Cloud Setup Planning',
      'Web Development Discussion'
    ]
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      // Reset assessment type when service type changes
      ...(name === 'serviceType' && { assessmentType: '' })
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulating API call - replace with actual backend endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Booking submitted:', formData);
      setSubmitted(true);

      // Reset form
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          serviceType: 'risk-assessment',
          assessmentType: '',
          date: '',
          time: '',
          timezone: 'Africa/Lagos',
          message: '',
          agreeToTerms: false
        });
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting booking:', error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50 flex items-center justify-center py-20">
        <div className="bg-white rounded-xl shadow-lg p-12 max-w-md text-center">
          <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-4">
            Thank you for scheduling a consultation. We'll send a confirmation email to <strong>{formData.email}</strong> shortly.
          </p>
          <p className="text-gray-500 text-sm">
            Our team will reach out within 24 hours to confirm your appointment details.
          </p>
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Appointment Details:</strong><br />
              Date: {formData.date} at {formData.time}<br />
              Type: {formData.assessmentType}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Schedule Your Assessment
            </h1>
            <p className="text-xl text-gray-600">
              Book a consultation with our experts and get started on your journey to success
            </p>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information Section */}
              <div className="border-b pb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <User className="mr-3 text-blue-600" size={28} />
                  Your Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="inline mr-2" size={16} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="inline mr-2" size={16} />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="border-b pb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Type</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {['risk-assessment', 'talent-solutions', 'it-services'].map(type => (
                    <label key={type} className="relative">
                      <input
                        type="radio"
                        name="serviceType"
                        value={type}
                        checked={formData.serviceType === type}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                        formData.serviceType === type
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <div className="font-semibold text-gray-900">
                          {type === 'risk-assessment' && 'Risk Assessment'}
                          {type === 'talent-solutions' && 'Talent Solutions'}
                          {type === 'it-services' && 'IT Services'}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Assessment Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Assessment Type *
                  </label>
                  <select
                    name="assessmentType"
                    value={formData.assessmentType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select an assessment type</option>
                    {assessmentTypes[formData.serviceType].map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="border-b pb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Calendar className="mr-3 text-blue-600" size={28} />
                  Appointment Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <Clock className="mr-2" size={16} />
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a time</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <MapPin className="mr-2" size={16} />
                    Timezone
                  </label>
                  <select
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Africa/Lagos">Africa/Lagos (WAT)</option>
                    <option value="Africa/Johannesburg">Africa/Johannesburg (SAST)</option>
                    <option value="Europe/London">Europe/London (GMT)</option>
                    <option value="America/New_York">America/New_York (EST)</option>
                    <option value="Asia/Dubai">Asia/Dubai (GST)</option>
                  </select>
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your requirements or challenges..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
                <label className="text-sm text-gray-700">
                  I agree to the terms and conditions and understand that Tronomics will contact me to confirm this appointment
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transition disabled:opacity-50 flex items-center justify-center"
              >
                {loading ? (
                  'Confirming...'
                ) : (
                  <>
                    Confirm Booking
                    <ArrowRight className="ml-2" size={20} />
                  </>
                )}
              </button>
            </form>

            {/* Support Message */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-700">
                <strong>Need help?</strong> Call us at <a href="tel:+2348000000000" className="text-blue-600 hover:underline">+234 800 000 0000</a> or email <a href="mailto:info@tronomics.com" className="text-blue-600 hover:underline">info@tronomics.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
