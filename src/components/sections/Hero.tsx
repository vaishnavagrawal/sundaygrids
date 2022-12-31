import { cls } from '../../cls.utils';

function Hero() {
  return (
    <div>
      <div
        className={cls('mb-8 pt-4 md:pt-20 flex justify-evenly', ['container'])}
      >
        {/* <div> */}
        <div className='flex flex-col md:flex-row justify-between'>
          <img
            src='/peter-olexa-8.jpg'
            alt=''
            className='sm:min-w-[300px] md:w-[34%] h-auto '
          />
          <div className='py-5 md:pr-5 md:w-1/2 flex md:mb-28'>
            <div className='my-auto'>
              <h1 className={cls('', ['h1'])}>
                Requirements gathering
                <br />
                and analysis for references.
              </h1>
              <p className='text-lg pt-8'>
                Convallis turpis erat tempus, viverra aliquet. Nullam viverra
                nam auctor sit ipsum malesuada a, duis volutpat. Convallis
                turpis erat tempus, viverra aliquet. Nullam viverra nam auctor
                sit ipsum malesuada a, duis volutpat.
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className='bg-gradient-to-b from-sky-200 to-sky-50'>
        <div className={cls('relative py-8 md:py-0', ['container'])}>
          <img
            src='/peter-olexa-10.jpg'
            alt=''
            className='md:w-[55%] md:-top-28 ml-auto relative'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
