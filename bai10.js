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
    var total = accumulator+currentValue.coin;
    console.table({
        'luot chay':i,
        'bien tich tru:':accumulator,
        'gia khoa hoc :':currentValue.coin,
        'tich tru duoc':total


    });
    return total;


}
var totalCoin = courses.reduce(coinHandle, 0);
