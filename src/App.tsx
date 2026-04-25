function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-xl font-bold">AI Agency</h1>
        <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700">
          Book Call
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center mt-20 px-6">
        <h2 className="text-5xl font-bold leading-tight">
          Your operations are drowning in <br />
          <span className="text-blue-500">
            manual work, disconnected tools
          </span>
        </h2>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          AI automation systems that streamline your business and eliminate
          operational friction.
        </p>

        <button className="mt-8 bg-blue-600 px-8 py-3 rounded-xl text-lg hover:bg-blue-700">
          Book Free Audit
        </button>
      </section>

      {/* Services */}
      <section className="mt-32 px-10">
        <h3 className="text-3xl font-bold text-center mb-12">
          What We Do
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-xl">
            <h4 className="text-xl font-semibold mb-3">Automation</h4>
            <p className="text-gray-400">
              Replace manual processes with smart AI workflows.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h4 className="text-xl font-semibold mb-3">Lead Generation</h4>
            <p className="text-gray-400">
              Automated systems to find and qualify leads.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h4 className="text-xl font-semibold mb-3">AI Agents</h4>
            <p className="text-gray-400">
              Custom AI assistants to run parts of your business.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-32 pb-20">
        <h3 className="text-3xl font-bold">
          Ready to scale with AI?
        </h3>

        <button className="mt-6 bg-blue-600 px-8 py-3 rounded-xl hover:bg-blue-700">
          Get Started
        </button>
      </section>
    </div>
  );
}

export default App;