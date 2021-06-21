import React, { useState, useEffect } from 'react';
import { MenuItems } from './MenuItems';
import { menuService } from '../services/menuService';

export function HighLigths() {
    const [menuItems, setMenuItems] = useState(null);

    useEffect(() => {
        loadItems();
    });

    const loadItems = async () => {
        const items = await menuService.getHighLights();
        setMenuItems(items)
        console.log(menuItems);
    }

    if (!menuItems) return <div>loading</div>
    return (
        <div className="highlight-container1">
            <div className="flex-between highlight-container2 container">
                <div className="highlight-box1 flex-col">
                    <img src={require('../assets/imgs/patterns/pattern-divide.svg').default} alt="" />
                    <h1>A few highlights from our menu</h1>
                    <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
                </div>
                <div className="hightlight-box2 flex-col">
                    {
                        menuItems.map(menuItem => <MenuItems key={menuItem._id} menuItem={menuItem} />)
                    }
                </div>
            </div>
        </div>
    )
}
