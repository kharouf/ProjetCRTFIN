import React, { useEffect, useState } from 'react'
import EmojiPicker from 'emoji-picker-react';
import '../scss/event.css'
import gofa from "../assets/images/gofa.jpg"
import Carousel from 'react-grid-carousel'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useDispatch } from 'react-redux';
import { evenementget } from './JS/evenementSlice/eventSlice';

const Events = () => {
  const dispatch = useDispatch()
  const [pingE, setPingE] = useState()
  useEffect(() => {
    dispatch(evenementget())
  }, [pingE])
  const evenements = useSelector((state) => state.evenement?.evenement);

  return (

    <section id='event'>
      <div class="card-list">
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={2}
      // navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
      
     
    </Swiper>
        
        
        {/* <div class="card-event">
          <div class="card-image">
          <Carousel dotColorActive showDots>
                  <Carousel.Item>
                    <img src={gofa} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={gofa} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={gofa} />
                  </Carousel.Item>
                </Carousel>
          </div>

          <div class="card-header">
<h1>{evenements?.name} </h1>           
          </div>
          <div class="card-footer">
            <div class="card-meta card-meta--views">
            
            </div>
            <div class="card-meta card-meta--date">
              <h1>26 فيفري 2023</h1>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Events