import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '@iconify/react';
import logo from "../../../assets/images/logo.png";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { userupdate } from '../../JS/userSlice/userSlice';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const UpdateB = ({ user }) => {
  const params = useParams()
  const location = useLocation()
  const userupd = location.state
  const [canncel, setCanncel] = useState(null)
  const [pingU, setPingU] = useState()
  const dispatch = useDispatch()
  const [usere, setUsere] = useState({
    name: userupd.name,
    lastName: userupd.lastName,
    email: userupd.email,
    isAdmin: userupd.isAdmin,
    isBenevole: userupd.isBenevole,
    Confirme: userupd.Confirme,
    sexe: userupd.sexe,
    nom_pere: userupd.nom_pere,
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
  const navigate = useNavigate()
  const alertUp = () => {

    Swal.fire({
      icon: 'success',
      title: '!  تم تعديل المستخدم بنجاح'

    })
  }
  const reloadPage = () => {
    setTimeout(() => {
      window.location.reload()
    }, 1500);


  }
  return (
    <div className='updateB'>
      <div className="retoure">
        <div className="nubuser">
        <Link to="/dashboard/listbenevole">
          <Icon icon="typcn:arrow-back-outline" width="30" color='white' />
        </Link>
      </div>
      </div>
      
      {/* بيانات خاصة */}

      <div className=" updateuser">


        <div className="image-profile">

          <div className="avatar-upload" >

            <div className="avatar-preview">
              <img className='imgup' width={"200px"} height={"200px"} src={userupd?.image || logo} />
            </div>
          </div>
        </div>

        <div className="input-profile">


          <><div className="input">

            <input onChange={(e) => setUsere({ ...usere, commentaire: e.target.value })} type="text" className="form-control n etab" placeholder="  ملاحظات " />

          </div>
            <div className="input">

              <input onChange={(e) => setUsere({ ...usere, nb_participation: e.target.value })} type="text" className="form-control n etab" placeholder="  عدد المشاركة   " />


            </div>
          </>









          <div className="input">

            <label >مسؤل</label>

            <label className="rad-label">
              <input onChange={(e) => setUsere({ ...usere, isAdmin: (e.target.value === "true") })} type="radio" value={true} className="rad-input" name="admin" />
              <div className="rad-design"></div>
              <div className="rad-text">نعم</div>
            </label>

            <label className="rad-label">
              <input onChange={(e) => setUsere({ ...usere, isAdmin: (e.target.value === "true") })} type="radio" value={false} className="rad-input" name="admin" />
              <div className="rad-design"></div>
              <div className="rad-text">لا</div>
            </label>

          </div>
          <div className="input">

            <label >متطوع</label>
            <label className="rad-label">
              <input onChange={(e) => setUsere({ ...usere, isBenevole: (e.target.value === "true") })} type="radio" value={true} className="rad-input" name="benevole" />
              <div className="rad-design"></div>
              <div className="rad-text">نعم</div>
            </label>

            <label className="rad-label">
              <input onChange={(e) => setUsere({ ...usere, isBenevole: (e.target.value === "true") })} type="radio" value={false} className="rad-input" name="benevole" />
              <div className="rad-design"></div>
              <div className="rad-text">لا</div>
            </label>
          </div>




        </div>
        <div className="button">
          <button className='btn-update' onClick={() =>
            dispatch(userupdate({ id: params.id, user: usere }),
              alertUp(),
              navigate("/dashboard/listbenevole"),

              reloadPage()
            )
          }>
            تعديل
          </button>
          <button onClick={() => setCanncel(null)} className='btn-annuler'>
            إلغاء
          </button>

        </div>
      </div>
      {/* بيانات خاصة */}

    </div>
  )
}

export default UpdateB