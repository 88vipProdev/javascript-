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

var totalCoin = 0 ;
for (var courses of courses)
    {
        totalCoin +=courses.coin
    }

    console.log(totalCoin)