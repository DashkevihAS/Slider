import React from 'react';
// import SlideTitle from './SlideTitle';
import SlideImage from './SlideImage';

export default function Slide({ data }) {
  console.log(data);
  return (
    <div className='slide'>
      <SlideImage src={data} alt='изображение' />
      {/* <SlideTitle title={title} /> */}
    </div>
  );
}
