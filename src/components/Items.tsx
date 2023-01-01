import React, { useState } from 'react';
import { cls } from '../cls.utils';

function Items() {
  const [selected, setSelected] = useState(0);

  const Item = (props: any) => {
    const { index: key, content } = props;
    console.log('content ,  key ', content, key);
    return (
      <button
        key={key}
        className='px-3 py-2 rounded-md font-bold my-1 cursor-pointer'
        onClick={() => setSelected(key)}
        style={{
          color: selected == key ? '#043833' : '',
          background: selected == key ? '#AFE5CF' : '',
        }}
      >
        {content}
      </button>
    );
  };
  const items = [
    'Tab Item 1 ',
    'Tab Item 2 ',
    'Tab Item 3 ',
    'Tab Item 4 ',
    'Tab Item 5 ',
  ];

  return (
    <div className='w-2/3 max-w-[320px] mx-auto'>
      <h3 className={cls('pb-8', ['h3'])}>FAQ Heading</h3>
      <div className='bg-[#043833] mt-8 p-3 rounded-md text-white'>
        <div className='flex flex-col'>
          {items.map((content, index) => {
            return <Item key={index} index={index} content={content} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Items;
