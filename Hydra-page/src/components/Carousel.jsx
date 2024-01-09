import React from 'react'

function Carousel() {
  return (
    <>
    <div className='bg-[#343045] text-white '>
        <div>
            {/*first part*/}
            <div className='flex justify-centeritems-center'>
                <div className='ml-7 text-center md:text-left md:w-1/2'>
                <h1 className='text-4xl font-bold '>WHY BUILD</h1>
                <p className='text-3xl'>WITH HYDRA</p>
                </div>
                <img
            src="/public/longarrow.svg"
            alt="Arrow"
            className="w-23 h-12 ml-2 pt-5 hidden md:inline-block"
          />
          <div className='ml-11 mr-7 items-center hidden md:inline-block'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero, ratione blanditiis ea culpa sit repellendus corrupti rerum possimus! Ad minus neque natus, nemo, id dolorum adipisci ab ea inventore possimus illum est recusandae nobis animi, provident labore quis excepturi quod distinctio veritatis quidem! Officiis nulla omnis ab doloribus sapiente temporibus unde, autem eos a.</p>
          </div>
            </div>
        </div>



        {/*Second Part*/}
      <div className="flex  justify-center pt-11">
  <div className="w-1/4 p-4 bg-[#433D60] mx-1 flex-col justify-center items-center">
    <div>
      <img src='/public/card1.svg' alt='' className='w-15 h-auto' />
      <h1 className='text-3xl'>SIMULATION</h1>
    </div>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sed eaque. Laboriosam aperiam temporibus modi tenetur quasi doloribus quisquam. Tenetur nisi nam quibusdam dolores. Autem perferendis optio molestias corporis reprehenderit iusto asperiores impedit id?
      </p>
    </div>
    <div><button className="bg-[#8176AF] text-[#343045] px-5 py-4 rounded-full hover:text-gray-300  font-semibold mb-4 md:mb-0 w-full md:w-auto">
            TRY IT NOW
          </button></div>
  </div>
  <div className="w-1/4 p-4 bg-[#433D60] mx-1">
    <div>
      <img src='/public/card2.svg' alt='' className='w-15 h-auto' />
      <h1 className='text-3xl'>EDUCATION</h1>
    </div>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sed eaque. Laboriosam aperiam temporibus modi tenetur quasi doloribus quisquam. Tenetur nisi nam quibusdam dolores. Autem perferendis optio molestias corporis reprehenderit iusto asperiores impedit id?
      </p>
      <div><button className="bg-[#8176AF] text-[#343045] px-5 py-4 rounded-full hover:text-gray-300  font-semibold mb-4 md:mb-0 w-full md:w-auto">
            TRY IT NOW
          </button></div>
      
    </div>
  </div>
  <div className="w-1/4 p-4 bg-[#433D60] mx-1">
    <div>
      <img src='/public/card3.svg' alt='' className='w-15 h-auto' />
      <h1 className='text-3xl'>SELF-CARE</h1>
    </div>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sed eaque. Laboriosam aperiam temporibus modi tenetur quasi doloribus quisquam. Tenetur nisi nam quibusdam dolores. Autem perferendis optio molestias corporis reprehenderit iusto asperiores impedit id?
      </p>
    </div>
    <div><button className="bg-[#8176AF] text-[#343045] px-5 py-4 rounded-full hover:text-gray-300  font-semibold mb-4 md:mb-0 w-full md:w-auto">
            TRY IT NOW
          </button></div>
  </div>
  <div className="w-1/4 p-4 bg-[#433D60] mx-1">
    <div>
      <img src='/public/card4.svg' alt='' className='w-15 h-auto' />
      <h1 className='text-3xl'>OUTDOOR</h1>
    </div>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sed eaque. Laboriosam aperiam temporibus modi tenetur quasi doloribus quisquam. Tenetur nisi nam quibusdam dolores. Autem perferendis optio molestias corporis reprehenderit iusto asperiores impedit id?
      </p>
    </div>
    <div><button className="bg-[#8176AF] text-[#343045] px-5 py-4 rounded-full hover:text-gray-300  font-semibold mb-4 md:mb-0 w-full md:w-auto">
            TRY IT NOW
          </button></div>
  </div>
</div>

    </div>

    </>
  )
}

export default Carousel