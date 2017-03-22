var names = ['Plue', 'Bot', 'TobeulP'];

names.forEach(function(name){
  console.log('ForEach', name);
})

// Arrow Function
names.forEach((name) => {
  console.log('Arrow', name);
});

// Same as above but more compressed
names.forEach((name) => console.log(name));

var returnMe = (name) => name + "!";

console.log(returnMe('Buknoy'))

// Anonymous have this binding and Arrow take on their parent this binding
// This is an example of anonymous function the this.name will be undefined because the this is already updated its binding already and it is bind on the function
var person = {
  name: "Pulgoso",
  greet: function(){
    names.forEach(function (name){
      console.log(this.name + ' Hi fucker' + name)
    })
  }
}

person.greet();

// To fix this just use the arrow function
var person = {
  name: "Pulgoso",
  greet: function(){
    names.forEach((name) => {
      console.log(this.name + ' Hi fucker' + name)
    })
  }
}

person.greet();

// Challenge
// Make this function to an arrow function
function add(a, b){
  return a + b;
}

console.log(add(4, 5));
console.log(add(8, 4));

// Answer
// Statement Version
var add = (a,b) => {
  return a + b;
};

console.log(add(4, 5))

// Expression Version one line
var adds = (a,b) => a + b;
console.log(adds(4, 3))
