var movies = "Avengers"
var movieRating = 4.5
var movieLang = "English"

var movies2 = "Jab We Met",
var movieRating2 = 4.8
var movieLang2 = "Hindi"

var movie = {
    name:'Avengers',
    rating:4.5,
    lang:'English'
}
typeof(movie)
"object"

movie.name
"Avengers"
movie.rating
4.5
movie.lang
"English"
movie.rating = 4.8
4.8
movie
{name: "Avengers", rating: 4.8, lang: "English"}
movie.ind = "Hollywood"
"Hollywood"
movie
{name: "Avengers", rating: 4.8, lang: "English", ind: "Hollywood"}
delete movie.lang
true
movie
{name: "Avengers", rating: 4.8, ind: "Hollywood"}

// You can only update the property
Object.seal(movie)
{name: "Avengers", rating: 4.8, ind: "Hollywood"}ind: "Hollywood"name: "Avengers"rating: 4.8__proto__: Object
movie.lang = "English"
"English"
movie
{name: "Avengers", rating: 4.8, ind: "Hollywood"}
movie.rating = 4.9
4.9
movie
{name: "Avengers", rating: 4.9, ind: "Hollywood"}

// You can only update/add/remove the property
Object.freeze(movie)
{name: "Avengers", rating: 4.9, ind: "Hollywood"}
movie.rating = 4.9
4.9
movie.rating = 3
3
movie
{name: "Avengers", rating: 4.9, ind: "Hollywood"}
delete movie.name
false
movie.lang = "English"
"English"
movie
{name: "Avengers", rating: 4.9, ind: "Hollywood"}


//literal notation
var movie = {
    name:'Avengers',
    rating:4.5,
    lang:'English'
}
undefined
movie['name']
"Avengers"
movie['rating']
4.5
movie['rating']=4.8
4.8
movie['ind']="Hollywood"
"Hollywood"
movie
{name: "Avengers", rating: 4.8, lang: "English", ind: "Hollywood"}

////JSON/////
//JavaScript Object Notation//
var movies = [
    {
        name:'Avengers',
        rating:4.5,
        lang:'English'
    },
    {
        name:'Jab We Met',
        rating:4.8,
        lang:'Hindi'
    },
    {
        name:'Mad MAx',
        rating:3.8,
        lang:'English',
        ind:'Hollywood'
    }
]

movies[0]
{name: "Avengers", rating: 4.5, lang: "English"}
movies[0].lang
"English"

movies.map((data) => {return data.name})
["Avengers", "Jab We Met", "Mad MAx"]


for(mymovies of movies){
    console.log(mymovies.name)
}

Avengers
Jab We Met
Mad MAx


////
var movie = {
    name:'Avengers',
    rating:4.5,
    lang:'English'
}

for(key in movie){
    console.log(key)
}

name
rating
lang

for(key in movie){
    console.log(movie[key])
}

Avengers
4.5
English


var movie = {
    name:'Avengers',
    rating:4.5,
    lang:'English',
    starcast:{
        male:['a','b','c'],
        female:['x','y','z']
    }
}

movie.starcast
{male: Array(3), female: Array(3)}
movie.starcast.male
(3) ["a", "b", "c"]
movie.starcast.male[0]
"a"