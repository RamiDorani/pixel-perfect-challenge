import React from 'react';

export function MenuItems({menuItem}) {
    console.log(menuItem);
    return (
        <div className={`menuItem flex  item${menuItem._id}`}>
            <div className="menuItem-box1 flex">
                <img src={menuItem.img} alt=""/>
                <div></div>
            </div>
            <div className="menuItem-box2 flex-col">
                <h3>{menuItem.headLine}</h3>
                <p>{menuItem.description}</p>
                {(menuItem._id===1||menuItem._id===2)&&<div className="hr"></div>}
            </div>
        </div>
    )
}
