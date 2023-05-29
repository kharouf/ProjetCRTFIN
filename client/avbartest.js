import React, { useEffect, useRef, useState } from 'react'


import { Link, Route,Redirect, Routes } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import '../scss/navbar.css'
import '../scss/footer.css'
import { FaBars, FaHamburger, FaRegUserCircle } from "react-icons/fa";
import Home from './Home';
import About from './About'
import { links } from './data'
import Login from './Login'
import { userCurrent } from './JS/userSlice/userSlice'
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-scroll'

const Navbar = () => {
// is auth
  const user = useSelector(state => state.user.user)
  const isAuth = localStorage.getItem('token');
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent())
    }


  }, [])
  // sow navabr after media query change

  const [isMobile, setIsMobile] = useState(false)

  const handleIsMobile = () => setIsMobile(!isMobile)
  // //////////////////////////////////////////
  
//  change font and color icon
  let iconStyles = { color: "white", fontSize: "2em" };
  let iconStylesmd = { color: "white", fontSize: "2.6em" };
  // /////////////////////////////////////////////

  // open and close login
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
      <div className={navbar ? 'Navbaractive Navbar' : 'Navbar'}>
        <div className='Navbar-logo'>
          <Link to="/"><img src={logo} alt='logo' /></Link>
        </div>
        {/*  */}

       <div className={isMobile?"Navbar-links-active":"Navbar-links"}>
       
         <>
          <a className='link'  href="#" >الرئيسية</a>
          <a className='link'  href="#about" >من نحن</a>
          <a className='link' href="#evenement">الأخبار و النشاطات</a>
          <a className='link' href="#comite">أعضاء الجمعية</a>
          <a className='link' href="#principes">مبادئنا</a>
          <a className='link'  href="#programs" >برامجنا</a>
          <a className='link' href="#contact"> متطوع</a>
        </>
        
:
<a className='link' href="#contact">إتصل بنا</a>

        </div>
        
        <div className='Navbar-login' onClick={() => handleOpen()}>

          < FaRegUserCircle style={iconStylesmd}  />
          <h6>تسجيل الدخول</h6>
          {open ?
            <div className="dropdown">

              <Link to ='/login' className='link' >تسجيل الدخول</Link >
              <Link to ='/register' className='link'>تسجيل</Link >
               
              
            </div>
            : null}
         
        </div>
        
        
      

        
        <div className="menu-icon"  onClick={()=>handleIsMobile()}>
          <FaBars className='fabars' style={iconStyles} />
        </div>
      </div>


    </>
  )
}

