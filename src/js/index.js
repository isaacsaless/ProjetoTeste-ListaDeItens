const mudarTema = document.getElementById("tema-site");
const body = document.querySelector("body");
const botaoTrocaTema = document.querySelector(".mudar-tema");

mudarTema.addEventListener("click", () => {
    const darkmodeOn = body.classList.contains("darkmode");
    if (darkmodeOn) {
        body.classList.remove("darkmode");
        botaoTrocaTema.setAttribute("src", "./src/imagens/minecraft-sun-png-6.png");
    } else {

        body.classList.add("darkmode");
        botaoTrocaTema.setAttribute("src", "./src/imagens/lua.png");
    }
});