const main    = document.querySelector('main')
const button  = document.querySelector('button')
const dialog  = document.querySelector('dialog')
const audio   = document.querySelector('audio')

button.addEventListener('click', () => {
  main.classList.add('apaga-tela')
  audio.play()
  setTimeout(() => dialog.showModal(), 2000)
})

document.addEventListener('visibilitychange', () => {
  if (!dialog.open)
    return
  
  if (document.visibilityState === 'hidden') {
    audio.pause()
    return
  }

  audio.play()
})