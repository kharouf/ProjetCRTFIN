import { createAsyncThunk, createSlice } from '@reduxjs/toolkit' 
import axios from 'axios'

// function register
export const userRegister = createAsyncThunk("user/register", async (user) => {
    try {
        let response = await axios.post(
            "http://localhost:5000/user/register", user)
        return await response
    } catch (error) {
        console.log(error)
    }
}
)
// function useradd
export const useradd = createAsyncThunk("user/register", async (user) => {
    try {
        let response = await axios.post(
            "http://localhost:5000/user/register", user)
        return await response
    } catch (error) {
        console.log(error)
    }
}
)
// login
export const userLogin = createAsyncThunk("user/login", async (userLogin) => {
    try {
        let response = await axios.post(
            "http://localhost:5000/user/login", userLogin)
        return await response
    } catch (error) {
        console.log(error)
    }
}
)

// curent

export const userCurrent = createAsyncThunk("user/current", async () => {
    try {
        let response = await axios.get(
            "http://localhost:5000/user/current",{headers: {Authorization: localStorage.getItem("token")}})
        return await response.data
    } catch (error) {
        console.log(error)
    }
}
)
// user get
export const userget=createAsyncThunk("user/get",async()=>{
    try {
       let result= axios.get("http://localhost:5000/user/get")
       return result;
    } catch (error) {
        console.log(error)
    }
})


// delete user

export const userdelet = createAsyncThunk("user/delet", async (id) => {
    try {
        let response = await axios.delete(
            `http://localhost:5000/user/${id}`)
        return await response
    } catch (error) {
        console.log(error)
    }
}
)
// update
export const userupdate=createAsyncThunk('user/updt',async ({id,user}) => {
    try {
      let result= axios.put(`http://localhost:5000/user/${id}`,user);
    
      return result
      
    } catch (error) {
      console.log(error)
    }
  })



const initialState = {
 user:null,
 usera:null,
 status:null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // logout
    logout: (state, action) => {
        state.user = null;
        localStorage.removeItem("token");
    }
  },

//   extraReducers
  extraReducers:{
    [userRegister.pending]: (state) => {
        state.status = 'loading'
        
    },

    [userRegister.fulfilled]: (state, action) => {
        state.status = 'Success'
       
        //  state.user heya  user: null, 
         
        state.user = action.payload.data.newUserToken;
        localStorage.setItem("token", action.payload.data?.token)
        

    },
    [userRegister.rejected]: (state) => {
        state.status = 'failed'


    },
// useradd
[useradd.pending]: (state) => {
    state.status = 'loading'
    
},

[useradd.fulfilled]: (state, action) => {
    state.status = 'Success'
   
    //  state.user heya  user: null, 
     
    state.usera = action.payload.data.newUserToken;
    // localStorage.setItem("token", action.payload.data?.token)
    

},
[useradd.rejected]: (state) => {
    state.status = 'failed'


},


    // login
    [userLogin.pending]: (state) => {
        state.status = 'loading'
        
    },

    [userLogin.fulfilled]: (state, action) => {
        state.status = 'Success'
       
        //  state.user heya  user: null, 
         
        state.user = action.payload.data?.userLogin;
        localStorage.setItem("token", action.payload.data?.token)
        

    },
    [userLogin.rejected]: (state) => {
        state.status = 'failed'


    },

       // Current
       [userCurrent.pending]: (state) => {
        state.status = 'loading'
        
    },

    [userCurrent.fulfilled]: (state, action) => {
        state.status = 'Success'
       
        //  state.user heya  user: null, 
         
        state.user = action.payload?.user;
        

    },
    [userCurrent.rejected]: (state) => {
        state.status = 'failed'


    },

    // delet

    [userdelet.pending]: (state) => {
        state.status = 'loading'
        
    },

    [userdelet.fulfilled]: (state) => {
        state.status = 'Success'
       
        

    },
    [userdelet.rejected]: (state) => {
        state.status = 'failed'


    },
// update
    [userupdate.fulfilled]: (state) => {state.status="successe"},
    [userupdate.rejected]: (state) => {state.status="failed"},
    [userupdate.pending]: (state) => {state.status="pending"},
    // get user
    [userget.pending]: (state) => {state.status="pending"},
    [userget.fulfilled]: (state,action) => {
    state.status="successe" ;
    state.usera = action.payload?.data.user;},
    [userget.rejected]: (state,) => {state.status="failed"},
    
  },
})

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions

export default userSlice.reducer