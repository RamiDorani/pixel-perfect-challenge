import React from 'react';
import { ReservationHeader } from '../cmp/ReservationHeader';
import { Calander } from '../cmp/Calander';



export function Reservation() {
    return (
        <div>
            <ReservationHeader />
            <Calander />
        </div>
    )
}
