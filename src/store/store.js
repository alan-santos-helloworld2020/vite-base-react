import { configureStore } from "@reduxjs/toolkit";
import cartSlice  from "./action";


export default configureStore({
    reducer:{
        cart:cartSlice
    }
})