const inicio = 1976;
const anioActual = new Date().getFullYear();
const anios = anioActual - inicio;
document.getElementById("contador-anios").textContent =
 `Años desde la ultima dictadura: ${anios}`;

const buscador = document.getElementById("buscador");
const testimonios = document.querySelectorAll(".testimonio");

buscador.addEventListener("input", () => {
    const texto = buscador.ariaValueMax.toLowerCase();
    testimonios.forEach(t => {
        const contenido = t.textContent.toLowerCase();
        t.style.display = contenido.includes(texto) ? "" : "none";
    })
})

// Verificacion de formulario

const formulario = document.getElementById("form")
const nombreForm = document.getElementById("nombre")
const mensaje = document.getElementById("mensaje")

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    const nombre = nombreForm.value.trim()
    mensaje.classList.remove("d-none", "alert-success", "alert-danger")

    if(nombre==="") {
        mensaje.textContent = "Escribir tu nombre"
        mensaje.classList.add("alert-danger")
    }
});
