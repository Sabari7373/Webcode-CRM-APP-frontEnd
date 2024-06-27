import React from 'react'
import { Outlet } from 'react-router-dom'


const Portal = () => {
  return (
    <>
    {/* <!-- Page Wrapper --> */}
    <div id="wrapper">

      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
  
           <Outlet></Outlet>
        </div>
        {/* <!-- End of Main Content --> */}
      </div>
      {/* <!-- End of Content Wrapper --> */}
    </div>
    {/* <!-- End of     Page Wrapper --> */}
    </>
  )
}

export default Portal