import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify'
export let ProductContext = createContext()
const Cartcontext = ({children}) => {
   const [cart, setCart] = useState([])

 let AddtoCart = (product)=>{
        setCart((prev)=> [...prev , {...product,qnty:1}])
        toast.success("Item added to cart 🛒")
    }

    let IncrementLogic = (id)=>{
        let product = cart.find((elem)=> elem.id==id)
        product.qnty +=1
        setCart([...cart])
    }

     let DecrementLogic = (id)=>{
         let product = cart.find((elem)=> elem.id==id)
        if (product.qnty>1) {
            product.qnty -=1
            setCart([...cart])
        }else{
            let UpdateCart = cart.filter((elem)=> elem.id !== id)
            setCart(UpdateCart)
        }
    }


  return (
        <ProductContext.Provider value={{cart, setCart,AddtoCart,IncrementLogic,DecrementLogic}}>
            {children}
        </ProductContext.Provider>
  )
}

export default Cartcontext
