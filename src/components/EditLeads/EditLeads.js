
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './EditLeads.css'
import { Config } from '../../config';

function Editleads() {
    const {id} = useParams()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            fullName: "",
            date: "",
            email: "",
            phone: "",
            status: ""
     
        },
    
        onSubmit: async (values) => {
            
            try{
            let user = await axios.put(`${Config.api}/${id}`, values)
            navigate('/leads')
            }
            catch (error){
              console.log(error);
            }
           

        }
                    

    });

    useEffect(() => {
      loadUser()
    }, [])

    let loadUser = async () => {
        try {
           let user = await axios.get(`${Config.api}/viewSingleRequest/${id}`)
           formik.setValues ({
            fullName: user.data.fullName,
            date: user.data.date,
            email: user.data.email,
            phone: user.data.phone,
            status: user.data.status
         
           })
        }catch (error){
             console.log(error);
        }
    }

  return (
    <div className="container">
            <div className="edit-leads-form">
          
                                <div className="text-center">
                                    <h1 className="Heading">Status Of The Request </h1>
                                </div>
                                <form className="userEdit" onSubmit={formik.handleSubmit}>
                                    <div className="form-group row">
                                        <div className=".form-control">
                                            <label style={{ color: "black" }}>Full Name</label>
                                            <input type="text" className="form-control form-control-user" id={`${formik.errors.fullName ? `input-error` :``}`}
                                                placeholder="Name" value={formik.values.fullName} onChange={formik.handleChange} name="fullName" />
                                            <span style={{ color: "red" }}>{formik.errors.fullName}</span>
                                        </div>
                                        <div className=".form-control">
                                            <lable style={{ color: "black" }}>Date</lable>
                                            <input type="date" className="form-control form-control-user" id={`${formik.errors.date ? `input-error` :``}`}
                                                placeholder="date" value={formik.values.date} onChange={formik.handleChange} name="date" />
                                            <span style={{ color: "red" }}>{formik.errors.date}</span>
                                        </div>
                                    </div>
                                    <div className=".form-control">
                                        <div className=".form-control">
                                            <lable style={{ color: "black" }}>Email</lable>
                                            <input type="text" className="form-control form-control-user" id={`${formik.errors.email ? `input-error` :``}`}
                                                placeholder="email" value={formik.values.email} onChange={formik.handleChange} name="email" />
                                            <span style={{ color: "red" }}>{formik.errors.email}</span>
                                        </div>
                                        <div className=".form-control">
                                            <lable style={{ color: "black" }}>Phone Number</lable>
                                            <input type="telephone" className="form-control form-control-user" id={`${formik.errors.phone ? `input-error` :``}`}
                                                placeholder="phone" value={formik.values.phone} onChange={formik.handleChange} name="phone" />
                                            <span style={{ color: "red" }}>{formik.errors.phone}</span>
                                        </div>
                                    </div>
                                    <div className=".form-control">
                                        <div className=".form-control">
                                            <lable style={{ color: "black" }}>Leads Status</lable>
                                            <input type="text" className="form-control form-control-user" id={`${formik.errors.status ? `input-error` :``}`}
                                                placeholder="status" value={formik.values.status} onChange={formik.handleChange} name="status" />
                                            <span style={{ color: "red" }}>{formik.errors.status}</span>
                                        </div>
                                       
                                    </div>
                                    {/* <div className='bg-dark ms-2'>
                                    <a type="submit" className='btn-block text-white p-1 mt-1 btn-danger' href="/dashboard" > Back </a>

                                    </div> */}
                                    {/* for users the update button is desabbled  */}
                                    {/* <input className="btn btn-primary btn-user btn-block" type={"submit"} value="Update" disabled={!formik.isValid} /> */}
                                
                                </form>
                            </div>
                        </div>
                   
  )
}
export default Editleads


// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// function EditLeads (){
//   const {id} = useParams()

//   const [fullName , setFullName] = useState()
//   const [date , setDate] = useState()
//   const [email , setEmail] = useState()
//   const [phone , setPhone] = useState()
//   const [status , setStatus] = useState()
//   const navigate = useNavigate()
  

// useEffect(()=>{
//   axios.get('http://localhost:3001/viewServiceRequests/'+id)
//   .then(result => {
//     console.log(result)
//     setFullName(result.data.fullName)
//     setDate(result.data.date)
//     setEmail(result.data.email)
//     setPhone(result.data.phone)
//     setStatus(result.data.status)
//   }
//     )
//   .catch(err => console.log(err))
// },[])

// const Update = (e) =>{
//   e.preventDefault()
//   axios.put("http://localhost:3001/editleads/"+id , {fullName , date , email , phone , status})
//   .then(result =>{
//     console.log(result);
//     navigate('/leads')
//   })
//   .catch(err => console.log(err))
// }

//   return(
//     <div className="d-flex vh=100 bg-primary justify-content-center align-items-center">
//       <div className="w-50 bg-white rounded p-3">
//          <form onSubmit={Update}>
//               <h2> Edit Leads</h2>
//               <div className="mb-2">
//                   <label htmlFor="fullName">Full Name</label>     
//                   <input type="text" placeholder="Enter the Full Name" className="form-control"
//                   value={fullName} onchange={(e)=>setFullName(e.target.value)}/>        
//               </div>
//               <div className="mb-2">
//                   <label htmlFor="date">Date</label>     
//                   <input type="date" placeholder="Select the Date" className="form-control"
//                   value={date} onchange={(e)=>setDate(e.target.value)}/>        
//               </div>
//               <div className="mb-2">
//                   <label htmlFor="email">Email</label>     
//                   <input type="text" placeholder="Enter the Email" className="form-control"
//                   value={email} onchange={(e)=>setEmail(e.target.value)}/>        
//               </div>
//               <div className="mb-2">
//                   <label htmlFor="phone">Phone Number</label>     
//                   <input type="telephone" placeholder="Enter the Phone Number" className="form-control"
//                   value={phone} onchange={(e)=>setPhone(e.target.value)}/>        
//               </div>
//               <div className="mb-2">
//                   <label htmlFor="status">Status</label>     
//                   <input type="text" placeholder="Select the Status" className="form-control"
//                   value={status} onchange={(e)=>setStatus(e.target.value)}/>        
//               </div>
//               <button type="submit">Update</button>
//          </form>        
//       </div>
//     </div>
//   )
// }

// export default EditLeads
