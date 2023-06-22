import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { benevoledelet, benevoleget } from '../../JS/benevoleSlice/benevoleSlice'
import { userdelet, userget } from "../../JS/userSlice/userSlice";
import { Link } from 'react-router-dom'
import "../style/benevole.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Icon } from '@iconify/react';

const GetBenevole = () => {
  const dispatch = useDispatch()
  const [pingB, setPingB] = useState()
  // const user = useSelector((state) => state?.benevole?.benevole);
  const user = useSelector((state) => state?.user?.usera);
  console.log(user,"ping")

const alertSupp = () => {

  Swal.fire({
    icon: 'success',
    title: '!  تم حذف المتطوع بنجاح'

  })
}
  useEffect(() => {
    dispatch(userget())
  }, [pingB])
  return (
<div className='addusercontent'>
<div className="lists">
   {/* اضف مستخدم */}
       {/* <button ><Link to="/dashboard/Addevent"> </Link> <Icon icon="mdi:users-add-outline" width="30" /></button> */}

      
       {/* <div className="nubuser">
        <Link to="/dashboard/listbenevole">
<Icon  icon="typcn:arrow-back-outline" width="30" color='white' />

        </Link> */}
        
          
       
       {/* <Icon icon="fluent:calendar-week-numbers-24-regular" width="30" rotate={2} /> */}
        {/* <h1>عدد المستخدمين </h1> */}
 {/* <h1>  {user?.length-1} </h1> */}

  {/* 
       


//
       )
            
       )} 
       
       
        <Icon icon="tabler:number" width="30" /> */}
       {/* </div> */}
       
       
    </div>
    <div className='title-listes'>
      <h1>قائمة المتطوعين</h1>
    </div>
<div className='listbenevole'>

{user?.length-1 == 0 ? 
<div className='lod'>
     <h3 class="animate-charcter"> </h3>
      <div class='co'>
  <div class='loader'>
    <div class='loader--dot'></div>
    <div class='loader--dot'></div>
    <div class='loader--dot'></div>
    <div class='loader--dot'></div>
    <div class='loader--dot'></div>
    <div class='loader--dot'></div>
    <div class='loader--text'></div>
  </div>
</div> 
</div>
:
user?.map((benevole, i) =>


      <>
      {benevole?.isBenevole=== true && benevole?.isAdmin===false && benevole?.Confirme===true?(
        <div key={i} class="profile-card">

        <header>


          <a href="">
            
            <img src={benevole?.image} />
          </a>

          <div className="hetext">
            <h1>{benevole?.name}</h1>
            


            <h1>{benevole?.lastName}</h1>
          </div>


        </header>

        


        <ul class="profile-social-links btn">
        <li><Link to={`/dashboard/detaille/${benevole?._id}`}   state={benevole?._id}><button  className=" btndd">التفاصيل</button></Link></li>

          <li><button className=" btnc-userlist"
            onClick={() => {
              dispatch(userdelet(benevole?._id)
              )
              
              alertSupp(setPingB(!pingB))
            }}
          >حذف</button></li>
        <li><Link to={`/dashboard/updateBenevole/${benevole?._id}`} state={user}  pingB={pingB} setPingB={setPingB}><button className=" btna-userlist">تعديل</button></Link></li>
        

        </ul>









      </div>
      ):null}
          
          </>

        


      
)

      }
      
    
  

    </div >
    </div>
    


  )
}

export default GetBenevole