export default Navbar

    //     <>
    //       <div className={navbar ? 'Navbaractive Navbar' : 'Navbar'}>
    //         <div className='Navbar-logo'>
    //           <Link to="/"><img src={logo} alt='logo' /></Link>
    //         </div>
    //         {/*  */}

    //        <div className={isMobile?"Navbar-links-active":"Navbar-links"}>
    //        {isAuth ?
    //          <>
    //           <a className='link'  href="#" >الرئيسية</a>
    //           <a className='link'  href="#about" >من نحن</a>
    //           <a className='link' href="#evenement">الأخبار و النشاطات</a>
    //           <a className='link' href="#comite">أعضاء الجمعية</a>
    //           <a className='link' href="#principes">مبادئنا</a>
    //           <a className='link'  href="#programs" >برامجنا</a>
    //           {/* <a className='link' href="#contact">إتصل بنا</a> */}
    //         </>

    // :
    // <a className='link' href="#contact">إتصل بنا</a>
    // }


    // {/* <Routes>
    //   <Route path="/login" element={<Login/>} />
    // </Routes> */}


    //         </div>





    //         <div className="menu-icon"  onClick={()=>handleIsMobile()}>
    //           <FaBars className='fabars' style={iconStyles} />
    //         </div>
    //       </div>


    //     </>




    <div className={isMobile ? "Navbar-links-active" : "Navbar-links"}>
              {/* <a className='link' href="#" >الرئيسية</a>
              <a className='link' href="#about" >من نحن</a>
              <a className='link' href="#evenement">الأخبار و النشاطات</a>
              <a className='link' href="#comite">أعضاء الجمعية</a>
              <a className='link' href="#principes">مبادئنا</a>
              <a className='link' href="#programs" >برامجنا</a>
              <a className='link' href="#contact">إتصل بنا</a>
              <Link className='link' to="/dashboard"> لوحة الإعدادات
                <Icon icon="bi:boxes" width="30" height="30" />
              </Link> */}


            </div>
            <div className='Navbar-login' onClick={() => handleOpen()}>


              <h6> {user?.name}
                {/* تسجيل الخروج */}


                <Icon icon="mdi:user-circle-outline" width="50" height="50" />
                {/* <img src={logo} alt='logo' width={"50px"} height={"50px"}/> */}


                {/* {user.lastname} */}
              </h6>
              {open ?
                <div className="dropdown">

                  {/* <Link to='/login' className='link' >تسجيل الدخول</Link >
                  <Link to='/register' className='link'>تسجيل</Link > */}
                  <Link to='/logout' className='link-logout' >{isAuth ? <button onClick={() => {
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












// <div className='Navbar-login' onClick={() => handleOpen()}>


// <h6> {user?.name}
//   تسجيل الخروج


//   <Icon icon="mdi:user-circle-outline" width="50" height="50" />
  


// </h6>
// {open ?
//   <div className="dropdown">

    
//     <Link to='/logout' className='link-logout' >{isAuth ? <button onClick={() => {
//       dispatch(logout());
//       Navigate("/")
//     }}>
//       تسجيل الخروج
//     </button> : null}
//       <Icon icon="bi:box-arrow-right" width="30" height="30" />
//     </Link>

//   </div>
//   : null}
// </div>



/* Navbar */
.Navbar {
  width: 98.8vw;
  display: flex;
  align-items: center;
  gap: 30px;
  flex-direction: row-reverse;
  padding: 0 20px;
  height: 80px;
  position: fixed;
  justify-content: space-around;
  top: 0;
  left: 0;
  z-index: 99999999999;
  border: 1px solid blue;
 padding-left: 12cm;
   /* box-shadow: rgba(240, 4, 4, 0.2) 0 30px 30px -20px; */
  
}


.Navbaractive{
  
  background-color: rgb(133, 7, 7);
  box-shadow: rgba(133, 7, 7, 0.28) 0 30px 30px -20px;
  
  
}
/* nav admin */
/* .Navbar-links-admin{
  border: 1px solid black;
  display: flex;
} */
/* admin */
.Navbar-links {
  width: 80vw;
  height: 50px;
  gap: 30px;
  display: flex;
  align-items: center;
 
  flex-direction: row-reverse;
  border: 1px solid ;
  /* align-items: flex-end; */
  
}

.Navbar-links .link {
  color: white;
  font-size: 1.3em;
  font-weight: bold;
  text-decoration: none;
}
.Navbar-links .link:hover {
  color: rgb(0, 0, 0);
  
}
.Navbar-logo img {
  height: 15%;
  width: 15%;
  /* margin-left: 12cm; */
  border: 1px solid black;
}

.Navbar-login {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  flex-direction: row-reverse;
  gap: 10px;
  cursor: pointer;

}

.Navbar-login h6 {
  width: 200px;
  gap: 10px;
  margin-left: 1cm;
  color: white;
  font-size: 1.3em;
  font-weight: bold;
  display: flex;
  align-items:center ;
  /* border: 1px solid yellow; */

}
.Navbar-login h6:hover {
 color: rgb(0, 0, 0);

}


/* End Navbar */

.dropdown {
  width: 200px;
  height: 100px;
  margin-left: -50px;
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  /* border: 1px solid; */
 
  position: absolute;
  margin-bottom: -5cm;
  border-radius: 5px;
 
  background-color: #f1f1f1;
 
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;


}

.dropdown .link {
  list-style: none;
  font-size: 1.2em;
  font-weight: bold;
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  flex-direction: row-reverse;
  /* border: 1px solid; */
  padding-right: 10px;
  color: black;

}
.dropdown .link:hover{
  background-color:  rgba(65, 63, 63, 0.103);;
}


.menu-icon {
  display: none;
}
@media  (max-width: 1402px) {
  .Navbar-links {
    width: 50vw;
    gap: 20px;
    
  }
  
.Navbar-links .link {
 
  font-size: 1.2em;
  
}

.Navbar-login h6 {
 
  font-size: 1.2em;
 

}
}
@media  (max-width: 1340px) {
  .Navbar {
    
    gap: 80px;
    
    
  }
 
  .Navbar-links {
    width: 50vw;
    gap: 20px;
    
  }
  
.Navbar-links .link {
 
  font-size: 1em;
  
}

.Navbar-login h6 {
 
  font-size: 1em;
 

}
}
@media  (max-width: 1154px) {
  .Navbar {
    
    gap: 60px;
    
    
  }
  .Navbar-links {
    width: 50vw;
    gap: 20px;
    
  }
  
.Navbar-links .link {
 
  font-size: 0.8em;
  
}

.Navbar-login h6 {
 
  font-size: 0.8em;
 

}
}
@media  (max-width: 1010px) {
  .Navbar {
    
    gap: 40px;
    
    
  }
  .Navbar-links {
    width: 50vw;
    gap: 30px;
    
  }
  
.Navbar-links .link {
 
  font-size: 0.7em;
  
}

.Navbar-login h6 {
 
  font-size: 0.7em;
 

}
}
@media  (max-width: 740px) {
 
  .Navbar-links {
    display: none;
    
  }


.Navbar-login h6 {
 
  font-size: 1em;
 

}
}

@media  (max-width: 520px) {

  .Navbar {
    gap: 40px; 
  }
  
.Navbar-links {
 
display: none;  
}
.Navbar-login {
 
  
  margin-right: 5cm;
 

}
.Navbar-login h6 {
 
  font-size: 0.7em;
  
 

}


}
@media  (max-width: 445px) {

.Navbar-login {
 
  
  margin-right: 5cm;
 

}
.Navbar-login h6 {
 
  display: none;
  
 

}


}
@media  (max-width: 375px) {


.menu-icon {
  display: block;
  /* border: 1px solid; */
  

}
.fabars{
  position: sticky;
}
.dropdown {
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  /* border: 1px solid; */
 
  position: absolute;
  margin-bottom: -5cm;
  border-radius: 5px;
 
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;


}

.dropdown .link {
  list-style: none;
  font-size: 1.3em;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: space-between;
  border: 1px solid;
  padding-right: 10px;
  color: black;

}
.dropdown .link:hover {
 
  color: rgb(207, 16, 16);

}