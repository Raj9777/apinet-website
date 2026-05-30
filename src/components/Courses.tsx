import { ArrowRight, MonitorPlay, Code, Calculator } from 'lucide-react';

const courses = [
  {
    title: "PGDCA (Post Graduate Diploma)",
    duration: "12 Months",
    icon: <MonitorPlay className="w-8 h-8 text-blue-600" />,
    description: "Complete mastery over office automation, programming, and web technologies.",
    color: "bg-blue-50"
  },
  {
    title: "Full Stack Web Development",
    duration: "6 Months",
    icon: <Code className="w-8 h-8 text-purple-600" />,
    description: "Learn React, Node.js, and MySQL. Build real-world projects and get job-ready.",
    color: "bg-purple-50"
  },
  {
    title: "Tally Prime with GST",
    duration: "3 Months",
    icon: <Calculator className="w-8 h-8 text-green-600" />,
    description: "Industry-standard accounting software training with practical GST filing scenarios.",
    color: "bg-green-50"
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Popular Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Industry-aligned curriculum designed to make you employable from day one.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group bg-white">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${course.color}`}>
                {course.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-blue-600 text-sm font-semibold mb-4">{course.duration}</p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {course.description}
              </p>
              <button className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                View Syllabus <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}