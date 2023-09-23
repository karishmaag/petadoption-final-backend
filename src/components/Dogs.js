import React from 'react'
import { Link } from 'react-router-dom'
export default function() {
  return (
    <body id='AppBar'>
        <div id='dog1'>
    <div id='app'>
<nav >
        <ul>
            <li class="logo"><img src="https://i.pinimg.com/originals/03/7c/c3/037cc32f41c84b18406a3eb778c7c513.jpg" alt=""></img></li>
            <li>
                <ul>
                  
                <Link to='/AppB'><li><a href="#sea">SEARCH</a></li></Link>
                   <Link to='/cats'><li><a href="#cats">CATS</a></li></Link>
                   <Link  to='/dogs'><li><a href="#dogs">DOGS</a></li></Link>
                   <Link to='/AppB'><li><a href="#con">CONTACT</a></li></Link>
                </ul>
            </li>
        </ul>
</nav>
        <h1 id='name1'>FELINES & CANINES</h1>
        </div>
        <div id='c1'>
        <article>
        <h1>Indian Pariah Dog</h1>
        <ul>
            <p>Size : Medium</p>
            <p>Origin : India</p>
            <p>Height : Around 46 to 52 cm in male; 40 to 45 cm in females.</p>
            <p>Coat : Dense and short</p>
            <p>These are one of the only few dog breeds that are native to India. They have evolved along with human beings, and there has hardly been any outside intervention in their breeding process.  As such, they are one of the most healthy and hardy dog breeds in our country!</p>
            <Link to='/petform'><button>Adopt Me</button></Link>
            </ul>
        </article>
        <img id="imgd1" src="https://images.hindustantimes.com/img/2022/09/07/550x309/ashwini-chaudhary-monty-fSGSAaxzXfM-unsplash_1662535327381_1662535398649_1662535398649.jpg" alt=" "></img>
        </div>
        <div id='c2'>
        <article>
        <h1>Golden Retriever</h1>
        <ul>
        <p>Size : Medium to large</p>
            <p>Origin : Scotland </p>
            <p>Height : 51 to 61 cm</p>
            <p>Coat : Dense, water repellant, medium to long outer coat and soft inner coat</p>
            <p>Golden retrievers are one of the most popular breeds not just in India but also all over the world.</p>
            <Link to='/petform'><button>Adopt Me</button></Link>
            </ul>
        </article>
        <img id="imgd2" src="https://www.godigit.com/content/dam/godigit/directportal/en/goldenre.jpg" alt=""></img>
        </div>
        <div id='c3'>
        <article>
        <h1>Labrador</h1>
        <ul>
            <p>Size : Medium</p>
            <p>Origin : Newfoundland</p>
            <p>Height : 56 - 57 cm</p>
            <p>Coat : Short, dense, and double coat</p>
            <p>Labradors make intelligent and energetic pets that need lots and lots of exercise and obedience training. </p>
            <Link to='/petform'><button>Adopt Me</button></Link>
            </ul>
        </article>
        < img id="imgd3" src="https://www.godigit.com/content/dam/godigit/directportal/en/labrador.png" alt=""></img>
        </div>

        <div id='c4'>
        <article>
        <h1>Rottweiler</h1>
        <ul>
        <p>Size : Medium to large</p>
            <p>Origin : Germany</p>
            <p>Height : 63 - 69 cm</p>
            <p>Coat : Flat and short</p>
            <p>Labradors make intelligent and energetic pets that need lots and lots of exercise and obedience training. </p>
            <Link to='/petform'><button>Adopt Me</button></Link>
            </ul>
        </article>
        <img id="imgd4" src="https://www.godigit.com/content/dam/godigit/directportal/en/rottweiler.jpg" alt=""></img>
        </div>
        <div id='c5'>
        <article>
        <h1>German Shepherd</h1>
        <ul>
        <p>Size : Large</p> 
            <p>Origin : Germany</p>
            <p>Height : 62 - 63 cm</p>
            <p>Coat : Medium length, double coat, golden tan, black </p>
            <p>Natives of Germany, these are working dogs and are known for their courage, loyalty, intelligence, strength, obedience and training abilities. Because of these traits, they are very popular as police and military dogs. However, they are also excellent as guide dogs or search and rescue dogs.</p>
            <Link to='/petform'><button>Adopt Me</button></Link>
            </ul>
        </article>
        <img id="imgd5" src="https://www.godigit.com/content/dam/godigit/directportal/en/germanshep.jpg" alt=""></img>
        </div>

        </div>
        </body>
  )
}
