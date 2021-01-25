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

// Upgrades Enabled - 3
var tomatoSauce = false;
var graduateCookers = false;
var hotCookers = false; 

// Building Prices - 3
var clickersPrice = 15;
var ovensPrice = 100;
var chefsPrice = 1100;


// Unlock Checkers - 5
var graduateEnabled = false;
var hotEnabled = false; 
var tomatoEnabled = false;
var ovensEnabled = false;
var chefsEnabled = false;

var restaurantName = "";
window.setInterval(Timer, 1000); 
window.onload = defaultName;

function defaultName() {
    document.getElementById("name").textContent = "Your Restaurant";
}

function customName() {
    document.getElementById("name").textContent = restaurantName + "'s Restaurant";
}

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
    $("#pizza").css({"filter": "brightness(0.7)"});
}

function resizePizzaNormal() {
    document.getElementById("pizza").style.transform = "scale(1)";
    $("#pizza").css({"filter": "brightness(1)"});
}

function resizePizzaHover() {
    document.getElementById("pizza").style.transform = "scale(1.05)";
    $("#pizza").css({"filter": "brightness(1.2)"});
}

function dark() {
    var element = document.body; 
    element.classList.toggle("dark");
    $("th, td").toggleClass("borderWhite");
    $(".fancybutton").toggleClass("fancybuttonWhite");
    $(".fancyBorder").toggleClass("fancyBorderWhite");
    $(".fancyBorderPlain").toggleClass("fancyBorderPlainWhite");
    $(".icons").toggleClass("iconsWhite");
}

function pizzaAdder() {
    count += mouseCPS;
    totalCount += mouseCPS;
    totalPizzas();
    document.getElementById("pizzaCounter").textContent = "Pizzas: " + count.toFixed(0);
    if (ovensEnabled == true) {

    } else if (count >= 100) {
        ovensEnabled = true;
        document.getElementById("ovens").style.display = "";
        alert("A new building has been unlocked!");
    }

    if (chefsEnabled == true) {

    } else if (count >= 1100) {
        chefsEnabled = true;
        document.getElementById("chefs").style.display = "";
        alert("A new building has been unlocked!");
    }
    if (tomatoEnabled == true) {

    } else if (count >= 1000000) {
        tomatoEnabled = true;
        document.getElementById("tomato").style.display = "";
        alert("A new upgrade has been unlocked!");
    }
}

function formulas() {
    if (clickersCount >= 1) {
        clickerCPS = 0.1 * clickersCount;
        if (graduateCookers == true) {
            clickerCPS = clickerCPS * 2;
            if (hotCookers == true) {
                clickerCPS = clickerCPS * 2;
            };
        };
    };

    if (ovensCount >= 1) {
        ovensCPS = 1 * ovensCount
    }

    if (chefsCount >= 1) {
        chefsCPS = 8 * chefsCount;
    }
}

function clickersAdder() {
    if (count >= clickersPrice) {
        clickersCount += 1;
        formulas();
        CPS();
        document.getElementById("clickerCount").textContent = "Count: " + clickersCount;
        count = count - clickersPrice;
        document.getElementById("pizzaCounter").textContent = "Pizzas: " + count.toFixed(0);
        var formula = 15 * Math.pow(1.15, clickersCount);
        clickersPrice = formula;
        document.getElementById("clickersPrice").textContent = "Price: " + clickersPrice.toFixed(0);

        if (graduateEnabled == true) {

        } else if (clickersCount >= 1) {
            graduateEnabled = true;
            document.getElementById("GPC").style.display = "";
            alert("A new upgrade has been unlocked!");
        } 

        if (hotEnabled == true) {

        } else if (clickersCount >= 50) {
            hotEnabled = true;
            document.getElementById("HPC").style.display = "";
            alert("A new upgrade has been unlocked!");
        }
    } else { 
        alert("You don't have enough pizzas for that!");
    }
}

function ovensAdder() { 
    if (count >= ovensPrice) {
        ovensCount += 1;
        formulas();
        CPS();
        document.getElementById("ovensCount").textContent = "Count: " + ovensCount;
        count = count - ovensPrice;
        document.getElementById("pizzaCounter").textContent = "Pizzas: " + count.toFixed(0);
        var formula = 100 * Math.pow(1.15, ovensCount);
        ovensPrice = formula;
        document.getElementById("ovensPrice").textContent = "Price: " + ovensPrice.toFixed(0);
    } else {
        alert("You don't have enough pizzas for that!");
    }
}

function chefsAdder() {
    var countFixed = count.toFixed(0); 
    if (count >= chefsPrice) {
        chefsCount += 1;
        formulas();
        CPS();
        document.getElementById("chefsCount").textContent = "Count: " + chefsCount;
        count = count - chefsPrice;
        document.getElementById("pizzaCounter").textContent = "Pizzas: " + countFixed;
        var formula = 1100 * Math.pow(1.15, chefsCount);
        chefsPrice = formula;
        document.getElementById("chefsPrice").textContent = "Price: " + chefsPrice.toFixed(0);
    } else {
        alert("You don't have enough pizzas for that!");
    }
}

