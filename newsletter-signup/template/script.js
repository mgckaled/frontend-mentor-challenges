function toggleVisibility() {
  const form = document.querySelector('.container')
  const sucess = document.querySelector('.sucess')
  const footer = document.querySelector('.attribution')

  if (form.style.visibility === 'hidden') {
    form.style.visibility = 'visible'
    sucess.style.visibility = 'hidden'
    footer.style.display = ''
  } else {
    sucess.style.visibility = 'visible' // Oculta a seção
    form.style.visibility = 'hidden'
    footer.style.display = 'none'
  }
}
