import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { benevoledelet, benevoleget } from '../../JS/benevoleSlice/benevoleSlice'
import { Link } from 'react-router-dom'
import "../style/benevole.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const GetBenevole = () => {
  const dispatch = useDispatch()
  const [pingB, setPingB] = useState()
  const benevoles = useSelector((state) => state?.benevole?.benevole);
  const users = useSelector((state) => state?.user?.usera);

const alertSupp = () => {

  Swal.fire({
    icon: 'success',
    title: '!  تم حذف المتطوع بنجاح'

  })
}
  useEffect(() => {
    dispatch(benevoleget())
  }, [pingB])
  return (

    <div className='listbenevole'>






      {benevoles?.map((benevole, i) =>
      
          <div key={i} class="profile-card">

            <header>


              <a href="https://tutsplus.com">
                <img src="https://i.pravatar.cc/100" />
              </a>

              <div className="hetext">
                <h1>{benevole?.nom}</h1>
                


                <h1>{benevole?.prenom}</h1>
              </div>


            </header>

            <div class="profile-bio">

              <p>{benevole?.sexe}</p>
              <p>{benevole?.nom_pere}</p>
             

            </div>


            <ul class="profile-social-links btn">
            <li><Link to={`/dashboard/detaille/${benevole?._id}`}  state={benevole}><button  className=" btnd-userlist">التفاصيل</button></Link></li>

              <li><button className=" btnc-userlist"
                onClick={() => {
                  dispatch(benevoledelet(benevole?._id)
                  )
                  
                  alertSupp(setPingB(!pingB))
                }}
              >حذف</button></li>
            <li><Link to={`/dashboard/updatebenevole/${benevole?._id}`} state={benevole}><button  className=" btna-userlist">تعديل</button></Link></li>
            

            </ul>







 

          </div>
      

        


      )
      }



    </div >


  )
}

export default GetBenevole