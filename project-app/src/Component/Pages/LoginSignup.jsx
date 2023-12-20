 import "../Pages/CSS/LoginSignup.css"
 import PersonIcon from '@mui/icons-material/Person';
 import MailIcon from '@mui/icons-material/Mail';
 import LockIcon from '@mui/icons-material/Lock';
import { useState } from "react";
function LoginSignup() {
    const [action, setAction]=useState("Login");
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
                <input type="text" placeholder="Tên đăng nhập"/>
            </div>
            
            <div className="input">
                <LockIcon style={{margin:'0px 30px'}}/>
                <input type="password" placeholder="Mật khẩu"/>
            </div>
          </div>
          {action==="Sign Up"?<div></div>:<div className="forgot-password">Quên mật khẩu?<span>Chọn vào đây</span></div>}
          
          <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}} >Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
          </div>
      </div>
      </div>
      
    );
  }
export default LoginSignup;