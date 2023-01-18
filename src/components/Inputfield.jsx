import React from 'react'
import { useField } from 'formik'
import './ContactMe.css'
const Inputfield = ({label, ...props}) => {
    const [field, meta] = useField(props)
  return (
    <div className='mb-2'>
        <label htmlFor={field.name}>{label}</label>
        <input
        className='form-control shadow-none'
        id='field'
        {...field} {...props}
        autoComplete="off"
        />
    </div>
  )
}

export default Inputfield