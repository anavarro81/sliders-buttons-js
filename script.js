let sliderInner$$ = document.querySelector(".slider-inner")
let allImages$$ = document.querySelectorAll("img")
let allButtons$$ = document.querySelectorAll("button")

let index = 0;
let nImagenes = allImages$$.length

console.log(allButtons$$);
console.log(allButtons$$.length);

for (const boton of allButtons$$) {

    boton.addEventListener('click', (event) => {
        
        desplazamiento = parseInt(event.target.value) * -100

        sliderInner$$.style.transform = "translateX("+ desplazamiento + "%)"; 

    })
    
}


// setInterval(() => {
    
//     desplazamiento = index * -100
//     sliderInner$$.style.transform = "translateX("+ desplazamiento + "%)";    
//     index++;
    
//     if (index > nImagenes-1) {
//         index = 0
//     }

// }, 3000);