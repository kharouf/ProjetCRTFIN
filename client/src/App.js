import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
// import * as React from 'react';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './scss/App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Principes from './components/Principes';
import Programs from './components/Programs';
import Comite from './components/Comite';
import Evenements from './components/Evenements';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/dashboard/Admin';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, userCurrent } from './components/JS/userSlice/userSlice';
import { benevoleget } from './components/JS/benevoleSlice/benevoleSlice';
import { evenementget } from './components/JS/evenementSlice/eventSlice';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoutes/PrivateRoutes';
import AdminRoute from './components/PrivateRoutes/AdminRoute';
import AddEvent from './components/dashboard/AddEvent';
import AddEvenement from './components/dashboard/evenements/AddEvenement';
import NavbarDash from './components/dashboard/NavbarDash';
import InfoBenevole from './components/InfoBenevole';
import DeletUser from './components/dashboard/users/DeletUser';
import AddUser from './components/dashboard/users/AddUser';
import UpdateUser from './components/dashboard/users/UpdateUser';
import UserList from './components/dashboard/users/UserList';
import Upbenevole from './components/dashboard/benevoles/Upbenevole';
import Erreur404 from './components/Erreur404';
import GetBenevole from './components/dashboard/benevoles/GetBenevole';
import GetEvenement from './components/dashboard/evenements/GetEvenement';
import Updatebenevole from './components/dashboard/benevoles/Updatebenevole';
import UpdateEvenement from './components/dashboard/evenements/UpdateEvenement';
import AddFP from './components/dashboard/famillesP/AddFP';
import GetFP from './components/dashboard/famillesP/GetFP';
import UpdateFP from './components/dashboard/famillesP/UpdateFP';
import Acceuil from './components/dashboard/Acceuil';
import DetaillesB from './components/dashboard/benevoles/DetaillesB';




function App() {
  const location = useLocation()
  const isAuth = localStorage.getItem('token');
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  const [ping, setPing] = useState(false)
useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent())
    }
dispatch(benevoleget())
dispatch(evenementget())


  }, [ping])
  const user = useSelector(state => state?.user?.user)
  const ben = useSelector(state => state?.benevole?.benevole);
  const event = useSelector(state => state?.evenement?.evenement);
  // console.log("benevole" ,ben)
  // console.log("user" ,user)

  
  
  

  


  return (
    <>
      {location.pathname.includes('dashboa') ?null: <Navbar  benev ={ben} ping={ping} setPing={setPing} />}

      <Routes>
        <Route exact path="/login" element={<Login ping={ping} setPing={setPing} />} />
        <Route path="/profile" element={<Profile/>} />
        {/* <Route path='/profile/updateProfile/' element={<UpdateProfile/>} /> */}
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/*" element={<Erreur404/>} />
        {/* <Route path='/updateProfile/' element={<UpdateProfile/>} /> */}
       
        {isAuth && user?.isAdmin===true?(
        <Route path="/dashboard" element={<Admin ping={ping} setPing={setPing}/>}  >
          <Route exact path="/dashboard/Addevent" element={<AddEvenement ping={ping} setPing={setPing}/>} />
          <Route exact path="/dashboard/profil" element={<Profile />} />
          <Route exact path="/dashboard/adduser" element={<AddUser ping={ping} setPing={setPing}/>} />
          <Route exact path="/dashboard/deletuser" element={<DeletUser/>} />
          <Route exact path="/dashboard/edituser" element={<UpdateUser/>} />
          <Route exact path="/dashboard/listuser" element={<UserList />} />
          <Route path='/dashboard/updateuser/' element={<UpdateUser/>} />
          <Route path='/dashboard/listbenevole' element={<GetBenevole ping={ping} setPing={setPing}/>} />
          <Route path='/dashboard/listevents' element={<GetEvenement/>} />
          <Route path='/dashboard/updatebenevole/:id' element={<Updatebenevole ping={ping} setPing={setPing}/>} />
          <Route path='/dashboard/updateevents/:id' element={<UpdateEvenement ping={ping} setPing={setPing}/>} />
          <Route path='/dashboard/AddFP' element={<AddFP/>} />
          <Route path='/dashboard/GetFP' element={<GetFP/>} />
          <Route path='/dashboard/UpdatetFP/:id' element={<UpdateFP/>} />
          <Route path='/dashboard/detaille/:id' element={<DetaillesB Detailles ={ben}/>} />

          
          <Route path='/dashboard/' element={<Acceuil users={user} benevole={ben} evenement={event} ping={ping} setPing={setPing}/>} />
          {/* <Route path='/updateProfile/' element={<UpdateProfile/>} /> */}
          

          
          {/* benevole */}
          {/* <Route exact path="/dashboard/updatebenevole" element={<Upbenevole/>} /> */}
          
          
        </Route>
  ): null
        }
        
      </Routes>


    </>


  );
}

export default App;



