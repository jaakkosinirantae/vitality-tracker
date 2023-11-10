/* 
   Filename: sophisticated_example.js
   Description: This code demonstrates a sophisticated and elaborate example showcasing various JavaScript concepts and techniques.
*/

// Mock data for demonstration purposes
const users = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
  { id: 3, name: 'Alex Johnson', age: 35 }
];

// Function to filter users with an age greater than specified age
function filterByAge(usersArray, age) {
  return usersArray.filter(user => user.age > age);
}

// Function to sort users by name
function sortByName(usersArray) {
  return usersArray.sort((a, b) => a.name.localeCompare(b.name));
}

// Function to calculate the average age of users
function calculateAverageAge(usersArray) {
  const totalAge = usersArray.reduce((sum, user) => sum + user.age, 0);
  return totalAge / usersArray.length;
}

// Class representing a User
class User {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  // Method to log user details to the console
  logDetails() {
    console.log(`User ID: ${this.id}, Name: ${this.name}, Age: ${this.age}`);
  }
}

// Create instances of User class
const user1 = new User(1, 'John Doe', 25);
const user2 = new User(2, 'Jane Smith', 30);
const user3 = new User(3, 'Alex Johnson', 35);

// Logs user details
user1.logDetails();
user2.logDetails();
user3.logDetails();

// Example usage of functions and logging the results
console.log('--- Filtered Users (age > 28) ---');
const filteredUsers = filterByAge(users, 28);
console.log(filteredUsers);

console.log('--- Sorted Users by Name ---');
const sortedUsers = sortByName(users);
console.log(sortedUsers);

console.log('--- Average Age of Users ---');
const averageAge = calculateAverageAge(users);
console.log(averageAge);

// Other complex code and algorithms can be added here...

// ...

// Final code execution
console.log('Sophisticated example executed successfully!');