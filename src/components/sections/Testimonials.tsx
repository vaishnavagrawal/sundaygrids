import React from 'react';
import { cls } from '../../cls.utils';
import Carousel from './Crousel';

function Testimonials() {
  return (
    <>
      <div className={cls('pt-16', ['container'])}>
        <h2 className={cls('mb-8', ['h2'])}>Testimonials</h2>
      </div>
      <div className='pl-4 sm:pl-0 pb-16 relative testimonial-content'>
        <Carousel />
      </div>
    </>
  );
}

export default Testimonials;
