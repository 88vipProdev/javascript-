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
function courseHandle(courses ,index, originArray){
    return {
        id: courses.id ,
        name: `khoa hoc : ${courses.name}`,
        coin: courses.coin,
        coinText :`gia ${courses.coin}`,
        index:index,
        originArray:originArray

    }
}
var newCourses = courses.map(courseHandle);
console.log(newCourses)
