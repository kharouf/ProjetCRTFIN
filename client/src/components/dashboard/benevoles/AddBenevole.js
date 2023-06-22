import React, { useState } from 'react'

import Navbar from './Navbar'
import { BrowserRouter, Link, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '@iconify/react';
import { addBenevole,addBenevoleuser } from '../../JS/benevoleSlice/benevoleSlice'
import logo from "../../assets/images/logo.png";
import { logout } from '../../JS/userSlice/userSlice';
import "../scss/profile.css"
import axios from 'axios';
const reloadPage = () => {
  window.location.reload()
  
}
const AddBenevole = () => {
  // fuction upload

  
  // const benevole = useSelector(state => state.benevole.benevole)

  // cancel button
  const [inputValue, setInputValue] = useState("");

  const handleCancel = () => {
    setInputValue("");
  };
  // 
  const  alertAdd = () =>{
    Swal.fire({
     
        icon: 'success',
        title: 'تم تعمير الاستمارة بنجاح',

    })
  }
  const navigate =useNavigate()
  // 
  const isAuth = localStorage.getItem('token');
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const [addVolontaire, setaddVolontaire] = useState({
    nom: "",
    prenom: "",
    sexe: "",
    nom_pere: "",
    nom_mere: " ",
    prenom_mere: " ",
    num_tele_parents: 0,
    date_n: "",
    lieu_n: "",
    adresse: "  ",
    cin: 0,
    Annee_volontariat: 0,
    profession: "",
    num_tele: 0,
    email: "",
    niveau: " ",
    diplome: " ",
    certificat_crt: "",
    nom_etablisement: "",
    loisir: "",
    secouriste: "",
    image: "",
    commentaire: "",
    nb_participation: "",
    isbenevole:true

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
const url = "http://localhost:5000/benevole/upload"
const createPost = async (nouveauIMG) => {
  try{
    await axios.post(url, nouveauIMG)
  }catch(error){
    console.log(error)
  }
}
  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(addVolontaire)
    console.log("Uploaded")
  }
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setaddVolontaire({ ...addVolontaire, image : base64 })
    //  console.log(image)
  }

  // open and close login
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    setTimeout(() => {
      setOpen();
    }, 2000);

  };


  return (
    <div  className='wrapper1 profile'>
      <div className='Navbaractive Navbar-Admin'>
        <div className='Navbar-logo'>
          <Link to="/"><img id='logocrt' src={logo} alt='logo' /></Link>
        </div>
        <div className="Navbar-links-admin">

          {/* <a className='link' href="/#programs" >برامجنا</a>
          <a className='link' href="/#contact">إتصل بنا</a> */}
        </div>
        {isAuth ?
          (<div className='Navbar-login-Admin' onClick={() => handleOpen()}>


            <h6> {user?.name}




              <Icon icon="mdi:user-circle-outline" width="50" height="50" color='green' />



            </h6>
            {open ?
              <div className="dropdown-Admin">


                <Link to='/' className='link-logout' >{isAuth ? <button onClick={() => {
                  dispatch(logout());
                  Navigate("/")
                }}>
                  تسجيل الخروج
                </button> : null}
                  <Icon icon="bi:box-arrow-right" width="30" height="30" />
                </Link>

              </div>
              : null}
          </div>) : null}
      </div>

      <div  className='Container-Profile'>
        {/* بيانات خاصة */}

        <div className="form-profile">
        <form onSubmit={ handleSubmit} className="form-signin11 form-signin">
          <div className="title-profile">
            بيانات خاصة
          </div>
          <div className="image-profile image-profile1">
            
          <div class="Avatar-upload" >
              <div class="Avatar-edit" >
                <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg"  onChange={(e)=> {
                  handleFileUpload(e)
                   previewFile()} } />
                
                
                <label for="imageUpload" ><Icon className='editbtn' icon="iconoir:edit-pencil" width="30" height="30" /></label>
              </div>
              <div class="Avatar-preview">
                <img className='imgup' id="imagePreview" width={"200px"} height={"200px"} src={logo} />
              </div>
            </div>
            
            <div className="name-profile">

              <h1>{user?.name}  </h1> <h1>{user?.lastName}</h1>

            </div>
            <h3 className='numdossier'> CRTGHV10   :رقم الملف</h3>


          </div>

          <div className="input-profile">
            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, nom: e.target.value })} value={user?.name} type="text" className="form-control n" placeholder={user?.name} />
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, prenom: e.target.value })} value={user?.lastName} type="text" className="form-control n" placeholder={user?.lastName} />

            </div>

            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, email: e.target.value })} value={user?.email} type="email" className="form-control n" placeholder={user?.email} />
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, num_tele: e.target.value })} type="text" className="form-control n " placeholder="رقم الهاتف" />
            </div>

            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, date_n: e.target.value })} type="date" className="form-control n" placeholder=" تاريخ الولادة" />
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, lieu_n: e.target.value })} type="text" className="form-control n" placeholder=" مكان الولادة" />
            </div>
            <div className="input">
              <label>الجنس</label>
              <label>
                <input type="radio" value="Homme" name="radio" checked onChange={(e) => setaddVolontaire({ ...addVolontaire, sexe: e.target.value })} />
                <span>ذكر</span>
              </label>
              <label>
                <input type="radio" value="Femme" name="radio" onChange={(e) => setaddVolontaire({ ...addVolontaire, sexe: e.target.value })}/>
                <span>أنثى</span>
              </label>



              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, cin: e.target.value })} type="numero" className="form-control n cin" placeholder=" ر.ب.ت.و " />

            </div>
          </div>
          </form>
        </div>
        {/* بيانات خاصة */}
        {/* بيانات عامة */}
        <div className="form-profile2 form-profile">
          <div className="title-profile">
            بيانات عامة
          </div>
          <div className="input-profile input-profile2" >
            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, nom_pere: e.target.value })} type="text" className="form-control n" placeholder="أسم الأب" />
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, nom_mere: e.target.value })} type="text" className="form-control n" placeholder="أسم الأم" />
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, prenom_mere: e.target.value })} type="text" className="form-control n" placeholder="لقب الأم" />
            </div>

            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, num_tele_parents: e.target.value })} type="text" className="form-control n" placeholder="رقم هاتف الولي" />
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, adresse: e.target.value })} type="text" className="form-control n add" placeholder="  العنوان البريدي" />
            </div>

            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, profession: e.target.value })} type="text" className="form-control n etab" placeholder="  الوظيفة" />
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, niveau: e.target.value })} type="text" className="form-control n etab" placeholder="  المستوى الدراسي" />

            </div>
            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, diplome: e.target.value })} type="text" className="form-control n" placeholder="  الشهادة" />
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, nom_etablisement: e.target.value })} type="text" className="form-control n " placeholder=" المؤسسة " />
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, certificat_crt: e.target.value })} type="text" className="form-control n " placeholder="  الشهائد  " />

            </div>

            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, loisir: e.target.value })} type="text" className="form-control n etab" placeholder=" الهواية المفضلة " />
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, Annee_volontariat: e.target.value })} type="text" className="form-control n etab" placeholder="  سنة التطوع  " />

            </div>
            {user?.isAdmin === true ? (
              <><div className="input">
                {/* <label>الإسم </label> */}
                <input onChange={(e) => setaddVolontaire({ ...addVolontaire, commentaire: e.target.value })} type="text" className="form-control n etab" placeholder="  ملاحظات " />
                <input onChange={(e) => setaddVolontaire({ ...addVolontaire, nb_participation: e.target.value })} type="text" className="form-control n etab" placeholder="  عدد المشاركة   " />

              </div>
                <div className="input">

                  <label >متطوع</label>
                  <label>
                    <input type="radio" value="true" name="radio2" checked onChange={(e) => setaddVolontaire({ ...addVolontaire, isbenevole: e.target.value })}/>
                    <span>نعم</span>
                  </label>
                  <label>
                    <input type="radio" value="false" name="radio2"onChange={(e) => setaddVolontaire({ ...addVolontaire, isbenevole: e.target.value })} />
                    <span>لا</span>
                  </label>
                </div>
              </>) : null
            }
            <div className="input">

              <label >مسعف</label>
              <label>
                <input type="radio" value="true" name="radio1" checked onChange={(e) => setaddVolontaire({ ...addVolontaire, secouriste: e.target.value })}/>
                <span>نعم</span>
              </label>
              <label>
                <input type="radio" value="false" name="radio1" onChange={(e) => setaddVolontaire({ ...addVolontaire, secouriste: e.target.value })}/>
                <span>لا</span>
              </label>
            </div>

          </div>

          
          <div className="button">
              <button className='btn-update'
                onClick={() => {dispatch(addBenevoleuser(addVolontaire))
                  alertAdd()
                  reloadPage() 
                }}>
                أظف
              </button>
              <button onClick={() => handleCancel()} className='btn-annuler'>
                إلغاء
              </button>

            </div>
          
        </div>
      </div>
      {/* بيانات عامة */}

    </div>
  )
}

export default AddBenevole
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