// hiden end visible login end sign up forms
let loginShow = document.querySelector('#formLogar')
let signShow = document.querySelector('#formCadastrar')
let formOpen = document.querySelector('#formOpen')
let login_open = document.querySelector('.open-btn-logar')
let cadastro_open = document.querySelector('.open-btn-cadastro')
let btnLogin = document.querySelector('.btn-login')
let btnCadastro = document.querySelector('.btn-cadastrar')
let btnCancel = document.querySelector('.btn-cancel')
let btnCancel2 = document.querySelector('.btn-cancel-2')

btnCancel.addEventListener("click", closeAll)
btnCancel2.addEventListener("click", closeAll2)
btnCadastro.addEventListener("click", login)
btnLogin.addEventListener("click", cadastro)
login_open.addEventListener("click", open_login)
cadastro_open.addEventListener("click", open_cadastro)

function closeAll() {
    loginShow.style.display = "none"
    signShow.style.display = "none"
    formOpen.style.transform = "scale(0)"
}

function closeAll2() {
    loginShow.style.display = "none"
    signShow.style.display = "none"
    formOpen.style.transform = "scale(0)"
}

function open_login() {
    loginShow.style.display = "block"
    signShow.style.display = "none"
    formOpen.style.transform = "scale(1)"
}

function open_cadastro() {
    loginShow.style.display = "none"
    signShow.style.display = "block"
    formOpen.style.transform = "scale(1)"
}

function login() {
    // alert("123")
    loginShow.style.display = "none"
    signShow.style.display = "block"
}

function cadastro() {
    // alert("123")
    loginShow.style.display = "block"
    signShow.style.display = "none"
}

const menuItem = document.querySelectorAll('.navbar-nav a[href^="#"]')
const nav = document.querySelector('#testatico')

// select active menuItem onscroll

menuItem.forEach(item => {
    item.addEventListener("click", scrollTo)
    item.addEventListener("click", ativeItem)
})

function ativeItem() {
    const at = getAttribute("class")
    console.log(at)
}

function scrollTo(event) {
    event.preventDefault()
    const element = event.target
    const id = element.getAttribute("href")
    const to = document.querySelector(id).offsetTop
    

    window.scroll({
        top: to,
        behavior: "smooth"
    })

    //     if( to > 50) {
    //          nav.setAttribute("class", "navbar navbar-expand-md navbar-light fixed-top scrolling-navbar")
    //   } else if (to < 0) {
    //          nav.setAttribute("class", "navbar navbar-expand-md navbar-light sticky-top scrolling-navbar")
    //       }
}

// window.onscroll = function () {
//     nav.setAttribute("class", "navbar navbar-expand-md navbar-light fixed-top scrolling-navbar")
// }