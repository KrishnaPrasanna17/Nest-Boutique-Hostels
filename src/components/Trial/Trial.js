import React from 'react'
import Sports from './../Interest/Sports/Sports';
import Music from './../Interest/Music/Music';
import Dance from './../Interest/Dance/Dance';
import Travel from './../Interest/Travel/Travel';
import Photography from './../Interest/Photography/Photography';
import Fitness from './../Interest/Fitness/Fitness';
import './Trial.css'

function Trial() {
    return (
        <div className="menu__area">
            <ul>
                <li>Sports
                    <ul className="dropdown">
                        <Sports/>
                    </ul>
                </li>
                <li>Music
                    <ul className="dropdown">
                        <Music/>
                    </ul>
                </li>
                <li>Dance
                    <ul className="dropdown">
                        <Dance/>
                    </ul>
                </li>
                <li>Travel
                    <ul className="dropdown">
                        <Travel/>
                    </ul>
                </li>
                <li>Fitness
                    <ul className="dropdown">
                        <Fitness/>
                    </ul>
                </li>
                <li>Photography
                    <ul className="dropdown">
                        <Photography/>
                    </ul>
                </li>
            </ul>
            
        </div>
    )
}

export default Trial
