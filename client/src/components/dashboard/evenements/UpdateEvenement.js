import React, { useState } from 'react'
import { evenementupdate } from '../../JS/evenementSlice/eventSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios';
import { Icon } from '@iconify/react';
import logo from "../../../assets/images/logo.png";
const url = "http://localhost:5000/evenement/add"

const UpdateEvenement = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const events = useSelector((state) => state.evenement?.evenement);
  const locationn=useLocation()
  const eventsupd = locationn.state
  const params =useParams()
  console.log(eventsupd)
  const reloadPage = () => {
    setTimeout(() => {
      window.location.reload()
    }, 500);
    
    
  }
  const [upEvent, setupEvent] = useState({
    name:eventsupd.name,
    description:eventsupd.description,
    image:eventsupd.image,
    startDate:eventsupd.startDate,
    endtDate:eventsupd.endDate
  })

// upload image
 
function previewFile() {
  var preview = document.getElementsByClassName('imgup')[0];
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
// ooooo

const createPost = async (newImage) => {
  try{
    await axios.post(url, newImage)
  }catch(error){
    console.log(error)
  }
}
  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(upEvent)
    console.log("Uploaded")
  }
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setupEvent({ ...upEvent, image : base64 })
    //  console.log(image)
  }
  const  alertUp = () =>{
  
    Swal.fire({
      icon: 'success',
      title:'!  تم تعديل النشاط بنجاح'  
       
    })
  }


  
  
  return (
    <div>
       
    <div className="evenementadd" >
    <form onSubmit={ handleSubmit} className="form-signin11 form-signin">
        <h2 className="form-signin-heading">تعديل النشاط</h2>

        <div class="Avatar-upload" >
              <div class="Avatar-edit" >
                <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg"  onChange={(e)=> {
                  handleFileUpload(e)
                   previewFile()} } /> 
                <label for="imageUpload" ><Icon className='editbtn' icon="iconoir:edit-pencil" width="30" height="30" /></label>
              </div>
              <div class="Avatar-preview">
                <img className='imgup' id="imagePreview" width={"200px"} height={"200px"} src={eventsupd?.image} />
              </div>
            </div>
        <div className="fff">
        <input onChange={(e)=> setupEvent({...upEvent,description:e.target.value}) } type="text"  className="form-control"  placeholder={events?.description}  />
        <input onChange={(e)=> setupEvent({...upEvent,name:e.target.value}) } type="text" className="form-control"  placeholder="عنوان النشاط"  />
       
        </div>
        
        
        {/* <input onChange={(e)=> setImage(e.target.files[0])} type="file"  name="file" className="form-control"  placeholder="image"  /> */}
     <div className="fff">
     <input onChange={(e)=> setupEvent({...upEvent,startDate:e.target.value}) } type="date" className="form-control"  placeholder="start date"  />
     <label>تاريخ بداية النشاط</label>
     </div>
     <div className="fff">
           <input onChange={(e)=> setupEvent({...upEvent,endDate:e.target.value}) } type="date" className="form-control"  placeholder="end date"  />
           <label>تاريخ نهاية النشاط</label>
     </div>
     {/* <input onChange={(e)=> handleFileUpload(e)} type="file" 
        name="file"
       className="form-control"  placeholder="image" required="" />
         */}

        <button className="btn-primary" onClick={()=>{dispatch(evenementupdate({evenement:upEvent,id:params.id }))
        alertUp()
        navigate("/dashboard/listevents")
         reloadPage()
      
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

// upload image
function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}