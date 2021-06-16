//* Write a JavaScript conditional statement to find the largest of five numbers.

function largestNumber() {
  let numbers = [452, 7866, 78945, 12, 82762];
  return Math.max(...numbers);
}

console.log(`Largest number in an array:  ${largestNumber()}`);

//  Write a JavaScript program to display the current day and time in the following format mm/dd/yyyy.

// Write a JavaScript program to sort array of strings in both ascending and descending order.
let names = ["Heman", "Goku", "Ryu", "Gohan", "Kira"];

function ascendingSort() {
  names.sort();
  console.log("Ascending Sort: ", names);
}

function descendingSort() {
  names.sort((a, b) => {
    return b.localeCompare(a);
  });
  console.log("Descending Sort: ", names);
}
ascendingSort();
descendingSort();

//* Write a JavaScript program to remove duplicate items from an array.

let dupArray = ["Heman", "Goku", "Himanshu", "Goku"];

function removingDuplicates() {
  return dupArray.filter(
    (element, index) => dupArray.indexOf(element) === index
  );
}
console.log(
  `************* Removing Duplicates using filter method *************`
);
console.log(removingDuplicates());

/*Using Set */
console.log(
  `************* Removing Duplicates using Set Data Structure *************`
);
console.log([...new Set(dupArray)]);

/*Using forEach() and include()*/
let uniqueArray = [];
dupArray.forEach((c) => {
  if (!uniqueArray.includes(c)) uniqueArray.push(c);
});
console.log(
  `************* Removing Duplicates using forEach() and include() *************`
);
console.log(uniqueArray);

//* Write a JavaScript function to return an array of the unique elements(not common) between two arrays.

let array1 = ["oranges", "apples", "banana", "watermelon"];
let array2 = ["papaya", "apples", "grapes", "banana"];
function uniqueElements() {
  let uniqueArray = [];
  array1.map((element) =>
    array2.includes(element) ? "" : uniqueArray.push(element)
  );
  array2.map((element) =>
    array1.includes(element) ? "" : uniqueArray.push(element)
  );

  return uniqueArray;
}
console.log("*******Displaying unique elements between 2 arrays*******");
console.log(uniqueElements());

/* Write a JavaScript program to list the properties of a JavaScript object? */
