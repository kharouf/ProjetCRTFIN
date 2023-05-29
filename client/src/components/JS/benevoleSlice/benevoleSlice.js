// 

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// function add benevole
export const addBenevole = createAsyncThunk("benevole/add", async (benevole) => {
    try {
        let response = await axios.post(
            "http://localhost:5000/benevole/add", benevole, { headers: { Authorization: localStorage.getItem("token") } })
        return await response
    } catch (error) {
        console.log(error)
    }
}
)
// function add benevole
export const addBenevoleuser = createAsyncThunk("benevole/add", async (benevole) => {
    try {
        let response = await axios.post(
            "http://localhost:5000/benevole/add", benevole, { headers: { Authorization: localStorage.getItem("token") } })
        return await response
    } catch (error) {
        console.log(error)
    }
}
)
// update benevole
export const updateBen = createAsyncThunk('benevole/updt', async (params) => {
    try {
        let response = await axios.put
            (`http://localhost:5000/benevole/${params.id}`, params.benevole);
        console.log(response)
        return await response

    } catch (error) {
        console.log(error)
    }
})
// get benevole


export const benevoleget = createAsyncThunk("benevole/get", async () => {
    try {
        let result = await axios.get("http://localhost:5000/benevole/get")
        return await result;
    } catch (error) {
        console.log(error)
    }
})


// get benevole


export const benevolegetb = createAsyncThunk("benevole/getb", async () => {
    try {
        let result = await axios.get("http://localhost:5000/benevole/getb")
        return await result;
    } catch (error) {
        console.log(error)
    }
})
// delete benevole

export const benevoledelet = createAsyncThunk("benevole/delet", async (id) => {
    try {
        let response = await axios.delete(
            `http://localhost:5000/benevole/${id}`)
        return await response
    } catch (error) {
        console.log(error)
    }
}
)

const initialState = {
    benevole: null,
    benevoleuser:null,
    status: null,
}


export const benevoleSlice = createSlice({
    name: 'benevole',
    initialState,
    reducers: {

    },
    extraReducers: {
        [addBenevole.pending]: (state) => {
            state.status = 'loading'

        },

        [addBenevole.fulfilled]: (state, action) => {
            state.status = 'Success'

            state.benevole = action.payload?.data?.benevole;
        },
        [addBenevole.rejected]: (state) => {
            state.status = 'failed'
        },

        // add benevole
        [addBenevoleuser.pending]: (state) => {
            state.status = 'loading'

        },

        [addBenevoleuser.fulfilled]: (state, action) => {
            state.status = 'Success'

            state.benevoleuser = action.payload?.data?.newUserToken;
        },
        [addBenevoleuser.rejected]: (state) => {
            state.status = 'failed'
        },
        // update benevole

        [updateBen.fulfilled]: (state) => { state.status = "successe" },
        [updateBen.rejected]: (state) => { state.status = "failed" },
        [updateBen.pending]: (state) => { state.status = "pending" },


        // get benevole
        [benevoleget.pending]: (state) => { state.status = "pending" },
        [benevoleget.fulfilled]: (state, action) => {
            state.status = "successe";
            state.benevole = action.payload?.data?.benevole;
        },
        [benevoleget.rejected]: (state,) => { state.status = "failed" },


        // get benevole
        [benevolegetb.pending]: (state) => { state.status = "pending" },
        [benevolegetb.fulfilled]: (state, action) => {
            state.status = "successe";
            state.benevoleuser = action.payload?.data?.benevoleuser;
        },
        [benevolegetb.rejected]: (state,) => { state.status = "failed" },



        // delete benevole
        [benevoledelet.pending]: (state) => {
            state.status = 'loading'

        },

        [benevoledelet.fulfilled]: (state) => {
            state.status = 'Success'



        },
        [benevoledelet.rejected]: (state) => {
            state.status = 'failed'


        },
    }
})

// Action creators are generated for each case reducer function
// export const { logout } = userSlice.actions

export default benevoleSlice.reducer
