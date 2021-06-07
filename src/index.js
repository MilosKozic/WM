const paragraph = ['LOREM IPSUM DOLOR SIT','LOREM IPSUM DOLOR SIT2', 'LOREM IPSUM DOLOR SIT3']

const p = document.querySelector('.head-text')
const p1 = document.querySelector('.head-text1')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const dot1 = document.querySelector('#dot1')
const dot2 = document.querySelector('#dot2')
const dot3 = document.querySelector('#dot3')
const burgerMenu = document.querySelector('.menu')
const dropdown = document.querySelector('.dropdown')
const nav = document.querySelector('#nav')
const navbar = document.querySelector('#navbar')
const search = document.querySelector('#search-input')
const searchBtn = document.querySelector('#search-btn')
const showBtn = document.querySelector('.show-more')
const pSection = document.querySelector('#txt')

var n = 0

dot2.addEventListener('click',()=>{
    p.textContent=paragraph[1]
    p1.textContent=paragraph[1]
    n=1
})
dot1.addEventListener('click',()=>{
    p.textContent=paragraph[0]
    p1.textContent=paragraph[0]
    n=0
})
dot3.addEventListener('click',()=>{
    p.textContent=paragraph[2]
    p1.textContent=paragraph[2]
    n=1
})

function check(n) {
  if(n==1)  dot1.checked = true;
  if(n==2)  dot2.checked = true;
  if(n==3)  dot3.checked = true;
  } // change check on dot when we use mobile size, so if we back on tablet or desktop size wright dot will be checked

  check(n+1) //start position
prev.addEventListener('click',()=>{
    if(n==0) n=3 
    p.textContent= paragraph[n-1]
    p1.textContent=paragraph[n-1]
    check(n)
    n--    
})

next.addEventListener('click',()=>{
 if(n==2) n=-1
 p.textContent=paragraph[n+1]
 p1.textContent=paragraph[n+1]
 check(n+2)
  n++
})

var menuActive = false
burgerMenu.addEventListener('click', () =>{

    if(menuActive){
        dropdown.classList.add('open')
        navbar.classList.add('hidden-border')
        burgerMenu.classList.add('active')
    }
    else{
        dropdown.classList.remove('open')
        navbar.classList.remove('hidden-border')
        burgerMenu.classList.remove('active')

    }
    menuActive=!menuActive  
})

var searchAtive = false;
searchBtn.addEventListener('click',()=>{
   
    if(searchAtive){
        search.classList.add('search-active')
    }else{
        search.classList.remove('search-active')
    }
    searchAtive=!searchAtive
})

var showClass = false

showBtn.addEventListener('click',()=>{
    if(showClass){
        pSection.classList.add('paragraph-active')
    }else{
        pSection.classList.remove('paragraph-active')
    }
    showClass=!showClass
})
