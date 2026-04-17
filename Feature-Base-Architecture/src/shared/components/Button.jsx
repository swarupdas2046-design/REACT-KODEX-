import React from 'react'

const Button = ({text}) => {
  return (
      <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 py-3 px-4 rounded-lg shadow-sm text-sm font-semibold text-white bg-[#0f4ed0] hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0f4ed0] transition-colors mt-6"
          >
            {text}
          </button>
  )
}

export default Button
