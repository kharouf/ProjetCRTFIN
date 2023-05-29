import React, { useRef } from 'react'

import '../scss/App.css';

import "../scss/contact.css"
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { MdLocationPin } from "react-icons/md";




import { Link } from 'react-router-dom';
const Contact = () => {
  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  let iconStylesmd = { color: "#034396", fontSize: "3em" };
  let iconStylesmd1 = { color: "#034396", fontSize: "2.5em" };
  let iconStylesmd2 = { color: "#034396", fontSize: "3.5em" };

  const form = useRef()
  return (
    <section id="contact" >
      <div className="contact-us">

        <div className="maps">
          <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.0963668334584!2d10.06212811498213!3d33.93864948063696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12557b1a6618c6d5%3A0x3c0d85bf99b659ab!2sCroissant%20Rouge%20Tunisien%20-%20Comit%C3%A9%20Local%20de%20Ghannouche!5e0!3m2!1sfr!2stn!4v1677753010731!5m2!1sfr!2stn"
            // width="600" height="450" 
            style={{ border: "0" }}
            allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">

          </iframe>
        </div>

        <div className="form ">
          <h1>إتصل بنا </h1>
          <div className="form-name">
            <div className="form-name-name">
              <label htmlFor="email">البريد الألكتروني</label>
              <input type="email" placeholder="اسم البريد" />

            </div>
            <div className="form-name-name">
              <label htmlFor="name">اسم المستخدم</label>
              <input type="text" placeholder="اسم المستخدم" />

            </div>





          </div>
          <div className="form-msg">
            <label htmlFor="">رسالة</label>
            <textarea placeholder='رسالة' name="" id="" cols="30" rows="10"></textarea>
          </div>

          <button className='btn-send'>
            
        إرسال رسالة
          </button>


        </div>

      </div>
      <div className="contact">

        <div className="contact-social">
          <div className="tele">

            < BsFillTelephoneFill className='link' style={iconStylesmd1} />

            <h3>+216 53 800 745</h3>

          </div>
          <div className="gmail">


            < CgMail className='link' style={iconStylesmd2} />

            <h3>crt.ghannouche
              @gmail.com</h3>

          </div>
          <div className="insta">

            < BsInstagram className='link' style={iconStylesmd} />

            <h3>الهلال الأحمر بغنوش</h3>


          </div>
          <div className="localisation">

            < MdLocationPin className='link' style={iconStylesmd} />
            <h3> شارع الحبيب بورقيبة <br /> غنوش</h3>

          </div>

        </div>
        {/* <div className="localisation">
               localisation
                </div> */}
      </div>

    </section>
  )
}

export default Contact