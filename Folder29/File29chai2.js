const coding = ["js", "ruby", "java", "python", "cpp"]

// forEach loop of array
coding.forEach( function (val){
    console.log(val);
})

coding.forEach( (item)=>{
    console.log(item);
})

function printMe(item)
{
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
})

const myCoding = [
    {
        lanuageName: "javascript",
        lanuageFileName: "js"
    },
    {
        lanuageName: "java",
        lanuageFileName: "java"
    },
    {
        lanuageName: "python",
        lanuageFileName: "py"
    },
]

myCoding.forEach( (item) =>{
    console.log(item.lanuageName);
})