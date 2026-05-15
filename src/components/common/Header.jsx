import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      submenu: [
        { name: 'Risk Assessment', path: '/services/risk-assessment' },
        { name: 'Talent Solutions', path: '/services/talent-solutions' },
        { name: 'IT Services', path: '/services/it-services' }
      ]
    },
    { name: 'Industries', path: '/industries' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-3 py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline">Tronomics</span>
          </Link>

          <div className="flex items-center gap-3">
            <nav className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.submenu ? (
                    <>
                      <button className="px-3 py-2 text-gray-700 hover:text-blue-600 transition text-left">
                        {link.name}
                      </button>
                      <div className="absolute left-0 mt-0 w-48 bg-white rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block px-4 py-2 hover:bg-blue-50 first:rounded-t-2xl last:rounded-b-2xl text-gray-700 hover:text-blue-600"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className="px-3 py-2 text-gray-700 hover:text-blue-600 transition"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/contact"
                className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition"
              >
                Contact
              </Link>
              <Link
                to="/booking"
                className="px-4 py-2 bg-linear-to-r from-blue-600 to-emerald-600 text-white rounded-lg hover:shadow-lg transition"
              >
                Book Consultation
              </Link>
            </div>

            <button
              type="button"
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="lg:hidden mb-4 space-y-3 bg-white border border-slate-200 rounded-3xl p-4 shadow-sm">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.submenu ? (
                  <>
                    <p className="px-3 py-2 text-gray-700 font-semibold">{link.name}</p>
                    {link.submenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block rounded-2xl px-4 py-3 text-gray-600 hover:bg-slate-50 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="block rounded-2xl px-4 py-3 text-gray-700 hover:bg-slate-50 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Link
                to="/contact"
                className="rounded-2xl px-4 py-3 text-center text-blue-600 border border-blue-600 hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/booking"
                className="rounded-2xl px-4 py-3 text-center bg-linear-to-r from-blue-600 to-emerald-600 text-white hover:shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
