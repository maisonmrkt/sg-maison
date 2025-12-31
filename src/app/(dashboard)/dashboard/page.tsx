import { currentUser } from "@clerk/nextjs";

export default async function DashboardPage() {
  const user = await currentUser();
  
  return (
    <div>
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome{user?.firstName ? `, ${user.firstName}` : ''}
        </h1>
        <p className="text-gray-600 mt-1">
          Your conversion intelligence dashboard
        </p>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <p className="text-sm text-gray-500">Platform Status</p>
          <p className="text-2xl font-bold text-green-600 mt-1">Active</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <p className="text-sm text-gray-500">Integrations</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">0 / 5</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <p className="text-sm text-gray-500">Events (24h)</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">—</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <p className="text-sm text-gray-500">EMQ Score</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">—</p>
        </div>
      </div>

      {/* Setup Checklist */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Setup Checklist
        </h2>
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
              ✓
            </div>
            <span className="text-gray-700">Create account</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mr-3">
              2
            </div>
            <span className="text-gray-500">Connect Shopify store</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mr-3">
              3
            </div>
            <span className="text-gray-500">Connect Meta Ads</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mr-3">
              4
            </div>
            <span className="text-gray-500">Install tracking pixel</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mr-3">
              5
            </div>
            <span className="text-gray-500">Verify first conversion event</span>
          </div>
        </div>
      </div>

      {/* Coming Soon Notice */}
      <div className="mt-8 bg-primary-50 border border-primary-200 rounded-xl p-6">
        <h3 className="font-semibold text-primary-900">
          🚧 Dashboard Under Construction
        </h3>
        <p className="text-primary-700 mt-1">
          This is the Signals Gateway MVP scaffold. Conversion Tracker, Integration Hub, 
          Insights Feed, and Channel Performance modules are coming soon.
        </p>
      </div>
    </div>
  );
}
