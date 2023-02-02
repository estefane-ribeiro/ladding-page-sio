const mode = document.getElementById('mode')
const body = document.getElementsByTagName('body')[0]

mode.addEventListener('click', () => {
  mode.textContent = body.classList.contains('dark') ? 'Dark' : 'Light'
  body.classList.toggle('dark')
})
