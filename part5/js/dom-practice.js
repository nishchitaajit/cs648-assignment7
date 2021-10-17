/*eslint-env browser*/

//STEP 1

function displayMessage() {
    window.alert(" Step 1 : I have been clicked");
}

//STEP 2

var step2Button = window.document.getElementById("step2Button");
step2Button.onclick = function () {
    window.alert("Step 2 : I have been clicked");
};

//STEP 3

var step3Button = window.document.getElementById("step3Button");
step3Button.addEventListener("click", display, false);
function display() {
    window.alert("Step 3 : I have been clicked");
}

//STEP 4

var step4Button = window.document.getElementById("step4Button");
step4Button.addEventListener("click", function () {
    window.alert("Step 4 : I have been clicked");
}, false);

//STEP 5

function init() {
    "use strict";
    var step5Button = window.document.getElementById("step5Button");
    step5Button.addEventListener("click", function() {
        window.alert("Step5 : I have been clicked");
    });
}
window.addEventListener("load", init);
