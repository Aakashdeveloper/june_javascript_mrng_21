function human(name,city){
    this.name = name;
    this.city = city
}

function robot(name){
    this.name = name;
    this.legs = 2;
    this.age = 10
}

var john = new human('John', 'Venice')
john
human {name: "John", city: "Venice"}
john.legs
undefined

var pepper = new robot('Pepper')
undefined
pepper
robot {name: "Pepper", legs: 2, age: 10}


///////
human.prototype = new robot()
var john = new human('John', 'Venice')
undefined
john
human {name: "John", city: "Venice"}
john.legs
2
john.age
10