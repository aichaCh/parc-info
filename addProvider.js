import { useState } from "react";

export default function AddProvider(){
    const [field1,setField1]=useState("");
    const [field2,setField2]=useState("");
    const [field3,setField3]=useState("");
    const [field4,setField4]=useState("");
    const [field5,setField5]=useState("");
    const [field6,setField6]=useState("");


    function labelUp(e) {
        var inputs=document.querySelectorAll("input");
        var labels=document.querySelectorAll("label");
        labels[e].style.top="14px";
        labels[e].style.zIndex="1";
        
        for (let index = 0; index < 6; index++) {
             
            if (inputs[index].value==="" && index!=e) {
                labels[index].style.top="40px";
                labels[index].style.zIndex="-1";
                
            }
        }
  

    }

    function close() {
        document.getElementById("addProvider").style.display="none";

    }
   
    return(
        <div id="addProvider" >
            <button id="close" onClick={close}>X</button>
            <form action="" className="formulaire">
                <label >ID</label>
                <input  
                onChange={(e) => { setField1(e.target.value) }}
                value={field1}
                onFocus={()=>labelUp(0)}
                required/>
                <label>Nom</label>
                <input  
                 onChange={(e) => { setField2(e.target.value) }}
                 value={field2}
                 onFocus={()=>labelUp(1)}
                 required/>
                <label>Prenom</label>
                <input  
                          onChange={(e) => { setField3(e.target.value) }}
                          value={field3}
                          onFocus={()=>labelUp(2)}
                          required/>
                <label>CIN</label>
                <input 
                          onChange={(e) => { setField4(e.target.value) }}
                          value={field4}
                          onFocus={()=>labelUp(3)}
                          required/>
                <label>Dp</label>
                <input 
                          onChange={(e) => { setField5(e.target.value) }}
                          value={field5}
                          onFocus={()=>labelUp(4)}
                          required/>
                <label>Mission</label>
                <input 
                          onChange={(e) => { setField6(e.target.value) }}
                          value={field6}
                          onFocus={()=>labelUp(5)}
                          required/>
                <button>Ajouter</button>
            </form>
        </div>
    )
}