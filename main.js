// Counters - 5
var count = 0;
var totalCount = 0;
var clickersCount = 0;
var ovensCount = 0;
var chefsCount = 0;

// CPS - 6
var mouseCPS = 1;
var clickerCPS = 0;
var ovensCPS = 0;
var chefsCPS = 0;
var totalCPS = 0;
var tomatoCPS = 0;

// Upgrades Enabled - 2
var tomatoSauce = false;
var graduateCookers = false;

// Building Prices - 3
var clickersPrice = 15;
var ovensPrice = 100;
var chefsPrice = 1100;


// Unlock Checkers - 4
var graduateEnabled = false;
var tomatoEnabled = false;
var ovensEnabled = false;
var chefsEnabled = false;

var restaurantName;
window.setInterval(clickersTimer, 1000); 
window.setInterval(ovensTimer, 1000);
window.setInterval(chefsTimer, 1000);

function playButtonSound() {
    var sound = new Audio();
    sound.src = "sounds/button-click.mp3";
    sound.play();
}

function playPizzaSound() {
    var sound = new Audio(); 
    sound.src = "sounds/pizza-click.mp3"; 
    sound.play();
}

function resizePizzaSmall() {
    document.getElementById("pizza").style.transform = "scale(0.97)";
}

function resizePizzaNormal() {
    document.getElementById("pizza").style.transform = "scale(1)";
}

function resizePizzaHover() {
    document.getElementById("pizza").style.transform = "scale(1.05)";
}

function dark() {
    var element = document.body; 
    element.classList.toggle("dark");
    document.getElementsByClassName("border").classna = "borderWhite";
    $("th, td").toggleClass("borderWhite");
}

function pizzaAdder() {
    count += mouseCPS;
    totalCount += mouseCPS;
    totalPizzas();
    document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + count.toFixed(0);
    if (count >= 100) {
        ovensEnabled = true;
        graduateOptionOn = true;
        document.getElementById("ovens").style.display = "";
        document.getElementById("GPC").style.display = "";
    }
    if (count >= 1100) {
        chefsEnabled = true;
        document.getElementById("chefs").style.display = "";
    }
    if (count >= 1000000) {
        tomatoEnabled = true;
        document.getElementById("tomato").style.display = "";
    }
}

function formulas() {
    clickerCPS = 0.1 * clickersCount;
    if (graduateCookers == true) {
        clickerCPS = clickerCPS * 2;
    }
    ovensCPS = 1 * ovensCount;
    chefsCPS = 8 * chefsCount;
}

function clickersAdder() {
    if (count >= clickersPrice) {
        clickersCount += 1;
        formulas();
        CPS();
        document.getElementById("clickerCount").innerHTML = "Count: " + clickersCount;
        count = count - clickersPrice;
        document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + count.toFixed(0);
        clickersPriceAdder();
    }
    else { 
        alert("You don't have enough pizzas for that!");
    }
}

function ovensAdder() { 
    if (count >= ovensPrice) {
        ovensCount += 1;
        formulas();
        CPS();
        document.getElementById("ovensCount").innerHTML = "Count: " + ovensCount;
        count = count - ovensPrice;
        document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + count.toFixed(0);
        ovensPriceAdder();
    }
    else {
        alert("You don't have enough pizzas for that!");
    }
}

function chefsAdder() {
    var countFixed = count.toFixed(0); 
    if (count >= chefsPrice) {
        chefsCount += 1;
        formulas();
        CPS();
        document.getElementById("chefsCount").innerHTML = "Count: " + chefsCount;
        count = count - chefsPrice;
        document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + countFixed;
        ovensPriceAdder();
    }
    else {
        alert("You don't have enough pizzas for that!");
    }
}

function graduateAdder() { 
    if (count >= 100) {
        graduateEnabled = true; 
        mouseCPS = mouseCPS * 2;
        count = count - 100; 
        document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + count.toFixed(0);
        formulas();
        CPS(); 
        document.getElementById("graduateButton").disabled = true;
    }
}

function tomatoAdder() { 
    if (count >= 1000000) {
        tomatoSauce = true; 
        tomatoCPS = (1 / 100) * totalCPS;
        count = count - 1000000; 
        document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + count.toFixed(0);
        CPS(); 
        document.getElementById("tomatoButton").disabled = true;
        document.getElementById("TSImage").style.display = "block"; 
    }
}

function clickersTimer() {
    count += clickerCPS;
    totalCount += clickerCPS;
    totalPizzas();
    document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + count.toFixed(0);
}

function ovensTimer() {
    count += ovensCPS 
    totalCount += ovensCPS
    totalPizzas();
    document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + count.toFixed(0);
}

function chefsTimer() {
    count += chefsCount; 
    totalCount += chefsCount;
    totalPizzas(); 
    document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + count.toFixed(0);
}

function clickersPriceAdder() {
    var formula = 15 * Math.pow(1.15, clickersCount);
    clickersPrice = formula;
    document.getElementById("clickersPrice").innerHTML = "Price: " + clickersPrice.toFixed(0);
}

function ovensPriceAdder() {
    var formula = 100 * Math.pow(1.15, ovensCount);
    ovensPrice = formula;
    document.getElementById("ovensPrice").innerHTML = "Price: " + ovensPrice.toFixed(0);
}

function chefsPriceAdder() {
    var formula = 1100 * Math.pow(1.15, chefsCount);
    chefsPrice = formula;
    document.getElementById("chefsPrice").innerHTML = "Price: " + chefsPrice.toFixed(0);
}

