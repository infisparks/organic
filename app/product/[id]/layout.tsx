import { Leaf } from "lucide-react";
import Link from "next/link";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl sm:text-2xl font-bold text-gray-900">EcoHarvest</span>
            </Link>
          </div>
        </div>
      </div>
      {children}
    </main>
  );
}