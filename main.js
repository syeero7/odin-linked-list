import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.prepend("fish");
list.append("turtle");

console.log(list.size);
console.log(list.head);
console.log(list.tail);
console.log(list.at(3));
console.log(list.at(0));
console.log(list.find("turtle"));
console.log(list.find("cat"));
list.insertAt("bird", 2);
list.removeAt(2);

console.log(list.contains("turtle"));
list.pop();
console.log(list.contains("turtle"));

console.log(list.toString());
