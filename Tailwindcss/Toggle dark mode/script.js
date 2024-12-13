const darkMode = () => {
    document.body.classList.toggle("dark");
    document.getElementById("darkModeStatus").innerHTML = document.body.classList.contains("dark") ? "Dark" : "Light";
};

document.getElementById("darkModeToggle").addEventListener("click", darkMode)