import React, { useState } from 'react'

import Navbar from './Navbar'
import { BrowserRouter, Link, Navigate, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';



import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '@iconify/react';
import { addBenevoleuser } from './JS/benevoleSlice/benevoleSlice'
import logo from "../assets/images/logo.png";
import { logout } from './JS/userSlice/userSlice';
import "../scss/profile.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Profile = () => {
   const reloadPage = () => {
    setTimeout(() => {
      window.location.reload()
    }, -200);
    
    
  }

  // 
  const navigate = useNavigate()
  const  alertAdd = () =>{
      Swal.fire({
       
          icon: 'success',
          title: 'تم تعمير الإستمارة بنجاح',
  
      })
    }
  // fuction upload
  const [image, setImage ] = useState("");
  const [ url, setUrl ] = useState("");

  const uploadImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "walakh")
    data.append("cloud_name","dwfo7j8ic")
 

      	
     
         fetch(" https://api.cloudinary.com/v1_1/dwfo7j8ic/image/upload",{
          method:"post",
          body: data
          })
          .then(resp => resp.json())
          .then(data => {
            console.log(data)
          setUrl(data.secure_url)
          
          })
          .catch(err => console.log(err))
          }
  // uploadImage

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
  // const benevole = useSelector(state => state.benevole.benevole)

  // cancel button
  const [inputValue, setInputValue] = useState("");

  const handleCancel = () => {
    setInputValue("");
  };
  // 
  const isAuth = localStorage.getItem('token');
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const benevole = useSelector(state => state.benevole.benevole)
  const [addVolontaire, setaddVolontaire] = useState({
    num_dossier:"",
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
    isBenevole: false,
  

  })

  // open and close login
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    setTimeout(() => {
      setOpen();
    }, 2000);

  };


  return (
    <div className='wrapper1 profile'>
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
                  navigate("/")
                }}>
                  تسجيل الخروج
                </button> : null}
                  <Icon icon="bi:box-arrow-right" width="30" height="30" />
                </Link>

              </div>
              : null}
          </div>) : null}
      </div>

      <div className='Container-Profile'>
        {/* بيانات خاصة */}

        <div className="form-profile">

          <div className="title-profile">
            بيانات خاصة
          </div>
          <div className="image-profile image-profile1">

            <div className="avatar-upload" >
              <div className="avatar-edit" >
              {/* <input onChange={(e)=> {setaddVolontaire({...addVolontaire,image:setImage(e.target.files[0])}) }} type="file" 
        name="file"
       className="form-control"  placeholder="image" required="" /> */}
                <input onChange={(e) => {setaddVolontaire({ ...addVolontaire, image:setImage("wala") })
                previewFile()}}type='file' id="imageUpload" accept=".png, .jpg, .jpeg"  />
                <label htmlFor="imageUpload" ><Icon className='editbtn' icon="iconoir:edit-pencil" width="30" height="30" /></label>
              </div>
              <div className="avatar-preview">
                <img className='imgup' id="imagePreview" width={"200px"} height={"200px"} src={logo} />

              </div>

            </div>

            <div className="name-profile">

              <h1>{user?.name}  </h1> <h1>{user?.lastName}</h1>

            </div>
            <h3 className='numdossier'> {user?.num_dossier}  :رقم الملف</h3>


          </div>

          <div className="input-profile">
            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, nom: user?.name })}  type="text" className="form-control n" placeholder={user?.name} />
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, prenom: user?.lastName })}  type="text" className="form-control n" placeholder= {user?.lastName}/>

            </div>

            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, email: user?.email })}  type="email" className="form-control n" placeholder={user?.email} />
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, num_tele: e.target.value })} type="text" className="form-control n " placeholder="رقم الهاتف" />
            </div>

            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, date_n: e.target.value })} type="date" className="form-control n" placeholder=" تاريخ الولادة" />
              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, lieu_n: e.target.value })} type="text" className="form-control n" placeholder=" مكان الولادة" />
            </div>
            <div className="input">
              <label>الجنس</label>
              

              <label className="rad-label">
                <input type="radio" value="Homme" className="rad-input" name="sexe" onChange={(e) => setaddVolontaire({ ...addVolontaire, sexe: e.target.value })} />
                <div className="rad-design"></div>
                <div className="rad-text">ذكر</div>
              </label>

              <label className="rad-label">
                <input type="radio" value="Femme" className="rad-input" name="sexe" onChange={(e) => setaddVolontaire({ ...addVolontaire, sexe: e.target.value })} />
                <div className="rad-design"></div>
                <div className="rad-text">أنثى</div>
              </label>

              {/* <select>
                <option value="homme" onChange={(e) => setaddVolontaire({ ...addVolontaire, sexe: e.target.value })}>ذكر</option>
                <option value="femme"onChange={(e) => setaddVolontaire({ ...addVolontaire, sexe: e.target.value })}>أنثى</option>
               
              </select> */}



              <input onChange={(e) => setaddVolontaire({ ...addVolontaire, cin: e.target.value })} type="numero" className="form-control n cin" placeholder=" ر.ب.ت.و " />

            </div>
          </div>
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
                  <label className="rad-label">
                    <input type="radio" value={true} className="rad-input" name="rad" onChange={(e) => setaddVolontaire({ ...addVolontaire, isBenevole: (e.target.value === "true") })} />
                    <div className="rad-design"></div>
                    <div className="rad-text">نعم</div>
                  </label>

                  <label className="rad-label">
                    <input type="radio" value={false} className="rad-input" name="rad" onChange={(e) => setaddVolontaire({ ...addVolontaire, isBenevole: (e.target.value === "true") })} />
                    <div className="rad-design"></div>
                    <div className="rad-text">لا</div>
                  </label>
                </div>
              </>) : null
            }
            <div className="input">

              <label >مسعف</label>


              <label className="rad-label">
                <input type="radio" value={true} className="rad-input" name="secouriste" onChange={(e) => setaddVolontaire({ ...addVolontaire, secouriste: (e.target.value === "true") })} />
                <div className="rad-design"></div>
                <div className="rad-text">نعم</div>
              </label>

              <label className="rad-label">
                <input type="radio" value={false} className="rad-input" name="secouriste" onChange={(e) => setaddVolontaire({ ...addVolontaire, secouriste: (e.target.value === "true")})} />
                <div className="rad-design"></div>
                <div className="rad-text">لا</div>
              </label>
            </div>

          </div>
   <img className="" src={url}/>

          <div className="button">
            <button className='btn-update'
              onClick={() =>{ dispatch(addBenevoleuser(addVolontaire))
                uploadImage()
                setaddVolontaire({isBenevole: true })
                alertAdd()
                setTimeout(() => {
                  navigate("/")
                }, 1500);
                
              }
              }>
              أضف
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

export default Profile