console.log('handler file added ')

const changeTitle = document.getElementById('btn-update-title');

changeTitle.addEventListener('click', function(){
    // console.log('btn clicked');
    const pageTitleElement = document.getElementById('page-title')
    // console.log(pageTitleElement);
    pageTitleElement.innerText ='Updated Page title Text';
});


document.getElementById('btn-login')
.addEventListener('click', function(){
    // console.log('login button')
    const userInfoEl = document.getElementById('user-info');
    userInfoEl.innerText = 'user login success'
})


// next

// 1:set even listener
document.getElementById('btn-update')
.addEventListener('click', function(){
    console.log('update button click');
    //2:  get the text from the input field
    const nameInput = document.getElementById('input-name');
    console.log(nameInput)
   const name = nameInput.value;
    console.log('name', name)
    // 3:set the name
    const nameP = document.getElementById('name')
    nameP.innerText = name;
})