// Adhi Setiyoko
// 2/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// const reverseSeq = n => {
//     const result = [];
//     for(let i = n; i >= 1; i--){
//         result.push(i);
//     }
//     return result;
//   };

// const reverseSeq = n => {
//     // return [...Array(n)];
//     return Array(n).fill().map((el, i) => i + 1).reverse();
//   };

//   const reverseSeq = n => [...Array(n)].map((el, i) => i + 1).reverse();

// const reverseSeq = n => {
//     // return [...Array(n)];
//     return Array(n).fill().map((el, i) => n - i);
//   };

  const reverseSeq = n => [...Array(n)].map((el, i) => n - i);

  console.log(reverseSeq(5));
  