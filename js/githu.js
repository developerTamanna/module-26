document.getElementById('input-delete')
.addEventListener('keyup', function(event){
    const text = event.target.value
    console.log('user is typing', text)
  const btnDelete = document.getElementById('btn-delete')
    if(text === 'delete'){
        console.log('delete typed')
        btnDelete.removeAttribute('disabled')
        const secretInfo = document.getElementById('secret-info');
        secretInfo.style.display = 'none';
    }
    else{
        console.log('something else')
        btnDelete.setAttribute('disabled', true);
        btnDelete.setAttribute('disable', true)
    }
})