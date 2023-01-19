import React from 'react'
import {Formik, Form} from 'formik'
import Inputfield from './Inputfield'
import './ContactMe.css'
import { Row } from 'react-bootstrap'
import { Button } from 'bootstrap'
import message from '../assests/message.png';
import comments from '../assests/comments.png';


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
            <div className="form-element" id='contact'>
              <Row>
                <h1 >Contact Me</h1>
                  <Form className='col-md-5'>
                    <Inputfield label="Name" name="name" type="text"/>
                    <Inputfield label="Email Address" name="email" type="email" />
                    <Inputfield label="Type of enquiry" name="enquiry"  />
                    <label htmlFor="enquiry" className='mt-1 mb-1'>Type of enquiry</label>
                <select id='field' name='enquiry' style={{ color: 'white', width: '100%', borderRadius: '5px', height: '40px', background: 'transparent' }}>
                  <option style={{ color: 'black' }}>remote</option>
                  <option style={{ color: 'black' }} >part time</option>
                  <option style={{ color: 'black' }} >full time</option>
                    </select>
                    <label htmlFor="message" className='mt-1'>Your Message</label>
                    <textarea style={{background: 'transparent', width: '100%', borderRadius: '7px', marginTop: '5px', border: '1px solid white'}}  name="message"
                              rows="5" cols="30">
      
                    </textarea>
                <button type="submit" className="btn btn-primary mt-2" style={{ background: "#7F5AD5", color: 'white', width: '100%', border: "none"}} >Submit</button>
                  </Form>
                  <div className="col-md-7">
                    <img src={comments} alt="" style={{width: "80%", height: "400px", marginLeft: "30px"}}/>
                  </div>
            </Row>
            </div>
           
        )}
    </Formik>
    </div>
  )
}

export default ContactMe