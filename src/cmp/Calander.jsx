import React from 'react';
import { OrderModal } from '../cmp/OrderModal';

export function Calander() {
    return (
        <div className="calander-container flex">
            <div className="calander-box1">
                <img src={require('../assets/imgs/patterns/pattern-curve-bottom-right.svg').default} alt=""/>
                <img src={require('../assets/imgs/patterns/pattern-lines.svg').default} alt=""/>
            </div>
            <div className="order-modal">
                <OrderModal />
            </div>
        </div>
    )
}
