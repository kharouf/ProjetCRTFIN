import React, { useState } from 'react' 


import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { addfamillesP } from '../../JS/familles/familles'

const AddFP = () => {

  const [Addfp, setAdd] = useState({
    nom:"",
    prenom:"",
    
  })

const dispatch = useDispatch()
  return (
    <div className="updateuser1" >
    <form onSubmit={(e)=> e.preventDefault()} className="form-signin11 form-signin">
        <h2 className="form-signin-heading"> أضف عائلة</h2>
        <div className="fff">
        

          
           <input onChange={(e)=> setAdd({...Addfp,prenom:e.target.value}) } type="text" className="form-control"  placeholder="اللقب "  />
           <input onChange={(e)=> setAdd({...Addfp,nom:e.target.value}) } type="text" className="form-control"  placeholder=" الاسم "   />
        </div>
       
        
        
       
      
       

  
        <button className="btn-primary" onClick={()=> dispatch(addfamillesP(Addfp))}>أضف</button>


        
    </form>
    
    </div>
  )
}

export default AddFP