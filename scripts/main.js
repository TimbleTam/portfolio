const software_icon_home = document.querySelector("#icons-home");

window.onload = function () {
    transition_icons(0);
};

function transition_icons(ind) {
    software_icon_home.removeChild(software_icon_home.firstChild);

    const new_pic = document.createElement("img");
    new_pic.src = "./img/" + ind + ".png";
    new_pic.classList.add("icon-pic-new");
    new_pic.type = "icon-pic-new";
    if (ind >= 7) {
        ind = 0;
    } else {
        ind += 1;
    }

    new_pic.addEventListener("animationend", () => {
        transition_icons(ind);
    });

    software_icon_home.appendChild(new_pic);
}

const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2"),
};

const texts = [
    "Games",
    "Stories",
    "Models",
    "Scripts",
    "Vue Apps",
    "React Apps",
    "Code",
    "UX",
    "Data Structures",
    "Algo",
    "Magic Happen",
    "Deadlines",
    "People Happy",
];

const mobile_animated = document.getElementById("morph-text-mobile");
const back_animated = document.getElementById("introduction");
let textIndex = 0;
let ind = ((Math.random() * 11) + 1).toFixed();

mobile_animated.addEventListener("animationend", () => {
    mobile_animated.style.animationName = "";
    mobile_animated.style.animationDelay = "0s";
    textIndex++;
    if (textIndex >= texts.length) {
        textIndex = 0;
    }
    mobile_animated.innerHTML = texts[textIndex];
    setTimeout(() => {mobile_animated.style.animationName = "MobileMorphAnim"; });
});

function reset_background() {
    back_animated.style.animationName = "";
    let new_ind = ((Math.random() * 10) + 1).toFixed();
    if (new_ind == ind) {
        new_ind--;
    }

    if (new_ind <= 0) {
        new_ind = 11;
    }

    ind = new_ind;

    back_animated.style.backgroundImage = "linear-gradient(to bottom, rgba(109, 109, 109, 0.5), rgba(23, 23, 23, 1)), url('./img/me_pic_" + ind.toString() + ".jpg')";

    setTimeout(() => { back_animated.style.animationName = "BackAnim"; }, 1);
}


back_animated.addEventListener("animationend", () => {
    reset_background();
});

reset_background();





