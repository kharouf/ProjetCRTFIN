import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userdelet,userget } from "../../JS/userSlice/userSlice";
import UserList from './UserList';

const DeletUser = () => {

  const dispatch = useDispatch()
  useEffect(() => {
dispatch(userdelet())

  }, []);
  const user = useSelector(state => state.user.user)
	
  return (
    <div>
      
    </div>
  )
}

export default DeletUser