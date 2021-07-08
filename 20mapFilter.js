var a = [4,5,16,2,3,17,5,9,11,17,8,6,14,4,18,8]
a.map((data) => { console.log(data)})

a.map((data) => { return data*2})
[8, 10, 32, 4, 6, 34, 10, 18, 22, 34, 16, 12, 28, 8, 36, 16]

a.map((data) => { return `<p>${data*2}</p>`})
["<p>8</p>", "<p>10</p>", "<p>32</p>", "<p>4</p>", "<p>6</p>", "<p>34</p>", "<p>10</p>", "<p>18</p>", "<p>22</p>", "<p>34</p>", "<p>16</p>", "<p>12</p>", "<p>28</p>", "<p>8</p>", "<p>36</p>", "<p>16</p>"]

> map is use to iterate over the array
> it always return same length of output as input array
> it is use to apply logics(sum,mul,div) or return html


var a = [4,5,16,2,3,17,5,9,11,17,8,6,14,4,18,8]
a.filter((data) => {return data>10})
[16, 17, 11, 17, 14, 18]

> filter is use to filter out the value
> it may or may not return same length of output2
> it only return those value for which condition/output is true


var a = [4,5,16,2,3,17,5,9,11,17,8,6,14,4,18,8]
a.map((data) => {return data>10})
[false, false, true, false, false, true, false, false, true, true, false, false, true, false, true, false]

var a = [0,1,2,3]
a.map((data)=> { return data*2})
[0,2,4,6]
a.filter((data)=> { return data*2})
[1, 2, 3]

>0*2 =0 false
>1*2 =2 true
>2*2 =4 true
>2*3 =6 true