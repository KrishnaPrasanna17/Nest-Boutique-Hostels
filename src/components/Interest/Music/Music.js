import React from 'react'
import "./Music.css"


function Music() {
    return (
        <div className="music">
             <div className="__types">
                 <p>Art </p>
                 <p>Popular </p>
                 <p>Country </p>
                 <p>Electronic </p>
                 <p>Funk</p>
                 </div>
                 <div className="music__types">
                 <p>Hip hop </p>
                 <p>Latin </p>
                 <p>Jazz</p> 
                 <p>Pop </p>
                 <p>Punk</p>
             </div>
             <div className="music__types">
                <p>Reggae</p>
                 <p>Rock </p>
                 <p>Soul  </p>
                 <p>Religious </p>
                 <p>Traditional </p>
                 <p>Folk </p>
             </div>
        </div>
    )
}

export default Music
