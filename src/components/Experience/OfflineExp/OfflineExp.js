import React from 'react'
import './OfflineExp.css'
import Footer from './../../Footer/Footer';

import Hostels from './../../Hostels/Hostels';
import Header from './../../Header/Header';


function OfflineExp() {
    return (
        <div className="offlineexp">
            <Header/>
            <Hostels/>
            <Footer/>
        </div>
    )
}

export default OfflineExp
