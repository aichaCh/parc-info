// import "./style.css";
import { Link } from "react-router-dom";

export default function Head(){
    return(
        <div id="head">
           <Link to={"/user"}><img src={require('./icons/user.png')}></img><span>User</span></Link>
          <Link to={"/provider"}><img src={require('./icons/provider.png')}></img><span>Provider</span></Link>
          <Link to={"/equipment"}><img src={require('./icons/equipement.png')}></img><span>Equipement</span></Link>
           <Link to={"/maintenance"}><img src={require('./icons/maintenance.png')}></img><span>Maintenance</span></Link>
           <Link to={"/login"}><img src={require('./icons/login.png')}></img><span>Logout</span></Link>
    
        </div>
    );
}
