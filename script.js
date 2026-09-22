const message = document.getElementById("message");
const openMessage = document.getElementById("openMessage");

const loveButton = document.getElementById("loveButton");
const hiddenMessage = document.getElementById("hiddenMessage");


// Show the apology message
openMessage.addEventListener("click", () => {
    message.classList.remove("hidden");
    openMessage.style.display = "none";
});


// Show the final message
loveButton.addEventListener("click", () => {
    hiddenMessage.classList.remove("hidden");
    loveButton.style.display = "none";
});

