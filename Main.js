import "../style.css";

import Maint_list from "../Maint_list";

export default function Main(){
    
    return(
        <div id="main_stat" className='container'>
            <Maint_list active={"3"}/>
             <div id="statistic" >
                <div>
                  <div></div>
                  <p>Equipement in maintenance</p>
                </div>
                <div>
                  {/* circle */} 
                  <div>
                     <div></div>
                     <div></div>
                  </div>                 
                   <p>Equipement out of service</p>
                </div>
            </div>
        </div>
);
}