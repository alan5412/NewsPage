const botonCerrar = document.querySelector(".close-button");
const botonAbrir = document.querySelector(".open-button")
const nav = document.getElementById("nav-menu")


botonAbrir.addEventListener('click', () => {
    console.log('abrir')
    nav.classList.add("visible");
})

botonCerrar.addEventListener ('click', () =>{
    console.log('cerrar')
    nav.classList.remove("visible");

})