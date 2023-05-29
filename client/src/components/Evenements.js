import React, { useEffect, useState } from 'react'

import '../scss/event.css'

import Carousel from 'react-grid-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
import '@fortawesome/fontawesome-free/css/all.min.css';
import gofa from '../assets/images/gofa.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// images
import jour from "../assets/images/jourhilal/1.jpg"
import jour1 from "../assets/images/jourhilal/0.jpg"
import jour2 from "../assets/images/jourhilal/2.jpg"
import jour3 from "../assets/images/jourhilal/3.jpg"
import Descriptionevent from './Descriptionevent'

import { useDispatch, useSelector } from 'react-redux'
import { evenementdelet, evenementget } from './JS/evenementSlice/eventSlice'
import { Link } from 'react-router-dom'

const Evenements = () => {
  const dispatch = useDispatch()
  const [pingE, setPingE] = useState()
  useEffect(() => {
    dispatch(evenementget())
  }, [pingE])
  const evenements = useSelector((state) => state.evenement?.evenement);
  console.log(evenements)
  function reverseString(str) {
    return str.split('-').reverse().join('-');
  }
  const [show, setShow] = useState(false);
  return (
    <section id='evenement'>
   <div className="list-evenements">
   <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={2}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       
        {evenements?.map((evenement, i) =>
       
      <SwiperSlide key={i}>
       
          <div  className="events">
            <div className="cardimg">
              <img src={gofa} alt="" />
            </div>
            <div className="discription">

              <h1>{evenement?.name}</h1>
              <h4>{evenement?.description}</h4>

            </div>

            <div class="card-meta--date">
              
              <h1 > الى يوم {reverseString(evenement?.endDate.split('T')[0])}</h1>
              <h1>من يوم {reverseString(evenement?.startDate.split('T')[0])}</h1>
            </div>

            <div className="card-meta--btn">
           
            </div>
          </div>
      

        </SwiperSlide>
        )}
      </Swiper>
      {/* {evenements?.map((evenement, i) =>
      <div className='enetstss'>
      
          <div key={i} className="events">
            <div className="cardimg">
              <img src={gofa} alt="" />
            </div>
            <div className="discription">

              <h1>{evenement?.name}</h1>
              <h4>{evenement?.description}</h4>

            </div>

            <div class="card-meta--date">
              <h1>{evenement?.startDate}</h1>
              <h1>{evenement?.endDate}</h1>
            </div>

            <div className="card-meta--btn">
           
            </div>
          </div>
      </div>)} */}
     
      
      
     {show? <Descriptionevent setShow={setShow}/> : null} 

     

   </div>

  
    </section>



  )
}

export default Evenements



