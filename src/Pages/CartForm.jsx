import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../Components/CartForm/CartForm.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { clearCart } from '../Components/Cart/action'

const CartForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const isFormValid = Object.keys(validate(values)).length === 0;
  
    if (isFormValid) {
      navigate('/success');   
      resetForm();
      dispatch(clearCart());
    }
  
    setSubmitting(false);
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    age: '',
  };

  const validate = (values) => {
    const errors = {};

    
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 20) {
      errors.firstName = 'Name cannot be longer than 20 characters';
    } else if (!/^[a-zA-Z\-']*$/u.test(values.firstName)) {
      errors.firstName = 'Only letters, hyphens, and apostrophes allowed';
    }

    
    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Name cannot be longer than 20 characters';
    } else if (!/^[a-zA-Z\-']*$/u.test(values.lastName)) {
      errors.lastName = 'Only letters, hyphens, and apostrophes allowed';
    }

    
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    

    
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Required';
    } else if (!/^(\+?380)?\d{9}$/.test(values.phoneNumber)) {
      errors.phoneNumber = 'Phone number must start with +380';
    }
    

    
    if (!values.age) {
      errors.age = 'Required';
    } else if (values.age < 18) {
      errors.age = 'You must be at least 18 year old';
    } else if (values.age > 150) {
      errors.age = 'Age cannot exceed 150 years';
    }

    return errors;
  };

  const ErrorMessageComponent = ({ children }) => (
    <div className="error-message">{children}</div>
  );

  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="fields">
              <div className="field">
                <label htmlFor="firstName">First Name:</label>
              </div>
              <div className="field">
                <Field
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  name="firstName"
                />
                <ErrorMessage name="firstName" component={ErrorMessageComponent} />
              </div>

              <div className="field">
                <label htmlFor="lastName">Last Name:</label>
              </div>
              <div className="field">
                <Field
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  name="lastName"
                />
                <ErrorMessage name="lastName" component={ErrorMessageComponent} />
              </div>

              <div className="field">
                <label htmlFor="email">Email:</label>
              </div>
              <div className="field">
                <Field
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                />
                <ErrorMessage name="email" component={ErrorMessageComponent} />
              </div>

              <div className="field">
                <label htmlFor="phoneNumber">Phone Number:</label>
              </div>
              <div className="field">
                <Field
                  type="text"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  name="phoneNumber"
                />
                <ErrorMessage name="phoneNumber" component={ErrorMessageComponent} />
              </div>

              <div className="field">
                <label htmlFor="age">Age:</label>
              </div>
              <div className="field">
                <Field
                  type="number"
                  id="age"
                  placeholder="Age"
                  name="age"
                />
                <ErrorMessage name="age" component={ErrorMessageComponent} />
              </div>

              <button
              className="submit"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
            
            </div>
          </Form>
        )}
      </Formik>
      <Link to="/cart">
      <button className='go-back'>Go back</button>
    </Link>
    </div>
  );
};

export default CartForm;
