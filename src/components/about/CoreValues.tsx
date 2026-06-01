export const CoreValues = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-black rounded-[60px] p-12 md:p-24 text-white overflow-hidden relative">
        <div className="grid md:grid-cols-2 gap-20 relative z-10">
          <div>
             <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8 max-w-md">Our Core Values</h2>
             <p className="text-gray-400 text-lg leading-relaxed italic">"The DNA of our institution that defines every decision and action."</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
               <div className="border-l-2 border-amber-500 pl-6">
                <p className="font-bold text-xl mb-1">Integrity</p>
                <p className="text-gray-500 text-sm">Transparency in every action.</p>
              </div>
              <div className="border-l-2 border-amber-500 pl-6">
                <p className="font-bold text-xl mb-1">Excellence</p>
                <p className="text-gray-500 text-sm">Continuous pursuit of quality.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-amber-500 pl-6">
                <p className="font-bold text-xl mb-1">Innovation</p>
                <p className="text-gray-500 text-sm">Redefining training methods.</p>
              </div>
              <div className="border-l-2 border-amber-500 pl-6">
                <p className="font-bold text-xl mb-1">Commitment</p>
                <p className="text-gray-500 text-sm">Dedicated to our trainees.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Background design elements */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 blur-[100px] -mr-48 -mb-48 rounded-full" />
      </div>
    </div>
  </section>
);
