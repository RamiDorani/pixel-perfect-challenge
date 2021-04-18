import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Header() {

    return (
        <div className="header-container flex">
            <div className="header-box1 container">
                <h2 className="dine-header">dine</h2>
                <div className="header-info">
                    <h2 className="dine-header2">Exquisite dining since 1989</h2>
                    <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                    <Link to='/reservation'><button>BOOK A TABLE</button></Link>
                </div>
            </div>
            <div className="header-box2">
                <img className="header-img" src={require('../assets/imgs/homepage/hero-bg-desktop.jpg').default} alt="" />
            </div>
        </div>
    )
}
