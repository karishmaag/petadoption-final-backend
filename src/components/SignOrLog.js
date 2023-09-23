import React from 'react'
import {Link} from "react-router-dom"
export default function SignOrLog()
{
    return(
        <body >
            <div id='si'>
            <nav>
        <ul>
            <li class="logo"><img src="https://i.pinimg.com/originals/03/7c/c3/037cc32f41c84b18406a3eb778c7c513.jpg" alt=""></img></li>
            <li>
                <ul id='nav'>
                  
                   <Link to="/AppB"><li>HOME</li></Link>
                   <Link to='/cats'><li><a href="#cats">CATS</a></li></Link>
                   <Link  to='/dogs'><li><a href="#dogs">DOGS</a></li></Link>
                   <Link to='AppB'><li><a href="#con">CONTACT</a></li></Link>
                </ul>
            </li>
        </ul>
    <div id='sig'>
        <h1 id='name'>FELINES & CANINES</h1>
    </div>
</nav>
            <div id='signorlog'>
            <Link to="/regi"><button id='signup'>SIGN UP</button></Link>
            <Link to="/AppB"><button id='login'>LOGIN IN</button></Link>
            </div>
            </div>
            { <img src='https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg' id='image'></img> }
        </body>
    )
}