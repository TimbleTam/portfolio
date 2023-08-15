const slide_left = document.querySelectorAll(".slide-left");
const slide_right = document.querySelectorAll(".slide-right");

const slide_left2 = document.querySelectorAll(".slide-left2");
const slide_right2 = document.querySelectorAll(".slide-right2");

const opac = document.querySelectorAll(".opacitytrans");



const observer_left = new IntersectionObserver((entries) => {
    
    slide_left.forEach((entry) => {
        entry.classList.toggle(
            "slide-in-left-animation",
            entries[0].isIntersecting
        );
    });
});

const observer_left2 = new IntersectionObserver((entries) => {
    
    slide_left2.forEach((entry) => {
        entry.classList.toggle(
            "slide-in-left-animation2",
            entries[0].isIntersecting
        );
    });
});

const observer_right = new IntersectionObserver((entries) => {
    

    slide_right.forEach((entry) => {
        entry.classList.toggle(
            "slide-in-right-animation",
            entries[0].isIntersecting
        );
    });

});

const observer_right2 = new IntersectionObserver((entries) => {
    

    slide_right2.forEach((entry) => {
        entry.classList.toggle(
            "slide-in-right-animation2",
            entries[0].isIntersecting
        );
    });

});

const opacityobserver = new IntersectionObserver((entries) => {
    

    opac.forEach((entry) => {
        entry.classList.toggle(
            "opacity-animation",
            entries[0].isIntersecting
        );
    });

});

opac.forEach((entry) => {
    opacityobserver.observe(entry);
});



slide_left.forEach((entry) => {
    observer_left.observe(entry);
});

slide_right.forEach((entry) => {
    observer_right.observe(entry);
});

slide_left2.forEach((entry) => {
    observer_left2.observe(entry);
});

slide_right2.forEach((entry) => {
    observer_right2.observe(entry);
});
