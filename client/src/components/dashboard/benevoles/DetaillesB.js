import React, { useState, useRef, useEffect } from 'react'
import {useReactToPrint} from 'react-to-print'
import Navbar from '../../Navbar'
import { BrowserRouter, Link, Navigate, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '@iconify/react';
import { addBenevole, addBenevoleuser } from '../../JS/benevoleSlice/benevoleSlice'
import logo from "../../../assets/images/logo.png";
import istimara from "../../../assets/images/Istimara.png";
import { logout } from '../../JS/userSlice/userSlice';
import "../../../scss/detaille.css"
const reloadPage = () => {
  window.location.reload()

}
const DetaillesB = ({idb,state,pingB, setPingB}) => {
  // fuction upload
 const componentRef = useRef()
 const handelPrint = useReactToPrint({
  content: ()=>componentRef.current,
  documentTitle:'إستمارة تطوع',
  onAfterPrint:()=> alert('تمت عملية الطباعة بنجاح')
 })

 useEffect(() => {
 
 
   }, [pingB])
 
  const location = useLocation()
  const benevoled = location.state
  console.log("detaille", benevoled)
  var date = benevoled?.date_n.split('T')[0];

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
  const usera = useSelector(state => state.user?.usera)
  console.log("usera", usera)

  // cancel button
  const [inputValue, setInputValue] = useState("");

  const handleCancel = () => {
    setInputValue("");
  };
  // 
  const alertAdd = () => {
    Swal.fire({

      icon: 'success',
      title: 'تم تعمير الاستمارة بنجاح',

    })
  }
  const navigate = useNavigate()
  // 
  const isAuth = localStorage.getItem('token');
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  

  

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


        {/* بيانات خاصة */}

        {/* بيانات عامة */}
        <div className="form-profile2 form-profile" ref={componentRef} >
        {/* style={{width:'100%', height:'100%'}} */}

          <div class="avatar-preview11">
            <img className='imgup' id="imagePreview11" width={"850px"} height={"200px"} src={istimara} />

          </div>

          <h3 className='numdossier11'> {usera?.state.num_dossier}  :&nbsp;رقم الملف</h3>
          <div className="title-profile11">
            إستمارة تطوع في الهلال الأحمر التونسي
            {/* {benevole?.nom} */}
          </div>

          <div className="input-profile211">
            <div className="numdossier11">
              البيانات الأساسية
            </div>
            <div className="input11">
              {/* <label>الإسم </label> */}
              <label >:&nbsp;الإسم</label>
              <label className="input-label" > {benevoled?.name}   </label>
              <label>:&nbsp;اللقب </label>
              <label className="input-label" > {benevoled?.lastName}   </label>

            </div>

            <div className="input11">

              <label>:&nbsp;تاريخ الولادة </label>
              <label className="input-label" > {date}   </label>
              <label>:&nbsp;مكان الولادة </label>
              <label className="input-label" > {benevoled?.lien_n}   </label>

            </div>

            <div className="input11">

              <label>:&nbsp;البريد الإلكتروني</label>
              <label className="input-label" > {benevoled?.email}   </label>
              <label>:&nbsp; رقم الهاتف </label>
              <label className="input-label" > {benevoled?.num_tele}   </label>

            </div>


            <div className="input11">
              <label>:&nbsp;الجنس  </label>
              <label className="input-label" > {benevoled?.sexe}   </label>
              <label>:&nbsp; رقم ب.ت.و</label>
              <label className="input-label" > {benevoled?.cin}   </label>


            </div>
          </div>

          <div className="numdossier111">
            البيانات العامة
          </div>
          <div className="input-profile211" >

            <div className="input11">
              <label>:&nbsp;أسم الأب  </label>
              <label className="input-label" > {benevoled?.nom_pere}   </label>
              <label>:&nbsp; أسم الأم</label>
              <label className="input-label" > {benevoled?.nom_mere}   </label>
              <label>:&nbsp; لقب الأم</label>
              <label className="input-label" > {benevoled?.prenom_mere}   </label>


            </div>


            <div className="input11">
              <label>:&nbsp;رقم هاتف الولي   </label>
              <label className="input-label" > {benevoled?.num_tele_parents}   </label>
              <label>:&nbsp;  العنوان البريدي</label>
              <label className="input-label" > {benevoled?.adresse}   </label>

            </div>



            <div className="input11">
              <label>:&nbsp;الوظيفة   </label>
              <label className="input-label" > {benevoled?.profession}   </label>
              <label>:&nbsp; المستوى الدراسي</label>
              <label className="input-label" > {benevoled?.niveau}   </label>

            </div>


            <div className="input11">
              <label>:&nbsp;الشهادة   </label>
              <label className="input-label" > {benevoled?.diplome}   </label>
              <label>:&nbsp;  المؤسسة</label>
              <label className="input-label" > {benevoled?.nom_etablisement}   </label>
              <label>:&nbsp;الشهائد</label>
              <label className="input-label" > {benevoled?.certificat_crt}   </label>

            </div>



            <div className="input11">
              <label>:&nbsp;الهواية المفضلة   </label>
              <label className="input-label" > {benevoled?.loisir}   </label>
              <label>:&nbsp;  سنة التطوع</label>
              <label className="input-label" > {benevoled?.Annee_volontariat}   </label>
            </div>
            {user?.isAdmin === true ? (
              <>

                <div className="input11">
                  <label>:&nbsp; ملاحظات   </label>
                  <label className="input-label" > {benevoled?.commentaire}   </label>
                  <label>:&nbsp;  عدد المشاركة</label>
                  <label className="input-label" > {benevoled?.nb_participation}   </label>
                </div>



                <div className="input11">
                  <label>:&nbsp; متطوع   </label>
                  <label className="input-label" > {benevoled?.isbenevole}   </label>

                </div>
              </>) : null
            }

            <div className="input11">
              <label>:&nbsp; مسعف   </label>
              <label className="input-label" > {benevoled?.secouriste}   </label>

            </div>
          </div>


          

        </div>
        <div className="button">
            <button className='btn-imprime' onClick={()=> handelPrint()}>
              <Icon icon="carbon:generate-pdf" width="32" height="32" />
              طباعة الإستمارة
            </button>


          </div>
      </div>
      {/* بيانات عامة */}

    </div>
  )
}

export default DetaillesB