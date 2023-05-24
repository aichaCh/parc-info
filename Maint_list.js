import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Maint_list(props){
    // setActive(props.active);
    // document.querySelector("a:nth-child(`{active}`)").style.color='red';
    return(
        <div id="list">
        <ul>
            <li><Link to={"/maintenance/contact"}>Contact</Link></li>
            <li><Link to={"/maintenance/main"}>Maintenance</Link></li>
            <li><Link to={"/maintenance/statistic"}>Statistic</Link></li>
            <li><Link to={"/maintenance/historic"}>Historic</Link></li>
        </ul>
      </div >
    );
}