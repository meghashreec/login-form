import React, { useState } from 'react';
import './Login.css'; 
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className='profileCard'>
      <div style={{ "width": "200px" , "margin":"250px 0px 0px 500px", "border":"blue"}}>

          <textarea class="form-control" id="textAreaExample1" rows="6" width="75%" placeholder='Images'></textarea>
  
      </div>
      <div className="card" style={{ "width": "400px" , "margin":"-250px 900pc 0px 800px", "border":"blue"}}>
        <h1>Login</h1>
        <div className="card-body" >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{"margin": "10px"}}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{"margin": "10px"}}
          />
          <button onClick={handleLogin}>continue</button>
        </div>
      </div>
      </div>
  );
};

export default Login;
