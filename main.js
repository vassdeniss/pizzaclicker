var count = 0;
var totalCount = 0;
var mouseCPS = 1;
var clickersCount = 0;
var ovensCount = 0;
var chefsCount = 0;
var tomatoSauce = false;
var graduateEnabled = false;
var gpcMouseAdd = 0;
var gpcAdd = 0;
var tomatoPercent = 0;
var clickersPrice = 15;
var ovensPrice = 100;
var chefsPrice = 1100;
var totalCPS = 0;
var ovensEnabled = false;
var chefsEnabled = false;
var graduateOptionOn = false;
var tomatoEnabled = false;
var name = null;
var clickerCPS = 0;
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
    var countFixed = count.toFixed(0);
    document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + countFixed;
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
    if (graduateEnabled == true) {
        clickerCPS = clickerCPS * 2;
    }
}

function clickersAdder() {
    var countFixed = count.toFixed(0);
    if (count >= clickersPrice) {
        clickersCount = clickersCount + 1;
        formulas();
        CPS();
        document.getElementById("clickerCount").innerHTML = "Count: " + clickersCount;
        count = count - clickersPrice;
        document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + countFixed;
        clickersPriceAdder();
    }
    else { 
        alert("You don't have enough pizzas for that!");
    }
}

function ovensAdder() {
    var countFixed = count.toFixed(0); 
    if (count >= ovensPrice) {
        ovensCount += 1;
        CPS();
        document.getElementById("ovensCount").innerHTML = "Count: " + ovensCount;
        count = count - ovensPrice;
        document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + countFixed;
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
    var countFixed = count.toFixed(0); 
    if (count >= 100) {
        graduateEnabled = true; 
        mouseCPS = mouseCPS * 2;
        count = count - 100; 
        document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + countFixed;
        formulas();
        CPS(); 
        document.getElementById("graduateButton").disabled = true;
    }
}

function tomatoAdder() {
    var countFixed = count.toFixed(0); 
    if (count >= 1000000) {
        tomatoSauce = true; 
        tomatoPercent = (1 / 100) * totalCPS;
        count = count - 1000000; 
        document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + countFixed;
        CPS(); 
        document.getElementById("tomatoButton").disabled = true;
        document.getElementById("TSImage").style.display = "block"; 
    }
}

function clickersTimer() {
    count += clickerCPS;
    totalCount += clickerCPS;
    totalPizzas();
    var countFixed = count.toFixed(0);
    document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + countFixed;
}

function ovensTimer() {
    count += 1 * ovensCount; 
    totalCount += 1 * ovensCount; 
    totalPizzas();
    var countFixed = count.toFixed(0);
    document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + countFixed;
}

function chefsTimer() {
    count += 8 * chefsCount; 
    totalCount += 8 * chefsCount;
    totalPizzas(); 
    var countFixed = count.toFixed(0); 
    document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + countFixed;
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
    totalCPS = clickerCPS + 1 * ovensCount + 8 * chefsCount + tomatoPercent; 
    document.getElementById("cps").innerHTML = "Clicks Per Second: " + totalCPS.toFixed(2);
}

function changeName() {
    name = prompt("Enter restaurant name:");
    document.getElementById("name").innerHTML = name + "'s Restaurant";
    if (name == "Andrej" || "Green") {
        alert("Hi Ando :3")
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
    var save = { 
        count: count, 
        totalCount: totalCount, 
        mouseCPS: mouseCPS,
        gpcMouseAdd: gpcMouseAdd,
        clickersCount: clickersCount, 
        ovensCount: ovensCount, 
        chefsCount: chefsCount, 
        tomatoSauce: tomatoSauce, 
        toamtoPercent: tomatoPercent, 
        clickersPrice: clickersPrice, 
        ovensPrice: ovensPrice, 
        chefsPrice: chefsPrice, 
        totalCPS: totalCPS, 
        name: name,
        ovensEnabled: ovensEnabled,
        chefsEnabled: chefsEnabled,
        graduateEnabled: graduateEnabled,
        tomatoEnabled: tomatoEnabled,
        gpcAdd: gpcAdd,
        graduateOptionOn: graduateOptionOn,
        clickerCPS: clickerCPS
    }
    localStorage.setItem("save", JSON.stringify(save));
};

function load() {
    var load = JSON.parse(localStorage.getItem("save"));

    count = load.count;
    totalCount = load.totalCount; 
    mouseCPS = load.mouseCPS;
    gpcMouseAdd = load.gpcMouseAdd;
    clickersCount = load.clickersCount;
    ovensCount = load.ovensCount; 
    chefsCount = load.chefsCount; 
    tomatoSauce = load.tomatoSauce; 
    tomatoPercent = load.tomatoPercent;
    clickersPrice = load.clickersPrice; 
    ovensPrice = load.ovensPrice;
    chefsPrice = load.chefsPrice;
    totalCPS = load.totalCPS;
    name = load.name;
    ovensEnabled = load.ovensEnabled;
    chefsEnabled = load.chefsEnabled;
    graduateEnabled = load.graduateEnabled;
    tomatoEnabled = load.tomatoEnabled;
    gpcAdd = load.gpcAdd;
    graduateOptionOn = load.graduateOptionOn;
    clickerCPS = load.clickerCPS;

    document.getElementById("name").innerHTML = name + "'s Restaurant";
    document.getElementById("cps").innerHTML = "Clicks Per Second: " + totalCPS.toFixed(2);
    if (ovensEnabled == true) {
        document.getElementById("ovens").style.display = "";
    }
    if (chefsEnabled == true) {
        document.getElementById("chefs").style.display = "";
    }
    if (graduateOptionOn == true) {
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
    if (tomatoSauce == true) {
        document.getElementById("tomatoButton").disabled = true;
        document.getElementById("TSImage").style.display = "block"; 
    }
    if (graduateEnabled == true) {
        document.getElementById("graduateButton").disabled = true;
    }
}