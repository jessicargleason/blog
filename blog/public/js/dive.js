window.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById("scroll");
    const hero =  document.getElementById("hero");
    const body = document.getElementById("main");
    button.addEventListener("click", function() {
        body.scrollIntoView({behavior: "smooth"});
    })
});