console.log('more even')

document.getElementById('btn-mouse')
.addEventListener('mouseenter', function(){
    console.log('event tring')
})

document.getElementById('user-name')
.addEventListener('focus', function(){
    console.log('user about to write name');
})

document.getElementById('user-email')
.addEventListener('focus',function(){
console.log('user about to write email')
})