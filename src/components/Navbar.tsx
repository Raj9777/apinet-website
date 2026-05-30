import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-700 tracking-tight">
              APINET<span className="text-gray-800">.</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/courses" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Courses</Link>
            <Link href="/placements" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Placements</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About Us</Link>
          </div>

          {/* Call to Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#login" className="text-blue-600 font-medium hover:text-blue-800">
              Student Login
            </Link>
            <Link href="#contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md">
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}