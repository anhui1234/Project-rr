 import "../Pages/CSS/LoginSignup.css"
 import PersonIcon from '@mui/icons-material/Person';
 import MailIcon from '@mui/icons-material/Mail';
 import LockIcon from '@mui/icons-material/Lock';
import { useState } from "react";
function LoginSignup() {
    const [action, setAction]=useState("Login");
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const handleLogin = async () => {
      try {
          const response = await fetch('http://localhost:8080/authentication', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, password }),
          });

          const data = await response.json();

          if (response.ok) {
              const token = data.token;
              // Lưu token vào localStorage hoặc Redux state
          } else {
              console.error('Đăng nhập thất bại', data.error);
          }
      } catch (error) {
          console.error('Đăng nhập thất bại', error);
      }
  };
    return (
      <div className="container">
        <div className="LoginSignup">
          <div className="LoginSignup-title">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <MailIcon style={{margin:'0px 30px'}}/>
                <input type="text" placeholder="Email"/>
            </div>}
            <div className="input">
                <PersonIcon style={{margin:'0px 30px'}}/>
                <input type="text" placeholder="Tên đăng nhập" onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            
            <div className="input">
                <LockIcon style={{margin:'0px 30px'}}/>
                <input type="password" placeholder="Mật khẩu" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
          </div>
          {action==="Sign Up"?<div></div>:<div className="forgot-password">Quên mật khẩu?<span>Chọn vào đây</span></div>}
          
          <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}} >Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={handleLogin}>Login</div>
          </div>
      </div>
      </div>
      
    );
  }
export default LoginSignup;