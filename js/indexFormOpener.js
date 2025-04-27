const fms = document.getElementById("fms");

const f1 = document.getElementById("f1");
const f2 = document.getElementById("f2");
const f3 = document.getElementById("f3");
const f4 = document.getElementById("f4");
const f5 = document.getElementById("f5");
const f6 = document.getElementById("f6");

function showUserLoginForm() {
    fms.style.display = (window.getComputedStyle(f1).display == "none")?"flex" : "none";
    f1.style.display = (window.getComputedStyle(f1).display == "none")?"flex" : "none";
    f2.style.display = "none";
    f3.style.display = "none";
    f4.style.display = "none";
    f5.style.display = "none";
    f6.style.display = "none";
}

function showUserSignupForm() {
    fms.style.display = (window.getComputedStyle(f4).display == "none")?"flex" : "none";
    f1.style.display = "none";
    f4.style.display = (window.getComputedStyle(f4).display == "none")?"block" : "none";
    f3.style.display = "none";
    f2.style.display = "none";
    f5.style.display = "none";
    f6.style.display = "none";
}

function showSeekerLoginForm() {
    fms.style.display = (window.getComputedStyle(f5).display == "none")?"flex" : "none";
    f1.style.display = "none";
    f5.style.display = (window.getComputedStyle(f5).display == "none")?"block" : "none";
    f3.style.display = "none";
    f4.style.display = "none";
    f2.style.display = "none";
    f6.style.display = "none";
}

function showSeekerSignupForm() {
    fms.style.display = (window.getComputedStyle(f6).display == "none")?"flex" : "none";
    f1.style.display = "none";
    f6.style.display = (window.getComputedStyle(f6).display == "none")?"block" : "none";
    f3.style.display = "none";
    f4.style.display = "none";
    f2.style.display = "none";
    f5.style.display = "none";
}

function showUserLoginWithEmailForm() {
    fms.style.display = (window.getComputedStyle(f2).display == "none")?"flex" : "none";
    f1.style.display = "none";
    f2.style.display = (window.getComputedStyle(f2).display == "none")?"block" : "none";
    f3.style.display = "none";
    f4.style.display = "none";
    f5.style.display = "none";
    f6.style.display = "none";
}

function showUserLoginWithContactForm() {
    fms.style.display = (window.getComputedStyle(f3).display == "none")?"flex" : "none";
    f1.style.display = "none";
    f3.style.display = (window.getComputedStyle(f3).display == "none")?"block" : "none";
    f2.style.display = "none";
    f4.style.display = "none";
    f5.style.display = "none";
    f6.style.display = "none";
}

function closeButton() {
    fms.style.display = "none";
    f1.style.display = "none";
    f2.style.display = "none";
    f3.style.display = "none";
    f4.style.display = "none";
    f5.style.display = "none";
    f6.style.display = "none";
}

function returnButton() {
    fms.style.display = "flex";
    f1.style.display = "block";
    f2.style.display = "none";
    f3.style.display = "none";
    f4.style.display = "none";
    f5.style.display = "none";
    f6.style.display = "none";
}