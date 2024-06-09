var courses = [
    {
        id:1,
        nam:'khoa hoc: javascript',
        coin :500
    },
    
    {
        id:2,
        nam:'khoa hoc: javascript',
        coin :500
    },
    {
        id:3,
        nam:'c++',
        coin :500
    },
    {
        id:4,
        nam:'java',
        coin :500
    },
    {
        id:5,
        nam:'ruby',
        coin :500
    },

];

function coinHandle()
{

}

var totalCoin = courses.reduce(coinHandle,0)
