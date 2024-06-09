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
    function coursesHandle(courses,index)
    {
        return {
            id :courses.id,
            nam:`khoa hoc: ${courses.nam}`,
            coin : courses.coin,
            coinText : `gia:${courses.coin}`,
            index:index

        };
    }
var newCourse = courses.map(coursesHandle);
console.log(newCourse)