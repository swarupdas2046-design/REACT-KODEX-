import { createSlice } from "@reduxjs/toolkit";

let CartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems : [],
        Theme : false,
    },
    reducers:{
        AddToCart : (state,action)=>{
            let isExist = state.cartItems.find((item)=>item.id === action.payload.id)
            if(isExist){
                isExist.quantity += 1
            }else{
                state.cartItems.push({...action.payload , quantity : 1})
            }
        },
        DecrementQuantity : (state,action)=>{
            let {id} = action.payload
            let item = state.cartItems.find((item)=>item.id === id)
            
            if (item.quantity > 1) {
                item.quantity -= 1
            }else{
            state.cartItems = state.cartItems.filter((elem)=> elem.id !== id)
            // console.log('This log fromm cartSlice',state.cartItems);
            }
            
        },
        RemoveCart : (state,action)=>{
            let {id} = action.payload
            state.cartItems = state.cartItems.filter((elem)=>elem.id !== id)

        },
        themeChange : (state,action)=>{
            state.Theme = action.payload
            console.log(state.Theme);
            
        }
    }
})

export let {AddToCart,RemoveCart,DecrementQuantity,themeChange} = CartSlice.actions
export default CartSlice.reducer 