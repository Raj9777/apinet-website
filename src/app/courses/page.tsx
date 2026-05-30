import Navbar from "@/components/Navbar";
import Courses from "@/components/Courses";
import Syllabus from "@/components/Syllabus";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Detailed Course Programs</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Comprehensive, industry-aligned training designed to take you from a beginner to an IT professional.
          </p>
        </div>
      </div>

      <Courses />
      
      {/* Detailed Syllabus Section */}
      <div className="border-t border-gray-200">
        <Syllabus />
      </div>
      
    </main>
  );
}