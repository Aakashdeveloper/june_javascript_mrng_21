///constructor notations
var city = new Object();
city.name = "Manali";
city.state = "HP"
"HP"
city
{name: "Manali", state: "HP"}


///function as a object

function language(name,country,city){
    this.name = name;
    this.country = country;
    this.city = city;
    this.greet = () => { return `Say Hi to ${name}`}
}

var English = new language('English','India','Delhi')

English
language {name: "English", country: "India", city: "Delhi", greet: ƒ}
English.greet()
"Say Hi to English"

var Hindi = new language('Hindi','India','Delhi')
language {name: "Hindi", country: "India", city: "Delhi", greet: ƒ}

//Es6
class language1{
    constructor(name,city,country){
        this.name = name;
        this.country = country;
        this.city = city;
    }

    greet = () => { return `Say Hi to ${this.name}`}
}

var French = new language1('French','Paris','France')
French
language1 {name: "French", country: "France", city: "Paris", greet: ƒ}
French.greet()
"Say Hi to French"