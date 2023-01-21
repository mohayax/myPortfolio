import React, {useState} from 'react';
import './ContactMe.css';
import { Row } from 'react-bootstrap'
import * as Yup from 'yup';
import comments from '../assests/comments.png';
import Inputfield from './Inputfield'
import { ErrorMessage, Formik, Field, Form } from 'formik';
import Modal from 'react-bootstrap/Modal';


const ContactMe = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState();

  const handleClose = () => setShow(false);

  const validate = Yup.object({
  name: Yup.string()
  .max(30, "Must be 30 characters or less")
  .required("Required"),
  
  email: Yup.string()
    .email("Email is invalid")
    .required("Required"),
  
  enquiry: Yup.string()
  .required("Required"),
   
  message: Yup.string()
  .required("Required"),
    
})


  return (
    <div className='form'>
      <Formik
        initialValues={{
          name: '',
          email: '',
          enquiry: '',
          message: ''
        }}
        validationSchema={validate}
        onSubmit={async (values, {resetForm}) => {
          await new Promise((r) => setTimeout(r, 500));
          if(values.name !== '' && 
            values.enquiry !== '' &&
            values.email !== '' &&
            values.message !== ''
          ){
            setData(values)
            setShow(true);
            setTimeout(() => {
              setShow(false);
              resetForm({ values: '' })
            }, 3000);
          }
        }}
      >{() => (
          <div className="form-element" id='contact'>
            <Row>
              <h1 style={{ color: 'white' }}>Contact Me</h1>
              <div className="form-data col-md-5">
                <Form>
                  <Inputfield label="Name" name="name" type="text" />

                  <Inputfield label="Email Address" name="email" type="email" />

                  <label htmlFor="enquiry" className='mt-1 mb-1' style={{ color: 'white' }}>Type of enquiry</label>
                  <Field component='select' className="field" id='enquiry' name='enquiry'
                    style={
                      {
                        color: 'white', width: '100%', borderRadius:
                          '5px', height: '40px', background: 'transparent'
                      }}>
                    <option style={{ color: 'black' }}>remote</option>
                    <option style={{ color: 'black' }} >part time</option>
                    <option style={{ color: 'black' }} >full time</option>
                  </Field>
                  <ErrorMessage component="div" name="enquiry" className="error" />

                  <label htmlFor="message" className='mt-2' style={{ color: 'white' }}>Your Message</label>
                  <Field component='textarea' className='field'
                    style={
                      {
                        width: '100%',
                        borderRadius:
                          '7px', marginTop: '5px',
                        color: 'white'
                      }}
                    name="message"
                    rows="5" cols="30">
                  </Field>
                  <ErrorMessage component="div" name="message" className="error" />

                  <button 
                    type="submit"
                    className="btn btn-primary mt-4"
                    style={{ background: "#7F5AD5", color: 'white', width: '100%', border: "none"}}
                  >Submit</button>
                </Form>
              </div>

              <div className="col-md-7 msg">
                  <img src={comments} alt="" style={{width: "80%", height: "400px", marginLeft: "30px"}}/>
              </div>
            </Row>
          </div>
      )}
      </Formik>
      
      <div className="modal">
        <div className="alert">
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <h1>All Good!</h1>
            <div></div>
            Thank for submission {data?.name}, we'll get back to you shortly!
          
          </Modal.Body>
              
            </Modal>
            </div>
      </div>
    </div>
  )
};

export default ContactMe;
