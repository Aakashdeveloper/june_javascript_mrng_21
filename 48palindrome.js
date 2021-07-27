1221
12321
123432

var palindrome = (data) => {
    var rem, temp, final = 0;
    temp = data;
    while(data>0){
        rem = data%10;
        data = parseInt(data/10)
        final = final*10 +rem
    }
    if(final == temp){
        console.log(`Number ${temp} is palindrome`)
    }else{
        console.log(`Number ${temp} is Not a palindrome`)
    }
}

palindrome(1221)
VM380:11 Number 1221 is palindrome
undefined
palindrome(12321)
VM380:11 Number 12321 is palindrome
undefined
palindrome(123421)
VM380:13 