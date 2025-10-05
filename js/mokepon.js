let playerAttack
let enemyAttack
let playerLives = 3;
let enemyLives = 3;


function startGame() {
    let buttonMokepon = document.getElementById("button-select-mokepon");
    buttonMokepon.addEventListener("click", playerSelection);   // When the button is clicked, it will call the playerSelection function

    let buttonFire = document.getElementById("button-fire");
    buttonFire.addEventListener("click", fireAttack);
    let buttonWater = document.getElementById("button-water");
    buttonWater.addEventListener("click", waterAttack);
    let buttonGrass = document.getElementById("button-grass");
    buttonGrass.addEventListener("click", grassAttack);
    
    
}

function playerSelection() {    
    let inputHipodoge = document.getElementById("Hipodoge"); // Get the input element by its ID
    let inputCapipepo = document.getElementById("Capipepo");
    let inputRatigy = document.getElementById("Ratigy");
    let inputLangostel = document.getElementById("Langostel");
    let inputTucapalm = document.getElementById("Tucapalm");
    let inputPydos = document.getElementById("Pydos");
    let spanPlayerMokepon = document.getElementById("player-mokepon");
    
    

    if (inputHipodoge.checked) {
        spanPlayerMokepon.innerHTML = "Hipodoge"; // Change the inner HTML of the span to show the selected Mokepon
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
    playerAttack = "Fire";
    enemyRandomAttack()
}

function waterAttack() { 
    playerAttack = "Water"  
    enemyRandomAttack()
}

function grassAttack() {  
    playerAttack = "Grass"
    enemyRandomAttack()
}

function enemyRandomAttack() {
    let randomAttack = random(1, 3)

    if (randomAttack == 1) {        
        enemyAttack = "Fire";        
    } else if (randomAttack == 2) {        
        enemyAttack = "Water";
    } else if (randomAttack == 3) {             
        enemyAttack = "Grass";  
    }
    combat()
}

function combat() {
    let spanPlayerLives = document.getElementById("player-lives");
    let spanEnemyLives = document.getElementById("enemy-lives");

    if (playerAttack == enemyAttack) {        
        createMessage("It's a tie");  //Send the message as the parameter to the function.
    } else if (playerAttack == "Fire" && enemyAttack == "Grass") {
        createMessage("You win");
        spanEnemyLives.innerHTML = --enemyLives; // Decrease enemy lives by 1 and update the display
    } else if (playerAttack == "Water" && enemyAttack == "Fire") {
        spanEnemyLives.innerHTML = --enemyLives;
        createMessage("You win");
    } else if (playerAttack == "Grass" && enemyAttack == "Water") {
        spanEnemyLives.innerHTML = --enemyLives;
        createMessage("You win");
    } else {
        createMessage("You lose");
        spanPlayerLives.innerHTML = --playerLives; // Decrease player lives by 1 and update the display
    }

}

function createMessage(combatResult){   // Using the parameter as an internal variable for the fuction.
    let sectionMessages = document.getElementById("messages"); // Get the section where messages will be displayed
    let paragraph = document.createElement("p"); // Create a new paragraph element
    paragraph.innerHTML = "Your Mokepon attacked with " + playerAttack + ", the enemy Mokepon attacked with " + enemyAttack +"- " + combatResult; // Set the inner HTML of the paragraph

    sectionMessages.appendChild(paragraph); // Add the paragraph to the messages section
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }


window.addEventListener("load", startGame);

let buttonRestart = document.getElementById("button-restart");
