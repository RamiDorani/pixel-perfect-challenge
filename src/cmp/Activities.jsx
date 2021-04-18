import React, { useState, useEffect } from 'react';
import { ActivityPreview } from './ActivityPreview';
import { activityService } from '../services/activityService';

export function Activities() {

    const [activityId, setActivityId] = useState(1);
    const [activities, setActivities] = useState(null)

    useEffect(() => {
        loadActivities();
    });

    const loadActivities = async () => {
        const activitiesList = await activityService.getActivities();
        setActivities(activitiesList);
    }
    const onChangeActivityId = (id) => {
        setActivityId(id)
    }

    if (!activities) return <div>Loading...</div>

    return (
        <div className="activity-container container flex">
            <div className="activity-box1">
                <img src={require('../assets/imgs/patterns/pattern-lines.svg').default} alt="" />
                <img className="tt" src={activities[activityId - 1].img} alt="" />
                <img src={require('../assets/imgs/patterns/pattern-curve-top-right.svg').default} alt="" />
            </div>
            <div className="activity-box2">
                <div className="activity-preview">
                    <ActivityPreview activity={activities[activityId - 1]} />
                </div>
                <ul className="activity-list">
                    <li className="flex activity-item">
                        {activityId===1&&<div className="cursor1"></div>}
                        <h5 className={activityId===1?'':'faded'} onClick={() => { onChangeActivityId(1) }}>FAMILY GATHERING</h5>
                    </li>
                    <li className="flex activity-item">
                    {activityId===2&&<div className="cursor2"></div>}
                        <h5 className={activityId===2?'':'faded'} onClick={() => { onChangeActivityId(2) }}>SPECIAL EVENTS</h5>
                    </li>
                    <li className="flex activity-item">
                    {activityId===3&&<div className="cursor3"></div>}
                        <h5 className={activityId===3?'':'faded'} onClick={() => { onChangeActivityId(3) }}>SOCIAL EVENTS</h5>
                    </li>
                </ul>
            </div>
        </div>
    )
}


