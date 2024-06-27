import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import './leads.css';
import { Config } from '../../config';

function Leads() {
  const [Leads, setLeads] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    setLoading(true);
    let Leads = await axios.get(`${Config.api}/viewServiceRequests`);
    setLeads(Leads.data);
    setLoading(false);
  };

  let serviceReqDelete = async (id) => {
    try {
      let ask = window.confirm("Are you sure! Do you want to delete this data?");
      if (ask) {
        await axios.delete(`${Config.api}/servicereq/${id}`);
      }
      loadData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='App'>
      <div>
        <nav className='App-header'>
          <h2 className='heading'>List Of Leads
            <span>
              <Link className='backToDashboard' to="/dashboard">
                <MDBBtn className="mb-1.5 mt-2">Dashboard</MDBBtn>
              </Link>
            </span>
          </h2>
        </nav>
      </div>

      <main className="App-main">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <table className="tableDatas">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Date</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Status Of The Leads</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {Leads.map((lead, index) => (
                <tr key={index}>
                  <td>{lead.fullName}</td>
                  <td>{lead.date}</td>
                  <td>{lead.email}</td>
                  <td>{lead.phone}</td>
                  <td>{lead.status}</td>
                  <td>
                    <Link to={`/editleads/${lead._id}`}>
                      <MDBBtn className="mb-1.5 mt-2">View Status</MDBBtn>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
      <br />
    </div>
  );
}

export default Leads;
