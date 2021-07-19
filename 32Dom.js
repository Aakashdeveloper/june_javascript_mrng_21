document
#document
document.getElementsByTagName('h1')
HTMLCollection [h1]
document.getElementsByTagName('a')
HTMLCollection(24) [a, a, a, a, a, a, a, a, a, a.scroll, a.scroll, a.scroll, a.scroll, a.scroll, a, a, a, a, a, a, a, a, a, a#toTop, toTop: a#toTop]
document.getElementsByTagName('a')[0]
<a href=​"https:​/​/​www.facebook.com/​aakash.handa.14" target=​"_blank">​…​</a>​
document.getElementsByTagName('h1')[0]
<h1>​I'm AAKASH HANDA​</h1>​
document.getElementsByTagName('h1')[0].innerText
"I'm AAKASH HANDA"
document.getElementsByTagName('h1')[0].innerText="I m from nareshit"
"I m from nareshit"
document.getElementsByTagName('h1')[0].style.color="red"
"red"
document.getElementsByClassName('scroll')[0]
<a href=​"#skills" class=​"scroll">​Skills​</a>​
document.getElementsByClassName('scroll')[0].innerText
"Skills"
document.getElementsByClassName('scroll')[0].innerText="Tech"
"Tech"

document.getElementsByClassName('scroll')[1].innerText="Video"
"Video"

document.getElementsByTagName('h1')[0].style.visibility="hidden"
"hidden"