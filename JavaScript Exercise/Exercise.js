//* Write a JavaScript conditional statement to find the largest of five numbers.

function largestNumber()
{
    let numbers=[452,7866,78945,12,82762];
    return(Math.max(...numbers));
}

console.log(`Largest number in an array:  ${largestNumber()}`)



//  Write a JavaScript program to display the current day and time in the following format mm/dd/yyyy.


// Write a JavaScript program to sort array of strings in both ascending and descending order.
let names = ["Heman","Goku","Ryu","Gohan","Kira"];

function ascendingSort(){
    names.sort();
    console.log("Ascending Sort: ",names);
}

function descendingSort(){
    names.sort((a,b)=> {
       return b.localeCompare(a);
    });
    console.log("Descending Sort: ", names);
}
ascendingSort();
descendingSort();

//* Write a JavaScript program to remove duplicate items from an array.