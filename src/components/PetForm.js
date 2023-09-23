import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
export const PetForm=(props) =>{
   const [pid, setpid] = useState('');
    const [petname, setpetname] = useState('');
    const [color, setcolor] = useState('');
    const [uname, setuname] = useState('');
    const [uemail, setuemail] = useState('');
    const [upassword, setupassword] = useState('');
    const [uphone, setuphone] = useState('');
    const [uaddress, setuaddress] = useState('');
    const apiUrl='http://localhost:8080/api1';
    const [products, setProducts] = useState([]);

   const handleSubmit = async(e) => {
     e.preventDefault();
      try{
        const response= await axios.post(`${apiUrl}/addnpet`,
        [{
          petname,
          color,
          uname,
          uemail,
          upassword,
          uphone,
          uaddress
        }]);
        alert("User registration successfully")
        console.log(response.data); // Do something with the form data
      }
      catch
      {
        alert("user registration failed");
      }
    };

    return (
      <body>
          <div className="em1">
          <center>
          <h2 id="lab1">SIGN UP</h2>
      <form onSubmit={handleSubmit} >
          <label><h3 id="lab4">PET ID:</h3></label><input type="text" name="pid" value={pid} onChange={(e)=>setpid(e.target.value)} required  id="in1"/>
          <label><h3 id="lab4">PET NAME:</h3></label><input type="text" name="petname" value={petname} onChange={(e)=>setpetname(e.target.value)} required  id="in1"/>
          <label ><h3 id="lab6">COLOR:</h3></label><input type="text" name="color" value={color} onChange={(e)=>setcolor(e.target.value)} requiredid="in2" />
          <label ><h3 id="lab1">NAME:</h3></label><input type="text" name="uname" value={uname} onChange={(e)=>setuname(e.target.value)} required id="inn"/>
          <label ><h3 id="lab2">E-MAIL:</h3></label><input type="email" name="uemail" value={uemail} onChange={(e)=>setuemail(e.target.value)} required id="in3"/>
          <label ><h3 id="lab2">PASSWORD:</h3></label><input type="password" name="upassword" value={upassword} onChange={(e)=>setupassword(e.target.value)} required id="in4"/>
          <label ><h3 id="lab3"> PHONE</h3></label><input type="tel" name="uphone" value={uphone} onChange={(e)=>setuphone(e.target.value)} required id="in5" />
          <label ><h3 id="lab2">ADDRESS:</h3></label><input type="address" name="uaddress" value={uaddress} onChange={(e)=>setuaddress(e.target.value)} required id="in6"/><br></br>
          <Link to='/mess'><button type="submit" id="">Show Users</button></Link>
          <button onClick={handleSubmit}>SUBMIT</button>
          <br></br>
        </form>
        </center>
      </div>
      <img src='https://img.freepik.com/premium-photo/curious-puppy-peeking-from-corner-generative-ai_851708-2690.jpg' id="imaged2"></img>
      </body>
    );
  }
  export default PetForm;
  