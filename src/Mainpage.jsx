import React from "react";
import { Link } from "react-router-dom";
import './App.css';

const Mainpage = () => {
  return (
    <div className="mainPage-container">
      <div className="container w-50 " id="mainpage">
        {/* <!-- Outer Row --> */}
        <div className=" justify-content-center my-5">
          <div className="">
            <div className="card o-hidden border-0 shadow-lg my-2">
              <div className="card-body p-0 my-2">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="">
                 <div className="">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          Welcome To CRM
                        </h1>
                      </div>
                      <hr />
                      <Link to="/Userlogin"className="btn btn-success btn-user btn-block m-3">
                        <i className="fab fa-google fa-fw"></i> Login As Users
                      </Link>
                      <Link to="/Adminlogin"className="btn btn-primary btn-user btn-block m-3">
                        <i className="fab fa-facebook-f fa-fw"></i> Login As Admin
                      </Link>
                      <Link to="/Adminlogin"className="btn btn-danger btn-user btn-block m-3">
                        <i className="fab fa-facebook-f fa-fw"></i> Login As Manager
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;


