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

console.log("********List the Properties of the object********");
function listProperties() {
  var student = {
    name: "Himanshu Tripathi",
    sclass: "X",
    rollNo: "21",
  };
  console.log("object :", student);
  //console.log(`object : ${student}`);  // not sure why using `` not displaying student object
  let properties = [];
  for (let prop in student) {
    properties.push(prop);
    console.log(`Properties of Students are : ${prop}`);
  }
  return properties;
}

console.log(`Properties of Students are : ${listProperties()}`);

/* Converting values of an object into array */

console.log("********List the values of the key of object********");
let values = [];
function listValues() {
  let obj = {
    One: "1",
    Two: "2",
    Three: "3",
    Four: "4",
  };

  for (let val in obj) {
    values.push(obj[val]);
  }
  return values;
}
listValues();
//console.log(`Object values:: ${values}`);
console.log(values);

/**
 * * Write a JavaScript function to sort the following array of objects by title value?

	Sample object :
	var library = [
	{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
	{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
	{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
	];

 */

console.log(
  `**************Sorting array of objects through values**************`
);

let library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];
function sortByTitle() {
  let sorted = library.sort((a, b) => {
    return a.title > b.title ? 1 : -1;
  });
  console.log(sorted);
}
sortByTitle();

//Another Approach

function compareTitle(a, b) {
  // converting to uppercase to have case insensitive comparison
  const title1 = a.title.toUpperCase();
  const title2 = b.title.toUpperCase();

  let compare = 0;

  if (title1 > title2) {
    compare = 1;
  } else if (title1 < title2) {
    compare = -1;
  }

  return compare;
}
console.log(`Another Approach of sorting array of objects through values`);
console.log(library.sort(compareTitle));
