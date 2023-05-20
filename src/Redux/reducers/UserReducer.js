import {createSlice} from '@reduxjs/toolkit';

const userReducer=createSlice({
    name:'userSlice',
    initialState:{
        users:[],
        userName:{},
        isLogged:false
    },
    reducers:{
        addUser:(state,action)=>{
            state.users=[...state.users,action.payload]
        },
        userLogin:(state,action)=>{
            state.userName=action.payload;
            state.isLogged=true;
        },
        userLogout:(state,action)=>{
            state.userName=null;
            state.isLogged=false;
        }
       
    }
})
export const{addUser,userLogin,userLogout}=userReducer.actions;
export default userReducer.reducer;