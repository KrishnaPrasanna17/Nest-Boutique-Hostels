import React from 'react'
import './OnlineExp.css'
import Footer from './../../Footer/Footer';

import Hostels from './../../Hostels/Hostels';
import Header from './../../Header/Header';


function OnlineExp() {
    return (
        <div className="onlineexp">
            <Header/>
            <Hostels/>
            <Footer/>
        </div>
    )
}

export default OnlineExp
