const banner = document.getElementById('banner')
const imagens = ['banner__backgroundImg1','banner__backgroundImg2','banner__backgroundImg3', 'banner__backgroundImg4']

let count = 0

setInterval(() => {
    // console.log(count)
    // console.log(imagens[count])
    if(count > 3){
        // console.log('Maior')
        banner.classList.add(imagens[count])
        banner.classList.remove(imagens[imagens.length-1])
        count = 0
    }else{
        banner.classList.add(imagens[count])
        banner.classList.remove(imagens[count-1])
        count++
    }
}, 5000);