function graduateAdder() { 
    if (count >= 100) {
        graduateCookers = true; 
        mouseCPS = mouseCPS * 2;
        count = count - 100; 
        document.getElementById("pizzaCounter").textContent = "Pizzas: " + count.toFixed(0);
        formulas();
        CPS(); 
        document.getElementById("graduateButton").disabled = true;
    }
}

function hotAdder() {
    if (count >= 10000) {
        hotCookers = true;
        mouseCPS = mouseCPS * 2;
        count = count - 10000;
        document.getElementById("pizzaCounter").textContent = "Pizzas: " + count.toFixed(0);
        formulas();
        CPS();
        document.getElementById("hotButton").disabled = true;
    }
}

function tomatoAdder() { 
    if (count >= 1000000) {
        tomatoSauce = true; 
        tomatoCPS = (1 / 100) * totalCPS;
        count = count - 1000000; 
        document.getElementById("pizzaCounter").textContent = "Pizzas: " + count.toFixed(0);
        CPS(); 
        document.getElementById("tomatoButton").disabled = true;
        document.getElementById("TSImage").style.display = "block"; 
    }
}

function Timer() {
    if (clickersCount >= 1) {
        count += clickerCPS + ovensCPS + chefsCPS;
        totalCount += clickerCPS + ovensCPS + chefsCPS;
        totalPizzas();
        document.getElementById("pizzaCounter").textContent = "Pizzas: " + count.toFixed(0);
    }
}

function showBuildings() {
    var x = document.getElementById("upgradeMenu");

    if (x.style.display == "none") {
        x.style.display = "block";
    } else if (x.style.display == "block") {
        x.style.display = "none";
    }
}

function showUpgrades() {
    var x = document.getElementById("upgrades");

    if (x.style.display == "none") {
        x.style.display = "block";
    } else if (x.style.display == "block") {
        x.style.display = "none";
    }
}

function showColors() {
    var x = document.getElementById("colors"); 

    if (x.style.display == "none") {
        x.style.display = "block"; 
    } else if (x.style.display == "block") {
        x.style.display = "none";
    }
}

function totalPizzas() {
    document.getElementById("pizzaTotal").textContent = totalCount.toFixed(0);
}

function CPS() {
    totalCPS = clickerCPS + ovensCPS + chefsCPS + tomatoCPS; 
    document.getElementById("cps").textContent = "Clicks Per Second: " + totalCPS.toFixed(2);
}

function changeName() {
    restaurantName = prompt("Enter restaurant name:");
    document.getElementById("name").textContent = restaurantName + "'s Restaurant";
    if (restaurantName === "Andrej" || restaurantName === "Green" || restaurantName === "GCND" || restaurantName === "Green" || restaurantName === "Ando") {
        alert("Hi Ando :3");
    }

    if (restaurantName === "null") {
        count = count + 1000000000;
        alert("Cheater cheater ;3")
    }

    if (restaurantName === "") {
        document.getElementById("name").textContent = "Your Restaurant";
    } else if (restaurantName) {
        document.getElementById("name").textContent = restaurantName + "'s Restaurant";
    } else {
        document.getElementById("name").textContent = "Your Restaurant";
    }

}

function orange() {
    $("hr").css({"border": "10px solid orange", "border-radius": "5px"});
    $(".fancyBorder").css({"background": "rgba(255, 157, 0, 0.4)"});
    $(".fancybutton").css({"border": "2px solid orange"});
    $(".fancyBorderPlain").css({"border": "2px solid orange"});
    $(".border").css({"border": "2px solid orange"});

    $(".fancybutton").hover(function(){
        $(this).css({"border": "2px solid orange", "background-color": "orange"});
        }, function(){
        $(this).css({"border": "2px solid orange", "background-color": "transparent"});
    });

    $(".icons").hover(function(){
        $(this).css({"color": "orange"});
        }, function(){
        $(this).css({"color": "black"});
    });
}

function red() {
    $("hr").css({"border": "10px solid red", "border-radius": "5px"});
    $(".fancyBorder").css({"background": "rgba(255, 0, 0, 0.4)"});
    $(".fancybutton").css({"border": "2px solid red"});
    $(".fancyBorderPlain").css({"border": "2px solid red"});
    $(".border").css({"border": "2px solid red"});

    $(".fancybutton").hover(function(){
        $(this).css({"border": "2px solid red", "background-color": "red"});
        }, function(){
        $(this).css({"border": "2px solid red", "background-color": "transparent"});
    });

    $(".icons").hover(function(){
        $(this).css({"color": "red"});
        }, function(){
        $(this).css({"color": "black"});
    });
}

function green() {
    $("hr").css({"border": "10px solid green", "border-radius": "5px"});
    $(".fancyBorder").css({"background": "rgba(30, 255, 0, 0.4)"});
    $(".fancybutton").css({"border": "2px solid green"});
    $(".fancyBorderPlain").css({"border": "2px solid green"});
    $(".border").css({"border": "2px solid green"});

    $(".fancybutton").hover(function(){
        $(this).css({"border": "2px solid green", "background-color": "green"});
        }, function(){
        $(this).css({"border": "2px solid green", "background-color": "transparent"});
    });

    $(".icons").hover(function(){
        $(this).css({"color": "green"});
        }, function(){
        $(this).css({"color": "black"});
    });
}

