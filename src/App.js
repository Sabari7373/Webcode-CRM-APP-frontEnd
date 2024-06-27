import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from "./components/dashboard/dasboard"
import Login from "./components/login/login.js"
import Leads from "./components/Leads/leads.js"
import Signup from "./components/signup/signup.js"
import ServicereqNEW from './components/servicereq/servicereqNEW';
import   EditLeads  from './components/EditLeads/EditLeads';
import UserScreen from './components/Screens/UserScreen';
import { ProtectedRoute } from './ProtectedRoute';
import Mainpage from './Mainpage.jsx';
import Registerui from './Registerui.jsx';
import Adminlogin from './Adminlogin.jsx';
import CreateAdminRegister from './components/signup/AdminRegesiter.js';
import Portal from "./Portal.js";
import Adminportal from "./AdminPortal.js";

function App() {
  return (
    <div className='App-containers'>
    <BrowserRouter>
    <Routes>
      {/* 
      <Route path="/"                    element={<Mainpage/>}></Route>
      <Route path="/UserLogin"           element={<Login/>}></Route>
      <Route path='/Registerui'          element={<Registerui/>}></Route>
      
      <Route path='/Adminlogin'          element={<Adminlogin/>}></Route>
      <Route path='/Createadminregister' element={<CreateAdminRegister></CreateAdminRegister>}></Route>
      <Route path="/signup"              element={<Signup />}></Route> 
      <Route path='/user'      exact     element={<ProtectedRoute><UserScreen/></ProtectedRoute>}></Route>
      <Route path="/dashboard"           element={<ProtectedRoute><Dashboard /></ProtectedRoute>}></Route> 
      <Route path="/servicereq"          element={<ProtectedRoute><ServicereqNEW /></ProtectedRoute>}></Route>
      <Route path="/leads"               element={<ProtectedRoute><Leads /></ProtectedRoute>}></Route> 
      <Route path='/editleads/:id'       element={<ProtectedRoute><EditLeads/></ProtectedRoute>}></Route>
 */}
        <Route path="/"               element={<Mainpage/>}></Route>

        <Route path='/Userlogin'      element={<Login></Login>}></Route>
        <Route path="/signup"         element={<Signup />}></Route> 
        <Route path='/Portal'         element={<Portal/>}></Route>
        <Route path='/dashboard'      element={<Dashboard/>}></Route>
        <Route path="/leads"          element={<Leads />}></Route> 
        <Route path='editleads/:id'   element={<EditLeads/>}></Route>
        <Route path='servicereq'      element={<ServicereqNEW />}></Route>
      
      
        <Route path='/Adminlogin' element={<Adminlogin></Adminlogin>}></Route>
        <Route path='/CreateAdminRegister' element={<CreateAdminRegister/>}></Route>
        <Route path='/AdminPortal' element={<Adminportal/>}>
        <Route path='dashboards' element={<Dashboard></Dashboard>}></Route>
        <Route path='user' element={<UserScreen/>}></Route>
        <Route path='editleads/:id' element={<EditLeads/>}></Route>
      </Route>

    </Routes>
   </BrowserRouter>
    </div>
  );
}
export default App;
