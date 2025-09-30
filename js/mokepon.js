let playerAttack
let enemyAttack



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
    let randomSelection = random(1,6)
    let spanEnemyMokepon = document.getElementById("enemy-mokepon");

    if (randomSelection == 1) {
        spanEnemyMokepon.innerHTML = "Hipodoge";
    } else if (randomSelection == 2) {
        spanEnemyMokepon.innerHTML = "Capipepo";
    } else if (randomSelection == 3) {
        spanEnemyMokepon.innerHTML = "Ratigy";
    } else if (randomSelection == 4) {
        spanEnemyMokepon.innerHTML = "Langostel";
    } else if (randomSelection == 5) {
        spanEnemyMokepon.innerHTML = "Tucapalm";
    } else if (randomSelection == 6) {
        spanEnemyMokepon.innerHTML = "Pydos";
    }
}

function fireAttack() {
    let spanPlayerAttack = document.getElementById("player-attack");  // Added this line to modify span player's attack in the HTML
    spanPlayerAttack.innerHTML = "Fire"; // Added this line to modify span player's attack in the HTML
    enemyRandomAttack()
}

function waterAttack() {
    playerAttack = 'Water'
    enemyRandomAttack()
}

function grassAttack() {
    playerAttack = 'Grass'
    enemyRandomAttack()
}

function enemyRandomAttack() {
    let spanEnemyAttack = document.getElementById("enemy-attack"); // Added this line to modify span enemy's attack in the HTML
    let randomAttack = random(1, 3)

    if (randomAttack == 1) {
        spanEnemyAttack.innerHTML = "Fire"; // Added this line to modify span enemy's attack in the HTML
        enemyAttack = "Fire";
    } else if (randomAttack == 2) {
        enemyAttack = "Water";
    } else if (randomAttack == 3) {
        enemyAttack = "Grass";
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }


window.addEventListener("load", startGame);

let buttonRestart = document.getElementById("button-restart");
