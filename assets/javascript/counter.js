let numberValues = document.getElementsByClassName('numbers__number__text__value');
for (element of numberValues){
   element.increment = function(i, max, add) {
    setInterval(() => {
        if(i < max){
            this.innerText = i+=add
        }
    }, 10);
   }

   element.estaVisivel = function () {
    const posicoes = this.getBoundingClientRect();
    const inicio = posicoes.top;
    const fim = posicoes.bottom;
    let estaVisivel = false
    
    if((inicio >= 0) && (fim <= window.innerHeight)) {
            estaVisivel = true;
    }
    
    return estaVisivel;
    
}
}

numberValues[0].increment(0,999,9)
numberValues[1].increment(0,98,1)
numberValues[2].increment(0,100,1)


// setInterval(() => {
//     // console.log(numberValues[0].offsetParent === null)
//     console.log(numberValues[0].estaVisivel())
// }, 1000);