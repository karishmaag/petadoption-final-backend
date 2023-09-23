import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
export const LoginPage=(props) =>{
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const apiUrl='http://localhost:8080/api';
    const handleSubmit = async(e) => {
     e.preventDefault();
      try{
        const response= await axios.post(`${apiUrl}/addnuser`,
        {
          name,
          email,
          password,
        });
        alert("Loggedin successfully")
        console.log(response.data); // Do something with the form data
      }
      catch
      {
        alert("Login failed");
      }
    };
  
    return (
      <body>
          <div className="em">
          <center>
          <h2 id="lab1">SIGN UP</h2>
      <form onSubmit={handleSubmit} >
          <label ><h3 id="lab1">NAME:</h3></label><input type="text" name="name" value={name} onChange={(e)=>setname(e.target.value)} required id="in"/>
          <label><h3 id="lab4">AGE:</h3></label><input type="text" name="age" value={age} onChange={(e)=>setage(e.target.value)} required  id="in1"/>
          <label ><h3 id="lab6">AADHAR ID:</h3></label><input type="text" name="aadhar" value={aadhar} onChange={(e)=>setaadhar(e.target.value)} requiredid="in2" />
          <label ><h3 id="lab2">E-MAIL:</h3></label><input type="email" name="email" value={email} onChange={(e)=>setemail(e.target.value)} required id="in3"/>
          <label ><h3 id="lab2">PASSWORD:</h3></label><input type="password" name="password" value={password} onChange={(e)=>setpassword(e.target.value)} required id="in4"/>
          <label ><h3 id="lab3"> PHONE</h3></label><input type="tel" name="phone" value={phone} onChange={(e)=>setphone(e.target.value)} required id="in5" />
          <label ><h3 id="lab2">ADDRESS:</h3></label><input type="address" name="address" value={address} onChange={(e)=>setaddress(e.target.value)} required id="in6"/><br></br>
           <Link to="/AppB"> <button type="submit"  id="but">CANCEL</button></Link>
          <button type="submit" id="">SUBMIT</button>
        </form>
        </center>
      </div>
      <img src='https://img.freepik.com/free-photo/front-view-beautiful-dog-with-copy-space_23-2148786501.jpg?size=626&ext=jpg&ga=GA1.1.1757744463.1693544121&semt=ais' id="image2"></img>
      </body>
    );
  }
  export default LoginPage;
  