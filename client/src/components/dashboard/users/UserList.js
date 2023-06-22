import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userdelet, userget } from "../../JS/userSlice/userSlice";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Icon } from '@iconify/react';
import Spiner from '../../Spiner';

const UserList = () => {
  const navigate = useNavigate()
  const [ping1, setPing1] = useState()
  useEffect(() => {
    dispatch(userget())

  }, [ping1])
  // setPing1(!ping1)
  const dispatch = useDispatch()
  const [listuser, setlistuser] = useState([])
  const reloadPage = () => {
    setTimeout(() => {
      window.location.reload()
    }, 1500);
    
    
  }




  const users = useSelector((state) => state.user?.usera);
  const [swal, ...rest] = useState({});
  const MySwal = withReactContent(Swal)

  const alertSupp = () => {

    Swal.fire({
      icon: 'success',
      title: '!  تم حذف المستخدم بنجاح'

    })
  }

  




  return (
    <div className='addusercontent'>
      
   <div className="lists">
   {/* اضف مستخدم */}
       <button >
        <Link to="/dashboard/adduser"><Icon icon="ri:user-add-line" width="30" /> </Link> 
        </button>

      
       <div className="nubuser">
       {/* <Icon icon="octicon:number-16" width="30" color='black' />    */}
       {/* <Icon icon="fluent:calendar-week-numbers-24-regular" width="30" rotate={2} /> */}
        {/* <h1>عدد المستخدمين </h1> */}
        <h1> {users?.length-1} </h1>
        <Icon icon="tabler:number" width="30" />
       </div>
       
       
    </div>
     <div className='title-listes'>
      <h1>قائمة المتسخدم</h1>
    </div>
      <div className='listuser'>
      
        
        <table className="table">
          <tr>
            <td className="td">جذف</td>
            <td className="td">تعديل</td>
            {/* <td className="td">الصورة</td> */}
            <td className="td"> متطوع  </td>
            <td className="td"> مسؤل  </td>
            <td className="td"> البريد الإلكتروني  </td>
            <td className="td">اللقب</td>
            <td className="td">الاسم</td>
            <td className="td">رقم الملف</td>
            <td className="td"> الصورة</td>

          </tr>
        </table>




        <div className="user" >

        {users?.length-1 == 0 ? 
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
</div>:
          <table className="table" >
            {users?.map((user, i) => user?.isAdmin === false &&(
              <tr key={i}>
                <td className="td"><button className=" btnc-userlist"
                  onClick={() => {


                    dispatch(userdelet(user?._id))
                    alertSupp(setPing1(!ping1))

                    navigate("/dashboard/listuser")
                    
                    
                  }}>جذف


                </button></td>
                <td className="td "><Link to={`/dashboard/updateuser/${user?._id}`} state={user}><button className=" btna-userlist">تعديل</button></Link></td>

                {/* <td className="td"><img src="" alt="profile" /></td> */}

                <td className="td"> {user?.isBenevole ? "نعم" : "لا"}</td>
                <td className="td"> {user?.isAdmin ? "نعم" : "لا"}</td>
                <td className="td">{user?.email} </td>
                <td className="td">{user?.lastName}</td>

                <td className="td">{user?.name}</td>
                <td className="td">{user?.num_dossier}</td>
                <td className="td td-img"><img className='imglisteuser'  src={user?.image}/></td>
              </tr>
            ))}
          </table>}
        </div>


      </div>

      {/* <div className="list1">
{users?.map((user, i) => 
<div key={i} className="container">
  <div class="card_box">
    <div className="container_image">
      <img src={user?.image} alt="logo" width={"200px"} height={"200px"} />
    </div>

    <div className="container_title">
      <h1> {user?.name} {user?.lastName} </h1>
    </div>
    <div className="container_poste">
      <h3>{user?.email} </h3>
    </div>
    <div className="container_poste1">
      <h3>متطوع :{user?.isBenevole? "نعم" : "لا"} </h3>
      <h3>مسؤل :{user?.isAdmin? "نعم" : "لا"} </h3>
    </div>
    <div className="card-meta--btn">
  <button className=" btnc-userlist" 
   onClick={()=>{dispatch(userdelet(user?._id))
    setPing1(!ping1)
  }}>جذف</button>

<button className=" btna-userlist"><Link to="/dashboard/updateuser/:id">تعديل</Link></button>
  </div>
  </div>
  
  
</div>
)}
</div> */}
    </div>
  )
}

export default UserList