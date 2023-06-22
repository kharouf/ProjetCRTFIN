import React, { useState } from 'react'

import Navbar from './Navbar'
import { BrowserRouter, Link, Navigate, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';



import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '@iconify/react';
import { addBenevoleuser } from './JS/benevoleSlice/benevoleSlice'
import logo from "../assets/images/logo.png";
import { logout, userupdate } from './JS/userSlice/userSlice';
import "../scss/profile.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios';
const url = "http://localhost:5000/user/add"

const Profile = () => {
  const reloadPage = () => {
    setTimeout(() => {
      window.location.reload()
    }, -200);


  }

  // 
  const navigate = useNavigate()
  const alertAdd = () => {
    Swal.fire({

      icon: 'success',
      title: 'تم تعمير الإستمارة بنجاح',

    })
  }
  // fuction upload





  const [inputValue, setInputValue] = useState("");

  const handleCancel = () => {
    setInputValue("");
  };
  // 
  const location=useLocation()
  const userupd = location.state
  const isAuth = localStorage.getItem('token');
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const benevole = useSelector(state => state.benevole.benevole)
  // const [usere, setUsere] = useState({
  //   name:"",
  //   lastName:"",
  //   email:"",
  //   password:"",
  //   sexe: "",
  //   nom_pere: "",
  //   nom_mere: " ",
  //   prenom_mere: " ",
  //   num_tele_parents: 0,
  //   date_n: "",
  //   lieu_n: "",
  //   adresse: "  ",
  //   cin: 0,
  //   Annee_volontariat: 0,
  //   profession: "",
  //   num_tele: 0,
  //   email: "",
  //   niveau: " ",
  //   diplome: " ",
  //   certificat_crt: "",
  //   nom_etablisement: "",
  //   loisir: "",
  //   secouriste: "",
  //   image: "",
  //   commentaire: "",
  //   nb_participation: "",
    


  // })
  const [usere, setUsere] = useState({
    name:userupd.name,
    lastName:userupd.lastName,
    email:userupd.email,
    isAdmin:userupd.isAdmin,
    isBenevole:userupd.isBenevole,
    sexe: userupd.sexe,
    nom_pere:userupd.nom_pere,
    nom_mere: userupd.nom_mere,
    prenom_mere: userupd.prenom_mere,
    num_tele_parents: userupd.num_tele_parents,
    date_n: userupd.date_n,
    lieu_n: userupd.lieu_n,
    adresse: userupd.adresse,
    cin: userupd.cin,
    Annee_volontariat: userupd.Annee_volontariat,
    profession: userupd.profession,
    num_tele: userupd.num_tele,
    email: userupd.email,
    niveau: userupd.niveau,
    diplome: userupd.diplome,
    certificat_crt: userupd.certificat_crt,
    nom_etablisement: userupd.nom_etablisement,
    loisir: userupd.loisir,
    secouriste: userupd.secouriste,
    image: userupd.image,
    commentaire: userupd.commentaire,
    nb_participation: userupd.nb_participation,
  })

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

  // ooooo
 
  const createPost = async (newImage) => {
    try {
      await axios.post(url, newImage)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(usere)
    console.log("Uploaded")
  }
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setUsere({ ...usere, image: base64 })
    //  console.log(image)
  }

  // upload image
  function convertToBase64(file) {
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
  // upload image

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
      <form onSubmit={ handleSubmit} >
      <div className='Container-Profile'>
        {/* بيانات خاصة */}

        <div className="form-profile">

          <div className="title-profile">
            بيانات خاصة
          </div>
          <div className="image-profile image-profile1">

            <div class="Avatar-upload" >
              <div class="Avatar-edit" >
                <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" onChange={(e) => {
                  handleFileUpload(e)
                  previewFile()
                }} />


                <label for="imageUpload" ><Icon className='editbtn' icon="iconoir:edit-pencil" width="30" height="30" /></label>
              </div>
              <div class="Avatar-preview">
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

              <input onChange={(e) => setUsere({ ...usere, nom: user?.name })} type="text" className="form-control n" placeholder={user?.name} />
              <input onChange={(e) => setUsere({ ...usere, prenom: user?.lastName })} type="text" className="form-control n" placeholder={user?.lastName} />

            </div>

            <div className="input">

              <input onChange={(e) => setUsere({ ...usere, email: user?.email })} type="email" className="form-control n" placeholder={user?.email} />
              <input onChange={(e) => setUsere({ ...usere, num_tele: e.target.value })} type="text" className="form-control n " placeholder="رقم الهاتف" />
            </div>

            <div className="input">

              <input onChange={(e) => setUsere({ ...usere, date_n: e.target.value })} type="date" className="form-control n" placeholder=" تاريخ الولادة" />
              <input onChange={(e) => setUsere({ ...usere, lieu_n: e.target.value })} type="text" className="form-control n" placeholder=" مكان الولادة" />
            </div>
            <div className="input">
              <label>الجنس</label>


              <label className="rad-label">
                <input type="radio" value="Homme" className="rad-input" name="sexe" onChange={(e) => setUsere({ ...usere, sexe: e.target.value })} />
                <div className="rad-design"></div>
                <div className="rad-text">ذكر</div>
              </label>

              <label className="rad-label">
                <input type="radio" value="Femme" className="rad-input" name="sexe" onChange={(e) => setUsere({ ...usere, sexe: e.target.value })} />
                <div className="rad-design"></div>
                <div className="rad-text">أنثى</div>
              </label>
              <input onChange={(e) => setUsere({ ...usere, cin: e.target.value })} type="numero" className="form-control n cin" placeholder=" ر.ب.ت.و " />

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

              <input onChange={(e) => setUsere({ ...usere, nom_pere: e.target.value })} type="text" className="form-control n" placeholder="أسم الأب" />
              <input onChange={(e) => setUsere({ ...usere, nom_mere: e.target.value })} type="text" className="form-control n" placeholder="أسم الأم" />
              <input onChange={(e) => setUsere({ ...usere, prenom_mere: e.target.value })} type="text" className="form-control n" placeholder="لقب الأم" />
            </div>

            <div className="input">

              <input onChange={(e) => setUsere({ ...usere, num_tele_parents: e.target.value })} type="text" className="form-control n" placeholder="رقم هاتف الولي" />
              <input onChange={(e) => setUsere({ ...usere, adresse: e.target.value })} type="text" className="form-control n add" placeholder="  العنوان البريدي" />
            </div>

            <div className="input">

              <input onChange={(e) => setUsere({ ...usere, profession: e.target.value })} type="text" className="form-control n etab" placeholder="  الوظيفة" />
              <input onChange={(e) => setUsere({ ...usere, niveau: e.target.value })} type="text" className="form-control n etab" placeholder="  المستوى الدراسي" />

            </div>
            <div className="input">

              <input onChange={(e) => setUsere({ ...usere, diplome: e.target.value })} type="text" className="form-control n" placeholder="  الشهادة" />
              <input onChange={(e) => setUsere({ ...usere, nom_etablisement: e.target.value })} type="text" className="form-control n " placeholder=" المؤسسة " />
              <input onChange={(e) => setUsere({ ...usere, certificat_crt: e.target.value })} type="text" className="form-control n " placeholder="  الشهائد  " />

            </div>

            <div className="input">

              <input onChange={(e) => setUsere({ ...usere, loisir: e.target.value })} type="text" className="form-control n etab" placeholder=" الهواية المفضلة " />
              <input onChange={(e) => setUsere({ ...usere, Annee_volontariat: e.target.value })} type="text" className="form-control n etab" placeholder="  سنة التطوع  " />

            </div>
            {user?.isAdmin === true ? (
              <><div className="input">

                <input onChange={(e) => setUsere({ ...usere, commentaire: e.target.value })} type="text" className="form-control n etab" placeholder="  ملاحظات " />
                <input onChange={(e) => setUsere({ ...usere, nb_participation: e.target.value })} type="text" className="form-control n etab" placeholder="  عدد المشاركة   " />

              </div>
                <div className="input">


                  <label >متطوع</label>
                  <label className="rad-label">
                    <input type="radio" value={true} className="rad-input" name="rad" onChange={(e) => setUsere({ ...usere, isBenevole: (e.target.value === "true") })} />
                    <div className="rad-design"></div>
                    <div className="rad-text">نعم</div>
                  </label>

                  <label className="rad-label">
                    <input type="radio" value={false} className="rad-input" name="rad" onChange={(e) => setUsere({ ...usere, isBenevole: (e.target.value === "true") })} />
                    <div className="rad-design"></div>
                    <div className="rad-text">لا</div>
                  </label>
                </div>
              </>) : null
            }
            <div className="input">

              <label >مسعف</label>


              <label className="rad-label">
                <input type="radio" value={true} className="rad-input" name="secouriste" onChange={(e) => setUsere({ ...usere, secouriste: (e.target.value === "true") })} />
                <div className="rad-design"></div>
                <div className="rad-text">نعم</div>
              </label>

              <label className="rad-label">
                <input type="radio" value={false} className="rad-input" name="secouriste" onChange={(e) => setUsere({ ...usere, secouriste: (e.target.value === "true") })} />
                <div className="rad-design"></div>
                <div className="rad-text">لا</div>
              </label>
            </div>

          </div>


          <div className="button">
            <button type='submit' className='btn-update'
              onClick={() => {
                dispatch(userupdate({ id: userupd._id, user:usere }))

                
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
      </form>
      {/* بيانات عامة */}

    </div>
  )
}

export default Profile