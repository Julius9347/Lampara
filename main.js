const btn = document.querySelector('#btn');
const etiqueta = document.querySelector('#etiqueta');
const astros = document.querySelector('#contenedor-astro')
const luz = document.querySelector('#luz')

btn.style.background = 'linear-gradient(to bottom, rgba(255, 255, 255, 0.615), rgb(94, 38, 38), rgb(74, 52, 52))';
btn.style.transform = 'scale(1)';
etiqueta.innerHTML = '<p>Apagado</p>'
luz.style.background = 'radial-gradient(rgba(255, 255, 255, 0), rgb(0, 0, 0))';
let click = 1;

btn.addEventListener('click', (event)=>{
    event.preventDefault()
    if(event.srcElement.nodeName == "DIV"){
        btn.style.transform = 'scale(0.9)';
        setTimeout(botonNoPresionado, 500);
        click++;
        if (click %= 2){
            btn.style.background = 'linear-gradient(to bottom, rgba(255, 255, 255, 0.615), rgb(94, 38, 38), rgb(74, 52, 52))';
            luz.style.background = 'radial-gradient(rgba(255, 255, 255, 0), rgb(0, 0, 0))';
            astros.innerHTML = ' <img src="./img/luna.png" alt="" id="astro" />'
            etiqueta.innerHTML = '<p>Apagado</p>'
    }else{
        btn.style.background = 'linear-gradient(to bottom, rgb(254, 118, 118), rgb(216, 0, 0))';
        luz.style.background = 'radial-gradient( rgba(255, 98, 0, 0.100), rgba(255, 255, 2))';
        etiqueta.innerHTML = '<p>Encendido</p>'
        astros.innerHTML = ' <img src="./img/sol.png" alt="" id="astro" />'
    }
    }
})
function botonNoPresionado(){
    btn.style.transform = 'scale(1)';
}