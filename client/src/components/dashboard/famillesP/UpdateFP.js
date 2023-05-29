import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '@iconify/react';
import logo from "../../../assets/images/logo.png";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { updatefamillesP, userupdate } from '../../JS/familles/familles';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const UpdateFP = () => {

    const location=useLocation()
  const famillesupd = location.state
  const familles = useSelector(state => state.familles.familles)


  const [pingU, setPingU] = useState()
  const dispatch = useDispatch()
  const [UpF, setUpF] = useState({
    nom:familles.nom,
    prenom:familles.prenom,
   
  })
  const navigate =useNavigate()
  const params =useParams()
  const  alertUp = () =>{
  
    Swal.fire({
      icon: 'success',
      title:'!  تم تعديل المستخدم بنجاح'  
       
    })
  }
  return (
    <div className="updateuser1" >
    <form onSubmit={(e)=> e.preventDefault()} className="form-signin11 form-signin">
        <h2 className="form-signin-heading"> أضف عائلة</h2>
        <div className="fff">
        

          
           <input onChange={(e)=> setUpF({...UpF,prenom:e.target.value}) } type="text" className="form-control"  placeholder="اللقب "  />
           <input onChange={(e)=> setUpF({...UpF,nom:e.target.value}) } type="text" className="form-control"  placeholder=" الاسم "   />
        </div>
       
        
        
       
      
       

  
        <button className="btn-primary" onClick={()=> dispatch(updatefamillesP({familles:UpF,id:params.id  }))}>تعديل</button>

{/* ,  */}
        
    </form>
    
    </div>
  )
}

export default UpdateFP