import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import "./style/admin.css"
import Datepicker from "react-tailwindcss-datepicker";


import { BrowserRouter, Link, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '@iconify/react';
import logo from "../../assets/images/logo.png";
import Login from '../Login';
import Home from '../Home';
import About from '../About';
import Carousel from '../Carousel'
import AddEvenement from './evenements/AddEvenement';
import { logout, userCurrent } from '../JS/userSlice/userSlice';
import { userdelet, userget } from "../JS/userSlice/userSlice";
import UserList from './users/UserList';
import { benevoleget } from '../JS/benevoleSlice/benevoleSlice';
import { evenementget } from '../JS/evenementSlice/eventSlice';
import { getfamillesP } from '../JS/familles/familles';









const Admin = () => {
  const user = useSelector(state => state.user?.user)
  

  const reloadPage = () => {
    window.location.reload()
    
  }


  // open and close login
  const [opendash, setOpendash] = useState(false);
  const [openuser, setOpenuser] = useState(false);
  const [openevent, setOpenevent] = useState(false);
  const [opendfamil, setOpenfamil] = useState(false);
  const [openbenevole, setOpenbenevole] = useState(false);
  const [opentogel, setOpentogel] = useState(false);
  // const SetTogel = () => {
  //   setOpendash(!opendash);
  // };
  const isAuth = localStorage.getItem('token');
  const dispatch = useDispatch()
  const [pingA, setPingA] = useState()

  // open and close login
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    setTimeout(() => {
      setOpen();
    }, 2000);

  };
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent())
    }


  }, [pingA])

  return (
    <>
      <div className='Navbaractive Navbar-Admin'>
        <div className='Navbar-logo'>
          <Link to="/"><img id='logocrt' src={logo} alt='logo' /></Link>
        </div>

        {user?.isAdmin === true ?

          (<>
            {/* <div className="Navbar-links-admin">
              <Link className='link' to="/dashboard" onClick={() => setPingA(!pingA)}> لوحة الإعدادات
                <Icon icon="bi:boxes" width="30" height="30" />
              </Link>
            </div> */}
            <div className='Navbar-login-Admin' onClick={() => handleOpen()}>


              <h6> 





                {/* <Icon icon="mdi:user-circle-outline" width="50" height="50" color='green' /> */}
                <img className='photoprofile' src={user?.image}  width="50px " height="50px" alt="" srcset="" />
                {user?.name}


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
            </div>
          </>)

          :

          null

        }

      </div>
      <div className="container-dashbord">
        <div className="navbar-dashbord">

        </div>
        <div className="siedbar-dashbord">
          <div className="sidebar-login">
            {/* <img src={logo} alt="" width={"100px"} height={"100px"} /> */}

            <div className="retour">
              <Link className='link-h' to="/"> <img className='photoprofile' src={user?.image}  width="80px " height="80px" alt="" srcset="" /></Link>
            </div>
            <h1 className='title'>{user?.name}</h1>
          </div>

          <div className="sidebar-crud">

            <div className='sidebar__menu__item' >

              <Icon icon="bx:home" color="white" width="50" height="50" />
              <Link to="/dashboard" relative="path" >
                <h1>لوحة القيادة</h1></Link>
                {/* onClick={()=> reloadPage()} */}
            </div>
            <div className='sidebar__menu__item__icon'>


            </div>


          </div>
          <div className="sidebar-crud">

            <div className='sidebar__menu__item' onClick={() => setOpenuser(!openuser)}>

              <Icon icon="mdi:user" color="white" width="50" height="50" />

              <Link to="/dashboard/listuser" onClick={() => {
                dispatch(userget())
                setPingA(!pingA)
                // reloadPage()
              }
              }> <h1>مستخدم</h1> </Link>
            </div>
            {/* {openuser ?
              <div className='sidebar__menu__item__icon' >

               
                <div className="links">

                  <Link className='h1' text-crud to="/dashboard/adduser">إضافة مستخدم</Link>
                  <Icon icon="mdi:user-add" color="green" width="25" height="25" />
                </div>

              </div> : null} */}



          </div>
          <div className="sidebar-crud">

            <div className='sidebar__menu__item' onClick={() => setOpenbenevole(!openbenevole)}>

              <Icon icon="mdi:user-group" color="white" width="50" height="50" />


              <Link to="/dashboard/listbenevole" onClick={() => {
                dispatch(benevoleget())
                setPingA(!pingA)
                // reloadPage()
              }}><h1>متطوع</h1>  </Link>
            </div>
            {openbenevole ?
              <div className='sidebar__menu__item__icon' >

                {/* <Link to="/dashboard/updatebenevole" >تعديل </Link> */}

              </div> : null}



          </div>
          {/* <div className="sidebar-crud">

            <div className='sidebar__menu__item' onClick={() => setOpenfamil(!opendfamil)}>

              <Icon icon="mdi:user-heart" color="white" width="50" height="50" />

              <h1>أصحاب الحق</h1>
            </div>
            {opendfamil ?
              <div className='sidebar__menu__item__icon' >

                <Link>Add User</Link>
                <Link>Add User</Link>
                <Link>Add User</Link>
                <Link>Add User</Link>
              </div> : null}



          </div> */}
          <div className="sidebar-crud">

            <div className='sidebar__menu__item' onClick={() => setOpenevent(!openevent)} >

              <Icon icon="material-symbols:event-list" color="white" width="50" height="50" />

              <Link to="/dashboard/listevents" text-crud onClick={() => {
                dispatch(evenementget())
                setPingA(!pingA)
                // reloadPage()
              }}> <h1>أخبار & نشاطات</h1> </Link>

            </div>
            {/* {openevent ?
              <div className='sidebar__menu__item__icon' >



                <div className="links">

                
                  <Icon icon="mdi:user-add" color="green" width="25" height="25" />
                </div>
                <div className="links">

                  <Link className='h1' text-crud to="/dashboard/Addevent">إضافة نشاط</Link>
                  <Icon icon="carbon:add-alt" color="green" width="25" height="25" />
                </div>


              </div> : null} */}



          </div>


          {/* hhhh */}
          <div className="sidebar-crud">

            <div className='sidebar__menu__item' onClick={() => setOpenfamil(!opendfamil)} >

              {/* <Icon icon="uil:file-plus-alt" color="white" width="50" height="50" /> */}
              {/* <Icon icon="material-symbols:event-list" color="white" width="50" height="50" /> */}
              <Icon icon="material-symbols:family-restroom" color="white" width="50" height="50" />

              <Link to="/dashboard/GetFP" text-crud onClick={() => {
                dispatch(getfamillesP())
                setPingA(!pingA)
              }}> <h1>عائلات أصحاب الحق</h1> </Link>

            </div>
            {/* {opendfamil ?
              <div className='sidebar__menu__item__icon' >



                 <div className="links">

                
                  <Icon icon="mdi:user-add" color="green" width="25" height="25" />
                </div> 
                <div className="links">

                  <Link className='h1' text-crud to="/dashboard/AddFP">add famillle</Link>
                  <Icon icon="carbon:add-alt" color="green" width="25" height="25" />
                </div>


              </div> : null} */}



          </div>

          {/* hhh */}
        </div>

        <div className="contenu-dasbord">
          
          <Outlet />

          {/* <button> <Link to="/dashboard/listuser" onClick={() => dispatch(userget())}>قائمة المستخدمين</Link>listeUser</button> */}

          {/* <Carousel/> */}


          {/* <UserList/> */}

          {/* {console.log(user)} */}

        </div>
      </div >












    </>
  )
}

export default Admin




