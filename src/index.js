const paragraph = ['LOREM IPSUM DOLOR SIT','LOREM IPSUM DOLOR SIT2', 'LOREM IPSUM DOLOR SIT3']

const p = document.querySelector('.head-text')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const dot1 = document.querySelector('#dot1')
const dot2 = document.querySelector('#dot2')
const dot3 = document.querySelector('#dot3')

var n = 0

dot2.addEventListener('click',()=>{
    p.textContent=paragraph[1]
    n=1
})
dot1.addEventListener('click',()=>{
    p.textContent=paragraph[0]
    n=0
})
dot3.addEventListener('click',()=>{
    p.textContent=paragraph[2]
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
    check(n)
    n--    
})

next.addEventListener('click',()=>{
 if(n==2) n=-1
 p.textContent=paragraph[n+1]
 check(n+2)
  n++
})

