const cityInput = document.getElementById("city");
const hobbyInput = document.getElementById("hobby");
const button = document.getElementById("btn");
const btnDelete = document.getElementById("delete");

button.addEventListener("click", (event) => {
    const city = cityInput.value;
    const hobby = hobbyInput.value;
    localStorage.setItem("La mia città è:", city);
    localStorage.setItem("Il mio hobby è:", hobby);
    sessionStorage.setItem("La mia città è:", city);
    sessionStorage.setItem("Il mio hobby è:", hobby);
});

function recupero() {
    const cityLocal = localStorage.getItem("La mia città è:") || "";
    cityInput.innerText = cityLocal;
    const hobbyLocal = localStorage.getItem("Il mio hobby è:") || "";
    hobbyInput.innerText = hobbyLocal;
    const citySession = sessionStorage.getItem("La mia città è:") || "";
    cityInput.innerText = citySession;
    const hobbySession = sessionStorage.getItem("Il mio hobby è:") || "";
    hobbyInput.innerText = hobbySession;

    console.log("Città:", cityLocal);
    console.log("Hobby:", hobbyLocal);
    console.log("La mia città:", citySession);
    console.log("Il mio hobby:", hobbySession)
};

btnDelete.addEventListener("click", (event) => {
    localStorage.removeItem("Città");
    localStorage.removeItem("Hobby");
    sessionStorage.removeItem("Città");
    sessionStorage.removeItem("Hobby");
    recupero()
});