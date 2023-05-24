// import "./style.css";
import Maint_list from './Maint_list';
import Contact from './list/Contact';
import Statistic from './list/Statistic';
import Historic from './list/Historic';
import Main from './list/Main';
import {Routes,Route} from "react-router-dom";

export default function Maintenance(){
    return(
        <div id="maintenance" >
          <Maint_list/>  

        </div>
    );
}