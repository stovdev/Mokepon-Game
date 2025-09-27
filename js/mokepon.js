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
    let spanPlayerMokepon = document.getElementById("player-mokepon");
    


    
    if (inputHipodoge.checked) {
        spanPlayerMokepon.innerHTML = "Hipodoge";
    } else if (inputCapipepo.checked) {
        spanPlayerMokepon.innerHTML = "Capipepo";
    } else if (inputRatigy.checked) {
        spanPlayerMokepon.innerHTML = "Ratigy";
    } else if (inputLangostel.checked) {
        spanPlayerMokepon.innerHTML = "Langostel";
    } else if (inputTucapalm.checked) {
        spanPlayerMokepon.innerHTML = "Tucapalm";
    } else if (inputPydos.checked) {
        spanPlayerMokepon.innerHTML = "Pydos";
    } else {
        alert("Select a Mokepon");
    }
}

window.addEventListener("load", startGame);




let buttonRestart = document.getElementById("button-restart");
let buttonFire = document.getElementById("button-fire");
let buttonWater = document.getElementById("button-water");
let buttonEarth = document.getElementById("button-earth");