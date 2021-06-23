//* Write a JavaScript conditional statement to find the largest of five numbers.

function largestNumber() {
  let numbers = [452, 7866, 78945, 12, 82762];
  return Math.max(...numbers);
}

console.log(`Largest number in an array:  ${largestNumber()}`);

//  Write a JavaScript program to display the current day and time in the following format mm/dd/yyyy.

(function getCurrentDateTimeFormate() {
  let currentDateTimeStamp = new Date();
  console.log(
    `******************** Date in format mm/dd/yyyy ***********************`
  );
  console.log(
    `${currentDateTimeStamp.getMonth()}/${currentDateTimeStamp.getDate()}/${currentDateTimeStamp.getFullYear()}`
  );
})();

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

/**
 * Write a JavaScript function that accepts two arguments, 
 * a string and a letter and the function will count the number of occurrences
 *  of the specified letter within the string.
Sample arguments : 'gmail.com', 'm'
Expected output : 2
 */
console.log(
  `***************************Occurrences of a letter***********************************`
);

(function findingOccurrence(word, letter) {
  let occurrence = 0;
  for (let alphabet in word) {
    if (word[alphabet] === letter) {
      occurrence++;
    }
  }
  console.log(`'${letter}' in ${word} occured ${occurrence} times.`);
})("himanshu", "h");

/**
 * * Consider the following object:
var myObj =
	[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
	{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
	{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
	{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
	{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
	{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];


 - Display all objects with occupation as 'Programmer'
 - Sort the object based on age in descending order
 - Create a new array containing only names present in myObj
 - Recreate the above array of objects into the following object of objects :
	{ 'Team Leader' : [{'name':_____________, 'age':__________},{}],
	'<anotheroccupation>': [{'name':______________, 'age':________},{}]}
 */
console.log(`******************Object Refractor*************************`);
function objectRefactor() {
  var myObj = [
    { name: "Saurabh", age: 30, occupation: "Team Leader" },
    { name: "Anupriya", age: 32, occupation: "Team Leader" },
    { name: "Kalyani", age: 25, occupation: "Programmer" },
    { name: "Damodaran", age: 27, occupation: "Programmer" },
    { name: "Krishnakath", age: 22, occupation: "Programmer" },
    { name: "Venketraman", age: 28, occupation: "Programmer" },
  ];
  // - Display all objects with occupation as 'Programmer'
  let programmerObjects = myObj.filter(
    (obj) => obj.occupation === "Programmer"
  );
  console.log("All Programmers::", programmerObjects);
  // - Sort the object based on age in descending order
  let sortedByAge = myObj.sort((a, b) => {
    return b.age - a.age;
  });
  console.log("Sorted By Age[DESC]::", sortedByAge);
  // - Create a new array containing only names present in myObj
  let namesArray = myObj.map((obj) => {
    return obj.name;
  });
  console.log("Names Array::", namesArray);
  /**
      - Recreate the above array of objects into the following object of objects :
    { 'Team Leader' : [{'name':_____________, 'age':__________},{}],
    '<anotheroccupation>': [{'name':______________, 'age':________},{}]}
    */
  const modifiedObj = myObj.reduce(
    (newObj, obj) => ({
      ...newObj,
      [obj.occupation]: [{ ...obj }],
    }),
    {}
  );

  console.log("Recreated Object::", modifiedObj);
}

objectRefactor();

/**
 * * Convert the following JSON string to an object and access the value of the 'chels' property.
	var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';	
 */
console.log(`*********************JSON Conversion*************************`);
function jsonConvertor() {
  var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
  let obj = JSON.parse(jsonStr);
  console.log("Object JSON::", obj);
  console.log("chels:", obj.chels);
}
jsonConvertor();

/**
 * * Create a program that extracts data from the following JSON in the below format:
[
    {  author: .. , title: '' , description:'' },
    {  author: '' , title: '' , description:'' },
    {  author: .. , title: '' , description:'' },
     .....
]
 */

console.log(
  `*************************** Raw Data Extract *********************************`
);
let rawData = {
  status: "ok",
  source: "the-next-web",
  sortBy: "latest",
  articles: [
    {
      author: "Bryan Clark",
      title:
        "Spotify is using billboards to call users out on their questionable listening habits",
      description:
        "In a hilarious new marketing campaign, Spotify is taking to billboards to pose some rather serious questions (and provide commentary) about its users. One of the new billboards, for example, will read: “Dear person who made a playlist called: ‘One Night Stand With Jeb Bush Like He’s a Bond Girl in a European Casino.’ We …",
      url: "http://thenextweb.com/music/2016/11/30/spotify-is-using-billboards-to-call-users-out-on-their-questionable-listening-habits/",
      urlToImage:
        "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/Screen-Shot-2016-11-29-at-5.45.53-PM.png",
      publishedAt: "2016-11-30T07:38:09Z",
    },
    {
      author: "Bryan Clark",
      title:
        "Man in VR headset falls off fake cliff and hits a very real floor",
      description:
        "One day, we’ll have an entire Tumblr account for hilarious VR accidents, but until then, George Takei’s Facebook account will have to do. Takei, the Star Trek alum and current boss of sharing things on Facebook, recently shared a video of a man attempting to conquer a virtual cliff while inside an Oculus headset; it …",
      url: "http://thenextweb.com/virtual-reality/2016/11/30/man-in-vr-headset-falls-off-fake-cliff-and-hits-a-very-real-floor/",
      urlToImage:
        "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/man-falling.png",
      publishedAt: "2016-11-30T00:00:30Z",
    },
    {
      author: "Napier Lopez",
      title:
        "Microsoft's new app tries to fix Android's copy and paste problem",
      description:
        "For an OS typically preferred by power-users, Android has an embarrassing amount of trouble with copy and paste. Sometimes it works just fine, but in other apps you can only copy entire huge swaths of text, or worse – nothing at all. Microsoft’s new Clip Layer app wants to fix that by letting you copy …",
      url: "http://thenextweb.com/apps/2016/11/29/microsofts-new-app-tries-fix-androids-copy-paste-problem/",
      urlToImage:
        "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/Microsoft-Clip-Layer.png",
      publishedAt: "2016-11-29T22:11:20Z",
    },
  ],
};
function extractData() {
  let articles = rawData.articles;
  //author: .. , title: '' , description:''
  let newArticles = articles.map((article) => {
    return {
      author: article.author,
      title: article.title,
      description: article.description,
    };
  });
  console.log(newArticles);
}
extractData();
