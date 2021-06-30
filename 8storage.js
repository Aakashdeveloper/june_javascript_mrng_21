localstorage 
> persistant storage
> wrt to browser
> we have to remove manully 

localStorage.setItem('tokendata','87678bh8yweg87gfbe8')
undefined
localStorage.getItem('tokendata')
"87678bh8yweg87gfbe8"
localStorage.removeItem('tokendata')
undefined
localStorage.getItem('tokendata')
null
localStorage.setItem('tokendata','87678bh8yweg87gfbe8')
undefined
localStorage.removeItem('tokendata')
undefined


sessionStorage
> temp storage
> remove automatically 
> save wrt to tab

sessionStorage.setItem('userType','Admin')
undefined
sessionStorage.getItem('userType')
"Admin"
sessionStorage.removeItem('userType')
undefined
sessionStorage.getItem('userType')
null
sessionStorage.setItem('userType','Admin')


cookies
> save wrt to website    
> expireIn time 

document.cookie
"_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.507546962.1624346026; _gat_gtag_UA_131256843_1=1"
document.cookie="city=delhi; expires=Thur, 01 July 2021 01:00:00"
"city=delhi; expires=Thur, 01 July 2021 01:00:00"
document.cookie
"_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.507546962.1624346026; city=delhi"