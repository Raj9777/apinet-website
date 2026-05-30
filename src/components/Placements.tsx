import { Building2 } from 'lucide-react';

export default function Placements() {
  return (
    <section id="placements" className="py-16 bg-slate-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
            <Building2 className="w-6 h-6 text-blue-700" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Our Alumni Work At</h2>
          <p className="text-gray-600 mt-2">Join successful Apinet graduates placed in top MNCs.</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
          <div className="text-2xl font-bold text-gray-800 tracking-tighter">TATA CONSULTANCY SERVICES</div>
          <div className="text-2xl font-black text-gray-800">Tech Mahindra</div>
          <div className="text-3xl font-bold text-blue-900 italic">Wipro</div>
          <div className="text-2xl font-bold text-green-700">OKCL</div>
        </div>
      </div>
    </section>
  );
}