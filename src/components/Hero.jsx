import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src='https://s7.stc.all.kpcdn.net/woman/wp-content/uploads/2023/03/svadebnye-kostyumy-960-960x540.jpg'
        alt='/'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>Welcome to our online store!</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
          Welcome to the world of stylish fashion and convenient shopping right from the comfort of your home. 
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis
            est, id consequuntur sequi ipsum vitae sit non exercitationem.
          </p>
          <button className='bg-white text-black '>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
