var count = 0;
var clickersCount = 0;
var clickersPrice = 15;
window.setInterval(clickersTimer, 1000); 

function pizzaAdder() {
    count += 1;
    document.getElementById("pizzaCounter").innerHTML = "Count: " + count;
}

function clickersAdder() {
    if (count >= clickersPrice) {
        clickersCount += 1;
        document.getElementById("clickerCount").innerHTML = "Count: " + clickersCount;
        count = count - clickersPrice;
        document.getElementById("pizzaCounter").innerHTML = "Count: " + count;
        clickersPriceAdder();
    }
    else { 
        alert("You don't have enough pizzas for that!");
    }
}

function clickersTimer() {
    count += 0.5 * clickersCount;
    document.getElementById("pizzaCounter").innerHTML = "Count: " + count;
}

function clickersPriceAdder() {
    var formula = 15 * Math.pow(1.15, clickersCount)
    var formulaFixed = formula.toFixed(2);
    clickersPrice = formulaFixed;
    document.getElementById("clickersPrice").innerHTML = "Price: " + clickersPrice;
}