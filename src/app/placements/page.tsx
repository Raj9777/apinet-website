import Navbar from "@/components/Navbar";
import Placements from "@/components/Placements";

export default function PlacementsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="py-16 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h1>
        <p className="text-lg text-gray-600 mb-8">
          Our students don't just learn; they get hired. See where Apinet alumni are working today.
        </p>
      </div>

      <Placements />
      
    </main>
  );
}