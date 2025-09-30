let playerAttack

function startGame() {
    let buttonMokepon = document.getElementById("button-select-mokepon");
    buttonMokepon.addEventListener("click", playerSelection);

    let buttonFire = document.getElementById("button-fire");
    buttonFire.addEventListener("click", fireAttack);
    let buttonWater = document.getElementById("button-water");
    buttonWater.addEventListener("click", waterAttack);
    let buttonGrass = document.getElementById("button-grass");
    buttonGrass.addEventListener("click", grassAttack);
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

    enemySelection()
}

function enemySelection() {
    let randomAttack = random(1,6)
    let spanEnemyMokepon = document.getElementById("enemy-mokepon");

    if (randomAttack == 1) {
        spanEnemyMokepon.innerHTML = "Hipodoge";
    } else if (randomAttack == 2) {
        spanEnemyMokepon.innerHTML = "Capipepo";
    } else if (randomAttack == 3) {
        spanEnemyMokepon.innerHTML = "Ratigy";
    } else if (randomAttack == 4) {
        spanEnemyMokepon.innerHTML = "Langostel";
    } else if (randomAttack == 5) {
        spanEnemyMokepon.innerHTML = "Tucapalm";
    } else if (randomAttack == 5) {
        spanEnemyMokepon.innerHTML = "Pydos";
    }
}

function fireAttack() {
    playerAttack = 'Fire'
    alert(playerAttack)
}

function waterAttack() {
    playerAttack = 'Water'
    alert(playerAttack)
}

function grassAttack() {
    playerAttack = 'Grass'
    alert(playerAttack)
}




function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }


window.addEventListener("load", startGame);




let buttonRestart = document.getElementById("button-restart");
