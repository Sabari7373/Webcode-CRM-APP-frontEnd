import React from "react";
import "../signup/signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import Swal from 'sweetalert2';
import { Config } from "../../config";
import './servicereq.css';
import {
    MDBInput,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
} from "mdb-react-ui-kit";

const validate = values => {
    const errors = {};
    if (!values.fullName) {
        errors.fullName = 'Required';
    } else if (values.fullName.length > 15) {
        errors.fullName = 'Must be 15 Characters or less';
    } else if (values.fullName.length < 4) {
        errors.fullName = 'Must Be Atleast 4 Characters';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid Email Address';
    }

    return errors;
};

export default function ServicereqNEW() {
    let navigation = useNavigate();
    const formik = useFormik({
        initialValues: {
            fullName: "",
            date: "",
            email: "",
            phone: "",
            status: ""
        },
        validate,
        onSubmit: async (values) => {
            try {
                await axios.post(`${Config.api}/servicereq`, values);
                Swal.fire({
                    title: "Success!",
                    text: "You Have Create a New Request!",
                    icon: "success"
                  });
            } catch (error) {
                console.error("There was an error submitting the form!", error);
            }
        },
    });

    return (
        <div className="serviceForms">
            <MDBContainer className="serviceForms">
                <div className="d-flex flex-wrap justify-content-center align-items-center mt-3 gap-5">
                    <form onSubmit={formik.handleSubmit}>
                        <h1 className='Heading'>Service Request</h1>
                        <MDBRow className="mb-4">
                            <MDBCol>
                                <MDBInput
                                    id="fullName"
                                    name="fullName"
                                    label="Full Name"
                                    onChange={formik.handleChange}
                                    value={formik.values.fullName}
                                />{formik.errors.fullName ? <div style={{ color: "red" }}>{formik.errors.fullName}</div> : null}
                            </MDBCol>
                            <MDBCol>
                                <MDBInput
                                    type="date"
                                    id="date"
                                    name="date"
                                    label="Date"
                                    onChange={formik.handleChange}
                                    value={formik.values.date}
                                />{formik.errors.date ? <div style={{ color: "red" }}>{formik.errors.date}</div> : null}
                            </MDBCol>
                        </MDBRow>
                        <MDBInput
                            id="email"
                            name="email"
                            className="mb-4"
                            type="email"
                            label="Email address"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.errors.email ? <div style={{ color: "red" }}> {formik.errors.email}</div> : null}
                        
                        <MDBInput
                            id="phone"
                            name="phone"
                            className="mb-4"
                            type="tel"
                            label="Phone Number"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />
                        {formik.errors.phone ? <div style={{ color: "red" }}>{formik.errors.phone}</div> : null}
                        
                        <label htmlFor="status" style={{ textAlign: "center", display: "block" }}>Create a Service Request</label>
                        <select
                            name="status"
                            id="status"
                            style={{ width: "250px", textAlign: "center", margin: "10px" }}
                            onChange={formik.handleChange}
                            value={formik.values.status}
                        >
                            <option value="create">Create</option>
                            <option value="open" >Open</option>
                            <option value="inProgress">In Progress</option>
                            <option value="released" disabled>Released</option>
                            <option value="cancelled" disabled>Cancelled</option>
                            <option value="completed" disabled>Completed</option>
                        </select>

                        <MDBBtn
                            type="submit"
                            className="mb-4 mt-2"
                            block
                        >
                            Request
                        </MDBBtn>

                        {/* <Link to="/dashboard">
                            <MDBBtn className="mb-4 mt-2 btn-danger">Back To Dashboard</MDBBtn>
                        </Link> */}
                    </form>
                </div>
            </MDBContainer>
        </div>
    );
}
