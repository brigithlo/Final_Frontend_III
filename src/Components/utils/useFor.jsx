import React, { useState } from 'react'

const useForm = (type, placeholder) => {
    const [value, setValue] = useState("");
    const onChange =(e)=>{
        setValue(e.target.value)
    }
    const className = "formInput"; 
  return {
    className,
    value,
    onChange,
    placeholder,
    type
  }
}

export default useForm