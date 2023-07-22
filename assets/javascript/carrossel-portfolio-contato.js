let portfolio = document.getElementById('portfolio');
let arrowLeft = document.getElementById('portfolio__container__arrow__left');
let arrowRight = document.getElementById('portfolio__container__arrow__right');
const imagens = ['portfolio__backgroundImg1','portfolio__backgroundImg2','portfolio__backgroundImg3', 'portfolio__backgroundImg4', 'portfolio__backgroundImg5', 'portfolio__backgroundImg6']
let count = 0;

arrowLeft.addEventListener('click',function(){
    if(count <= 0){
        count = imagens.length-1
        portfolio.classList.remove(imagens[0])
        portfolio.classList.add(imagens[count])
    }else{
        portfolio.classList.remove(imagens[count])
        portfolio.classList.add(imagens[count-1])
        count--;
    }
})

arrowRight.addEventListener('click',function(){
    if(count >= imagens.length-1){
        count = 0
        portfolio.classList.remove(imagens[imagens.length-1])
        portfolio.classList.add(imagens[count])
    }else{
        portfolio.classList.remove(imagens[count])
        portfolio.classList.add(imagens[count+1])
        count++;
    }
})
