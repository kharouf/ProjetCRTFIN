import React, { useState } from 'react'

import { BrowserRouter, Link, Navigate, Outlet, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';



import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '@iconify/react';
import { addBenevole,updateBen } from '../../JS/benevoleSlice/benevoleSlice'
import logo from "../../../assets/images/logo.png";
import { logout } from '../../JS/userSlice/userSlice';
import "../../../scss/profile.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Updatebenevole = () => {
  // fuction upload

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
 

  // cancel button
  const [inputValue, setInputValue] = useState("");

  const handleCancel = () => {
    setInputValue("");
  };
  // 
  const isAuth = localStorage.getItem('token');
  const dispatch = useDispatch()
  const params=useParams()
  // const benevole = useSelector(state => state.benevole?.benevole)
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

  const  alertUp = () =>{
  
    Swal.fire({
      icon: 'success',
      title:'!  تم تعديل بيانات المتطوع بنجاح'  
       
    })
  }

  const navigate =useNavigate()

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


            <h6> {benevoleupd?.nom}




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

      <div  className='Container-Profile25'>
        {/* بيانات خاصة */}

        {/* <div className="form-profile25">
          
          <div className="title-profile">
            بيانات خاصة
          </div>
          <div className="image-profile image-profile1">
            
            <div className="avatar-upload" >
              <div className="avatar-edit" >
                <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" onChange={() => previewFile()} />
                <label for="imageUpload" ><Icon className='editbtn' icon="iconoir:edit-pencil" width="30" height="30" /></label>
              </div>
              <div className="avatar-preview">
                <img className='imgup' id="imagePreview" width={"200px"} height={"200px"} src={logo} />

              </div>

            </div>
            
            <div className="name-profile">

              <h1>{benevoleupd?.nom}  </h1> <h1>{benevoleupd?.prenom}</h1>

            </div>
            <h3 className='numdossier'> {user?.num_dossier}   :رقم الملف</h3>


          </div>

          <div className="input-profile">
            <div className="input">
              
              <input  onChange={(e) => setupdB({ ...updB, nom: e.target.value })}  type="text" className="form-control n" placeholder={benevoleupd?.name} />
              <input  onChange={(e) => setupdB({ ...updB, prenom: e.target.value })} value={benevoleupd?.lastName} type="text" className="form-control n" placeholder={benevoleupd?.lastName} />

            </div>

            <div className="input">
              
              <input onChange={(e) => setupdB({ ...updB, email: e.target.value })} value={benevoleupd?.email} type="email" className="form-control n" placeholder={benevoleupd?.email} />
              <input onChange={(e) => setupdB({ ...updB, num_tele: e.target.value })} type="text" className="form-control n " placeholder="رقم الهاتف" />
            </div>

            <div className="input">
              
              <input onChange={(e) => setupdB({ ...updB, date_n: e.target.value })} type="date" className="form-control n" placeholder=" تاريخ الولادة" />
              <input onChange={(e) => setupdB({ ...updB, lieu_n: e.target.value })} type="text" className="form-control n" placeholder=" مكان الولادة" />
            </div>
            <div className="input">
              <label>الجنس</label>
              <label>
                <input type="radio" value="Homme" name="radio" checked onChange={(e) => setupdB({ ...updB, sexe: e.target.value })} />
                <span>ذكر</span>
              </label>
              <label>
                <input type="radio" value="Femme" name="radio" onChange={(e) => setupdB({ ...updB, sexe: e.target.value })}/>
                <span>أنثى</span>
              </label>



              <input onChange={(e) => setupdB({ ...updB, cin: e.target.value })} type="numero" className="form-control n cin" placeholder=" ر.ب.ت.و " />

            </div>
          </div>
        </div> */}
        {/* بيانات خاصة */}
        {/* بيانات عامة */}
        <div className="form-profile23">
          
          <div className="input-profile input-profile2" >
            {/* <div className="input">
              
              <input onChange={(e) => setupdB({ ...updB, nom_pere: e.target.value })} type="text" className="form-control n" placeholder="أسم الأب" />
              <input onChange={(e) => setupdB({ ...updB, nom_mere: e.target.value })} type="text" className="form-control n" placeholder="أسم الأم" />
              <input onChange={(e) => setupdB({ ...updB, prenom_mere: e.target.value })} type="text" className="form-control n" placeholder="لقب الأم" />
            </div>

            <div className="input">
              
              <input onChange={(e) => setupdB({ ...updB, num_tele_parents: e.target.value })} type="text" className="form-control n" placeholder="رقم هاتف الولي" />
              <input onChange={(e) => setupdB({ ...updB, adresse: e.target.value })} type="text" className="form-control n add" placeholder="  العنوان البريدي" />
            </div>

            <div className="input">
              
              <input onChange={(e) => setupdB({ ...updB, profession: e.target.value })} type="text" className="form-control n etab" placeholder="  الوظيفة" />
              <input onChange={(e) => setupdB({ ...updB, niveau: e.target.value })} type="text" className="form-control n etab" placeholder="  المستوى الدراسي" />

            </div>
            <div className="input">
              
              <input onChange={(e) => setupdB({ ...updB, diplome: e.target.value })} type="text" className="form-control n" placeholder="  الشهادة" />
              <input onChange={(e) => setupdB({ ...updB, nom_etablisement: e.target.value })} type="text" className="form-control n " placeholder=" المؤسسة " />
              <input onChange={(e) => setupdB({ ...updB, certificat_crt: e.target.value })} type="text" className="form-control n " placeholder="  الشهائد  " />

            </div> */}

            {/* <div className="input">
              
              <input onChange={(e) => setupdB({ ...updB, loisir: e.target.value })} type="text" className="form-control n etab" placeholder=" الهواية المفضلة " />
              <input onChange={(e) => setupdB({ ...updB, Annee_volontariat: e.target.value })} type="text" className="form-control n etab" placeholder="  سنة التطوع  " />

            </div> */}

            {user?.isAdmin === true ? (
              <>
              <div className="title-profile">
ملاحظات          </div>
              <div className="input">
                
                <input onChange={(e) => setupdB({ ...updB, commentaire: e.target.value })} type="text" className="form-control n etab" placeholder="  ملاحظات " />
                <input onChange={(e) => setupdB({ ...updB, nb_participation: e.target.value })} type="text" className="form-control n etab" placeholder="  عدد المشاركة   " />

              </div>
                {/* <div className="input">

                  <label >متطوع</label>
                  <label>
                    <input type="radio" value="true" name="radio2" checked onChange={(e) => setupdB({ ...updB, isbenevole: e.target.value })}/>
                    <span>نعم</span>
                  </label>
                  <label>
                    <input type="radio" value="false" name="radio2"onChange={(e) => setupdB({ ...updB, isbenevole: e.target.value })} />
                    <span>لا</span>
                  </label>
                </div> */}
              </>) : null
            }
            {/* <div className="input">

              <label >مسعف</label>
              <label>
                <input type="radio" value="true" name="radio1" checked onChange={(e) => setupdB({ ...updB, secouriste: e.target.value })}/>
                <span>نعم</span>
              </label>
              <label>
                <input type="radio" value="false" name="radio1" onChange={(e) => setupdB({ ...updB, secouriste: e.target.value })}/>
                <span>لا</span>
              </label>
            </div> */}

          </div>

          
          <div className="button">
              <button className='btn-update'
                onClick={() => {dispatch(updateBen({ benevole:updB, id:params.id }))
                alertUp()
                navigate("/dashboard/listbenevole")
                
                
                }}>
                تعديل
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

export default Updatebenevole