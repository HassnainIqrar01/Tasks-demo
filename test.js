/// ----------------Loops in Java Script---------------- 


// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }


// const person = { name: 'Hassnain', age: 30 };
// for (let key in person) {
//     console.log(key + ': ' + person[key]);
// }


// const fruits = ['apple', 'orange', 'manngo'];
// for (let fruit of fruits) {
//     console.log(fruit);
// }


/// ----------------Const/Let/Var----------------------


// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// var z=x();
// console.log(z);


// function x(){

//     for (let i=1; i <= 5; i++){
//         setTimeout(function(){
//     console.log(i)
// }, i * 1000);
// }
// console.log("Hello !!!")
// }
// x();


//--------------Async/Await---------------



// const myPromise = new Promise((resolve, reject) => {
//     if (i = 1) {
//       resolve(result); 
//     } else {
//       reject(error); 
//     }
//   });

// async function myAsyncFunction() {
//     try {
//       const result = await myPromise;
//       console.log("Success:", result);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
//   myAsyncFunction();
  
// function someAsyncOperation() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const randomNumber = Math.random();
//         if (randomNumber >= 0.5) {
//           resolve(randomNumber); 
//         } else {
//           reject(new Error("Random number which is less than 0.5")); 
//         }
//       }, 1000);
//     });
//   }

//   async function AsyncFunction() {
//     const result = await someAsyncOperation()
//       .catch(error => {
//         console.error("Error:", error);
//         throw error;
//       });
//     console.log("Async operation result:", result);
//   }
  
//   AsyncFunction()
//     .then(() => {
//       console.log("Async function successfully.");
//     })
//     .catch(error => {
//       console.error("Async function failed:", error);
//     });
  

    //-----------------Generator---------------
    


    // function* generatorFunction() {
    //     yield 1;
    //     yield 2;
    //     yield 3;
    //     yield 1;
    //     yield 3;
    // }
    
 
    // const generator = generatorFunction();
    
   
    // console.log(generator.next().value); 
    // console.log(generator.next().value); 
    // console.log(generator.next().value); 
    // console.log(generator.next().value); 
    


    //--------------Functional Programming-------------------

//     const radius = [4, 2, 3, 5];

//     const area = function (radius) {
//         return Math.PI * radius * radius;
//     };

//     const circumfrence = function (radius) {
//         return 2 * Math.PI * radius * radius;
//     };

//     const diametre = function (radius) {
//         return 2 * radius;
//     };

//     const  calculate = function (radius, logic){
// const output = [];
// for (let i=0; i < radius.length; i ++ ){
//     output.push(logic(radius[i]));
// }
// return output;
//     };


//     console.log(calculate(radius,area));
//     console.log(calculate(circumfrence, area));


    //------------Call backs----------------



// function fetchData(callback) {
    
//     setTimeout(() => {
//         const data = [1, 2, 3, 4, 5];
//         callback(null, data);
//     }, 1000); 
// }


// function processData(error, data) {
//     if (error) {
//         console.error('Error fetching data:', error);
//     } else {
//         console.log('Fetched data:', data);
//     }
// }
// fetchData(processData);


//-------------------Fetch Api--------------------

// const apiUrl = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';

// fetch(apiUrl)
//   .then(response => {
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Data received:', data);
//   })
//   .catch(error => {
//     console.error('Fetch error:', error);
//   });

