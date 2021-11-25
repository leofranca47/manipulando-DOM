var body = document.body
var titlle = document.getElementById('title')
titlle.style.border = '10px solid #000'
titlle.style.padding = '10px'

setTimeout(function () {
    titlle.style.border = '10px solid #999'
    body.style.backgroundColor = '#000'
    body.style.color = 'white'
}, 2000)

function setColor(color) {
    body.style.backgroundColor = color
}

var piscaPisca = document.getElementById('divPisca')
pisca()

function pisca () {
    piscaPisca.style.backgroundColor = 'red'

    setTimeout(pisca2, 1000)
}
function pisca2 () {
    piscaPisca.style.backgroundColor = 'blue'

    setTimeout(pisca3, 1000)
}

function pisca3 () {
    piscaPisca.style.backgroundColor = 'green'

    setTimeout(pisca, 1000)
}