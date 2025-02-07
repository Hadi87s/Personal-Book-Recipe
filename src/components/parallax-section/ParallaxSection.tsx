import React from "react";

const ParallaxSection: React.FC = () => {
  return (
    <div>
      {/* Parallax Section 1 */}
      <div className="relative">
        <div
          className="parallax bg-cover bg-center h-screen"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe')",
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl text-white font-extrabold">
            Welcome to the World of Cooking
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-10 text-center bg-amber-500">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Discover New Flavors
        </h2>
        <p className="text-lg md:text-xl mt-4">
          Explore our collection of delicious recipes from around the globe.
        </p>
      </div>

      {/* Parallax Section 2 */}
      <div className="relative">
        <div
          className="parallax bg-cover bg-center h-screen"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl text-white font-extrabold">
            Taste the Best Ingredients
          </h1>
        </div>
      </div>
      
    </div>
  );
};

export default ParallaxSection;
