/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
var Self={
    name:'Daniel Watts',
    photo:'week02/immages/me.JPG',
    favoriteFoods:['sushi','icecream','sweet potatos'],
    hobbies: ['coding','cooking','reading','skiing'],
    placesLived: [{place:'Dayton Nevada',length:'10years'},{place:'Eureka Nevada',length:'2 years'},{place:'Reno Nevada',length:'6 years'},{place:'Ogen Utah',length:'2 years'},{place:'Rexburg Idaho',length:'5 months and counting'}],

};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
Self
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById('name').innerHTML=Self.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById(photo).src=Self.photo;
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById(photo).alt=Self.name;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
Self.favoriteFoods.forEach(food => {
    let list = document.createElement("LI");
    list.value = food;
    document.getElementById('favorite-foods').appendChild(list);
});
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property
Self.hobbies.forEach(hobbie => {
    let list = document.createElement("LI");
    list.value = hobbie;
    document.getElementById('hobbies').appendChild(list);
});
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
