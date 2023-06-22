import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '@iconify/react';
import logo from "../../../assets/images/logo.png";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { userupdate } from '../../JS/userSlice/userSlice';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const UpdateUser = ({user}) => {
  const be = useSelector((state) => state?.user?.usera);
  const params = useParams()
  const location=useLocation()
  const userupd = location.state
  const [canncel, setCanncel] = useState(null)
  const [pingU, setPingU] = useState()
  const dispatch = useDispatch()
  const [usere, setUsere] = useState({
    name:userupd.name,
    lastName:userupd.lastName,
    email:userupd.email,
    isAdmin:userupd.isAdmin,
    isBenevole:userupd.isBenevole,
    Confirme:userupd.Confirme,
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
  const navigate =useNavigate()
  const  alertUp = () =>{
  
    Swal.fire({
      icon: 'success',
      title:'!  تم تعديل المستخدم بنجاح'  
       
    })
  }
  const reloadPage = () => {
    setTimeout(() => {
      window.location.reload()
    }, 500);
    
    
  }
  return (
    <div>

<div className="retoure">
        <div className="nubuser">
        <Link to="/dashboard/listuser">
          <Icon icon="typcn:arrow-back-outline" width="30" color='white' />
        </Link>
      </div>
      </div>
      {/* بيانات خاصة */}

      <div className=" updateuser">
          
          
          <div className="image-profile">
            
            <div class="avatar-upload" >
              
              <div class="avatar-preview">
                <img className='imgup' width={"200px"} height={"200px"} src={be?.image || logo} />
              </div>
            </div>
          </div>

          <div className="input-profile">

          {user?.isBenevole===true ?(
              <><div className="input">

                <input onChange={(e) => setUsere({ ...usere, commentaire: e.target.value })} type="text" className="form-control n etab" placeholder="  ملاحظات " />

              </div>
                <div className="input">

                <input onChange={(e) => setUsere({ ...usere, nb_participation: e.target.value })} type="text" className="form-control n etab" placeholder="  عدد المشاركة   " />

                  
                </div>
              </>) : null
            }
            {/* <div className="input ">
              <div className='inputlabel'>
                <label>الإسم </label>
              <input onChange={(e)=>setUsere({...usere,name:e.target.value})}  type="text" className="form-control n marg "  />
              </div>
              
              
              <div className='inputlabel'>
                <label>اللقب </label>
              <input onChange={(e)=>setUsere({...usere,lastName:e.target.value})}  type="text" className="form-control n marg"  /></div>

            </div> */}
      

            {/* <div className="input">
            <div className='inputlabel'>
              <label >البريد الإلكتروني </label>
              <input onChange={(e)=>setUsere({...usere,email:e.target.value})}  type="email" className="form-control n marg"  />

            </div>
            <div className="inputlabel">
            <label >كلمة العبور  </label>
              <input type="password" className="form-control n marg"  />
            </div>
            </div> */}
            
            

           
            <div className="input">

<label >مسؤل</label>

        <label className="rad-label">
          <input onChange={(e)=>setUsere({...usere,isAdmin:(e.target.value === "true") })} type="radio" value={true}   className="rad-input" name="admin"  />
          <div className="rad-design"></div>
          <div className="rad-text">نعم</div>
        </label>

        <label className="rad-label">
          <input onChange={(e)=>setUsere({...usere,isAdmin:(e.target.value === "true") })}  type="radio" value={false}  className="rad-input" name="admin"  />
          <div className="rad-design"></div>
          <div className="rad-text">لا</div>
        </label>

</div>
<div className="input">

<label >متطوع</label>
        <label className="rad-label">
          <input onChange={(e)=>setUsere({...usere,isBenevole:(e.target.value === "true") })}  type="radio" value={true}  className="rad-input" name="benevole" />
          <div className="rad-design"></div>
          <div className="rad-text">نعم</div>
        </label>

        <label className="rad-label">
          <input onChange={(e)=>setUsere({...usere,isBenevole:(e.target.value === "true") })}  type="radio" value={false}  className="rad-input" name="benevole"  />
          <div className="rad-design"></div>
          <div className="rad-text">لا</div>
        </label>
</div>

{/* <div className="input">

              <input onChange={(e) => setUsere({ ...usere, date_n: e.target.value })} type="date" className="form-control n" placeholder=" تاريخ الولادة" />
              <input onChange={(e) => setUsere({ ...usere, lieu_n: e.target.value })} type="text" className="form-control n" placeholder=" مكان الولادة" />
            </div> */}
            {/* <div className="input">
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

            </div> */}


          </div>
          <div className="button">
              <button className='btn-update' onClick={()=>
              dispatch(userupdate({ id: params.id, user:usere }),
               alertUp(),
              navigate("/dashboard/listuser"),
             
              reloadPage()
              )
            }>
                تعديل 
              </button>
              <button  onClick={()=>setCanncel(null)} className='btn-annuler'>
                إلغاء
              </button>

            </div>
        </div>
        {/* بيانات خاصة */}
        
    </div>
  )
}

export default UpdateUser