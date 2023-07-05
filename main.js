const $imagesGrid = document.getElementById('imagesGrid')
const $$imgOnGridF = document.getElementsByClassName('imgOnGridF')
const $video = document.getElementById('video')

for(let i=1; i<=8; i++){
    const el = document.createElement('img')
    el.setAttribute('src',`./assets/${i}.jpg`)
    el.setAttribute('alt',`${i}`)
    el.classList.add('imgOnGrid')
    el.addEventListener('mousedown', (ev) => {
        const elClicked = ev.target.alt
        window.location.href = `./assets/${elClicked}.jpg`
    })
    $imagesGrid.appendChild(el)
}

$$imgOnGridF[0].addEventListener('mousedown', (ev) => {
    const elClicked = ev.target.alt
    window.location.href = `./assets/${elClicked}.jpg`
})

$video.addEventListener('mousedown', () => {
    window.location.href = `./assets/Video-PRONTO.mp4`
})