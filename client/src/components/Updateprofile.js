import React, { useState } from 'react'

import Navbar from './Navbar'
import { BrowserRouter, Link, Navigate, Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom';



import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '@iconify/react';
import { addBenevole, updateBen } from './JS/benevoleSlice/benevoleSlice'
import logo from "../assets/images/logo.png";
import { logout } from './JS/userSlice/userSlice';
import "../scss/profile.css"

const Updateprofile = () => {
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
  const params=useParams()
  // const benevole = useSelector(state => state.benevole.benevole)
  const user = useSelector(state => state.user?.user)
  const location=useLocation()
  const benevoleupd = location.state
  console.log(benevoleupd)
  const [updB, setupdB] = useState({
    // num_dossier:benevole.num_dossier,
    nom: benevoleupd.nom,
    prenom: benevoleupd.prenom,
    sexe: benevoleupd.sexe,
    nom_pere:benevoleupd.nom_pere,
    nom_mere: benevoleupd.nom_mere,
    prenom_mere: benevoleupd.prenom_mere,
    num_tele_parents: benevoleupd.num_tele_parents,
    date_n: benevoleupd.date_n,
    lieu_n: benevoleupd.lieu_n,
    adresse: benevoleupd.adresse,
    cin: benevoleupd.cin,
    Annee_volontariat: benevoleupd.Annee_volontariat,
    profession: benevoleupd.profession,
    num_tele: benevoleupd.num_tele,
    email: benevoleupd.email,
    niveau: benevoleupd.niveau,
    diplome: benevoleupd.diplome,
    certificat_crt: benevoleupd.certificat_crt,
    nom_etablisement: benevoleupd.nom_etablisement,
    loisir: benevoleupd.loisir,
    secouriste: benevoleupd.secouriste,
    image: benevoleupd.image,
    commentaire: benevoleupd.commentaire,
    nb_participation: benevoleupd.nb_participation,
    isbenevole:benevoleupd.isbenevole

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

      <div className='Container-Profile'>
        {/* بيانات خاصة */}

        <div className="form-profile">

          <div className="title-profile">
            بيانات خاصة
          </div>
          <div className="image-profile image-profile1">

            <div className="avatar-upload" >
              <div className="avatar-edit" >
              {/* <input onChange={(e)=> {setupdB({...updB,image:setImage(e.target.files[0])}) }} type="file" 
        name="file"
       className="form-control"  placeholder="image" required="" /> */}
                <input onChange={(e) => {setupdB({ ...updB, image:setImage("wala") })
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
              <input onChange={(e) => setupdB({ ...updB, nom: user?.name })}  type="text" className="form-control n" placeholder={user?.name} />
              <input onChange={(e) => setupdB({ ...updB, prenom: user?.lastName })}  type="text" className="form-control n" placeholder= {user?.lastName}/>

            </div>

            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setupdB({ ...updB, email: user?.email })}  type="email" className="form-control n" placeholder={user?.email} />
              <input onChange={(e) => setupdB({ ...updB, num_tele: e.target.value })} type="text" className="form-control n " placeholder="رقم الهاتف" />
            </div>

            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setupdB({ ...updB, date_n: e.target.value })} type="date" className="form-control n" placeholder=" تاريخ الولادة" />
              <input onChange={(e) => setupdB({ ...updB, lieu_n: e.target.value })} type="text" className="form-control n" placeholder=" مكان الولادة" />
            </div>
            <div className="input">
              <label>الجنس</label>
              

              <label className="rad-label">
                <input type="radio" value="Homme" className="rad-input" name="sexe" onChange={(e) => setupdB({ ...updB, sexe: e.target.value })} />
                <div className="rad-design"></div>
                <div className="rad-text">ذكر</div>
              </label>

              <label className="rad-label">
                <input type="radio" value="Femme" className="rad-input" name="sexe" onChange={(e) => setupdB({ ...updB, sexe: e.target.value })} />
                <div className="rad-design"></div>
                <div className="rad-text">أنثى</div>
              </label>

              {/* <select>
                <option value="homme" onChange={(e) => setupdB({ ...updB, sexe: e.target.value })}>ذكر</option>
                <option value="femme"onChange={(e) => setupdB({ ...updB, sexe: e.target.value })}>أنثى</option>
               
              </select> */}



              <input onChange={(e) => setupdB({ ...updB, cin: e.target.value })} type="numero" className="form-control n cin" placeholder=" ر.ب.ت.و " />

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
              <input onChange={(e) => setupdB({ ...updB, nom_pere: e.target.value })} type="text" className="form-control n" placeholder="أسم الأب" />
              <input onChange={(e) => setupdB({ ...updB, nom_mere: e.target.value })} type="text" className="form-control n" placeholder="أسم الأم" />
              <input onChange={(e) => setupdB({ ...updB, prenom_mere: e.target.value })} type="text" className="form-control n" placeholder="لقب الأم" />
            </div>

            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setupdB({ ...updB, num_tele_parents: e.target.value })} type="text" className="form-control n" placeholder="رقم هاتف الولي" />
              <input onChange={(e) => setupdB({ ...updB, adresse: e.target.value })} type="text" className="form-control n add" placeholder="  العنوان البريدي" />
            </div>

            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setupdB({ ...updB, profession: e.target.value })} type="text" className="form-control n etab" placeholder="  الوظيفة" />
              <input onChange={(e) => setupdB({ ...updB, niveau: e.target.value })} type="text" className="form-control n etab" placeholder="  المستوى الدراسي" />

            </div>
            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setupdB({ ...updB, diplome: e.target.value })} type="text" className="form-control n" placeholder="  الشهادة" />
              <input onChange={(e) => setupdB({ ...updB, nom_etablisement: e.target.value })} type="text" className="form-control n " placeholder=" المؤسسة " />
              <input onChange={(e) => setupdB({ ...updB, certificat_crt: e.target.value })} type="text" className="form-control n " placeholder="  الشهائد  " />

            </div>

            <div className="input">
              {/* <label>الإسم </label> */}
              <input onChange={(e) => setupdB({ ...updB, loisir: e.target.value })} type="text" className="form-control n etab" placeholder=" الهواية المفضلة " />
              <input onChange={(e) => setupdB({ ...updB, Annee_volontariat: e.target.value })} type="text" className="form-control n etab" placeholder="  سنة التطوع  " />

            </div>
            {user?.isAdmin === true ? (
              <><div className="input">
                {/* <label>الإسم </label> */}
                <input onChange={(e) => setupdB({ ...updB, commentaire: e.target.value })} type="text" className="form-control n etab" placeholder="  ملاحظات " />
                <input onChange={(e) => setupdB({ ...updB, nb_participation: e.target.value })} type="text" className="form-control n etab" placeholder="  عدد المشاركة   " />

              </div>
                <div className="input">


                  <label >متطوع</label>
                  <label className="rad-label">
                    <input type="radio" value={true} className="rad-input" name="rad" onChange={(e) => setupdB({ ...updB, isBenevole: (e.target.value === "true") })} />
                    <div className="rad-design"></div>
                    <div className="rad-text">نعم</div>
                  </label>

                  <label className="rad-label">
                    <input type="radio" value={false} className="rad-input" name="rad" onChange={(e) => setupdB({ ...updB, isBenevole: (e.target.value === "true") })} />
                    <div className="rad-design"></div>
                    <div className="rad-text">لا</div>
                  </label>
                </div>
              </>) : null
            }
            <div className="input">

              <label >مسعف</label>


              <label className="rad-label">
                <input type="radio" value={true} className="rad-input" name="secouriste" onChange={(e) => setupdB({ ...updB, secouriste: (e.target.value === "true") })} />
                <div className="rad-design"></div>
                <div className="rad-text">نعم</div>
              </label>

              <label className="rad-label">
                <input type="radio" value={false} className="rad-input" name="secouriste" onChange={(e) => setupdB({ ...updB, secouriste: (e.target.value === "true")})} />
                <div className="rad-design"></div>
                <div className="rad-text">لا</div>
              </label>
            </div>

          </div>
   <img className="" src={url}/>

          <div className="button">
            <button className='btn-update'
              onClick={() =>{ dispatch(addBenevole(updB))
                uploadImage()
                setupdB({isBenevole: true })
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

export default Updateprofile