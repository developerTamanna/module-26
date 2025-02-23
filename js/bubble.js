console.log('bubble')
// list item 2 click handler
document.getElementById('item-2')
.addEventListener('click', function(event){
    console.log('item 2 click')
    event.stopPropagation()
})
// list item 2 second click handler
document.getElementById('item-2')
.addEventListener('click', function(event){
    console.log('item 2 second click')
    // event.stopPropagation()
})
// list item 2 second click handler
document.getElementById('item-2')
.addEventListener('click', function(event){
    console.log('item 2 third click')
    // event.stopPropagation()
})
// ol click handler
document.getElementById('item-list')
.addEventListener('click', function(){
    console.log('ol click')
})
// section click handler
document.getElementById('list-container')
.addEventListener('click', function(){
    console.log('section click')
})
document.getElementById('body')
.addEventListener('click', function(){
    console.log('body click')
})