const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(
    //anonymous
    function (num) { 
        return(
        num * num * num
        )}
);
console.log(squaredNumbers)

// function mapSquares(num){
//       return(
//         num * num
//         )}

const numbers_filter = [1, 28, 355, 44, 51, 78];
const evenNumbers = numbers_filter.filter(
    function(num) {
    return  (num % 2 === 1)
})
console.log(evenNumbers); 

const strings_filter = ["banana", "oranges", "peppers", "tamatoes", "peas", "pears", "kiwi"];
const startsWithP = strings_filter.filter(
    //str represents certain elements in the array
    function(str) {
    return  (str.startsWith("p"))
})
console.log(startsWithP);

/** REDUCE */
const numbers_n = [11, 2, 32, 4, 5,70];

const sum = numbers_n.reduce(
    function (accum, initval) 
    {
        return(accum + initval)
    },0)

console.log(sum);

const donuts = [
    { name: 'mondays_donut', type: 'sparkly' },
    { name: 'tuesdays_donut', type: 'shiny' },
    { name: 'wednesdays_donut', type: 'squashy' }
  ];
  
  //(accum, item) => { anonymous 
    const newObjectFromArray = donuts.reduce((accum, item) => {
        /* accumulator is the array building */
        console.log(accum)
      // add object key to our object i.e. mondays_donut: { type: 'sparkly' }
      accum[item.name] = {type: item.type };
      return accum;
    },{});
  console.log(newObjectFromArray)

const strings_toFind = ["hell","hello","today", "is", "wednesday", "hello"];
const foundString = strings_toFind.find(
    function(str) {
    return(str.startsWith("h"))
   // return(str.endsWith("ay"))
       
});
console.log(foundString)

let testArray = [2,89,78,89,3,45]
console.log (testArray.sort())
console.log (testArray) // IS NOW CHANGED

let stringSortArray = ["ABS","giraffe","Giraffe","apple","orange","tortoise","peanut", "penguin", "hare"]
console.log (stringSortArray.sort())
console.log(stringSortArray);

const fruits = ["apples", "grapes", "pears"];
const colors = ["blues", "reds", "oranges", "purples", "yellows"]
//const food = [...fruits, "carrots", "patatoes", "turnips"];
//const moreFoodAndColor = [...food,colors]
console.log(food)
const moreFoodAndColorAgain= [...food,...colors]
console.log(moreFoodAndColorAgain)