const main = document.querySelector('main')
const button = document.querySelector('button')
const dialog = document.querySelector('dialog')
const audio = document.querySelector('audio')

button.addEventListener('click', () => {
    main.classList.add('apaga-tela')
    audio.play()
    // dialog.showModal()
    setTimeout(() => dialog.showModal(), 2000)
})