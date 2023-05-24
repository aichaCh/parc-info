import AddEquipement from './formulaire/addEquipement';

export default function Equipment(){

    function ShowEquipment() {
        console.log("ok");
        document.getElementById("addEquipement").style.display="block";
    
    }
    return(
        <div id="equipment" className='container'>
            <AddEquipement/>
            <div id="ajouter" onClick={ShowEquipment}>+</div>
            <h1><span>Les info</span>rmation des equipments</h1>
            <div >
                <input id="cherche" placeholder="Recherche"></input><img id="magnifying-glass" src={require('./icons/magnifying-glass.png')}></img>
            </div>
            <div>

            <div id="selection">
            <select >
                <option value={"Ordinateur"}>Ordinateur</option>
                <option value={"Printer"}>Printer</option>
                <option value={"Mouse"}>Mouse</option>
                <option value={"Serveur"}>Serveur</option>
            </select>
            </div>

            <div id="information">
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