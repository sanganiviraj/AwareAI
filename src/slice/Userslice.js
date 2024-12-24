import { createSlice } from "@reduxjs/toolkit";

const Userslice = createSlice({
    name:"user",
    initialState:{
      user:[],  
    },  
    reducers:{
        adduser:(state,action)=>{
            state.user.push(action.payload);
        },
        updateuser:(state,action)=>{
            state.user[action.payload.index] = action.payload.data;
        },
        deleteuser:(state,action) =>{
            state.user.splice(action.payload,1)
        }
    }
})

export const {adduser,updateuser,deleteuser} = Userslice.actions;
export default Userslice.reducer;