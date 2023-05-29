import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '@iconify/react';
import logo from "../../../assets/images/logo.png";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { userupdate } from '../../JS/userSlice/userSlice';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const UpdateUser = () => {
  
  const location=useLocation()
  const userupd = location.state
  const [canncel, setCanncel] = useState(null)
  const [pingU, setPingU] = useState()
  const dispatch = useDispatch()
  const [usere, setUsere] = useState({
    name:userupd.name,
    lastName:userupd.lastName,
    email:userupd.email,
    isAdmin:userupd.isAdmin,
    isBenevole:userupd.isBenevole,
  })
  const navigate =useNavigate()
  const  alertUp = () =>{
  
    Swal.fire({
      icon: 'success',
      title:'!  تم تعديل المستخدم بنجاح'  
       
    })
  }
  const reloadPage = () => {
    setTimeout(() => {
      window.location.reload()
    }, 1500);
    
    
  }
  return (
    <div>
      {/* بيانات خاصة */}

      <div className=" updateuser">
          
          
          <div className="image-profile">
            
            <div class="avatar-upload" >
              <div class="avatar-edit" >
                <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg"  />
                <label for="imageUpload" ><Icon className='editbtn' icon="iconoir:edit-pencil" width="30" height="30" /></label>
              </div>
              <div class="avatar-preview">
                <img className='imgup' id="imagePreview" width={"200px"} height={"200px"} src={logo} />
              </div>
            </div>
          </div>

          <div className="input-profile">
            <div className="input ">
              <div className='inputlabel'>
                <label>الإسم </label>
              <input onChange={(e)=>setUsere({...usere,name:e.target.value})}  type="text" className="form-control n marg "  />
              </div>
              
              
              <div className='inputlabel'>
                <label>اللقب </label>
              <input onChange={(e)=>setUsere({...usere,lastName:e.target.value})}  type="text" className="form-control n marg"  /></div>

            </div>
      

            <div className="input">
            <div className='inputlabel'>
              <label >البريد الإلكتروني </label>
              <input onChange={(e)=>setUsere({...usere,email:e.target.value})}  type="email" className="form-control n marg"  />

            </div>
            <div className="inputlabel">
            <label >كلمة العبور  </label>
              <input type="password" className="form-control n marg"  />
            </div>
            </div>
            
            

           
            <div className="input">

<label >مسؤل</label>

        <label className="rad-label">
          <input onChange={(e)=>setUsere({...usere,isAdmin:(e.target.value === "true") })} type="radio" value={true}   className="rad-input" name="admin"  />
          <div className="rad-design"></div>
          <div className="rad-text">نعم</div>
        </label>

        <label className="rad-label">
          <input onChange={(e)=>setUsere({...usere,isAdmin:(e.target.value === "true") })}  type="radio" value={false}  className="rad-input" name="admin"  />
          <div className="rad-design"></div>
          <div className="rad-text">لا</div>
        </label>

</div>
<div className="input">

<label >متطوع</label>
        <label className="rad-label">
          <input onChange={(e)=>setUsere({...usere,isBenevole:(e.target.value === "true") })}  type="radio" value={true}  className="rad-input" name="benevole" />
          <div className="rad-design"></div>
          <div className="rad-text">نعم</div>
        </label>

        <label className="rad-label">
          <input onChange={(e)=>setUsere({...usere,isBenevole:(e.target.value === "true") })}  type="radio" value={false}  className="rad-input" name="benevole"  />
          <div className="rad-design"></div>
          <div className="rad-text">لا</div>
        </label>
</div>


          </div>
          <div className="button">
              <button className='btn-update' onClick={()=>
              dispatch(userupdate({ id: userupd._id, user:usere }),
               alertUp(),
              navigate("/dashboard/listuser"),
             
              // reloadPage()
              )
            }>
                تعديل 
              </button>
              <button  onClick={()=>setCanncel(null)} className='btn-annuler'>
                إلغاء
              </button>

            </div>
        </div>
        {/* بيانات خاصة */}
        
    </div>
  )
}

export default UpdateUser