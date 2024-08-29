

// Random Arguments Function Challenge

/*
  - Creat function showDetails.
  - function accept 3 arguments [a,b,c]
  - Data Types for info is 
    --Steing ==> Name
    --Number ==> Age
    --Boolean ==> Status
  - Arguments is Random
  - Data is not Sorted ,Output Depend on Data Types
  - Use Trenary Conditional Operator
*/
function showDetailes (a,b,c){
  let name , age , status;
  typeof a === "string" ? name = a : typeof a === "number" ? age = a : status = a;
  typeof b === "string" ? name = b : typeof b === "number" ? age = b : status = b;
  typeof c === "string" ? name = c : typeof c === "number" ? age = c : status = c;
  status === true ? status ="" : status = "Not";

  console.log(`"Hello ${name}, Your Age is ${age},You Are ${status} Available For Hire"`);
}

showDetailes ( "Osama",38,true); // Output: "Hello Osama, Your Age is 38, You Are Available For Hire"
showDetailes (38,"Osama",true); // Output: "Hello Osama, Your Age is 38, You Are Available For Hire"
showDetailes (true,38,"Osama"); // Output: "Hello Osama, Your Age is 38, You Are Available For Hire"
showDetailes (false,"Osama",38); // Output: "Hello Osama, Your Age is 38, You Are  Not Available For Hire"




