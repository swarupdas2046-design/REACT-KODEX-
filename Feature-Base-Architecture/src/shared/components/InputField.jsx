import React from 'react'
import { Mail } from 'lucide-react'
const InputField = ({label,register,Name,rules,error,...props}) => {
  return (
     <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">{label}</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 text-slate-400" />
              </div>
              <input
                {...props}
                {...register(Name,rules)}
                // type="email"
                className="block w-full pl-10 pr-3 py-3 bg-slate-50/50 border border-transparent rounded-lg text-sm text-slate-900 focus:bg-white focus:border-[#0f4ed0] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400 outline-none"
                // placeholder="admin@architect.com"
              />
              {error && <span className='text-red-500 text-[10px]'>{error.message}</span>}
            </div>
          </div>
  )
}

export default InputField
