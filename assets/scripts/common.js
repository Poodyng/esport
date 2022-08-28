const block = document.querySelector('#game-news');

let blockTop = block.offsetTop

window.addEventListener('scroll', () => {

    let windowPosition = window.scrollY - window.innerHeight

    if (windowPosition > blockTop) {
        block.classList.add('animated')
    } else {
        block.classList.remove('animated')
    }
})