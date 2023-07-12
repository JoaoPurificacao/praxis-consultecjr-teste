const menuD = document.getElementsByClassName('services__menu__options__desktop')
const menuM = document.getElementsByClassName('services__menu__options__mobile')
const options = document.getElementsByClassName('services__container__text')


for(option of menuD){
    option.addEventListener('click',function(){
        for(i = 0; i<menuD.length;i++){
            menuD[i].classList.remove('actived')
            menuM[i].classList.remove('actived')
            options[i].classList.remove('show')
            if(this == menuD[i]){
                this.classList.add('actived')
                menuM[i].classList.add('actived')
                options[i].classList.add('show')
            }
        }
    })
}

for(option of menuM){
    option.addEventListener('click',function(){
        for(i = 0; i<menuM.length;i++){
            menuD[i].classList.remove('actived')
            menuM[i].classList.remove('actived')
            options[i].classList.remove('show')
            if(this == menuM[i]){
                this.classList.add('actived')
                menuD[i].classList.add('actived')
                options[i].classList.add('show')
                // console.log(this)
                // console.log(options[i])
            }
        }
    })
}
