import { HashMap } from "./main.js";

// Test data

const test = new HashMap(); // or HashMap() if using a factory

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
console.log(test.get("lion"));
console.log(test.get("hat"));
console.log(test.get("dog"));
console.log(test.get("j"));
console.log(test.get("grape"));
console.log(test.get("frog"));

console.log(test.remove("dog"));
console.log(test.remove("lion"));
console.log(test.length());
console.log(test.remove("hat"));
console.log(test.remove("j"));
console.log(test.length());
console.log(test.remove("grape"));
console.log(test.remove("frog"));
console.log(test.length());

console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.remove("grape"));
console.log(test.remove("frog"));
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
test.set("apple", "white");
console.log(test.length());

test.set("moon", "silver");
console.log(test.entries());
console.log(test.length());
