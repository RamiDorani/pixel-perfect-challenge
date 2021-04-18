


export const menuService = {
    getHighLights
}

const gHighLights = [
    {_id : 1, headLine : 'Seared Salmon Fillet', description : 'Our locally sourced salmon served with a refreshing buckwheat summer salad.', img : require('../assets/imgs/homepage/menu-items/menu-item1.jpg').default},
    {_id : 2, headLine : 'Rosemary Filet Mignon', description : 'Our prime beef served to your taste with a delicious choice of seasonal sides.', img : require('../assets/imgs/homepage/menu-items/menu-item2.jpg').default},
    {_id : 3, headLine : 'Summer Fruit Chocolate Mousse', description : 'Creamy mousse combined with summer fruits and dark chocolate shavings.', img : require('../assets/imgs/homepage/menu-items/menu-item3.jpg').default}
];


function getHighLights(){
    return Promise.resolve(gHighLights)
}