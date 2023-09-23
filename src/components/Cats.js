import React from 'react'
import { Link } from 'react-router-dom'
export default function Cats() {
  return (
    <body id='AppBar'>
        <div id='cat1'>
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
        <div  id="c1">
            <article>
        <h1>Persian cats</h1>
        <ul>
            <h3>Features:</h3><p>A long white mane and deep set twinkling eyes.</p>
            <h3>Temperament:</h3><p>May act a bit fussy and demanding but mostly independent</p>
            <h3>Color:</h3><p>White</p>
            <Link to='/petform'><button>Adopt Me</button></Link>
            </ul>
            </article>
            <img src='https://cdn-cafdl.nitrocdn.com/fQHdfFSxWCuDmbpNBOTabVcchzVvBqxc/assets/images/optimized/rev-10d6093/blog/wp-content/uploads/2017/12/persian-cat-300x300.jpg'></img>
    </div>
    <div  id="c2">
        <article>
        <h1>Siamese Cat:</h1>
        <ul>
        <h3>Features:</h3><p>Medium-build, slender legs, small-oval paws and a triangular face. Hind legs are higher compared to the front legs. Its mongoloid eyes slant inwards.</p>
            <h3>Temperament:</h3><p>Will start crying when ignored. They love a lot of attention.</p>
            <h3>Color:</h3><p>Brown</p>
            <Link to='/petform'><button>Adopt Me</button></Link>
            </ul>
            </article>
            <img src='https://cdn-cafdl.nitrocdn.com/fQHdfFSxWCuDmbpNBOTabVcchzVvBqxc/assets/images/optimized/rev-10d6093/blog/wp-content/uploads/2017/12/siamese-300x177.jpg'></img>
    </div>
    <div  id="c3">
        <article>
        <h1>MAINE COON</h1>
        <ul>
        <h3>Features:</h3><p>It has thick fur that is medium to long, large round eyes, large body and paws.</p>
            <h3>Temperament:</h3> <p>These cats have a non-fussy and adaptive character. They are well-behaved, outgoing and friendly. Therefore, it is very suitable cat for a house with children.</p>
            <h3>Color:</h3><p>Light And Dark Brown</p>
            <Link to='/petform'><button>Adopt Me</button></Link>
            </ul>
            </article>
            <img src='https://cdn-cafdl.nitrocdn.com/fQHdfFSxWCuDmbpNBOTabVcchzVvBqxc/assets/images/optimized/rev-10d6093/blog/wp-content/uploads/2017/12/Maine-coon.png'></img>
    </div>
    <div  id="c4">
        <article>
        <h1>The Bombay Cat</h1>
        <ul>
        <h3>Features:</h3><p></p> Muscular-build, round head that is narrow on the sides, striking golden round eyes, short hair and shiny coat. This agile cat is classified into the British and the American Bombay.
            <h3>Temperament:</h3><p></p> It is a friendly cat that loves to play and learn tricks. It is able to easily adapt to different environments and lifestyles. Its calm demeanor makes it an ideal pet for small apartments too. It is a smart cat that can be taught to walk on leash.
            <h3>Color:</h3><p>Black</p>
            <Link to='/petform'><button>Adopt Me</button></Link>
            </ul>
            </article>
            <img src='https://cdn-cafdl.nitrocdn.com/fQHdfFSxWCuDmbpNBOTabVcchzVvBqxc/assets/images/optimized/rev-10d6093/blog/wp-content/uploads/2017/12/bombay-cat-300x176.jpg'></img>
    </div>
    <div  id="c5">
        <article>
        <h1>The Himalayan Cat</h1>
        <ul>
            <h3>Features:</h3><p>Long fluffy coat that requires daily brushing and beautiful blue eyes define this cat’s look.</p>
            <h3>Temperament:</h3><p>It is a loving and loyal cat that yearns for human companionship. This breed isn’t very active or athletic and loves to lounge on its owner’s lap.</p>
            <h3>Color:</h3><p>Brown and White</p>
            <Link to='/petform'><button>Adopt Me</button></Link>
            </ul>
            </article>
            <img src='https://cdn-cafdl.nitrocdn.com/fQHdfFSxWCuDmbpNBOTabVcchzVvBqxc/assets/images/optimized/rev-10d6093/blog/wp-content/uploads/2017/12/Himalayan.jpg'></img>
    </div>
    </div>
        </body>
  )
}
