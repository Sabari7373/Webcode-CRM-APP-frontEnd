import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminDashboard from './AdminComponent/adminDashboard'

const Adminportal = () => {
  return (
    <>
    <div id="wrapper">

  
     <AdminDashboard />
      <div id="content-wrapper" className="d-flex flex-column">

        <div id="content">

           <Outlet></Outlet>
        </div>
      </div>
    </div>

    </>
  )
}

export default Adminportal
