const header = document.getElementById('header')
const logo = document.getElementById('header__logo')
const buttonNavbar = document.getElementById('mobile_menu')
const navBar = document.getElementById('header__navbar')

buttonNavbar.addEventListener('click',activeNavBar)

function activeNavBar(){
    // console.log(navBar)
    navBar.classList.toggle('header__navbar-activate')
    buttonNavbar.classList.toggle('mobile_menu-activate')
    if(navBar.classList[1] == 'header__navbar-activate'){
        logo.src = "./assets/images/logos/Logo-Horizontal-2.png"
        header.style.backgroundColor = '#fff'
    }else{
        logo.src = "./assets/images/logos/Logo-Horizontal-1.png"
        header.style.backgroundColor = '#8585858c'
    }

    
}