function showStats() {
    var x = document.getElementById("stats");

    if (x.style.display == "none") {
        x.style.display = "block";
    }
    else if (x.style.display == "block") {
        x.style.display = "none";
    }
}

function showBuildings() {
    var x = document.getElementById("upgradeMenu");

    if (x.style.display == "none") {
        x.style.display = "block";
    }
    else if (x.style.display == "block") {
        x.style.display = "none";
    }
}

function showUpgrades() {
    var x = document.getElementById("upgrades");

    if (x.style.display == "none") {
        x.style.display = "block";
    }
    else if (x.style.display == "block") {
        x.style.display = "none";
    }
}

function showColors() {
    var x = document.getElementById("colors"); 

    if (x.style.display == "none") {
        x.style.display = "block"; 
    }
    else if (x.style.display == "block") {
        x.style.display = "none";
    }
}

function totalPizzas() {
    document.getElementById("pizzaTotal").innerHTML = "Total Pizzas Clicked: " + totalCount.toFixed(0);
}

function CPS() {
    totalCPS = clickerCPS + ovensCPS * chefsCPS + tomatoPercent; 
    document.getElementById("cps").innerHTML = "Clicks Per Second: " + totalCPS.toFixed(2);
}

function changeName() {
    restaurantName = prompt("Enter restaurant name:");
    document.getElementById("name").innerHTML = restaurantName + "'s Restaurant";
    if (restaurantName === "Andrej" || restaurantName === "Green") {
        alert("Hi Ando :3");
    }
}

function orange() {
    $("hr").css({"border": "10px solid orange", "border-radius": "5px"});
}

function red() {
    $("hr").css({"border": "10px solid red", "border-radius": "5px"});
}

function green() {
    $("hr").css({"border": "10px solid green", "border-radius": "5px"});
}

function yellow() {
    $("hr").css({"border": "10px solid yellow", "border-radius": "5px"});
}

function blue() {
    $("hr").css({"border": "10px solid blue", "border-radius": "5px"});
}

function save() {

var restaurantName;
    var save = { 
        count: count, 
        totalCount: totalCount, 
        clickersCount: clickersCount, 
        ovensCount: ovensCount, 
        chefsCount: chefsCount,

        mouseCPS: mouseCPS,
        clickerCPS: clickerCPS,
        ovensCPS: ovensCPS,
        chefsCPS: chefsCPS,
        totalCPS: totalCPS,
        tomatoCPS: tomatoCPS,

        tomatoSauce: tomatoSauce, 
        graduateCookers: graduateCookers,

        clickersPrice: clickersPrice, 
        ovensPrice: ovensPrice, 
        chefsPrice: chefsPrice, 

        graduateEnabled: graduateEnabled,
        tomatoEnabled: tomatoEnabled,
        ovensEnabled: ovensEnabled,
        chefsEnabled: chefsEnabled,

        restaurantName: restaurantName
    }
    localStorage.setItem("save", JSON.stringify(save));
};

function load() {
    var load = JSON.parse(localStorage.getItem("save"));

    count = load.count;
    totalCount = load.totalCount; 
    clickersCount = load.clickersCount;
    ovensCount = load.ovensCount; 
    chefsCount = load.chefsCount; 

    mouseCPS = load.mouseCPS;
    clickerCPS = load.clickerCPS;
    ovensCPS = load.ovensCPS;
    chefsCPS = load.chefsCPS;
    totalCPS = load.totalCPS;
    tomatoCPS = load.tomatoCPS;

    tomatoSauce = load.tomatoSauce; 
    graduateCookers = load.graduateCookers;

    clickersPrice = load.clickersPrice; 
    ovensPrice = load.ovensPrice;
    chefsPrice = load.chefsPrice;

    graduateEnabled = load.graduateEnabled;
    tomatoEnabled = load.tomatoEnabled;
    ovensEnabled = load.ovensEnabled;
    chefsEnabled = load.chefsEnabled;

    restaurantName = load.restaurantName;

    document.getElementById("name").innerHTML = restaurantName + "'s Restaurant";
    document.getElementById("cps").innerHTML = "Clicks Per Second: " + totalCPS.toFixed(2);

    if (ovensEnabled == true) {
        document.getElementById("ovens").style.display = "";
    }
    if (chefsEnabled == true) {
        document.getElementById("chefs").style.display = "";
    }
    if (graduateEnabled == true) {
        document.getElementById("GPC").style.display = "";
    }
    if (tomatoEnabled == true) {
        document.getElementById("tomato").style.display = "";
    }

    document.getElementById("clickerCount").innerHTML = "Count: " + clickersCount;
    document.getElementById("ovensCount").innerHTML = "Count: " + ovensCount;
    document.getElementById("chefsCount").innerHTML = "Count: " + chefsCount;

    document.getElementById("clickersPrice").innerHTML = "Price: " + clickersPrice.toFixed(0);
    document.getElementById("ovensPrice").innerHTML = "Price: " + ovensPrice.toFixed(0);
    document.getElementById("chefsPrice").innerHTML = "Price: " + chefsPrice.toFixed(0);

    if (graduateCookers == true) {
        document.getElementById("graduateButton").disabled = true;
    }

    if (tomatoSauce == true) {
        document.getElementById("tomatoButton").disabled = true;
        document.getElementById("TSImage").style.display = "block"; 
    }
}