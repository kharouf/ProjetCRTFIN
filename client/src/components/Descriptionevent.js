import React from 'react'
import '../scss/event.css'
import gofa from "../assets/images/gofa.jpg"
import Carousel from 'react-grid-carousel'
import jour from "../assets/images/jourhilal/1.jpg"
import jour1 from "../assets/images/jourhilal/0.jpg"
import jour2 from "../assets/images/jourhilal/2.jpg"
import jour3 from "../assets/images/jourhilal/3.jpg"

const Descriptionevent = ({setShow}) => {
  return (
    <div className="list-evenements-detaile">
    <div onClick={()=> setShow(false)} className="container-evenement-detaile">
        
        <div className="image-evenement">
        <Carousel >
                  <Carousel.Item>
                    <img src={jour} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={jour1} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={jour2} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={jour3} />
                  </Carousel.Item>
                </Carousel>
        </div>
        <div className="hedear-evenement">
            <div className="dscription-event">
                <h1 className='titre-event'>نهار الهلال</h1>
                <h3 className='date-event'> 2023/03/04 </h3>
            </div>
            <p>يتجدد الموعد مع الأنشطة الهادفة و الترفيهية ضمن نشاط "نهار الهلال" الذي ينتظم بصفة دورية من طرف متطوعي الهلال الأحمر بغنوش بمقر الجمعية و قد كان مناسبة للامتاع و الإفادة مع طرح مجموع من الفقرات عن الصحة٫ العمل التطوعي٫ قفة رمضان ٫ العاب فكرية ...  و كذلك فرصة طيبة  لمجموعة من الشباب الراغبين في التطوع للتعرف على المنظمة العريقة و المشاركة في نشاطاتها</p>
        </div>
        <div className="footer-evenement">
          <div className="like">
             <i className="fas fa-heart"></i>
        <i class="fa-sharp fa-solid fa-face-smile"></i>
          </div>
          <div className="button-detail">
            
          </div>
       
        </div>

      </div>
      </div>
  )
}

export default Descriptionevent