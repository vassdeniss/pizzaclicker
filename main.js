var count = 0;
var totalCount = 0;
var clickersCount = 0;
var ovensCount = 0;
var chefsCount = 0;
var tomatoSauce = false;
var tomatoPercent = 0;
var clickersPrice = 15;
var ovensPrice = 100;
var chefsPrice = 1100;
var totalCPS = 0;
var name = null;
window.setInterval(clickersTimer, 1000); 
window.setInterval(ovensTimer, 1000);
window.setInterval(chefsTimer, 1000);

function pizzaAdder() {
    count += 1;
    totalCount += 1;
    totalPizzas();
    var countFixed = count.toFixed(0);
    document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + countFixed;
    if (count >= 100) {
        document.getElementById("ovens").style.display = "block";
    }
    if (count >= 1100) {
        document.getElementById("chefs").style.display = "block";
    }
    if (count >= 50000) {
        document.getElementById("tomato").style.display = "block";
    }
}

function clickersAdder() {
    var countFixed = count.toFixed(0);
    if (count >= clickersPrice) {
        clickersCount += 1;
        CPS();
        document.getElementById("clickerCount").innerHTML = "Count: " + clickersCount + ";";
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
        document.getElementById("ovensCount").innerHTML = "Count: " + ovensCount + ";";
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
        document.getElementById("chefsCount").innerHTML = "Count: " + chefsCount + ";";
        count = count - chefsPrice;
        document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + countFixed;
        ovensPriceAdder();
    }
    else {
        alert("You don't have enough pizzas for that!");
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
    count += 0.1 * clickersCount;
    totalCount += 0.1 * clickersCount;
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
    var formulaFixed = formula.toFixed(0);
    clickersPrice = formulaFixed;
    document.getElementById("clickersPrice").innerHTML = "Price: " + clickersPrice + ";";
}

function ovensPriceAdder() {
    var formula = 100 * Math.pow(1.15, ovensCount);
    var formulaFixed = formula.toFixed(0);
    ovensPrice = formulaFixed;
    document.getElementById("ovensPrice").innerHTML = "Price: " + ovensPrice + ";";
}

function chefsPriceAdder() {
    var formula = 1100 * Math.pow(1.15, chefsCount);
    var formulaFixed = formula.toFixed(0);
    chefsPrice = formulaFixed;
    document.getElementById("chefsPrice").innerHTML = "Price: " + chefsPrice + ";";
}

function showStats() {
    var x = document.getElementById("stats");
    var y = document.getElementById("upgradeMenu");
    if (x.style.display == "none") {
        x.style.display = "block";
        y.style.display = "none";
    }
    else {
        x.style.display = "none";
        y.style.display = "block";
    }
}

function showPowers() {
    var x = document.getElementById("powers");
    var y = document.getElementById("upgradeMenu"); 
    if (x.style.display == "none") {
        x.style.display = "block"; 
        y.style.display = "none";
    }
    else {
        x.style.display = "none"; 
        y.style.display = "block";
    }
}

function totalPizzas() {
    document.getElementById("pizzaTotal").innerHTML = "Total Pizzas Clicked: " + totalCount.toFixed(0);
}

function CPS() {
    totalCPS = 0.1 * clickersCount + 1 * ovensCount + 8 * chefsCount + tomatoPercent; 
    document.getElementById("cps").innerHTML = "Clicks Per Second: " + totalCPS.toFixed(2);
}

function changeName() {
    name = prompt("Enter restaurant name:");
    document.getElementById("name").innerHTML = name + "'s Restaurant";
}

function save() {
    var save = { 
        count: count, 
        totalCount: totalCount, 
        clickersCount: clickersCount, 
        ovensCount: ovensCount, 
        chefsCount: chefsCount, 
        tomatoSauce: tomatoSauce, 
        toamtoPercen: tomatoPercent, 
        clickersPrice: clickersPrice, 
        ovensPrice: ovensPrice, 
        chefsPrice: chefsPrice, 
        totalCPS: totalCPS, 
        name: name 
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
    tomatoSauce = load.tomatoSauce; 
    tomatoPercent = load.tomatoPercent;
    clickersPrice = load.clickersPrice; 
    ovensPrice = load.ovensPrice;
    chefsPrice = load.chefsPrice;
    totalCPS = load.totalCPS;
    name = load.name;

    document.getElementById("name").innerHTML = name + "'s Restaurant";
    document.getElementById("cps").innerHTML = "Clicks Per Second: " + totalCPS.toFixed(2);
    if (count >= 100) {
        document.getElementById("ovens").style.display = "block";
    }
    if (count >= 1100) {
        document.getElementById("chefs").style.display = "block";
    }
    if (count >= 50000) {
        document.getElementById("tomato").style.display = "block";
    }
    document.getElementById("clickerCount").innerHTML = "Count: " + clickersCount + ";";
    document.getElementById("ovensCount").innerHTML = "Count: " + ovensCount + ";";
    document.getElementById("chefsCount").innerHTML = "Count: " + chefsCount + ";";
    if (tomatoSauce == true) {
        document.getElementById("tomatoButton").disabled = true;
        document.getElementById("TSImage").style.display = "block"; 
    }

    clickersPriceAdder();
    
    ovensPriceAdder();
    
    chefsPriceAdder();
}

function dark() {
    var element = document.body; 
    element.classList.toggle("dark");
}