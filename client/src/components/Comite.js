import React from 'react'


import "../scss/comite.css"
import logo from '../assets/images/logo.png'
import president from '../assets/images/comite/med.jpg'
import vis_president from '../assets/images/comite/mohsen.jpg'
import secretair from '../assets/images/comite/salah.JPG'
import teresorie from '../assets/images/comite/najeh.JPG'
import diffusion from '../assets/images/comite/wala.jpg'
import sante from '../assets/images/comite/oussema.jpg'
import catastrophe from '../assets/images/comite/ramzi.jpg'
import chabeb from '../assets/images/comite/howayda.jpg'
import secourisme from '../assets/images/comite/medzatra.jpg'
import sociale from '../assets/images/comite/medalya.jpg'




const Comite = () => {
  return (
    <section id="comite">
      <div className="comite">

        {/* <div className='comite-title'>

          <img src={logo} alt="logo" width={"150px"} />

          <h1> الهلال الأحمر التونسي الهيئة المحلية بغنوش</h1>

          <img src={logo} alt="logo" width={"150px"} />


        </div> */}
        <div className="list_comite">
          <div className="list1">
            
            <div className="container">
            <div class="card_box">
              <div className="container_image">
                <img src={teresorie} alt="logo" width={"200px"} height={"200px"} />
              </div>

              <div className="container_title">
                <h1> ناجح منصور</h1>
              </div>
              <div className="container_poste">
                <h3>أمين مال</h3>
              </div>
              </div>
            </div>
            <div className="container">
            <div class="card_box">

              <div className="container_image">
                <img src={secretair} alt="logo" width={"200px"} height={"200px"} />
              </div>

              <div className="container_title">
                <h1>   صالح الغودي</h1>
              </div>
              <div className="container_poste">
                <h3>كاتب عام </h3>
              </div>
              </div>
            </div>
            <div className="container">
            <div class="card_box">

              <div className="container_image">
                <img src={vis_president} alt="logo" width={"200px"} height={"200px"} />
              </div>

              <div className="container_title">
                <h1>  محسن راجح</h1>
              </div>
              <div className="container_poste">
                <h3>نائب الرئيس</h3>
              </div>
              </div>
            </div>
            <div className="container">
            <div class="card_box">

              <div className="container_image">
                <img src={president} alt="logo" width={"200px"} height={"200px"} />
              </div>

              <div className="container_title">
                <h1> محمد سوايسة</h1>
              </div>
              <div className="container_poste">
                <h3>رئيس الجمعية</h3>
              </div>
            </div>
            </div>
          </div>
          <div className="list2">
            <div className="container">
            <div class="card_box">

              <div className="container_image">
                <img src={diffusion} alt="logo" width={"200px"} height={"200px"} />
              </div>

              <div className="container_title">
                <h1> ولاء الخروف</h1>
              </div>
              <div className="container_poste">
                <h3>عضو مكلف بالنشر </h3>
              </div>
              </div>
            </div>
            <div className="container">
            <div class="card_box">

              <div className="container_image">
                <img src={sociale} alt="logo" width={"200px"} height={"200px"} />
              </div>

              <div className="container_title">
                <h1> محمد علية</h1>
              </div>
              <div className="container_poste">
                <h3>عضو مكلف بالعمل الإجتماعي  </h3>
              </div>
              </div>
            </div>
            <div className="container">
            <div class="card_box">
              <div className="container_image">
                <img src={secourisme} alt="logo" width={"200px"} height={"200px"} />
              </div>

              <div className="container_title">
                <h1> محمد زعاترة</h1>
              </div>
              <div className="container_poste">
                <h3>عضو مكلف بالاسعاف  </h3>
              </div>
            </div>
            </div>
          </div>
          <div className="list3">
            <div className="container">
            <div class="card_box">

              <div className="container_image">
                <img src={catastrophe} alt="logo" width={"200px"} height={"200px"} />
              </div>

              <div className="container_title">
                <h1>  رمزي خروف</h1>
              </div>
              <div className="container_poste">
                <h3>عضو مكلف بإغاثة </h3>
              </div>
              </div>
            </div>
            <div className="container">
            <div class="card_box">

              <div className="container_image">
                <img src={sante} alt="logo" width={"200px"} height={"200px"} />
              </div>

              <div className="container_title">
                <h1> أسامة رجب</h1>
              </div>
              <div className="container_poste">
                <h3>عضو مكلف بالصحة </h3>
              </div>
              </div>
            </div>
            <div className="container">
            <div class="card_box">

              <div className="container_image">
                <img src={chabeb} alt="logo" width={"200px"} height={"200px"} />
              </div>

              <div className="container_title">
                <h1>هويدة غودي</h1>
              </div>
              <div className="container_poste">
                <h3> عضو مكلف بالشباب</h3>
              </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </section>
  )
}

export default Comite