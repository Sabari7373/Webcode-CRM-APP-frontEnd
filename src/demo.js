// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import axios from "axios";
// // import { config } from "./config";
// import {
//   MDBInput,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBCheckbox,
//   MDBBtn,
//   MDBIcon,
// } from "mdb-react-ui-kit";
// // validation

// // values
// export default function Demo() {
//   const navigate = useNavigate()
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: ""
//     },

//     onSubmit: async (values) => {
//       try {
        
        
//         navigate("/dashboard");
//       } catch (error) {
//         console.log(error);
//       }
//     },
//   });
//   return (
//     <MDBContainer className="loginform">
//       <div className="d-flex flex-wrap justify-content-center align-items-center mt-3 gap-5">
//         {/* <img alt="example" className="img-fluid headerimg" src="./crm.png" /> */}
//         <form onSubmit={formik.handleSubmit}>
//           <h1 className="p-3">Demo User Account</h1>
        
          
//           <div className="text-center">
//           <p>
//              email:admin@gmail.com
//             </p>
//             <p>
//               password:admin
//             </p>
//             <Link to="/">Login</Link>
//           </div>
//         </form>
//       </div>
//     </MDBContainer>
//   );
// }