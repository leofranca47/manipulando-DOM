// console.log(document.title = 'Javascript Dom');

// document.write('<h1>eu sou o Leo</h1>');

setTimeout(function() {
    // document.getElementById('test').innerText = 'sou um novo texto';
    // document.getElementById('id-test').innerHTML = '<h3>Oi eu sou Goku</h3>'
    // document.getElementById('id-test').innerHTML = '<p>Chalá rei chalá</p>'

    // console.log(document.getElementsByName('div-name')[0].innerText = 'Alterei o valor rapaz')

    // document.getElementsByTagName('div')[0].innerHTML = 'oi eu estou hackeando...'
    // document.getElementsByClassName('curso')[0].innerHTML = '<h1>Cê tá doido</h1>'
    // document.querySelector('li').parentNode.setAttribute('style', 'background: red; color: white')
    // console.log(document.querySelector('ul').children)
    // document.querySelector('ul').children[0].innerHTML = '<h1>Alterei</h1>'

    // var div = document.getElementById('id-test')
    // if (div.hasAttribute('attr-teste')) {
    //     console.log(div.innerHTML = '<b>danadinho em</b>')
    // } else {
    //     div.setAttribute('attr-teste', 'que isso em bicho')
    //     console.log(div.getAttribute('attr-teste'))
    // }

    var ul = document.querySelector('ul')
    ul.insertAdjacentHTML('beforebegin', '<hr>')
    ul.insertAdjacentHTML('afterend', '<hr>')

}, 1000)

function footer() {
    var heigth = document.body.scrollHeight
        // window.scrollTo(0, heigth)
    window.scrollTo({
        left: 0,
        top: heigth,
        behavior: 'smooth'
    })
}

function header() {
    // window.scrollTo(0,0)
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
}