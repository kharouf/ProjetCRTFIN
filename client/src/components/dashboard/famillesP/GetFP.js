import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletfamillesP, getfamillesP } from '../../JS/familles/familles'
import { Link } from 'react-router-dom';
import Carousel from 'react-grid-carousel';
import gofa from "../../../assets/images/gofa.jpg";
import '../../../scss/event.css'

const GetFP = () => {
    const dispatch = useDispatch()
  const [pingF, setPingF] = useState()
  useEffect(() => {
    dispatch(getfamillesP())
  }, [pingF])
  const famillesp = useSelector((state) => state.familles?.familles);
  console.log(famillesp)
  return (
    <div className='listuser'>
    <table className="table">
      <tr>
        <td className="td">جذف</td>
        <td className="td">تعديل</td>
        {/* <td className="td">الصورة</td> */}
        
        <td className="td">اللقب</td>
        <td className="td">الاسم</td>
       

      </tr>
    </table>




    <div className="user" >
      <table className="table" >
        {famillesp?.map((F, i) =>
          <tr key={i}>
            <td className="td"><button className=" btnc-userlist"
              onClick={() => {


                dispatch(deletfamillesP(F?._id))
                // alertSupp(setPing1(!ping1))

                // Navigate("/dashboard/listuser")
              }}
              >جذف


            </button></td>
            <td className="td ">
                <Link to={`/dashboard/UpdatetFP/${F?._id}`}  state={famillesp}>
                    <button className=" btna-userlist">تعديل</button></Link></td>

            {/* <td className="td"><img src="" alt="profile" /></td> */}

            <td className="td">{F?.nom}</td>

            <td className="td">{F?.prenom}</td>
          </tr>
        )}
      </table>
    </div>


  </div>
  )
}

export default GetFP