import Navbar from "@/components/Navbar";
import { Award, Users, Target, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: "Years of Legacy", value: "17+" },
    { label: "Students Trained", value: "10,000+" },
    { label: "Placement Rate", value: "92%" },
    { label: "Expert Faculty", value: "15+" }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Empowering Odisha's Youth Through IT Education</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Since our inception, Apinet Computer Education has been at the forefront of providing quality, industry-relevant technical education. We are an authorized OKCL partner dedicated to bridging the skill gap.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <Target className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide accessible, high-quality computer education that equips students with practical skills, making them immediately employable in top MNCs and the booming IT sector.
            </p>
          </div>
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <Award className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Apinet?</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" /> State-of-the-art computer labs</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" /> Authorized OKCL learning center</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" /> Dedicated placement cell</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" /> Real-world project development</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}