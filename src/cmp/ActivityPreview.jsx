import React from 'react';
import { Link } from 'react-router-dom';

export function ActivityPreview({activity}) {
    return (
        <div className={`activityy activity${activity._id} flex-col`}>
            <h1 className="activity-title">{activity.title}</h1>
            <p className="activity-desc">{activity.description}</p>
            <Link to='/reservation'><button className="book-button">BOOK A TABLE</button></Link>
        </div>
    )
}
