import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Config, env } from './config'

const Adminlogin = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues : {
          email : "",
          password : ""
        }, 
        validate : (values) => {
              let errors = {}
              if(values.email === ""){
                  errors.email = "please Enter Your email"
              }
              if(values.password === ""){
                errors.password = "please Enter your password"
              }
              return errors
        },
        onSubmit: async (values) =>{
          try {
            const loginData = await axios.post(`${Config.api}/adminlogin`,values);
            if (loginData.status === 200) {
              navigate("/AdminPortal")
              window.localStorage.setItem("app-token",loginData.data.token)
            } else {
              
            }
          } catch (error) {
            alert(error.response.data.message)
          }
        }
      })
  return (
    <div className="userLogin">
    <div className="adminContainer ">

      {/* <!-- Outer Row --> */}
      <div className="row justify-content-center  ">

        <div className="col-xl-12 col-lg-12 col-md-9 my-5">

          <div className="card o-hidden border-0 shadow-lg my-5 ">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">

              <div className="col-lg-5  d-lg-block ">
                    <img src="https://www.successmantra.in/assets/assestsnew/images/login-registration.png" style={{marginTop:"50px" ,marginLeft:"50px",height:"350px",width:"450px"}}e="width:100%" class="img-fluid" alt="Responsive image"></img>
                </div>                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome To Admin Page </h1>
                    </div>
                    <form className="user" onSubmit={formik.handleSubmit}>
                      <div className="form-group p-1">
                        <input type="email" className="form-control form-control-user"
                        id={`${formik.errors.email ? `input-error`: ``} `}
                          placeholder="Enter Email Address..."
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          name='email' />
                          <span style={{ color: "red" }}>{formik.errors.email}</span>
                      </div>
                      <div className="form-group p-1">
                        <input type="password" className="form-control form-control-user"
                        id={`${formik.errors.password ? `input-error`:``}`}
                          placeholder=" Enter Your Password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          name='password' /> 
                          <span style={{ color: "red" }}>{formik.errors.password}</span>
                      </div>
                      <div className="form-group">

                      </div>
                      <input  type="submit" className="btn btn-primary btn-user btn-block p-2 my-3"  value={"Login"} disabled={!formik.isValid}/>
                      <hr />
                
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link className="small" to="/CreateAdminRegister">Create an Account!</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Adminlogin;




