console.log('delegate')

const items = document.getElementsByClassName('item')
// console.log(items)
for(const item of items){
    // console.log(item)
    item.addEventListener('click', function(event){
  console.log(event.target)
    })
}