
const software_icon_home = document.querySelector("#icons-home");

window.onload = function() {
    transition_icons(0);
}

function transition_icons(ind)
{
    software_icon_home.removeChild(software_icon_home.firstChild);
    
    const new_pic = document.createElement('img');
    new_pic.src = ind + ".png";
    new_pic.classList.add("icon-pic-new");
    new_pic.type = "icon-pic-new";
    if(ind >= 7)
    {
        ind = 0;
    }
    else
    {
        ind += 1;
    }

    new_pic.addEventListener('animationend', () => {
        transition_icons(ind);
    });

    software_icon_home.appendChild(new_pic);
}


const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    
    "Games",
    
    "Stories",
    "Models",

    
    "Scripts",
    "Code",
    "UX",
    "Data Structures",
    "Algo",
    
    
    "People Happy",

];

const morphTime = 0.75;
const cooldownTime = 0.17;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();



const map = document.querySelector('.map');
const observer = new IntersectionObserver(entries => {
  map.classList.toggle( 'map-animation', entries[0].isIntersecting );
});

observer.observe( map );



