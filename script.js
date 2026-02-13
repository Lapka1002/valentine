const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");

/* YES CLICK */

yesBtn.addEventListener("click", () => {

    screen1.classList.remove("active");
    screen2.classList.add("active");

});


/* NO BUTTON RUN AWAY */

noBtn.addEventListener("mouseenter", () => {

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});


/* HEARTS */

const heartsContainer = document.getElementById("hearts-container");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (Math.random() * 3 + 3) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}

setInterval(createHeart, 300);
