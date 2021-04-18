import React from 'react';

export function MostLocaly() {
    return (
        <div className="most-localy-container container flex">
            <div className="most-localy-box1 flex-col">
                <img className="divide2" src={require('../assets/imgs/patterns/pattern-divide.svg').default} alt="" />
                <div className="most-localy-box1-info">
                    <h1>The most locally sourced food</h1>
                    <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p></div>
            </div>
            <div className="most-localy-box2 flex-col">
                <img className="pattern-lines" src={require('../assets/imgs/patterns/pattern-lines.svg').default} alt="" />
                <img src={require('../assets/imgs/homepage/locally-sourced-desktop.jpg').default} alt="" />
                <img className="hii" src={require('../assets/imgs/patterns/pattern-curve-top-left.svg').default} alt="" />
            </div>
        </div>
    )
}
