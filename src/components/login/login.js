import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { Config } from "../../config";

import {
  MDBInput,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
// validation
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email address";
  }
  return errors;
};
// values
export default function Login() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      userType: ""
    },

    validate,
    onSubmit: async (values) => {
      console.log(values);

      const data = await fetch(`${Config.api}/login`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json" },
      });
      if (data.status === 400) {
        console.log(" ❌ Error ");

      } else {
        const result = await data.json();
        // console.log(" ✅ Success", result.token);
        localStorage.setItem("token", result.token);
        localStorage.setItem("name", result.user);

        console.log(result.user);
        navigate('/dashboard')
      }

    },
  });
  return (
    <div className="login-Forms">

      <MDBContainer className="login-Forms" >
        <div className="">
          {/* <img alt="example" className="img-fluid headerimg" src="./backgroundcut_edit (5).png" /> */}
          <form onSubmit={formik.handleSubmit}>
            <h1 className='Heading'>Login User Account</h1>

            {/* email */}
            <MDBInput
              className="mb-4"
              type="email"
              Name="email"
              label="Email address"
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            {formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}
            {/* password */}
            <MDBInput
              className="mb-4"
              type="password"
              label="Password"
              Name="password"
              onChange={formik.handleChange}
              value={formik.values.password} />

        


            {/* submit button */}
            <MDBBtn type="submit" value="Submit" className="mb-4" block>
              Sign in
            </MDBBtn>
            <div className="text-center">
              <p>
                Not a member? <Link to="/signup">Register User</Link>
              </p>

            </div>
          </form>
        </div>
      </MDBContainer>
    </div>

  );
}






// import axios from 'axios'
// import { useFormik } from 'formik'
// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { Config } from '../../config'

// const Login = () => {
//     const navigate = useNavigate()
//     const formik = useFormik({
//     initialValues : {
//       email : "",
//       password : ""
//     }, 
//     validate : (values) => {
//           let errors = {}
//           if(values.email === ""){
//               errors.email = "please Enter Your email"
//           }
//           if(values.password === ""){
//             errors.password = "please Enter your password"
//           }
//           return errors
//     },
//     onSubmit: async (values) =>{
//       try {
//         const loginData = await axios.post(`${Config.api}/login`,values);
//         if (loginData.status === 200) {
//           navigate("/Portal")
//           window.localStorage.setItem("app-token",loginData.data.token)
//         } else {
//           console.log("error");
//         }
//       } catch (error) {
//         alert(error.response.data.message)
//       }
//     }
//   })
//   return (
//     <div className="userLogin">
//     <div className="container">

//       {/* <!-- Outer Row --> */}
//       <div className="row justify-content-center">

//         <div className="col-xl-10 col-lg-12 col-md-9 my-3 w-100 ">

//           <div className="card o-hidden border-0 shadow-lg  ">
//             <div className="card-body p-0 my-5">
//               {/* <!-- Nested Row within Card Body --> */}
//               <div className="row">
//               <div className="col-lg-5  d-lg-block ">
//                     <img src="https://www.successmantra.in/assets/assestsnew/images/login-registration.png" style={{marginTop:"50px" ,marginLeft:"50px",height:"300px",width:"450px"}}e="width:100%" class="img-fluid" alt="Responsive image"></img>
//                 </div>
//                 <div className="col-lg-7">
//                   <div className="p-5">
//                     <div className="text-center">
//                       <h1 className="h4 text-gray-900 mb-4">Welcome To User Page !</h1>
//                     </div>
//                     <form className="user" onSubmit={formik.handleSubmit}>
//                       <div className="form-group my-4">
//                         <input type="email" className="form-control form-control-user"
//                         id={`${formik.errors.email ? `input-error`: ``} `}
//                           placeholder="Enter Email Address..."
//                           value={formik.values.email}
//                           onChange={formik.handleChange}
//                           name='email' />
//                           <span style={{ color: "red" }}>{formik.errors.email}</span>
//                       </div>
//                       <div className="form-group my-4">
//                         <input type="password" className="form-control form-control-user"
//                         id={`${formik.errors.password ? `input-error`:``}`}
//                           placeholder=" Enter Your Password"
//                           value={formik.values.password}
//                           onChange={formik.handleChange}
//                           name='password' /> 
//                           <span style={{ color: "red" }}>{formik.errors.password}</span>
//                       </div>
//                       <div className="form-group">
                      
//                       </div>
//                       <input  type="submit" className="btn btn-primary btn-user btn-block"  value={"Login"} disabled={!formik.isValid}/>
               
                  
//                     </form>
//                     <hr />
//                     <div className="text-center  rounded p-1 my-4">
//                       <p>
//                       <Link className="small bg-success p-2 rounded" to="/Registerui">Create an Account!</Link>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>

//       </div>

//     </div>
//   </div>
//   )
// }

// export default Login
