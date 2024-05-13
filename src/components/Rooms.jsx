import React from 'react';

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>We also take pride in our excellent customer service</h3>
        <p className='pt-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?
        </p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
        className='object-cover w-full h-full'
          src='https://static2.issaplus.com/wa-data/public/photos/46/62/6246/6246.970.jpg'
          alt='/'
        />
        <img
        className='row-span-2 object-cover w-full h-full'
          src='https://storage.yandexcloud.net/elyts-prod/medialibrary/439/6o1bm5w70xey3ltjupegrcu1fa82fhri/image21.jpg'
          alt='/'
        />
        <img
        className='object-cover w-full h-full'
          src='https://gabbiano-nsk.ru/assets/templates/salon/img/news/gnsk170821-3.jpg'
          alt='/'
        />
      </div>
    </div>
  );
};

export default Rooms;
