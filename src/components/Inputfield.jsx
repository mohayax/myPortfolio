import React from 'react'
import {ErrorMessage, useField } from 'formik'
import './ContactMe.css'
const Inputfield = ({label, ...props}) => {
    const [field, meta] = useField(props)
  return (
    <div className='mb-2'>
        <label htmlFor={field.name} style={{color: 'white'}}>{label}</label>
        <input
        style={{ color: 'white' }}
        className={`form-control shadow-none  ${meta.touched && meta.error && 'invalid'}`}
        id='field'
        {...field} {...props}
        autoComplete="off"
        />
        <ErrorMessage component="div" name={field.name} className="error"/>
    </div>
  )
}




export default Inputfield