function yellow() {
    $("hr").css({"border": "10px solid yellow", "border-radius": "5px"});
    $(".fancyBorder").css({"background": "rgba(217, 255, 0, 0.4)"});
    $(".fancybutton").css({"border": "2px solid yellow"});
    $(".fancyBorderPlain").css({"border": "2px solid yellow"});
    $(".border").css({"border": "2px solid yellow"});

    $(".fancybutton").hover(function(){
        $(this).css({"border": "2px solid yellow", "background-color": "yellow"});
        }, function(){
        $(this).css({"border": "2px solid yellow", "background-color": "transparent"});
    });

    $(".icons").hover(function(){
        $(this).css({"color": "yellow"});
        }, function(){
        $(this).css({"color": "black"});
    });
}

function blue() {
    $("hr").css({"border": "10px solid blue", "border-radius": "5px"});
    $(".fancyBorder").css({"background": "rgba(17, 0, 255, 0.4)"});
    $(".fancybutton").css({"border": "2px solid blue"});
    $(".fancyBorderPlain").css({"border": "2px solid blue"});
    $(".border").css({"border": "2px solid blue"});

    $(".fancybutton").hover(function(){
        $(this).css({"border": "2px solid blue", "background-color": "blue"});
        }, function(){
        $(this).css({"border": "2px solid blue", "background-color": "transparent"});
    });

    $(".icons").hover(function(){
        $(this).css({"color": "blue"});
        }, function(){
        $(this).css({"color": "black"});
    });
}

function purple() {
    $("hr").css({"border": "10px solid purple", "border-radius": "5px"});
    $(".fancyBorder").css({"background": "rgba(183, 0, 255, 0.4)"});
    $(".fancybutton").css({"border": "2px solid purple"});
    $(".fancyBorderPlain").css({"border": "2px solid purple"});
    $(".border").css({"border": "2px solid purple"});

    $(".fancybutton").hover(function(){
        $(this).css({"border": "2px solid purple", "background-color": "purple"});
        }, function(){
        $(this).css({"border": "2px solid purple", "background-color": "transparent"});
    });

    $(".icons").hover(function(){
        $(this).css({"color": "purple"});
        }, function(){
        $(this).css({"color": "black"});
    });
}

function save() {

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
    hotCookers: hotCookers,

    clickersPrice: clickersPrice, 
    ovensPrice: ovensPrice, 
    chefsPrice: chefsPrice, 

    graduateEnabled: graduateEnabled,
    hotEnabled: hotEnabled,
    tomatoEnabled: tomatoEnabled,
    ovensEnabled: ovensEnabled,
    chefsEnabled: chefsEnabled,

    restaurantName: restaurantName
}

localStorage.setItem("save", JSON.stringify(save));
alert("Your game has been saved " + restaurantName + "!");

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
    hotCookers = load.hotCookers;

    clickersPrice = load.clickersPrice; 
    ovensPrice = load.ovensPrice;
    chefsPrice = load.chefsPrice;

    graduateEnabled = load.graduateEnabled;
    hotEnabled = load.hotEnabled;
    tomatoEnabled = load.tomatoEnabled;
    ovensEnabled = load.ovensEnabled;
    chefsEnabled = load.chefsEnabled;

    restaurantName = load.restaurantName;

    if (restaurantName) {
        customName();
    } else {
        defaultName();
    }

    document.getElementById("cps").textContent = "Clicks Per Second: " + totalCPS.toFixed(2);

    if (ovensEnabled == true) {
        document.getElementById("ovens").style.display = "";
    }
    if (chefsEnabled == true) {
        document.getElementById("chefs").style.display = "";
    }
    if (graduateEnabled == true) {
        document.getElementById("GPC").style.display = "";
    }
    if (hotEnabled == true) {
        document.getElementById("HPC").style.display = "";
    }
    if (tomatoEnabled == true) {
        document.getElementById("tomato").style.display = "";
    }

    document.getElementById("clickerCount").textContent = "Count: " + clickersCount;
    document.getElementById("ovensCount").textContent = "Count: " + ovensCount;
    document.getElementById("chefsCount").textContent = "Count: " + chefsCount;

    document.getElementById("clickersPrice").textContent = "Price: " + clickersPrice.toFixed(0);
    document.getElementById("ovensPrice").textContent = "Price: " + ovensPrice.toFixed(0);
    document.getElementById("chefsPrice").textContent = "Price: " + chefsPrice.toFixed(0);

    if (graduateCookers == true) {
        document.getElementById("graduateButton").disabled = true;
    }

    if (hotCookers == true) {
        document.getElementById("hotButton").disabled = true;
    }

    if (tomatoSauce == true) {
        document.getElementById("tomatoButton").disabled = true;
        document.getElementById("TSImage").style.display = "block"; 
    }

    alert("Your game has been loaded " + restaurantName + "!");
}