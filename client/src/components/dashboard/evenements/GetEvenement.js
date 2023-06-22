import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { evenementdelet, evenementget } from '../../JS/evenementSlice/eventSlice';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from 'react-grid-carousel';
import gofa from "../../../assets/images/gofa.jpg";
import '../../../scss/event.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Icon } from '@iconify/react';

const GetEvenement = () => {
  function reverseString(str) {
    return str.split('-').reverse().join('-');
  }
  const dispatch = useDispatch()
  const [pingE, setPingE] = useState()
  useEffect(() => {
    dispatch(evenementget())
  }, [pingE])
  const reloadPage = () => {
    window.location.reload()
    
  }
  const navigate = useNavigate()
  const alertSupp = () => {

    Swal.fire({
      icon: 'success',
      title: '!  تم حذف النشاط بنجاح'

    })
  }
  const evenements = useSelector((state) => state.evenement?.evenement);
  // const date=evenements?.startDate.split("T")
  console.log("date", evenements)
  return (
    <div className='addusercontent'>
    <div className="lists">
   {/* اضف مستخدم */}
       <button ><Link to="/dashboard/Addevent"><Icon icon="mdi:event-add" width="30" /> </Link> </button>

      
       <div className="nubuser">
       {/* <Icon icon="octicon:number-16" width="30" color='black' />    */}
       {/* <Icon icon="fluent:calendar-week-numbers-24-regular" width="30" rotate={2} /> */}
        {/* <h1>عدد المستخدمين </h1> */}
        <h1> {evenements?.length} </h1>
        <Icon icon="tabler:number" width="30" />
       </div>
       
       
    </div>
    <div className='title-listes'>
      <h1>قائمة النشاطات</h1>
    </div>
      <div className='listevent'>

      {evenements?.length == 0 ? 
<div className='lod'>
     <h3 class="animate-charcter"> </h3>
      <div class='co'>
  <div class='loader'>
    <div class='loader--dot'></div>
    <div class='loader--dot'></div>
    <div class='loader--dot'></div>
    <div class='loader--dot'></div>
    <div class='loader--dot'></div>
    <div class='loader--dot'></div>
    <div class='loader--text'></div>
  </div>
</div> 
</div>
:

        evenements?.map((evenement, i) =>
          <div key={i} className="events">
            <div className="cardimg">
              <img src={evenement?.image} alt="" />
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
            <button className=" btnc-userlist" 
   onClick={()=>{dispatch(evenementdelet(evenement?._id))
    alertSupp()
    navigate("/dashboard/listevents")
    setPingE(!pingE)
  }}>جذف</button>
<button className=" btna-userlist"> <Link to={`/dashboard/updateevents/${evenement?._id}`} state={evenements}> تعديل</Link></button>
            </div>
          </div>)
          
          }

      </div>
    </div>
  )
}

export default GetEvenement