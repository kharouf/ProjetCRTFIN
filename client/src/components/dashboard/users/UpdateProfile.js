import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '@iconify/react';
import logo from "../../../assets/images/logo.png";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { userupdate } from '../../JS/userSlice/userSlice';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const url = "http://localhost:5000/user/add"

const UpdateProfile = ({ user }) => {

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
    <div>
      {/* بيانات خاصة */}
      <form onSubmit={handleSubmit} >


        <div className='Container-Profile'>

          {/* بيانات خاصة */}

          <div className="form-profileup">

            <div className="title-profile">
              بيانات خاصة
            </div>

            <div className="image-profile">

            <div class="Avatar-upload" >
              <div class="Avatar-edit" >
                <input type='file' id="imageUpload" accept="image/*" onChange={(e) => {
                  handleFileUpload(e)
                  previewFile()
                }} />


                <label for="imageUpload" ><Icon className='editbtn' icon="iconoir:edit-pencil" width="30" height="30" /></label>
              </div>
              <div class="Avatar-preview">
                <img className='imgup' id="imagePreview" width={"200px"} height={"200px"} src={logo} />
              </div>
            </div>
            </div>


            <div className="input-profile">
              <div className="input ">
                <div className='inputlabel'>
                  <label>الإسم </label>
                  <input onChange={(e) => setUsere({ ...usere, name: e.target.value })} type="text" className="form-control n marg " />
                </div>


                <div className='inputlabel'>
                  <label>اللقب </label>
                  <input onChange={(e) => setUsere({ ...usere, lastName: e.target.value })} type="text" className="form-control n marg" /></div>

              </div>


              <div className="input">
                <div className='inputlabel'>
                  <label >البريد الإلكتروني </label>
                  <input onChange={(e) => setUsere({ ...usere, email: e.target.value })} type="email" className="form-control n marg" />

                </div>
                <div className="inputlabel">
                  <label >كلمة العبور  </label>
                  <input type="password" className="form-control n marg" />
                </div>
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

              <div className="input">
                <label>اوافق على صحة البيانات</label>


                <label className="rad-label">
                  <input type="radio" value={true} className="rad-input" name="rad" onChange={(e) => setUsere({ ...usere, Confirme: (e.target.value === "true") })} />
                  <div className="rad-design"></div>
                  <div className="rad-text">نعم</div>
                </label>



              </div>

            </div>


            {user?.Confirme === false ?
              <div className="button">
                <button className='btn-update' onClick={() =>
                  dispatch(userupdate({ id: userupd._id, user: usere }),
                    alertUp(),
                    setTimeout(() => {
                      navigate("/")
                    }, 1500),

                    reloadPage()
                  )
                }>
                  موافق
                </button>
                <button onClick={() => setCanncel(null)} className='btn-annuler'>
                  إلغاء
                </button>

              </div> :
              <div className="button">
                <button className='btn-update' onClick={() =>
                  dispatch(userupdate({ id: userupd._id, user: usere }),
                    alertUp(),
                    setTimeout(() => {
                      navigate("/")
                    }, 1500),

                     reloadPage()
                  )
                }>
                  تعديل
                </button>
                <button onClick={() => setCanncel(null)} className='btn-annuler'>
                  إلغاء
                </button>

              </div>
            }

          </div>





        </div>


      </form>
      {/* بيانات خاصة */}

    </div>
  )
}

export default UpdateProfile