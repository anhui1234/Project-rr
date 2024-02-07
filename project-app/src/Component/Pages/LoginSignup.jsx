 import "../Pages/CSS/LoginSignup.css"
 import PersonIcon from '@mui/icons-material/Person';
 import MailIcon from '@mui/icons-material/Mail';
 import LockIcon from '@mui/icons-material/Lock';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from "react-router-dom";

function LoginSignup() {
    // const [action, setAction]=useState("Login");
    const navigate =useNavigate();
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    
    const handleLogin = async () => {
      if(!username||!password){
        toast.error("Chưa nhập Username hoặc Password");
        return;
      }
      
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
              
              localStorage.setItem("token",data)
              console.log("check",data)
              // Lưu token vào localStorage hoặc Redux state
              
              
              navigate("/");
          } else {
              
            toast.error("Đã xảy ra lỗi đăng nhập",data.error);
           
          }
      } catch (error) {
          
          toast.error("Đã xảy ra lỗi đăng nhập",error);
      }
      // alert("okok");
  };
  useEffect(()=>{
    let token =localStorage.getItem("token")
    if(token){
      
    }
  },[]);
  
    return (
      <div className="container">
        <div className="LoginSignup">
          <div className="LoginSignup-title">
            <div className="text">Đăng nhập</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            {/* {action==="Login"?<div></div>:<div className="input">
                <MailIcon style={{margin:'0px 30px'}}/>
                <input type="text" placeholder="Email"/>
            </div>} */}
            <div className="input">
                <PersonIcon style={{margin:'0px 30px'}}/>
                <input type="text" placeholder="Tên đăng nhập" onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            
            <div className="input">
                <LockIcon style={{margin:'0px 30px'}}/>
                <input type="password" placeholder="Mật khẩu" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
          </div>
          <div className="forgot-password">Quên mật khẩu?<span>Chọn vào đây</span></div>
          
          <div className="submit-container">
           
            <div className="submit" onClick={handleLogin}>Login</div>
            <ToastContainer />
          </div>
      </div>
      </div>
      
    );
  }
export default LoginSignup;