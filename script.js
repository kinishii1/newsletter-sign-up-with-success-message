hideForm = document.querySelector('.hide-card')
hideMessage = document.querySelector('.hide')
subscribeBtn = document.querySelector('#subBtn')
messageBtn = document.querySelector('#messageBtn')
inputEmail = document.querySelector('#inputEmail')


subscribeBtn.addEventListener('click', () => {
  if (!inputEmail.value) {
    inputEmail.classList.add('error');
    return
  } else {
    inputEmail.classList.remove('error'); // Remove the "error" class if the input is not empty
  }
  hideForm.style.display = 'none';
  hideMessage.style.display = 'block';
});

messageBtn.addEventListener('click', ()=>{
  hideForm.style.display = 'block';
  hideMessage.style.display = 'none';
})

