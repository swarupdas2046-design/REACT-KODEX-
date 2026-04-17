import React from 'react'
import { UseAuthContext } from '../../../shared/hooks/UseAuthContext'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router'
import {nanoid} from 'nanoid'
import { LocalStore } from '../../../utils/LocalStorage'
const UseAuth = () => {
let {registerAdmins, setRegisterAdmins,setLoggedAdmins} = UseAuthContext()

let navigate = useNavigate();
    let {register,handleSubmit,reset,formState:{errors}} = useForm({
        mode:'onChange'
    })


let HandleRegisterFormSubmit = (data)=>{
    let RegisterData = [...(registerAdmins || [] ), {...data, id:nanoid() }]
        setRegisterAdmins(RegisterData)
        LocalStore.set('reg-admins',RegisterData)
        console.log(data);
        reset()
    }


    let HandleLoginFormSubmit = (data)=>{
    let ActualUser = registerAdmins.find((elem)=> elem.email==data.email && elem.password == data.password )
        // console.log(data);
        if (!ActualUser) {
        reset()
        alert('Logged in failed')
        return
        }
        setLoggedAdmins(ActualUser)
        LocalStore.set('log-admins',ActualUser)
        reset()
    }

return {
    navigate,HandleLoginFormSubmit,HandleRegisterFormSubmit,register,handleSubmit,errors,registerAdmins, setRegisterAdmins,setLoggedAdmins
}


}

export default UseAuth
