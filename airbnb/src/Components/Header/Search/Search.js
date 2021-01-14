import React from 'react';
import './Search.css'

function Search() {
    return (
        <div className="search">
            <div className="search__location">
                <h3>Location</h3>
                <p>Where are you going?</p>
            </div>        
            <div className="search__checkin">
                <h3>Check in</h3>
                <p>Add dates</p>
            </div>
            <div className="search__checkout">
                <h3>Check out</h3>
                <p>Add dates</p>
            </div>
            <div className="asearch__guest">
                <h3>Guests</h3>
                <p>Add guests</p>
                <div className="search__button"></div>
            </div>
            
        </div>
    )
}

export default Search
