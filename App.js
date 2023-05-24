import Head from './Head';
import Register from './Register';
import Login from './login';
import User from './User';
import Provider from './Provider';
import Equipment from './Equipment';
import Maintenance from './Maintenance';
import Buy from './Buy';
import Logout from './Logout';
import Maint_list from './Maint_list';
import Contact from './list/Contact';
import Statistic from './list/Statistic';
import Historic from './list/Historic';
import Main from './list/Main';
import {Routes,Route} from "react-router-dom";

export default function App() {
  
return(
  <div id='app'>
  <Head/>     {/* to do (easy)*/}
    <Routes>                               
  <Route path="/register" element={<Register/>}/>
  <Route path="/login" element={<Login/>}/>             {/* to do (easy)*/}
  <Route path="/user" element={<User/>}/>               {/* to do (easy need conception)*/}
  <Route path="/provider" element={<Provider/>}/>       {/* to do (easy need conception)*/}
  <Route path="/equipment" element={<Equipment/>}/>     {/* to do (easy need conception)*/}
  <Route path="/buy" element={<Buy/>}/>                 {/* to do (hard)*/}
  <Route path="/maintenance" element={<Maintenance/>}/> {/* to do (medium need conception)*/}
             <Route path="/maintenance/main" element={<Main/>}/>
             <Route path="/maintenance/contact" element={<Contact/>}/>             
             <Route path="/maintenance/statistic" element={<Statistic/>}/>              
             <Route path="/maintenance/historic" element={<Historic/>}/>       
  <Route path="/logout" element={<Logout/>}/> {/* to do */}
  </Routes>  
  </div> 
)
}
