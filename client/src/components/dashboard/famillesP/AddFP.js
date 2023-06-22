import React, { useEffect, useState } from 'react' 
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


import {useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { addfamillesP, getfamillesP } from '../../JS/familles/familles'
import { Icon } from '@iconify/react'

const AddFP = ({ setPing, ping }) => {
  const navigate =useNavigate()
  const [Addfp, setAdd] = useState({
    nom:"",
    prenom:"",
    
  })

  const  alertAdd = () =>{
    Swal.fire({
     
        icon: 'success',
        title: 'تمت إضافة العائلة بنجاح',

    })
  }
  const reloadPage = () => {
    setTimeout(() => {
      window.location.reload()
    }, 200);
    
    
  }
  useEffect(() => {
    dispatch(getfamillesP())
    
  }, [ping])
const dispatch = useDispatch()
  return (

    <div>
      <div className="retoureF">
        <div className="nubuser">
        <Link to="/dashboard/GetFP">
          <Icon icon="typcn:arrow-back-outline" width="30" color='white' />
        </Link>
      </div>
      </div>
    <div className="updateuser1" >
    <form onSubmit={(e)=> e.preventDefault()} className="form-signin11 form-signin">
        <h2 className="form-signin-heading"> أضف عائلة</h2>
        <div className="fff">
        

          
           <input onChange={(e)=> setAdd({...Addfp,prenom:e.target.value}) } type="text" className="form-control"  placeholder="اللقب "  />
           <input onChange={(e)=> setAdd({...Addfp,nom:e.target.value}) } type="text" className="form-control"  placeholder=" الاسم "   />
        </div>
       
        
        
       
      
       

  
        <button className="btn-primary" onClick={()=> {dispatch(addfamillesP(Addfp))
        alertAdd()
        navigate("/dashboard/GetFP")
        setPing(!ping)
        reloadPage()
        }
        }>أضف</button>


        
    </form>
    
    </div>
    </div>
  )
}

export default AddFP