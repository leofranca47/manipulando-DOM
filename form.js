function onSubmit(event) {
    var name = document.getElementsByName('name')[0].value
    console.log(name)
    console.log(document.getElementsByName('email')[0].value)
    console.log(document.getElementsByName('password')[0].value)
    console.log(document.querySelector('input[name=sexo]:checked').value)
    return false
}
