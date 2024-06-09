var courses = [
    {
        id : 1 , 
        name: 'php', 
        coin : 500
    },

    {
        id :2 , 
        name : 'javascript',
        coin: 250
    },

    {
        id:3, 
        name : 'reactjs',
        coin :500 

        
    },
    {
        id:4, 
        name :'java',
        coin : 0

    },
    {
        id:5,
        name :'c++',
        coin :0
    }

];
var i= 0 
function coinHandle (accumulator ,currentValue,currentIndex,originArray){
    i++;
    console.table({
        'luot chay':i,
        'bien tich tru:':accumulator
    });

    console.log(currentValue);
}
var totalCoin = courses.reduce(coinHandle, 0);
