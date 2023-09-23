import React from 'react'
import { Link } from 'react-router-dom'
export default function AppBar () {
return (
<body id='AppBar'>
    <div id='app'>
<nav >
        <ul>
            <li class="logo"><img src="https://i.pinimg.com/originals/03/7c/c3/037cc32f41c84b18406a3eb778c7c513.jpg" alt=""></img></li>
            <li>
                <ul>
                  
                   <li><a href="#sea">SEARCH</a></li>
                   <Link to='/cats' id='li1'><li><a href="#cats">CATS</a></li></Link>
                   <Link  to='/dogs'id='li1'><li><a href="#dogs">DOGS</a></li></Link>
                   <li><a href="#con">CONTACT</a></li>
                </ul>
            </li>
        </ul>
</nav>
        <h1 id='name1'>FELINES & CANINES</h1>
        </div>
    <div id='sea'>
    <img src="https://paradepets.com/.image/t_share/MTkxMzY1Nzg4NjczMzIwNTQ2/cutest-dog-breeds-jpg.jpg"  alt="photo" class="profile"></img>
    <article>
    <h1>DOGS</h1>
    <h3>"The average dog is a nicer person than the average person.”</h3>
    <button id='but1'>Search for Dogs</button>
</article>
    <img src="https://www.purina.co.nz/sites/default/files/2020-11/8-Fluffy-Cat-BreedsTEASER.jpg"  alt="photo" class="profile1"></img>
    <article id='arc'>
        <h1>CATS</h1>
        <h3>"Like all pure creatures, cats are practical."</h3>
    <button id='but1'>Search for Cats</button>
    </article>
    </div>
      <h1 id='h1c'>CONTACT</h1>
    <div id='con'>
        <div id='our'>
            <h4>FELINES & CANINES</h4>
            <h5>Give New Life For Pets</h5>
        </div>
      <div id='comp'>
       <h4>COMPAY</h4>
       <p>About us</p>
       <p>Privacy & Terms</p>
       </div>
       <div id='ser'>
       <h4>SERVICES</h4>
       <p>For Organizations</p>
       <p>For Adopters</p>
       </div>
       <div id='sup'>
       <h4>SUPPORT</h4>
       <p>For Organizations</p>
       <p>For Adopters</p>
       <p>chat</p>
       </div>
    </div>
    </body>
    )}