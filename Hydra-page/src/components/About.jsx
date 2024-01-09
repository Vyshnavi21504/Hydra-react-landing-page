import React from 'react';

function About() {
  return (
    <>
      <div className="bg-[#343045] text-white ">
        <div className="flex flex-col md:flex-row items-center justify-between mb-11 pb-4">
          {/* First part */}
          <div className="ml-7 text-center md:text-left md:w-1/2 ">
            <h1 className='text-4xl md:text-3xl'>
              <span className="font-bold "> INTRODUCTION </span>TO HYDRA VR
            </h1>
          </div>  
           <img
            src="/public/longarrow.svg"
            alt="Arrow"
            className="w-23 h-12 ml-2 pt-5 hidden md:inline-block"
          />
          <div className="ml-11 mr-7 text-center md:text-left md:w-1/2 hidden md:inline-block ">
            <p className="inline-block md:inline-block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus adipisci ea possimus molestias nostrum molestiae
              perspiciatis iure magnam unde facilis obcaecati voluptates,
              asperiores excepturi, accusantium, neque nemo consequatur esse.
              Autem eaque hic aliquam mollitia atque a recusandae molestiae
              harum aut!
            </p>
          </div>
        </div>
        {/* Second part */}
        <div className="bg-[#343045] p-8 text-white  flex items-center flex-col md:flex-row justify-between">
      {/* Left side - Image */}
      <div className="flex-shrink-0 mr-4">
        <img
          src="/public/boyabout.svg"
          alt="Your Image"
          className="w-25 h-auto "
        />
      </div>

      {/* Right side - Topic, Paragraph, and Button */}
      <div className="ml-4  pr-3 pl-17">
        <h2 className="text-3xl  mb-4 hidden md:inline-block "><span className=' text-5xl font-bold'>ABOUT</span></h2>
        <h3 className='hidden md:inline-hidden'>HYDRA VR </h3>  
        <p className="text-gray-300 mb-4 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda provident dolore sunt officiis quidem dolor vel eius nostrum. Sit nisi aperiam suscipit laboriosam dolores debitis doloribus blanditiis repellat doloremque dolorem ipsa tenetur magnam voluptates placeat nesciunt, accusamus perferendis eos. Atque, quod inventore, beatae soluta iure nostrum aut enim eos libero rem qui rerum voluptas voluptate debitis? Adipisci obcaecati nostrum eius id eum porro, vel fuga nam deleniti harum vero non quibusdam magnam numquam recusandae aut, repudiandae pariatur? Distinctio quia vitae quos ipsum harum obcaecati quis ex deserunt architecto.
        </p>
        <button className="bg-[#8176AF] text-[#343045] px-5 py-4 rounded-full hover:text-gray-300 font-semibold mb-4 md:mb-0 w-full md:w-auto">
            Let's Get In Touch
          </button>
      </div>
    </div>

      </div>
    </>
  );
}

export default About;
