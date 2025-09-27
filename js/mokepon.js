function startGame() {
    let buttonMokepon = document.getElementById("button-select-mokepon");
    buttonMokepon.addEventListener("click", playerSelection);
}

function playerSelection() {    
    let inputHipodoge = document.getElementById("Hipodoge");
    let inputCapipepo = document.getElementById("Capipepo");
    let inputRatigy = document.getElementById("Ratigy");
    let inputLangostel = document.getElementById("Langostel");
    let inputTucapalm = document.getElementById("Tucapalm");
    let inputPydos = document.getElementById("Pydos");
    


    
    if (inputHipodoge.checked) {
        alert("Select your Hipodoge");
    } else if (inputCapipepo.checked) {
        alert("Select your Capipepo");
    } else if (inputRatigy.checked) {
        alert("Select your Ratigy");
    } else if (inputLangostel.checked) {
        alert("Select your Langostel");
    } else if (inputTucapalm.checked) {
        alert("Select your Tucapalm");
    } else if (inputPydos.checked) {
        alert("Select your Pydos");
    } else {
        alert("Select a Mokepon");
    }
}

window.addEventListener("load", startGame);




let buttonRestart = document.getElementById("button-restart");
let buttonFire = document.getElementById("button-fire");
let buttonWater = document.getElementById("button-water");
let buttonEarth = document.getElementById("button-earth");