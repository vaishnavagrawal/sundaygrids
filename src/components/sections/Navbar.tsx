import space from '../../assets/Space.svg';
import { cls } from '../../cls.utils';

function Navbar() {
  return (
    <div
      className={cls('flex justify-between py-8 items-center', ['container'])}
    >
      <div>
        <a href='/'>
          <img src={space} className='flex' alt='Logo' />
        </a>
      </div>
      <div className='flex lg:gap-x-12 md:gap-x-10 items-center'>
        <a href='#' className='text-[#89A7C3]'>
          Home
        </a>
        <a href='#' className='text-[#89A7C3]'>
          Template
        </a>
        <a href='#' className='text-[#89A7C3]'>
          Price
        </a>
        <a href='#' className='text-[#89A7C3]'>
          Help
        </a>
        <button
          className='text-[#0E6FFF]  border-[#8899AA] px-4 py-2 font-bold text-lg'
          style={{
            border: '1px solid ',
          }}
        >
          Get In Touch{' '}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
