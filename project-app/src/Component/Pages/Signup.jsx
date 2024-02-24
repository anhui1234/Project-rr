import "../Pages/CSS/Signup.css"
import PersonIcon from '@mui/icons-material/Person';
// import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup=()=> {
    const [username,setUsername]=useState('');
    const navigate =useNavigate();
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const handleSignup = async () => {
        if(!username||!password||!email){
          toast.error("Chưa nhập Username hoặc Password, Email");
          return;
        }
        
        try {
            const response = await fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email,username, password }),
            });
  
            const data = await response.json();
  
            if (response.ok) {
                
                // localStorage.setItem("token",data);
                // console.log("check",data);
                toast.success("Đăng ký thành công!");
                
                // setLoggedIn(true);
                // Lưu token vào localStorage hoặc Redux state
              //  console.log(isLoggedIn);
                navigate("/loginSignup");
            } else {
             try {
              const errorData = await response.json();
              toast.error(`Đã xảy ra lỗi đăng nhập: ${errorData.error}`);
             } catch (error) {
              toast.error("Đã xảy ra lỗi đăng nhập, không thể đọc dữ liệu từ server");
             }
             
            }
        } catch (error) {
            
          toast.error("Đã xảy ra lỗi kết nối hoặc lỗi server");
        }
        // alert("okok");
    };
   return (
    <div className="container">
    <div className="LoginSignup">
      <div className="LoginSignup-title">
        <div className="text">Đăng ký</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
       
        <div className="input">
            <EmailIcon style={{margin:'0px 30px'}}/>
            <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}  required/>
        </div>
        <div className="input">
            <PersonIcon style={{margin:'0px 30px'}}/>
            <input type="text" placeholder="Tên đăng nhập" onChange={(e)=>setUsername(e.target.value)}  required/>
        </div>
        
        <div className="input">
            <LockIcon style={{margin:'0px 30px'}}/>
            <input type="password" placeholder="Mật khẩu" onChange={(e)=>setPassword(e.target.value)}  required/>
        </div>
      </div>
      {/* <div className="forgot-password">Quên mật khẩu?<span>Chọn vào đây</span></div> */}
      
      <div className="submit-container">
       
        <div className="submit" onClick={handleSignup}>Register</div>
        
      </div>
      <ToastContainer />
  </div>
  </div>
  
   );
 }
export default Signup;