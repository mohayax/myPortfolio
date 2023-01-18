import React from 'react'
import {Formik, Form} from 'formik'
import Inputfield from './Inputfield'
import './ContactMe.css'
const ContactMe = () => {
  return (
    <div className="form">
    <Formik
    initialValues={{
        name: '',
        email: '',
        enquiry: '',
        message: ''
    }}
    
    >
        {formik => (
            <div className="form-element">
                <h1>Contact Me</h1>
                  <Form>
                    <Inputfield label="Name" name="name" type="text"/>
                    <Inputfield label="Email Address" name="email" type="email" />
                    <Inputfield label="Type of enquiry" name="enquiry"  />
                    <select id='field' style={{color: 'white', width:'80vw', borderRadius:'5px', height:'40px',}}>
                              <option style={{background: 'purple'}}>remote</option>
                              <option>part time</option>
                              <option>full time</option>
                    </select>
                          <textarea style={{background: 'purple', width: '80vw', borderRadius: '7px', marginTop: '5px'}} id="story" name="story"
                              rows="5" cols="30">
                              
                          </textarea>
                    <Inputfield label="Your message" name="message" type="textarea" />
                  </Form>
            </div>
           
        )}
    </Formik>
    </div>
  )
}

export default ContactMe