// Adhi Setiyoko
// 5/366
// https://www.codewars.com/kata/5861d28f124b35723e00005e

// function zeroFuel(distanceToPump, mpg, fuelLeft) {
//     if (distanceToPump / mpg <= fuelLeft) {
//         return true;
//     }else{
//         return false;
//     }
//   };

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump / mpg <= fuelLeft;
//   };

const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump / mpg <= fuelLeft;


  console.log(zeroFuel(50, 25, 2));
  console.log(zeroFuel(100, 50, 1));