import AddProvider from "./formulaire/addProvider";
import "./style.css";

function ShowProvider() {
    console.log("ok");
    document.getElementById("addProvider").style.display="block";

}

export default function Provider(){
    return(
        <div id="provider" className='container'>
            <AddProvider/>
            <div id="ajouter" onClick={ShowProvider}>+</div>
            <h1><span>Les info</span>rmation des fournisseurs</h1>
            <div >
                <input id="cherche" placeholder="Recherche"></input><img id="magnifying-glass" src={require('./icons/magnifying-glass.png')}></img>
            </div>
            <div>

            <div id="selection">
            <select >
                <option value={"Fournisseurs"}>Fournisseurs</option>
                <option value={"Maintenance"}>Maintenance</option>
            </select>
            </div>

            <div id="information" >
              <h4>Nom1</h4> 
              <h4>Nom2</h4> 
              <h4>Nom3</h4> 
              <h4>Nom4</h4> 
              <h4>Nom5</h4> 

            </div>
            </div>
        </div>
    );
}