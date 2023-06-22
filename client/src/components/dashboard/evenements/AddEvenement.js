
import React, { useEffect, useState } from 'react' 


import {useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { addEvenement, evenementget } from '../../JS/evenementSlice/eventSlice'
import { Icon } from '@iconify/react';
import logo from "../../../assets/images/logo.png";
import axios from 'axios'
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// import Spiner from '../../Spiner'
const url = "http://localhost:5000/evenement/add"
const AddEvenement = ({ setPing, ping }) => {

  useEffect(() => {
    dispatch(evenementget())
    
  }, [ping])
  // const [image, setImage ] = useState("");
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
    createPost(AddEvent)
    console.log("Uploaded")
  }
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setAddEvent({ ...AddEvent, image : base64 })
    //  console.log(image)
  }
  // upload image

 
  // const [ url, setUrl ] = useState("");
  const reloadPage = () => {
    setTimeout(() => {
      window.location.reload()
    }, 200);
    
    
  }




    const [AddEvent, setAddEvent] = useState({
        name:"",
        description:"",
        image:"",
        startDate:"",
        endDate:"",
        instatnt:"",
        time:"",
        position:"",
      })
    const dispatch = useDispatch()
    const  alertAdd = () =>{
      Swal.fire({
       
          icon: 'success',
          title: 'تمت إضافة النشاط بنجاح',
  
      })
    }
    const navigate =useNavigate()
    
  return (
    <div >
       <div className="retoureF">
        <div className="nubuser">
        <Link to="/dashboard/listevents">
          <Icon icon="typcn:arrow-back-outline" width="30" color='white' />
        </Link>
      </div>
      </div>
    <div className="updateuserev" >
{/* (e)=> (e.preventDefault()),  */}
    <form onSubmit={ handleSubmit} className="form-signin11 form-signin">
        <h2 className="form-signin-heading"> أضف نشاط</h2>
        <div class="Avatar-upload" >
              <div class="Avatar-edit" >
                <input type='file'  accept="image/*" id="imageUpload" multiple  onChange={(e)=> {
                  handleFileUpload(e)
                   previewFile()} } />
                
                
                <label for="imageUpload" ><Icon className='editbtn' icon="iconoir:edit-pencil" width="30" height="30" /></label>
              </div>
              <div class="Avatar-preview">
                <img className='imgup' id="imagePreview" width={"200px"} height={"200px"} src={logo} alt='' />
              </div>
            </div>
        <div className="fff">
        <input onChange={(e)=> setAddEvent({...AddEvent,description:e.target.value}) } type="text" className="form-control"  placeholder=" وصف النشاط"  required="" />

           <input onChange={(e)=> setAddEvent({...AddEvent,name:e.target.value}) } type="text" className="form-control"  placeholder="عنوان النشاط" required="" />
        </div>
       
        
        {/* <input onChange={(e)=> setImage(e.target.files[0])} type="file"  name="file" className="form-control"  placeholder="image" required="" /> */}
        <div className="fff">
          
       
           <input  onChange={(e)=> setAddEvent({...AddEvent,time:e.target.value}) } type="time" id="appt" name="appt"  min="01:00" max="24:00" className="form-control" ></input>
           <label>على الساعة  </label>
           <input onChange={(e)=> setAddEvent({...AddEvent,endDate:e.target.value}) } type="date" className="form-control"  placeholder="تاريخ النهاية " required="" />
           <label> إلي </label>

           <input onChange={(e)=> setAddEvent({...AddEvent,startDate:e.target.value}) } type="date" className="form-control"  placeholder=" تاريخ البداية" required="" />
          <label>من  </label>
           
        </div>
        <div className="fff">
        <select className="form-controlselect"  name="pets" id="pet-select" onChange={(e)=> setAddEvent({...AddEvent,position:e.target.value}) }>
    <option value="">--إختار مكان النشاط--</option>
    <option value="في مقر الهلال">في مقر الهلال"</option>
    <option value="في دار الشباب">في دار الشباب</option>
    <option value="في دار الثقافة">في دار الثقافة</option>
    <option value="في معهد غنوش">في معهد غنوش</option>
    <option value="في معهد ابن الهيثم">في معهد ابن الهيثم</option>
    
</select>
        </div>

        {/* <input onChange={(e)=> {setAddEvent({...AddEvent,image:setImage(e.target.files)}) }} type="file" 
        name="file"
        multiple
       className="form-control"  placeholder="image" required="" /> */}
      

       
        <button className="btn-primary" onClick={()=> {dispatch(addEvenement(AddEvent)) 
        // uploadImage()
        alertAdd()
        navigate("/dashboard/listevents")
        setPing(!ping)
        reloadPage()
              
      } 

        }><Link to="/dashboard/listevents" refresh="true" > أضف</Link></button>


        
    </form>
    
    </div>
    
    
</div>





    
  )}

export default AddEvenement
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

