import { useState } from "react"
import './style.css';
export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [accept, setaccept] = useState(false);
  const [circle, setcircle] = useState(false); 

  var flag=true;
  function submit(e) {
    
     e.preventDefault(); 
     setaccept(true); 
     if (userEmail==""||userPass.length < 8) {
      flag=false;
     }else(flag=true)

     if (flag) {
      setcircle(true)
      //  var res=axios.post("https//127.0.0.1:8000/api/register",{
      //   Farstname:userName,
      //   Lastname:userLastname,
      //   email:userEmail,
      //   password:userPass

      //  }).then((res)=>console.log(res));  
     }
 }
  
  return (
    <div id="login" className='container'>
 <h1> bonjour <br></br >Login</h1>
      {circle && <div id="circle" ></div>}

      <form action="" onSubmit={submit}>
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

        <button type="submit" >log in</button>
      </form>

    </div>)
}