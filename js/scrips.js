let boton = document.getElementById("headphones");
let reprod = document.getElementById("spoty");
let contador = 0;

boton.addEventListener("click", function(e){
    e.preventDefault();
    if(contador==0){
        reprod.className = (" mostrar")
        contador=1;
    }else{
        spoty.classList.remove("mostrar")
        spoty.className = (" nomostrar")
        contador=0;
    }
})