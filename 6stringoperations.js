var city = "LonDon";
undefined
city.toUpperCase()
"LONDON"
city.toLowerCase()
"london"

var city = "LonDon";
undefined
city[0]
"L"
city[1]
"o"
city.length
6
city[5]
"n"
city[city.length-1]
"n"

var name = "  Nikita   "
undefined
name.length
11
name.trim()
"Nikita"
var out = name.trim()
undefined
out.length
6

var name = "  Nikita .   "
undefined
name.trim()
"Nikita ."

var a= "john"
var b = "John"
a == b 
false

var a= "john"
var b = "John"
a.toLowerCase() == b.toLowerCase()
true

var city = "amSteRDam" (Amsterdam)

var city = "amSteRDam"
undefined
city.slice(1)
"mSteRDam"
city.slice(2)
"SteRDam"
city.slice(3)
"teRDam"

var city = "amSteRDam"
undefined
city.charAt(0)
"a"
city.charAt(1)
"m"
city[0]
"a"

var city = "amSteRDam"
city.charAt(0).toUpperCase()
"A"
city.slice(1).toLowerCase()
"msterdam"

city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Amsterdam"

var city = "amSteRDam"
// provide value between range
city.slice(2,5)
"Ste"
city.slice(2,6)
"SteR"
city.slice(1,3)
"mS"
// remove first 2 letter
city.slice(2)
"SteRDam"

// -ve provide value from last
city.slice(-1)
"m"
city.slice(-2)
"am"

// +ve and -ve ( remove from start and -ve remove for end)
city.slice(0,-1)
"amSteRDa"
city.slice(0,-2)
"amSteRD"
city.slice(3,-3)
"teR"
city.slice(1,-3)
"mSteR"
city.slice(0,-1)
"amSteRDa"

// -ve and +ve  no output
city.slice(-4,1)
""
city.slice(-1,4)
""

// first -ve is greater == no output
city.slice(-1,-4)
""
// first -ve small then range start from last
city.slice(-4,-1)
"RDa"

city.slice(start,end)
city.substr(start,length)

city.slice(2,5)
"Ste"
city.substr(2,5)
"SteRD"

var city = "amSteRDam"

city.includes('a')
true
city.indexOf('a')
0
city.indexOf('D')
6
city.indexOf('y')
-1
city.includes('y')
false

var a = "i am learning javascript"
undefined
a.replace('javascript','js')
"i am learning js"
var a = "javascript i am learning javascript"
undefined
a.replace('javascript','js')
"js i am learning javascript"
a.replace(/javascript/g,'js')
"js i am learning js"

var name = "  Nikita .   "
undefined
name.replace(/ /g,'')
"Nikita."
name.replace(/ /g,'-')
"--Nikita-.---"
var name = "Nikita Verma"
undefined
name.replace(/ /g,'-')
"Nikita-Verma"
var name = "NikitaVerma"


var url = "https://github.com/Aakashdeveloper/Create-node-app"
undefined
url.split('/')
(5) ["https:", "", "github.com", "Aakashdeveloper", "Create-node-app"]0: "https:"1: ""2: "github.com"3: "Aakashdeveloper"4: "Create-node-app"length: 5__proto__: Array(0)
url.split('/')[4]
"Create-node-app"
var a = url.split('/')[4]
undefined
var a = url.split('/')
undefined
a
(5) ["https:", "", "github.com", "Aakashdeveloper", "Create-node-app"]
a[a.length-1]
"Create-node-app"


var a = "javascript i am learning javascript"
undefined
a.split(' ')
(5) ["javascript", "i", "am", "learning", "javascript"]

var a = "javascript";
undefined
a.split('')
(10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]

var a = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
a.toString()
"j,a,v,a,s,c,r,i,p,t"
var a = 10
undefined
a.toString()
"10"


var a = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
a.toString()
"j,a,v,a,s,c,r,i,p,t"
var out = a.toString()
undefined
out.replace(/,/g,'')
"javascript"
a.toString().replace(/,/g,'')
"javascript"