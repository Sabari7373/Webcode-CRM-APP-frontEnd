import React from "react";
import "./dahboard.css";
import { Link } from "react-router-dom";
import { useState } from "react";
// import LogOut from "../../Logout";

import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
} from "mdb-react-ui-kit";
import ChartApp from "./chart";

export default function Dashboard() {
  const user = localStorage.getItem("name");
  const logOut = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("name");

    console.log('Logouted...');
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <>
      <MDBNavbar fixed="top" expand="lg" className="navBars" >
        <MDBContainer fluid>
          <Link to="/">
            <MDBNavbarBrand color="dark">Navbar</MDBNavbarBrand>
          </Link>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}>
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">

              {/* sidebar */}
              <div className="sidebar position-absolute top-0 start-0">
                <Link to="/dashboard">
                  <MDBNavbarBrand id="title" className="p-3" color="dark">
                    Customer Details
                  </MDBNavbarBrand>
                </Link>
                <div className="sidebutton p-3 gap-3">
                  <Link to="/dashboard">
                    <MDBBtn className="sidebtn">
                      <i class="fa-solid fa-chart-line"></i> Dashboard
                    </MDBBtn>
                  </Link>

                  {user ? (
                    <>
                      <div className=" sidebutton">
                        Current User
                        <button
                          className="btn btn-secondary "
                          type="button"
                          id="dropdownMenuButton">
                          <i className="fa fa-user"></i>

                          {user}
                        </button>


                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" href="/user">
                            User view
                          </a>
                          <Link to="/">
                            <MDBBtn className="dropdown-item">
                              <i class="fa-solid fa-chart-line"></i>Log out
                            </MDBBtn>
                          </Link>
                        </div>
                        <Link to="/servicereq">
                          <MDBBtn className="sidebtn m-2 mt-4">
                            <i class="fa-solid fa-paper-plane"></i>Make a Service Request
                          </MDBBtn>
                        </Link>
                        <Link to="/leads">
                          <MDBBtn className="sidebtn m-2">
                            <i class="fa-solid fa-paper-plane"></i> View leads Status
                          </MDBBtn>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>

                      <li className="nav-item">
                        <a className="nav-link btn-success p-3 rounded" href="/">
                          Login
                        </a>
                      </li>
                    </>
                  )}

                  {/* <Link to="/editleads">
                    <MDBBtn className="sidebtn">
                      <i class="fa-solid fa-paper-plane"></i> Edit Leads
                    </MDBBtn>
                  </Link> */}

                  {/* <Link to="/">
                    <MDBBtn className="sidebtn">
                      <i class="fa-solid fa-right-from-bracket"></i> Logout
                    </MDBBtn>
                  </Link> */}
                </div>
              </div>
            </MDBNavbarNav>

            <div >
              <button className="dropdown-item bg-dark text-white rounded" onClick={logOut}>
                Logout
              </button>
            </div>

          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <div className="dashboard-conrtainer">
        <MDBContainer className="charts gap-2 mb-3" fluid>
          <div className="back p-4 text-center">
            <MDBBtn className="btn">Overal Request</MDBBtn>
            <h3 className="text-center m-3">40</h3>

          </div>
          <div className="back p-4 text-center">
            <MDBBtn className="btn">Request Successed</MDBBtn>
            <h3 className="text-center m-3">25</h3>

          </div>
          <div className="back p-4 text-center">
            <MDBBtn className="btn">Pending Request</MDBBtn>
            <h3 className="text-center m-3">08</h3>

          </div>
          <div className="back p-4 text-center">
            <MDBBtn className="btn">Calcelled Request</MDBBtn>
            <h3 className="text-center m-3">07</h3>

          </div>
        </MDBContainer>

        {/* Chart File */}
        <ChartApp />
      </div>


    </>
  );
}
