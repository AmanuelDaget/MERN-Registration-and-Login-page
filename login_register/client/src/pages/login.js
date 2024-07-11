import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/login',{email,password})
             .then((response)=>{
                 if(response.data === "Success"){
                    console.log("correct client")
                    navigate('../');
                 }
                 
             })
             .catch((err)=>{console.error("Axios error",err)});
    }
        
    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder="Enter email" autoComplete="off" name="email"
                           className="form-control rounded-0" onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter password" autoComplete="off" name="password"
                           className="form-control rounded-0" onChange={(e)=>setPassword(e.target.value)} 
                    />
                </div>
                <button type="submit" className="btn btn-success rounded-0 w-100">Login</button>
                <p>Don't have an acount?</p>
            </form>
            <Link to='/signup' className="btn btn-defualt border w-100 bg-light rounded-0 text-decoration-none">SignUp</Link>
        </div>
    </div>
    )
}