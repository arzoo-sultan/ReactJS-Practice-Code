import { createSlice } from "@reduxjs/toolkit";
const initialState={
    theme:"white"
}
 const ToggleTheme=createSlice({
    name:"themeToggler",
    initialState,
    reducers:({
        changeTheme:(state)=>{
      state.theme=state.theme==="white"?"black":"white"
      
        }
        
    }
    )
 })
 export const {changeTheme}=ToggleTheme.actions;
 export default ToggleTheme.reducer;
