import { CheckCircle, Users, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Copywriting & Trust Factors */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
              <Trophy className="w-4 h-4 mr-2" />
              17+ Years of Educational Excellence
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Master IT Skills & <br />
              <span className="text-blue-600">Secure Your Future</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Join Apinet Computer Education. Get industry-ready with advanced courses in Full Stack Development, Tally, and more. 
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Authorized OKCL Partner</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Top Placements in TCS & MNCs</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Users className="w-5 h-5 text-green-500 mr-3" />
                <span>Expert Faculty & Hands-on Projects</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Magnet Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Book a Free Trial Class</h3>
            <p className="text-gray-500 mb-6 text-sm">Fill details below and our counselor will call you.</p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Enter 10-digit number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Course of Interest</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white">
                  <option>Select a course</option>
                  <option>PGDCA</option>
                  <option>DCA</option>
                  <option>Tally Prime with GST</option>
                  <option>Full Stack Development</option>
                </select>
              </div>
              <button type="button" className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-lg hover:bg-blue-700 transition-colors shadow-lg mt-2">
                Get Callback Now
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}