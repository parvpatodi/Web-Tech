// const start = Date.now();
// console.log(Date.now());
// var a ;
// setTimeout(function()
// {
//     a = 10;
//     console.log("First function runs after " + (Date.now() - start )+ "ms")

// },1000);


// setTimeout(function()
// {
//     // a = 25
//     console.log("Second function runs after " + (Date.now() - start) + "ms");
// },2000);

// setTimeout(function()
// {
//     console.log(a)
// },3000)

// const https = require("https");
// https.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", (resp) =>{
//     let data = ""
//     resp.on("data",(chunk)=> {
//         // console.log(chunk)
//         data += chunk;
//     });

//     resp.on("end", () => {
//         console.log(JSON.parse(data).explanation);
//     });


// }).on("error", (err) => {
//     console.log("Error: " + err.message)
// });
// console.log(name)
// //console.log(course)
// var name = 'deb';
// let course = 'js';
// console.log(pi)
// const pi = 3.14;

// let a = function ()
// {
//     return 10;
// }

// console.log(a());

// let a = function setTo10 ()
// {
//     return 10;
// }

//console.log(a());


// let a = () =>
// {
//     return 10;
// }

// console.log(a());

// let a = b  =>                      //b is a function parameter
// {
//     return 10 +b;
// }

// console.log(a(5));

// console.log('Current directory :' + process.cwd());


let obj = {
    name: 'ceb',
    test: () => {
        console.log(this.name);
    }
}

obj.test()

let obj1 = {
    name: 'ceb',
    test: function () {
        console.log(this.name);
    }
}

obj1.test()