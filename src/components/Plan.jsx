import React from 'react';

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://cdn-ehalf.nitrocdn.com/onVwnlJEdCjVbPEdJHbOXWYMoexczKLS/assets/images/optimized/rev-39f2a70/munchen-shopping.ru/wp-content/uploads/2020/07/klassicheskiy-stil-odezhdi-dla-muzhchin-jeff-tumale-5syq1ud4phu-unsplash.jpg'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQteQNY7PeILBanCV_sZPyjohnCJCHLKlBYqA_5GVy_qQ&s'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://static2.issaplus.com/wa-data/public/photos/45/62/6245/6245.970.jpg'
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://storage.yandexcloud.net/elyts-prod/main/3fa/txnqnhntqsrtwv4mriqyk4plnhzozoqz/167644398663ec8152b140c.png'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://i.pinimg.com/736x/f9/92/7f/f9927f1e84eedc9a719c41fd22925ca8.jpg'
          alt='/'
        />
      </div>
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Here you will find a wide range of products</h3>
        <p className='text-2xl py-6'>
        We are a team of enthusiasts dedicated to creating a unique space for your shopping experience. Regardless of your style or preferences, we have something special for everyone.
        </p>
        <p className='pb-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptates nostrum dolorum reprehenderit error! Doloribus est illo
          eius saepe? Molestias sapiente perspiciatis doloribus consectetur
          nihil facilis aliquid eaque vel quisquam.
        </p>
        <div>
          <button className='border-black mr-4 hover:shadow-xl'>
            Learn More
          </button>
          <button className='bg-black text-white border-black hover:shadow-xl'>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
