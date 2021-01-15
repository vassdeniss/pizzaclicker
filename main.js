var count = 0;
var totalCount = 0;
var clickersCount = 0;
var clickersPrice = 15;
window.setInterval(clickersTimer, 1000); 

function pizzaAdder() {
    count += 1;
    totalCount += 1;
    totalPizzas();
    var countFixed = count.toFixed(0);
    document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + countFixed;
}

function clickersAdder() {
    var countFixed = count.toFixed(0);
    if (count >= clickersPrice) {
        clickersCount += 1;
        document.getElementById("clickerCount").innerHTML = "Count: " + clickersCount + ";";
        count = count - clickersPrice;
        document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + countFixed;
        clickersPriceAdder();
    }
    else { 
        alert("You don't have enough pizzas for that!");
    }
}

function clickersTimer() {
    count += 0.5 * clickersCount;
    totalCount += 0.5 * clickersCount;
    totalPizzas();
    var countFixed = count.toFixed(0);
    document.getElementById("pizzaCounter").innerHTML = "Pizzas: " + countFixed;
}

function clickersPriceAdder() {
    var formula = 15 * Math.pow(1.15, clickersCount)
    var formulaFixed = formula.toFixed(0);
    clickersPrice = formulaFixed;
    document.getElementById("clickersPrice").innerHTML = "Price: " + clickersPrice + ";";
}

function showStats() {
    var x = document.getElementById("stats");
    var y = document.getElementById("upgradeMenu");
    if (x.style.display == "none") {
        x.style.display = "block";
        y.style.display = "none"
    }
    else {
        x.style.display = "none";
        y.style.display = "block"
    }
}

function totalPizzas() {
    document.getElementById("pizzaTotal").innerHTML = "Total Pizzas Clicked: " + totalCount.toFixed(0);
}