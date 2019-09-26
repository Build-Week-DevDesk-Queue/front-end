import React from 'react';
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";




export default function Login(props) {
  const {loginValues} = props;

  const onSubmit = (formValues, actions) => {
      const userToPost = {
          username: formValues.username,
          password: formValues.password,
          userType: formValues.userType,
      }

      console.log(userToPost); // In lieu of an axios.post...      
      props.history.push("../student-dashboard/");
  };

  const validationSchema = yup.object().shape({
      username: yup.string()
          .test(
              "username",
              "Please enter a username at least 8 characters long.",
              value => value !== undefined && value.length > 8,
          ),
      password: yup.string()
          .test(
              "password",
              "Please enter a password at least 8 characters long.",
              value => value !== undefined && value.length > 8,
          ),
      userType: yup.string().required("Please choose a user type."),
  });

  return (
      <>
          <Link to="/">Homepage</Link>
          <div className="login-form">
              <Formik 
                  initialValues={loginValues}
                  onSubmit={onSubmit}
                  validationSchema={validationSchema}
                  render={props => {
                      return (
                          <Form>
                              <div className="form-title">
                                  <h2>Login</h2>
                              </div>
                              <div className="field">
                                  <Field name="username" type="text" placeholder=" Username" />
                                  <ErrorMessage name="username" component="p" />
                              </div>
                              <div className="field">
                                  <Field name="password" type="password" placeholder=" Password" />
                                  <ErrorMessage name="password" component="p" />
                              </div>
                              <div className="field">
                                  <div className="radio">
                                      <span>Student</span>
                                      <Field name="userType" type="radio" value="student" />
                                  </div>
                                  <div className="radio">
                                      <span>Helper</span>
                                      <Field name="userType" type="radio" value="helper" />
                                  </div>
                                  <ErrorMessage name="userType" component="p" />
                              </div>
                              <div className="submit-button">
                                  <button type="submit">Login</button>
                              </div>
                          </Form>
                      )
                  }}
              />
          </div>
      </>
  )
}