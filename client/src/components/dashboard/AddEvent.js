
import React, { useState } from 'react' 

import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { addEvenement } from '../JS/evenementSlice/eventSlice'

const AddEvent = () => {
    const [AddEvent, setAddEvent] = useState({
        name:"",
        description:"",
        image:"",
        startDate:"",
        endtDate:" "
      })
    const dispatch = useDispatch()
  return (
    <div>
       
    <div class="wrapper" >
    <form onSubmit={(e)=> e.preventDefault()} class="form-signin">
        <h2 class="form-signin-heading">أضف نشاط</h2>
        <input onChange={(e)=> setAddEvent({...AddEvent,name:e.target.value}) } type="text" class="form-control"  placeholder="عنوان النشاط" required="" />
        <input onChange={(e)=> setAddEvent({...AddEvent,description:e.target.value}) } type="text" class="form-control"  placeholder="وصف" required="" />
        <input onChange={(e)=> setAddEvent({...AddEvent,image:e.target.value}) } type="text" class="form-control"  placeholder="الصور" required="" />
        <input onChange={(e)=> setAddEvent({...AddEvent,startDate:e.target.value}) } type="date" class="form-control"  placeholder="تاريخ  " required="" />
        <input onChange={(e)=> setAddEvent({...AddEvent,endtDate:e.target.value}) } type="date" class="form-control"  placeholder="end date" required="" />

        <button class="btn-primary" onClick={()=> dispatch(addEvenement(AddEvent))}>أضف</button>
        
    </form>
    </div>
    
</div>





    
  )
}

export default AddEvent