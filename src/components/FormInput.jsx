import React, { useState } from 'react'

const FormInput = ({ label, onChange, errorMessage, ...inputAttr }) => {
  const [blur, setBlur] = useState(false)

  const onBlur = (e) => setBlur(true)

  return (
    <div className="mb-6 mt-6">
      <label className="block mb-2 text-base font-medium text-white">{label}</label>
      <input 
        className="bg-black border border-secondary-dark text-secondary-dark text-sm rounded-lg focus:border-primary block w-full p-3"
        {...inputAttr}
        onChange={onChange}
        onBlur={onBlur}
        focused={blur.toString()}
        />
      <span className="input-error text-xs lg:text-sm">{errorMessage}</span>
    </div>
  )
}

export default FormInput