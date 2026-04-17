import React from 'react'
import { useForm } from 'react-hook-form'

const UseRHF = () => {

  let {register,handleSubmit,reset,formState:{errors}} = useForm({
        mode:'onChange'
    })


  return {
    register,handleSubmit,reset,errors
  }
}

export default UseRHF
