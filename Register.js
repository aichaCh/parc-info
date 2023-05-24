import { useState } from "react"
import './style.css';
export default function Register() {
  const [userName, setUserName] = useState("");
  const [userLastname, setuserLastname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [usePass2, setUserPass2] = useState("");
  const [accept, setaccept] = useState(false);
  const [circle, setcircle] = useState(false); 
  var flag=false;

  function submit(e) {
     e.preventDefault(); 
     setaccept(true); 
     if (userName==""||userLastname==""||userEmail==""||userPass.length < 8||userPass!==usePass2) {
      flag=false;
     }else(flag=true)

     if (flag) {
      setcircle(true); 
      //  var res=axios.post("https//127.0.0.1:8000/api/register",{
      //   Farstname:userName,
      //   Lastname:userLastname,
      //   email:userEmail,
      //   password:userPass

      //  }).then((res)=>console.log(res));  
     }
 }
  
  return (
    <div id="div">
 <h1> bonjour <br></br >Creer votre compte</h1>
      {circle && <div id="circle" ></div>}

      <form action="" onSubmit={submit}>
        <label htmlFor="1">Nom</label>
        <input id="1" type="text" placeholder="Nom"
          onChange={(e) => { setuserLastname(e.target.value) }}
          required />
        <label htmlFor="2">Prenom</label>
        <input id="2" type="text" placeholder="Prenom"
          onChange={(e) => { setUserName(e.target.value) }}
          required />
        <label htmlFor="3">Email</label>
        <input id="3" placeholder="Email" type="email"
          onChange={(e) => { setUserEmail(e.target.value) }}
          value={userEmail}
          required />
        <label htmlFor="4">Mot de pass</label>
        <input id="4" placeholder="Mot de pass" type="password"
          onChange={(e) => { setUserPass(e.target.value) }}
          required />
        {userPass.length < 8 && accept && <p>Short password </p>}
        <label htmlFor="5"> Comfirmer mot de pass </label>
        <input id="5" placeholder="Mot de pass" type="password"
          onChange={(e) => { setUserPass2(e.target.value) }}
          required />
          {userPass!==usePass2 && accept && <p>different password  </p>}

        <button type="submit" >Registre</button>
      </form>

    </div>)
}