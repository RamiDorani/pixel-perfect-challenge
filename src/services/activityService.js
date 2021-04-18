


export const activityService = {
    getActivities
}

const gActivities = [
    {_id : 1, title : 'Family Gathering', description : 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.', img : require('../assets/imgs/homepage/family-gathering-desktop2.png').default},
    {_id : 2, title : 'Special Events', description : 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.', img : require('../assets/imgs/homepage/special-events.jpg').default},
    {_id : 3, title : 'Social Events', description : 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.', img : require('../assets/imgs/homepage/social-events.jpg').default}
];


function getActivities(){
    return Promise.resolve(gActivities)
}