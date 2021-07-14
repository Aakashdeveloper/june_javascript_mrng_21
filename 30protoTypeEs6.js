class geo{
    constructor(){
        this.lat = 43.55;
        this.long = 32.11
    }
}

class language1 extends geo{
    constructor(name,city,country){
        super()
        this.name = name;
        this.country = country;
        this.city = city;
    }

    greet = () => { return `Say Hi to ${this.name}`}
}
