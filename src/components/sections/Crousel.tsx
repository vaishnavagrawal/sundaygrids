import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import prevSvg from '../../assets/Prev.svg';
import nextSvg from '../../assets/Next.svg';
import './crousel.css';

// import required modules
import { Navigation, Pagination } from 'swiper';
import Pre from '../icons/Pre';

export const CrouselCard = ({ data, color }: any) => {
  return (
    <div
      className='w-full flex flex-col items-start py-10 px-12 rounded-md'
      style={{
        background: color,
        // opacity: '.7',
      }}
    >
      <div className='text-start'>{data.message}</div>
      <div className='flex mt-8'>
        <img
          src={data.avatar}
          alt=''
          className='rounded-full'
          style={{
            width: '50px',
            height: '50px',
          }}
        />
        <div className='flex flex-col ml-5 items-start'>
          <b>{data.name}</b>
          <div className='font-normal'>{data.designation}</div>
        </div>
      </div>
    </div>
  );
};

const Colors = ['#fff4da', '#ffab74', '#fabed7'];

export default function Carousel() {
  const [data, setData] = useState([]);

  const nextElRef = useRef<HTMLButtonElement>(null);
  const prevElRef = useRef<HTMLButtonElement>(null);
  const pagination = {
    // type: 'custom',
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
    // renderCustom: function (swiper, current, total) {
    //   return (
    //     <div>
    //       <div className='swiper-pagination'>
    //         {[
    //           ...Array(3).map((el) => {
    //             return <span className=''> {el}</span>;
    //           }),
    //         ]}
    //       </div>
    //     </div>
    //   );
    // },
  };

  const getData = () => {
    axios
      .get(
        'https://naseers819.wixsite.com/website-5/_functions/webpageTestimonials'
      )
      .then((res: any) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination, Navigation]}
        // className='mySwiper'
        navigation={{
          nextEl: nextElRef.current,
          prevEl: prevElRef.current,
          enabled: true,
        }}
        slidesPerView={1.3}
        spaceBetween={50}
        rewind={true}
        // loopAdditionalSlides={0}
      >
        {data
          ? data.map((el, i) => (
              <SwiperSlide>
                <CrouselCard data={el} color={Colors[i]} />
              </SwiperSlide>
            ))
          : ''}

        <button ref={prevElRef} className='swiper-button-prev1 bg-white'>
          <img src={prevSvg} alt='' className='' />
        </button>
        <button ref={nextElRef} className='swiper-button-next1 bg-white'>
          <img src={nextSvg} alt='' className='' />
        </button>
      </Swiper>
    </>
  );
}
