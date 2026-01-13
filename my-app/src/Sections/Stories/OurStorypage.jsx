import React from 'react';

export default function OurStorypage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-purple-800">More Than Just</span>
            <br />
            <span className="text-pink-500">Flour & Sugar.</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            The 3B's Bakery was born from a simple desire: to turn life's sweetest moments into edible memories.
          </p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=800&fit=crop" 
                  alt="Berlinda Austin - Founder"
                  className="w-full h-150 object-cover"
                />
              </div>
              {/* Name Badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-6 py-4 shadow-xl">
                <h3 className="text-xl font-bold text-purple-800">Berlinda Austin</h3>
                <p className="text-sm text-purple-600 uppercase tracking-wider">Founder & Head Baker</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-purple-700 font-bold uppercase tracking-widest text-sm mb-4">Our Origin</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Berly's Bakes & Blends
              </h2>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2025 by <span className="font-semibold text-gray-800">Berlinda Austin</span>, The 3B's started as a passion project in a home kitchen. What began as baking for close friends quickly grew into a full-service bakery serving the Tema-Michel Camp community and beyond.
                </p>
                
                <p>
                  We believe that a cake shouldn't just look good—it should taste like home. That's why we never compromise on ingredients. Real butter, fresh cream, and premium chocolate go into every single batch.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <h3 className="text-4xl font-bold text-purple-700 mb-2">2025</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Established</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-purple-700 mb-2">100%</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Handmade</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-purple-700 mb-2">5★</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-700 font-bold uppercase tracking-widest text-sm mb-4">What We Stand For</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎂</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                Every cake is made from scratch with premium ingredients. No shortcuts, no compromises—just pure, delicious quality.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Made With Love</h3>
              <p className="text-gray-600 leading-relaxed">
                We pour our heart into every creation, treating each order as if it were for our own celebration.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Creations</h3>
              <p className="text-gray-600 leading-relaxed">
                Your vision, our expertise. We specialize in bringing your dream cake to life, no matter how unique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Create Something Sweet?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Whether it's a wedding, birthday, or just because—we're here to make your celebration unforgettable.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="/shop" 
              className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg"
            >
              Browse Our Menu
            </a>
            <a 
              href="#contact" 
              className="bg-white hover:bg-gray-50 text-purple-700 border-2 border-purple-700 px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}