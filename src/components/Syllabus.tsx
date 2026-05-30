import { BookOpen, CheckCircle2 } from 'lucide-react';

export default function Syllabus() {
  const pgdcaModules = [
    { title: "Module 1: Computer Fundamentals & OS", topics: ["Introduction to Computers", "Windows & Linux Basics", "File Management"] },
    { title: "Module 2: Office Automation", topics: ["MS Word (Advanced Formatting)", "MS Excel (Formulas & Dashboards)", "MS PowerPoint"] },
    { title: "Module 3: Programming Logic", topics: ["C Programming", "Data Structures", "Algorithm Design"] },
    { title: "Module 4: Web Technologies", topics: ["HTML5 & CSS3", "JavaScript Basics", "Responsive Design"] },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">PGDCA Detailed Syllabus</h2>
        </div>
        
        <div className="space-y-4">
          {pgdcaModules.map((module, index) => (
            <details 
              key={index} 
              className="group border border-gray-200 rounded-xl bg-gray-50 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between p-6 text-gray-900 font-semibold text-lg hover:bg-gray-100 transition-colors">
                {module.title}
                <span className="transition duration-300 group-open:-rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="p-6 bg-white border-t border-gray-200">
                <ul className="space-y-3">
                  {module.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}