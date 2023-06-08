const buttonNavbar = document.getElementById('mobile_menu')
const navBar = document.getElementById('header__navbar')

buttonNavbar.addEventListener('click',activeNavBar)

function activeNavBar(){
    // console.log(navBar)
    navBar.classList.toggle('header__navbar-activate')
}
