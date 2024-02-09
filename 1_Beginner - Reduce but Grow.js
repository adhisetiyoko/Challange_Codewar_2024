// function grow(x){
//     let result = x[0];
//     for(let i = 1; i < x.length; i++){
//         result *= x[i];
//     }
//     return result;
// }

// function grow(x){
//     return x.reduce((acc, curr) => acc * curr, 1)
// }

// const grow = (x) => x.reduce((acc, curr) => acc * curr, 1)

const grow=x=>eval(x.join("*"))

console.log(grow([1, 2, 3]))