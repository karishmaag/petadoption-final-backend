import React ,{useEffect, useState}from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function FinalMessage() {
 
  const [products, setProducts] = useState([]);
  const loadProducts=async ()=>{
    const result=await axios.get("http://localhost:8080/api1/show"); //link from postman get method
    setProducts(result.data);
  };

useEffect(()=>
{
  loadProducts();
},[]);


  return (
    <body>
    <div id='fin'>
        <h1 id='fin1'>
            THANK YOU FOR GIVING NEW LIFE TO PETS
        </h1>
        <h2>Your Adoption Is Successfull</h2>
        <Link to="/AppB"><button type="submit" id="hbut1">BACK TO HOME</button></Link>
    </div>
    <table id='tab'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Animal</th>
                        <th>Colour</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Password</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(user => (
                        <tr key={user.pid}>
                             <td>{user.pid}</td>
                            <td>{user.petname}</td>
                            <td>{user.color}</td>
                            <td>{user.uname}</td>
                            <td>{user.uemail}</td>
                            <td>{user.upassword}</td>
                            <td>{user.uphone}</td>
                            <td>{user.uaddress}</td>
                            
                            {/* <td>
                                <button onClick={() => handleSelectUser(user)}>Edit</button>
                                <button onClick={() => handleDelete(user.petid)}>Delete</button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        <img src='https://img.freepik.com/free-photo/studio-shot-cute-border-collie-dog_23-2148097523.jpg' id='imgf'></img>
        </body>
  )
}
