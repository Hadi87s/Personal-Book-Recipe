import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const AdvancedParallaxSection: React.FC = () => {
  return (
    <ParallaxProvider>
      <div className="relative">
        {/* Background Section */}
        <Parallax
          className="parallax-bg bg-cover bg-center h-screen"
          translateY={[50, -50]} // Controls parallax speed on Y-axis
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-white text-6xl font-bold">
              Welcome to Food World!
            </h1>
          </div>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default AdvancedParallaxSection;
