import React, { useState } from 'react'
import { evenementupdate } from '../../JS/evenementSlice/eventSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const UpdateEvenement = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  // const events = useSelector((state) => state.evenement?.evenement);
  const locationn=useLocation()
  const eventsupd = locationn.state
  const params =useParams()
  console.log(eventsupd)
  const reloadPage = () => {
    setTimeout(() => {
      window.location.reload()
    }, 1500);
    
    
  }

  const  alertUp = () =>{
  
    Swal.fire({
      icon: 'success',
      title:'!  تم تعديل النشاط بنجاح'  
       
    })
  }


  
  const [upEvent, setupEvent] = useState({
    name:eventsupd.name,
    description:eventsupd.description,
    image:eventsupd.image,
    startDate:eventsupd.startDate,
    endtDate:eventsupd.endDate
  })
  return (
    <div>
       
    <div className="updateuser1" >
    <form onSubmit={(e)=> e.preventDefault()} className="form-signin11 form-signin">
        <h2 className="form-signin-heading">تعديل النشاط</h2>
        <div className="fff">
        <input onChange={(e)=> setupEvent({...upEvent,description:e.target.value}) } type="text" className="form-control"  placeholder=" وصف النشاط" required="" />
        <input onChange={(e)=> setupEvent({...upEvent,name:e.target.value}) } type="text" className="form-control"  placeholder="عنوان النشاط" required="" />
       
        </div>
        
        
        {/* <input onChange={(e)=> setImage(e.target.files[0])} type="file"  name="file" className="form-control"  placeholder="image" required="" /> */}
     <div className="fff">
     <input onChange={(e)=> setupEvent({...upEvent,startDate:e.target.value}) } type="date" className="form-control"  placeholder="start date" required="" />
     <label>تاريخ بداية النشاط</label>
     </div>
     <div className="fff">
           <input onChange={(e)=> setupEvent({...upEvent,endDate:e.target.value}) } type="date" className="form-control"  placeholder="end date" required="" />
           <label>تاريخ نهاية النشاط</label>
     </div>
     <input onChange={(e)=> {setupEvent({...upEvent,image:e.target.value}) }} type="file" 
        name="file"
       className="form-control"  placeholder="image" required="" />
        

        <button className="btn-primary" onClick={()=>{dispatch(evenementupdate({evenement:upEvent,id:params.id }))
        alertUp()
        navigate("/dashboard/listevents")
        //  reloadPage()
      
      }
        
        }>تعديل</button>

{/* {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={url} style={{ width: '300px' }} />
      )} */}
     
        
    </form>
    
    </div>
    
    
</div>
  )
}

export default UpdateEvenement