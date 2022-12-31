import React from 'react';
import { cls } from '../../cls.utils';
import FAQAccordian from '../accordian';

function FAQ() {
  return (
    <div className='bg-[#E6F9FF]'>
      <div className={cls('py-16', ['container'])}>
        <h2 className={cls('', ['h3'])}>FAQ Heading</h2>
        <div className='flex'>
          <FAQAccordian />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
