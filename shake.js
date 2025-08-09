const button = document.getElementById("button");
const container = document.getElementById("input");
const span = document.getElementById("span");

button.addEventListener("click", function() {
    const value = container.value.trim();
    if (value.length === 0) {
        container.classList.add("shake");
        span.style.visibility = "visible";
        setTimeout(function() {
            container.classList.remove("shake");
            span.style.visibility = "hidden";
        }, 700);
    } else {
        alert("Input is valid");
    }
});