import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video (no negative z‑index!) */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/stock_video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Train Smarter. Perform Better.
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-6">
          Your all-in-one platform for multi-sport training, performance tracking.
        </p>
        <a
          href="#"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
