import React, { useState } from 'react'
// import './Date.css'
import { Button } from '@material-ui/core';
import Search from './Search';
import { useHistory } from 'react-router-dom';

function Date() {

    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search />}
                <Button
                    onClick={() => setShowSearch(!showSearch)} className="banner__searchButton" variant="outlined">
                    {showSearch ? "Hide" : "Search by Dates"}
                </Button>
            </div>
        </div>
    )
}

export default Date