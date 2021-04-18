import React from 'react';
import { Link } from 'react-router-dom';


export function Ready() {
    return (
        <div className="ready-container flex-col">
            <img className="ready-img" src={require('../assets/imgs/homepage/ready-bg-desktop.jpg').default} alt="" />
            <div className="ready-box2 flex">
                <h1>Ready to make a reservation?</h1>
                <Link to='/reservation'><button>BOOK A TABLE</button></Link>
            </div>
        </div>

    )
}
