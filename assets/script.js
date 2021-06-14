const myname = document.getElementById('name')
const btn = document.getElementById('btn')

validOrNot(myname, /^[a-z ,.'-]+$/i)
validOrNot(firstName, /^[a-z ,.'-]+$/i)
validOrNot(email, /^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/, 'exemple johndoe@gmail.com')
validOrNot(date, /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/)
validOrNot(nickname, /^[a-z0-9_-]{3,15}$/)
validOrNot(password, /^(?=.*?[A-Z])(?=.*?[a-z]).{5,}$/, 'il doit y avoir une majuscule et plus de 5 caractères')
pass(password2, 'il ne correspond pas')
function pass(target, error) {
    let gg = document.createElement('div')
    target.addEventListener('focusout', () => {
        if (password2.value == password.value ) {
            target.classList.remove('is-invalid')
            target.classList.add('is-valid')
        } else {
            target.classList.remove('is-valid')
            target.classList.add('is-invalid')
            gg.innerHTML = `<div id="emailHelp" class="form-text">${error}</div> `
            target.parentNode.append(gg)
        }
        submit()
    })
}


function validOrNot (target, rege, error) {
    let regex = rege
    let gg = document.createElement('div')
    target.addEventListener('focusout', () => {
        if (target.value.match(regex) ) {
            target.classList.remove('is-invalid')
            target.classList.add('is-valid')
        } else {
            target.classList.remove('is-valid')
            target.classList.add('is-invalid')
            gg.innerHTML = `<div id="emailHelp" class="form-text">${error}</div> `
            target.parentNode.append(gg)
        }
        submit()
    })
}


function submit () {
    let valid = document.querySelectorAll('.is-valid')
    if (valid.length == 7) {
        btn.removeAttribute('disabled', 1)
    } else {
        btn.setAttribute('disabled', 1)
    }
}

/* const colorPicker = document.getElementById('colorPicker')
document.body.style.backgroundColor = colorPicker.value
colorPicker.addEventListener('change', () => {
    document.body.style.backgroundColor = colorPicker.value
}) */

function comment () {
    let gg = document.createElement('p')
    gg.innerHTML = 'test'
    let newDiv = `<div class="form-text">We'll never share your email with anyone else.</div>`
    myname.parentNode.append(newDiv)
}