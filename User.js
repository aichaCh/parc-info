import AddUser from './formulaire/addUser';

function ShowUser() {
    console.log("ok");
    document.getElementById("addUser").style.display="block";

}

export default function User(){

    return(
        <div id="user" className='container' >
            <AddUser/>
            <div id="ajouter" onClick={ShowUser}>+</div>
            
            <h1><span>Les info</span>rmation des employers</h1>
            <div >
                <input id="cherche" placeholder="Recherche"></input><img id="magnifying-glass" src={require('./icons/magnifying-glass.png')}></img>
            </div>
            <div id="table">
            <table >
                <thead>
                <tr id="tr-head" >
                <th>ID</th>
                <th>Nom</th>  
                <th>Prenom </th>
                <th>CIN</th>
                <th>Dp</th>
                <th>Bureau</th>
                <th>Specialisation</th>
                </tr>
                </thead>
                <tbody>
                
                <tr>
                <td>ID</td>
                <td>Nom</td>  
                <td>Prenom </td>
                <td>CIN</td>
                <td>Dp</td>
                <td>Bureau</td>
                <td>Specialisation</td>
                </tr>
                <tr>
                <td>ID</td>
                <td>Nom</td>  
                <td>Prenom </td>
                <td>CIN</td>
                <td>Dp</td>
                <td>Bureau</td>
                <td>Specialisation</td>
                </tr>
                <tr>
                <td>ID</td>
                <td>Nom</td>  
                <td>Prenom </td>
                <td>CIN</td>
                <td>Dp</td>
                <td>Bureau</td>
                <td>Specialisation</td>
                </tr>            
                <tr>
                <td>ID</td>
                <td>Nom</td>  
                <td>Prenom </td>
                <td>CIN</td>
                <td>Dp</td>
                <td>Bureau</td>
                <td>Specialisation</td>
                </tr>            
                <tr>
                <td>ID</td>
                <td>Nom</td>  
                <td>Prenom </td>
                <td>CIN</td>
                <td>Dp</td>
                <td>Bureau</td>
                <td>Specialisation</td>
                </tr>                       
                </tbody>
            </table>
            </div>
        </div>
    );
}