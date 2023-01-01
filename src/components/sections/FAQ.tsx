import React from 'react';
import { cls } from '../../cls.utils';
import FAQAccordian from '../Accordian';

import Items from '../Items';

function FAQ() {
  return (
    <div className='bg-[#E6F9FF]'>
      <div className={cls('py-16', ['container'])}>
        <div className='flex w-full'>
          <div className='w-1/2'>
            <Items />
          </div>
          <div className='flex w-1/2 pt-12'>
            <FAQAccordian />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
