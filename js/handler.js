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