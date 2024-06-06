var languages =[
    'js',
    'java',
    'c++'

]; 
 for (var value of languages)
    {
        console.log(value)
    }

    var myInfor ={
        name: 'tung lam',
        age:'25'
    }

console.log(Object.keys(myInfor))

for (var value of Object.keys(myInfor))
    {
        console.log(myInfor[value])
    }