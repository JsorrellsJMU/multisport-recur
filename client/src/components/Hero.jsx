import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
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
          Join the Recur Team
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-6">
          Shop exclusive merch, check out your favorite athletes’ stats, and access pro tips—all in one place.
        </p>
        <a
          href="#shop"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
