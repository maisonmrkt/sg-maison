import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <nav className="flex justify-between items-center mb-16">
          <div className="text-white font-semibold text-xl">
            Signals Gateway
          </div>
          <div className="space-x-4">
            <Link 
              href="/sign-in" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/sign-up" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Conversion Intelligence for{' '}
            <span className="text-primary-400">Luxury Brands</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            One platform to capture every conversion, connect every channel, 
            and see exactly what's working—owned by you, managed by experts.
          </p>
          <Link 
            href="/sign-up"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Start Free Trial
          </Link>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-primary-400 text-2xl mb-4">📊</div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Conversion Tracker
            </h3>
            <p className="text-gray-400">
              Real-time view of all conversion events with EMQ scores and server-side validation.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-primary-400 text-2xl mb-4">🔌</div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Integration Hub
            </h3>
            <p className="text-gray-400">
              Self-serve management of Shopify, Meta, Google, Klaviyo, and more.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-primary-400 text-2xl mb-4">💡</div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Insights Feed
            </h3>
            <p className="text-gray-400">
              Automated analysis delivered as actionable cards you can act on immediately.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Maison MRKT. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}
