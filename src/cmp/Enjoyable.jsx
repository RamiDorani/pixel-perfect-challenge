import React from 'react';

export function Enjoyable() {
    return (
        <div className="enjoyable-container container flex">
            <div className="enj-box1 flex-col">
                <img className="nature-img" src={require('../assets/imgs/homepage/enjoyable-place-desktop.jpg').default} alt="" />
                <img className="pattern-top-right" src={require('../assets/imgs/patterns/pattern-curve-top-right.svg').default} alt="" />
            </div>
            <div className="enj-box2 flex-col">
                <img className="divide" src={require('../assets/imgs/patterns/pattern-divide.svg').default} alt="" />
                <div className="enj-box2-info">
                    <h1>Enjoyable place for all the family</h1>
                    <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
                </div>
            </div>
        </div>
    )
}
