console.clear();

// add listener

const gridButton = document.querySelector('.grid')
const listButton = document.querySelector('.list')

gridButton.addEventListener('click', clickEventHandler)
listButton.addEventListener('click', clickEventHandler)

function clickEventHandler(e) {
    console.log('Hizo clic en', e.srcElement.className.split(' ')[0])
    let layout = e.srcElement.className.split(' ')[0]
    if (layout === 'grid') {

    }
}