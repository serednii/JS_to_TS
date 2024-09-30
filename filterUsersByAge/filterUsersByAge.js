const users = [
    { id: 1, name: "John", age: 28 },
    { id: 2, name: "Jane", age: 34 },
    { id: 3, name: "Tom", age: 23 },
    { id: 4, name: "Alice", age: 30 },
    { id: 5, name: "Bob", age: 20 }
];

function filterUsersByAge(users, minAge) {
    return users
        .filter(user => user.age >= minAge)
        .map(user => user.name);
}

const minAge = 25;
const filteredNames = filterUsersByAge(users, minAge);
console.log(filteredNames);  // Виведе ["John", "Jane", "Alice"]
