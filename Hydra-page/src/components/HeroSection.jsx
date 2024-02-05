import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-[#343045] p-8 flex flex-col md:flex-row items-center justify-between min-h-screen">
      {/* Left side - Text Content */}
      <div className="w-full  md:w-1/2 text-center  md:text-left mb-4 md:mb-0 order-2 md:order-1">
        <div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-9 pt-10">
            <span className='text-[#C0B7E8]'>Drive</span> into the Depth of{' '}
            <span className='text-[#C0B7E8]'>Virtual Reality</span>
          </h1>
        </div>

        <p className="text-white mb-4 pt-7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          illum iste modi, odio rem rerum. Eveniet dicta earum voluptas
          asperiores, incidunt iusto provident dolorum eum.
        </p>

        <div className="flex items-center">
          <button className="bg-[#8176AF] text-[#343045] px-5 py-4 rounded-full hover:text-gray-300 font-semibold mb-4 md:mb-0 w-full md:w-auto">
            Build Your World
          </button>
          <img
            src="/public/arrow-small-right.svg"
            alt="Arrow"
            className="w-12 h-12 ml-2 inline-block hidden md:inline-block"
          />
        </div>
      </div>

      {/* Right side - Image */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0 order-1 md:order-2">
        <img
          src="/public/girl.svg"
          alt="Hero Image"
          className="w-29 h-auto rounded-lg mx-auto md:mr-0"
        />
      </div>
    </div>
  );
};

export default HeroSection;
