// a.How to extract only values from the object ?
const obj = {
    id: 1,
    name: "John Doe",
    age: 30,
    city: "New York"
};

const valuesArray = Object.values(obj);
console.log("Keys of Object : ", valuesArray);
// Output: Keys of Object :  [ 1, 'John Doe', 30, 'New York' ]


// b.How to clone the object ?
// To clone an object in JavaScript, we can use spread syntax (...) 
const originalObject = {
    id: 1,
    name: "John Doe",
    age: 30,
    city: "New York"
};

const clonedObject = { ...originalObject };
console.log("Cloned Object : ", clonedObject);
//Output : Cloned Object :  { id: 1, name: 'John Doe', age: 30, city: 'New York' }