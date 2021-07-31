import React from 'react'
import "./Fitness.css"

function Fitness() {
    return (
        <div className="fitness">
           <div className="fitness__items">
               <p>Active </p>
               <p>Aerobic </p>
               <p>Anaerobic </p>
               <p>BootCamp</p>
               <p>Circuit</p>
           </div>
           <div className="fitness__items">
               <p>Compound </p>
               <p>HIIT</p>
               <p>DOMS</p>
               <p>Sets</p>
               <p>Tabata</p>
               </div>
            <div className="fitness__items">
               <p>Isometrics</p>
               <p>Plyometrics</p>
               <p>Reps</p>
               <p>Resistance</p>
               <p>RPE</p>
           </div>
        </div>
    )
}

export default Fitness
