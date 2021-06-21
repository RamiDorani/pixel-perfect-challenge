import React from 'react'

export function ReservationHeader() {
    return (
        <div>
            <div className="reservationHeader-container">
                <img className="reservation-img" src={require('../assets/imgs/homepage/Bitmapd.png').default} alt="" />
                <div className="reservationHeader-box1 container">
                    <h2>dine</h2>
                    <div className="reservation-text">
                        <span>Reservations</span>
                        <p>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
