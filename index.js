var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 4000);


// why join us 
window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}


// what we train 
var stickyElem = document.querySelector(".sticky");
var currStickyPos = stickyElem.getBoundingClientRect().top + window.pageYOffset;
window.addEventListener('scroll', train);
function train() {
    if (window.pageYOffset > currStickyPos) {
        stickyElem.style.position = "fixed";
        stickyElem.style.top = "0vh";
        stickyElem.style.left = "50vw";
    } else {
        stickyElem.style.position = "initial";
        stickyElem.style.top = "initial";
    }
}

var stickyoverElem = document.querySelector(".stickover");
var currStickyOverPos = stickyoverElem.getBoundingClientRect().top + window.pageYOffset;
window.addEventListener('scroll', trainover);
function trainover() {
    if (window.pageYOffset > currStickyOverPos) {
        stickyElem.style.position = "absolute";
        stickyElem.style.top = "602vh";
    }
}


//bmi calculator
function calculator() {
    let height = parseInt(document.querySelector("#height").value);

    let weight = parseInt(document.querySelector("#weight").value);

    let result = document.querySelector("#result");

    if (height === "" || isNaN(height))
        result.innerHTML = "Provide a valid Height!";

    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Provide a valid Weight!";

    else {

        let bmi = (weight / ((height * height)
            / 10000)).toFixed(2);

        if (bmi < 18.6) result.innerHTML =
            `Under Weight : <span>${bmi}</span>`;

        else if (bmi >= 18.6 && bmi < 24.9)
            result.innerHTML =
                `Normal : <span>${bmi}</span>`;

        else result.innerHTML =
            `Over Weight : <span>${bmi}</span>`;
    }
}
