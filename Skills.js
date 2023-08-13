const software_icon_home = document.querySelector("#icons-home");

window.onload = function() {
    transition_icons();
}

function transition_icons()
{
    const indox = [0,1,2,3,4,5,6,7,8,9,10,11,12];
    let choice = indox[Math.round(Math.random() * (indox.length - 1))];

    software_icon_home.removeChild(software_icon_home.firstChild);

    const new_pic = document.createElement('img');
    new_pic.src = choice + ".png";
    new_pic.classList.add("icon-pic-new");
    new_pic.type = "icon-pic-new";


    new_pic.addEventListener('animationend', () => {
        transition_icons();
    });

    software_icon_home.appendChild(new_pic);
}