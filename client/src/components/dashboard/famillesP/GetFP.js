import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { deletfamillesP, getfamillesP } from '../../JS/familles/familles'
import { Link, useNavigate } from 'react-router-dom';
import Carousel from 'react-grid-carousel';
import gofa from "../../../assets/images/gofa.jpg";
import '../../../scss/event.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const GetFP = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const [pingF, setPingF] = useState()
  useEffect(() => {
    dispatch(getfamillesP())
  }, [pingF])
  const famillesp = useSelector((state) => state.familles?.familles);
  console.log(famillesp)

  const alertSupp = () => {

    Swal.fire({
      icon: 'success',
      title: '!  تم حذف  بنجاح'

    })
  }
 

  
  return (

    <div className='addusercontent'>
<div className="lists">
   {/* اضف مستخدم */}
       <button >
        <Link to="/dashboard/AddFP"> <Icon icon="mdi:family" width="30" /> </Link> <h1>+</h1></button>
        
      
       <div className="nubuser">
       {/* <Icon icon="octicon:number-16" width="30" color='black' />    */}
       
       {/* <Icon icon="fluent:calendar-week-numbers-24-regular" width="30" rotate={2} /> */}
        {/* <h1>عدد المستخدمين </h1> */}
        <h1> {famillesp?.length} </h1>
        <Icon icon="tabler:number" width="30" />
       </div>
       
       
    </div>
    <div className='title-listes'>
      <h1>قائمة عائلات أصحاب الحق</h1>
    </div>
    <div className='listuser'>
    <table className="table">
      <tr>
        <td className="td">جذف</td>
        <td className="td">تعديل</td>
        {/* <td className="td">الصورة</td> */}
        
        <td className="td">اللقب</td>
        <td className="td">الاسم</td>
       

      </tr>
    </table>




    <div className="user" >
      {famillesp?.length == 0 ? 
      // <h3 class="animate-charcter"> </h3>
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

    :
      
      <table className="table" >
        {famillesp?.map((F, i) =>
          <tr key={i}>
            <td className="td"><button className=" btnc-userlist"
              onClick={() => {


                dispatch(deletfamillesP(F?._id))
                // alertSupp(setPing1(!ping1))

                // Navigate("/dashboard/listuser")

                alertSupp()
                navigate("/dashboard/GetFP")
               setPingF(!pingF)
              }}
              >جذف


            </button></td>
            <td className="td ">
                <Link to={`/dashboard/UpdatetFP/${F?._id}`}  state={famillesp}>
                    <button className=" btna-userlist">تعديل</button></Link></td>

            {/* <td className="td"><img src="" alt="profile" /></td> */}

            <td className="td">{F?.nom}</td>

            <td className="td">{F?.prenom}</td>
          </tr>
        )}
      </table>
      
      }
      
    </div>


  </div>
  </div>
  )
}

export default GetFP