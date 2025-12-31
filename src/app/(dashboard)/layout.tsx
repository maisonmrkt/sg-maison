import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/dashboard" className="font-semibold text-xl text-gray-900">
                Signals Gateway
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar + Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-4rem)]">
          <nav className="p-4 space-y-2">
            <Link 
              href="/dashboard" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Overview
            </Link>
            {/* Future modules will be added here */}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <p className="px-4 text-xs text-gray-400 uppercase tracking-wider">
                Coming Soon
              </p>
              <p className="px-4 py-2 text-gray-400 text-sm">Conversion Tracker</p>
              <p className="px-4 py-2 text-gray-400 text-sm">Integration Hub</p>
              <p className="px-4 py-2 text-gray-400 text-sm">Insights Feed</p>
              <p className="px-4 py-2 text-gray-400 text-sm">Channel Performance</p>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
