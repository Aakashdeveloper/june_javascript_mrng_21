RegExp
regularExpression
^$
// if pattern does not match it will return null
var a = "hi"
a.match("^[a-z]$")
null

var a = "h"
a.match("^[a-z]$")
["h", index: 0, input: "h", groups: undefined]

var a = "hi"
// expect 2 small letter word only
a.match("^[a-z]{2}$")
["hi", index: 0, input: "hi", groups: undefined]

var a = "Hi"
a.match("^[a-z]{2}$")
null

// exact 2 letter
var a = "Hi"
a.match("^[A-Za-z]{2}$")
null

// letter between 2 to 5
var a = "Hi"
a.match("^[A-Za-z]{2,5}$")

// any number of letter
var a = "Hi"
a.match("^[A-Za-z]+$")

var a = "Hi"
a.match("^[K-Za-z]+$")
null
var a = "Kiiiiiiiiii"
a.match("^[H-Za-z]+$")
["Kiiiiiiiiii", index: 0, input: "Kiiiiiiiiii", groups: undefined]


var a = "Kiiiiiiiiii"
a.match("^[H-Za-z$@&]+$")

///phone
var a = 8782656782
a.match("^[0-9]{10}$")
a.match is not a function

/// regex is only work on strings
var a = 8782656782
a.toString().match("^[0-9]{10}$")
["8782656782", index: 0, input: "8782656782", groups: undefined]


var test = "hob hom tom hnm"
var pattern = /h.m/g
test.match(/h.m/g)
["hom", "hnm"]
test.match(/h.m/g)
(2) ["hom", "hnm"]
test.match(/h./g)
(3) ["ho", "ho", "hn"]
test.match(/.m/g)
(3) ["om", "om", "nm"]

var test = "h.b hom tom h.m"
test.match(/h\.m/g)
["h.m"]

var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]

var email = "@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null

var email = "aa.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null