import React, { useEffect, useRef, useState } from 'react'


import { Link, Route, Redirect, Routes, Navigate, useLocation, useParams } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import '../scss/navbar.css'
import '../scss/footer.css'
import { FaBars, FaHamburger, FaRegUserCircle } from "react-icons/fa";
import Home from './Home';
import About from './About'
import { links } from './data'
import Login from './Login'
import { logout, userCurrent } from './JS/userSlice/userSlice'
import { benevolegetb,benevoleget } from './JS/benevoleSlice/benevoleSlice'

import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '@iconify/react'

// import { Link } from 'react-scroll'

const Navbar = ({ping ,setPing, benev , idb}) => {
  // is auth
  // const {idb} = useidb()
  const user = useSelector(state => state.user.user)
  // const benevoles = useSelector(state => state.benevole?.benevole);
  const evenements = useSelector(state => state.evenement?.evenement);
  // console.log("date", evenements)
  console.log("benev", benev)
  // console.log("idbenevole", {id:idb._id})
  // {benevoles?.map((ben) => {
  //   <>
  //  { console.log("test" ,ben.nom)}
  //   </>
  //                   })}
  // console.log("user", user?.name)
  const isAuth = localStorage.getItem('token');
  const dispatch = useDispatch()
  const location = useLocation()
  const benevolen = location.state
  // console.log("navaavav", benevolen)
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent())
    }
   dispatch(benevoleget())

  }, [])

  
  // sow navabr after media query change

  const [isMobile, setIsMobile] = useState(false)

  const handleIsMobile = () => setIsMobile(!isMobile)
  // //////////////////////////////////////////

  //  change font and color icon

  // /////////////////////////////////////////////

  // open and close login


  // console.log("idb", idb._id)
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(!open);
   
    
  };
  // //////////////////////////////////

  // chnage bacground navbar
  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => {
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);

  }
  window.addEventListener('scroll', changeNavbar)

  // ///////////////////////////////////////////////////////////

  return (

    <>



      <div className={navbar ? 'Navbaractive Navbar' : 'Navbar'} >
        <div className='Navbar-logo'>
          <Link to="/"><img id='logocrt' src={logo}  /></Link>
        </div>
        <div className={isMobile ? "Navbar-links-active" : "Navbar-links"}>
          <a className='link' href="/#" >الرئيسية</a>
          <a className='link' href="/#about" >من نحن</a>
          <a className='link' href="/#evenement">الأخبار و النشاطات</a>
          <a className='link' href="/#comite">أعضاء الجمعية</a>
          <a className='link' href="/#principes">مبادئنا</a>
          <a className='link' href="/#programs" >برامجنا</a>
          <a className='link' href="/#contact">إتصل بنا</a>
        </div>
        {/* if benevole add this */}
        {isAuth && user?.isAdmin === true ? (
          <>

            <div className='Navbar-links-admin'>
              <Link className='link' to="/dashboard"> لوحة الإعدادات  
                <Icon icon="bi:boxes" width="30" height="30" />
              </Link>
              
            </div>


          </>

        ) : (null)
        }

        <>

        

          {/* if benevole add this */}
          {isAuth && user?.isBenevole === true && user?.Confirme===false?   (
            <>
              <div className="Navbar-links-admin">

                <Link className='link' to="/updateuser/" state={user}>   إستمارة التطوع 

                
                </Link>

                
               

              </div>


            </>


          ) :  null}
          
          {user?.Confirme === true ?

<>
<div className="Navbar-links-admin">

  <Link className='link'to="/updateuser/" state={user}>   تعديل البيانات 

  

  </Link>
 

</div>


</>:null
            }
              
            
   
         
         




           
        </>
        {isAuth ?
          (<div className='Navbar-login' onClick={() => handleOpen()}>


            <h6> 
              


              {/* <Icon icon="mdi:user-circle-outline" width="50" height="50" color='green' /> */}
              <img className='photoprofile' src={user?.image ||logo}  width="50px " height="50px" alt="" srcset="" />
              {user?.name}


            </h6>
            {open ?
              <div className="dropdown">


                <Link to='/' className='link-logout' >{isAuth ? <button onClick={() => {
                  dispatch(logout());
                  Navigate("/")
                }}>
                  تسجيل الخروج
                </button> : null}
                  <Icon icon="bi:box-arrow-right" width="30" height="30"  />
                </Link>

              </div>
              : null}
          </div>) : (
            <div className='Navbar-login' onClick={() => handleOpen()}>


              <h6>تسجيل الدخول
                <Icon icon="mdi:user-circle-outline" width="50" height="50" />
              </h6>
              {open ?
                <div className="dropdown">

                  <Link to='/login' className='link-logout' >تسجيل الدخول
                    <Icon icon="bi:box-arrow-in-right" width="30" height="30" />
                  </Link >
                  <Link to='/register' className='link-logout'>تسجيل
                    <Icon icon="mdi:account-plus" width="30" height="30" />
                  </Link >


                </div>
                : null}
            </div>
          )
        }
      </div>
      {/* {user?._id == benev?.clientId ? "wala":"mech wala"} */}

                

    </>
  )
}

export default Navbar