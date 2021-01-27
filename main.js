// Counters - 5
var count = 0;
var selfCount = 0;
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

// Upgrades Enabled - 7
var tomatoSauce = false;
var ironMouse = false;
var goldMouse = false;
var diamondMouse = false;
var graduateCookers = false;
var overCookers = false; 
var hotCookers = false; 

// Building Prices - 3
var clickersPrice = 15;
var ovensPrice = 100;
var chefsPrice = 1100;

// Unlock Checkers - 9
var ironEnabled = false;
var goldEnabled = false;
var diamondEnabled = false;
var graduateEnabled = false;
var hotEnabled = false; 
var overEnabled = false; 
var tomatoEnabled = false;
var ovensEnabled = false;
var chefsEnabled = false;

var restaurantName = "";

var darkOn = false;
var orangeTrue = true;
var redTrue = false;
var greenTrue = false; 
var yellowTrue = false; 
var blueTrue = false;
var purpleTrue = false;

var modal;
var modal2;
var modal3;
var modal4;
var modal5;
var modal6;
var modal7;
var modal8;

var starOne = false;

window.setInterval(Timer, 1000); 
window.onload = defaultName;
window.setInterval(autoSave, 60000);

function openModal() {
    document.getElementById("poorModal").style.display = "block";
}

function openModalSave() {
    document.getElementById("save").style.display = "block";
    autoCLose();
}

function openModalLoad() {
    document.getElementById("load").style.display = "block";
    autoCLose();
}

function autoSave() {
    save(); 
    autoCLose();
}

function detectAndrej() {
    document.getElementById("ando").style.display = "block";
}

function newUpgrade() {
    document.getElementById("newUpgrade").style.display = "block";
}

function newBuilding() {
    document.getElementById("newBuilding").style.display = "block";
}

function cheater() {
    document.getElementById("cheater").style.display = "block"
}

function starOneShow() { 
    document.getElementById("star").style.display = "block";
}

window.onclick = function(event) {
    modal = document.getElementById("poorModal");
    modal2 = document.getElementById("save");
    modal3 = document.getElementById("load");
    modal4 = document.getElementById("ando");
    modal5 = document.getElementById("newUpgrade");
    modal6 = document.getElementById("newBuilding");
    modal7 = document.getElementById("cheater");
    modal8 = document.getElementById("star"); 

    if (event.target == modal) {
        modal.classList.add("themodal-close");
        setTimeout(function() {
            modal.style.display = "none";
            modal.classList.remove("themodal-close");
        }, 200);
    } else if (event.target == modal2) {
        modal2.classList.add("themodal-close");
        setTimeout(function() {
            modal2.style.display = "none";
            modal2.classList.remove("themodal-close");
        }, 200);
    } else if (event.target == modal3) {
        modal3.classList.add("themodal-close");
        setTimeout(function() {
            modal3.style.display = "none";
            modal3.classList.remove("themodal-close");
        }, 200);
    } else if (event.target == modal4) {
        modal4.classList.add("themodal-close");
        setTimeout(function() {
            modal4.style.display = "none";
            modal4.classList.remove("themodal-close");
        }, 200);
    } else if (event.target == modal5) {
        modal5.classList.add("themodal-close");
        setTimeout(function() {
            modal5.style.display = "none";
            modal5.classList.remove("themodal-close");
        }, 200);
    } else if (event.target == modal6) {
        modal6.classList.add("themodal-close");
        setTimeout(function() {
            modal6.style.display = "none";
            modal6.classList.remove("themodal-close");
        }, 200);
    } else if (event.target == modal7) {
        modal7.classList.add("themodal-close");
        setTimeout(function() {
            modal7.style.display = "none";
            modal7.classList.remove("themodal-close");
        }, 200);
    } else if (event.target == modal8) {
        modal8.classList.add("themodal-close");
        setTimeout(function() {
            modal8.style.display = "none";
            modal8.classList.remove("themodal-close");
        }, 200);
    }
}

function autoCLose() {
    setTimeout(function() {
        if (modal2.style.display == "block") {
            modal2.classList.add("themodal-close");
            setTimeout(function() {
                modal2.style.display = "none";
                modal2.classList.remove("themodal-close");
            }, 200);
        } else if (modal3.style.display == "block") {
            modal3.classList.add("themodal-close");
            setTimeout(function() {
                modal3.style.display = "none";
                modal3.classList.remove("themodal-close");
            }, 200);
        }
    }, 2000);
}

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

function playModalSound() {
    var sound = new Audio(); 
    sound.src = "sounds/popup.mp3";
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
    darkOn = !darkOn;
    var element = document.body; 
    element.classList.toggle("dark");
    $(".fancybutton").toggleClass("fancybuttonWhite");
    $(".fancyBorder").toggleClass("fancyBorderWhite");
    $(".fancyBorderPlain").toggleClass("fancyBorderPlainWhite");
    colorChecker(); 
}

function pizzaAdder() {
    count += mouseCPS;
    totalCount += mouseCPS;
    selfCount += 1;
    totalPizzas();
    document.getElementById("pizzaCounter").textContent = "Pizzas: " + count.toFixed(0);
    if (ovensEnabled == true) {

    } else if (count >= 100) {
        ovensEnabled = true;
        document.getElementById("ovens").style.display = "";
        playModalSound();
        newBuilding();
    }

    if (chefsEnabled == true) {

    } else if (count >= 1100) {
        chefsEnabled = true;
        document.getElementById("chefs").style.display = "";
        playModalSound();
        newBuilding();
    }

    if (tomatoEnabled == true) {

    } else if (count >= 1000000) {
        tomatoEnabled = true;
        document.getElementById("tomato").style.display = "";
        playModalSound();
        newUpgrade();
    }

    if (ironEnabled == true) {

    } else if (selfCount >= 100) { 
        ironEnabled = true; 
        document.getElementById("ironMouse").style.display = "";
        playModalSound();
        newUpgrade();
    }

    if (goldEnabled == true) {

    } else if (selfCount >= 1000) {
        goldEnabled = true;
        document.getElementById("goldMouse").style.display = "";
        playModalSound();
        newUpgrade();
    }

    if (diamondEnabled == true) {

    } else if (selfCount >= 10000) {
        diamondEnabled = true;
        document.getElementById("diamondMouse").style.display = "";
        playModalSound();
        newUpgrade();
    }

    /*
    if (starOne == true) {

    } else if (count >= 10000) {
        starOne = true;
        document.getElementById("starOne").style.display = "";
        playModalSound()
        starOneShow();
    }
    */
}

function formulas() {
    if (clickersCount >= 1) {
        clickerCPS = 0.1 * clickersCount;
        if (graduateCookers == true) {
            clickerCPS = clickerCPS * 2;
            if (hotCookers == true) {
                clickerCPS = clickerCPS * 2;
                if (overCookers == true) {
                    clickerCPS = clickerCPS * 2;
                }
            }
        }
    }

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
            playModalSound();
            newUpgrade();
        } 

        if (hotEnabled == true) {

        } else if (clickersCount >= 50) {
            hotEnabled = true;
            document.getElementById("HPC").style.display = "";
            playModalSound();
            newUpgrade();
        }

        if (overEnabled == true) {

        } else if (clickersCount >= 100) {
            overEnabled = true;
            document.getElementById("OPC").style.display = "";
            playModalSound();
            newUpgrade();
        }

    } else { 
        playModalSound()
        openModal();
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
        playModalSound()
        openModal();
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
        playModalSound()
        openModal();
    }
}

function ironAdder() {
    if (count >= 500) {
        ironMouse = true; 
        count = count - 500; 
        document.getElementById("pizzaCounter").textContent = "Pizzas: " + count.toFixed(0);
        mouseCPS = mouseCPS * 2;
        document.getElementById("ironButton").disabled = true;
    } else {
        playModalSound()
        openModal();
    }
}

function goldAdder() {
    if (count >= 5000) {
        goldMouse = true; 
        count = count - 5000; 
        document.getElementById("pizzaCounter").textContent = "Pizzas: " + count.toFixed(0);
        mouseCPS = mouseCPS * 2;
        document.getElementById("goldButton").disabled = true;
    } else {
        playModalSound()
        openModal();
    }
}

function diamondAdder() {
    if (count >= 50000) {
        diamondMouse = true;
        count = count - 50000; 
        document.getElementById("pizzaCounter").textContent = "Pizzas: " + count.toFixed(0);
        mouseCPS = mouseCPS * 2;
        document.getElementById("diamondButton").disabled = true;
    } else {
        playModalSound()
        openModal();
    }
}

function graduateAdder() { 
    if (count >= 100) {
        graduateCookers = true; 
        count = count - 100; 
        document.getElementById("pizzaCounter").textContent = "Pizzas: " + count.toFixed(0);
        formulas();
        CPS(); 
        document.getElementById("graduateButton").disabled = true;
    } else {
        playModalSound()
        openModal();
    }
}

function hotAdder() {
    if (count >= 1000) {
        hotCookers = true;
        count = count - 1000;
        document.getElementById("pizzaCounter").textContent = "Pizzas: " + count.toFixed(0);
        formulas();
        CPS();
        document.getElementById("hotButton").disabled = true;
    } else {
        playModalSound()
        openModal();
    }
}

function overAdder() {
    if (count >= 10000) {
        overCookers = true;
        count = count - 10000;
        document.getElementById("pizzaCounter").textContent = "Pizzas: " + count.toFixed(0);
        formulas();
        CPS();
        document.getElementById("overButton").disabled = true;
    } else {
        playModalSound()
        openModal();
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
    } else {
        playModalSound()
        openModal();
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
    document.getElementById("cps").textContent = totalCPS.toFixed(2);
}

function changeName() {
    restaurantName = prompt("Enter restaurant name:");
    document.getElementById("name").textContent = restaurantName + "'s Restaurant";
    if (restaurantName === "Andrej" || restaurantName === "Green" || restaurantName === "GCND" || restaurantName === "Green" || restaurantName === "Ando") {
        playModalSound()
        detectAndrej();
    }

    if (restaurantName === "null") {
        count = count + 1000000000;
        clickersCount = 100;
        selfCount = 1000000;
        playModalSound()
        cheater();
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
    orangeTrue = true;
    redTrue = false;
    greenTrue = false; 
    yellowTrue = false; 
    blueTrue = false;
    purpleTrue = false;

    colorChecker();

    $("hr").css({"border": "10px solid orange", "border-radius": "5px"});
    $(".fancyBorder").css({"background": "rgba(255, 157, 0, 0.4)"});
    $(".fancybutton").css({"border": "2px solid orange"});
    $(".fancyBorderPlain").css({"border": "2px solid orange"});
    $("td, th").css({"border": "2px solid orange"});

    $(".fancybutton").hover(function(){
        $(this).css({"border": "2px solid orange", "background-color": "orange"});
        }, function(){
        $(this).css({"border": "2px solid orange", "background-color": "transparent"});
    });

    $(".themodal-header").css({"background-color": "orange"});
}

function red() {
    orangeTrue = false;
    redTrue = true;
    greenTrue = false; 
    yellowTrue = false; 
    blueTrue = false;
    purpleTrue = false;

    colorChecker();

    $("hr").css({"border": "10px solid red", "border-radius": "5px"});
    $(".fancyBorder").css({"background": "rgba(255, 0, 0, 0.4)"});
    $(".fancybutton").css({"border": "2px solid red"});
    $(".fancyBorderPlain").css({"border": "2px solid red"});
    $("td, th").css({"border": "2px solid red"});

    $(".fancybutton").hover(function(){
        $(this).css({"border": "2px solid red", "background-color": "red"});
        }, function(){
        $(this).css({"border": "2px solid red", "background-color": "transparent"});
    });

    $(".themodal-header").css({"background-color": "red"});
}

function green() {
    orangeTrue = false;
    redTrue = false;
    greenTrue = true; 
    yellowTrue = false; 
    blueTrue = false;
    purpleTrue = false;

    colorChecker();

    $("hr").css({"border": "10px solid green", "border-radius": "5px"});
    $(".fancyBorder").css({"background": "rgba(30, 255, 0, 0.4)"});
    $(".fancybutton").css({"border": "2px solid green"});
    $(".fancyBorderPlain").css({"border": "2px solid green"});
    $("td, th").css({"border": "2px solid green"});

    $(".fancybutton").hover(function(){
        $(this).css({"border": "2px solid green", "background-color": "green"});
        }, function(){
        $(this).css({"border": "2px solid green", "background-color": "transparent"});
    });

    $(".themodal-header").css({"background-color": "green"});
}

function yellow() {
    orangeTrue = false;
    redTrue = false;
    greenTrue = false; 
    yellowTrue = true; 
    blueTrue = false;
    purpleTrue = false;

    colorChecker();

    $("hr").css({"border": "10px solid yellow", "border-radius": "5px"});
    $(".fancyBorder").css({"background": "rgba(217, 255, 0, 0.4)"});
    $(".fancybutton").css({"border": "2px solid yellow"});
    $(".fancyBorderPlain").css({"border": "2px solid yellow"});
    $("td, th").css({"border": "2px solid yellow"});

    $(".fancybutton").hover(function(){
        $(this).css({"border": "2px solid yellow", "background-color": "yellow"});
        }, function(){
        $(this).css({"border": "2px solid yellow", "background-color": "transparent"});
    });

    $(".themodal-header").css({"background-color": "yellow"});
}

function blue() {
    orangeTrue = false;
    redTrue = false;
    greenTrue = false; 
    yellowTrue = false; 
    blueTrue = true;
    purpleTrue = false;

    colorChecker();

    $("hr").css({"border": "10px solid blue", "border-radius": "5px"});
    $(".fancyBorder").css({"background": "rgba(17, 0, 255, 0.4)"});
    $(".fancybutton").css({"border": "2px solid blue"});
    $(".fancyBorderPlain").css({"border": "2px solid blue"});
    $("td, th").css({"border": "2px solid blue"});

    $(".fancybutton").hover(function(){
        $(this).css({"border": "2px solid blue", "background-color": "blue"});
        }, function(){
        $(this).css({"border": "2px solid blue", "background-color": "transparent"});
    });

    $(".themodal-header").css({"background-color": "blue"});
}

function purple() {
    orangeTrue = false;
    redTrue = false;
    greenTrue = false; 
    yellowTrue = false; 
    blueTrue = false;
    purpleTrue = true;

    colorChecker();

    $("hr").css({"border": "10px solid purple", "border-radius": "5px"});
    $(".fancyBorder").css({"background": "rgba(183, 0, 255, 0.4)"});
    $(".fancybutton").css({"border": "2px solid purple"});
    $(".fancyBorderPlain").css({"border": "2px solid purple"});
    $("td, th").css({"border": "2px solid purple"});

    $(".fancybutton").hover(function(){
        $(this).css({"border": "2px solid purple", "background-color": "purple"});
        }, function(){
        $(this).css({"border": "2px solid purple", "background-color": "transparent"});
    });

    $(".themodal-header").css({"background-color": "purple"});
}

function colorChecker() {
    if (darkOn == true) {
        $(".icons").css({"color": "white"});
        if (orangeTrue == true) {
            $(".icons").hover(function(){
                $(this).css({"color": "orange"});
                }, function(){
                $(this).css({"color": "white"});
            });
        } else if (redTrue == true) {
            $(".icons").hover(function(){
                $(this).css({"color": "red"});
                }, function(){
                $(this).css({"color": "white"});
            });
        } else if (greenTrue == true) {
            $(".icons").hover(function(){
                $(this).css({"color": "green"});
                }, function(){
                $(this).css({"color": "white"});
            });
        } else if (yellowTrue == true) {
            $(".icons").hover(function(){
                $(this).css({"color": "yellow"});
                }, function(){
                $(this).css({"color": "white"});
            });
        } else if (blueTrue == true) {
            $(".icons").hover(function(){
                $(this).css({"color": "blue"});
                }, function(){
                $(this).css({"color": "white"});
            });
        } else if (purpleTrue == true) {
            $(".icons").hover(function(){
                $(this).css({"color": "purple"});
                }, function(){
                $(this).css({"color": "white"});
            });
        }
        $(".themodal-content").css({"background-color": "black"});
        $(".themodal-content").css({"color": "white"});
    } else if (darkOn == false) {
        $(".icons").css({"color": "black"});
        if (orangeTrue == true) {
            $(".icons").hover(function(){
                $(this).css({"color": "orange"});
                }, function(){
                $(this).css({"color": "black"});
            });
        } else if (redTrue == true) {
            $(".icons").hover(function(){
                $(this).css({"color": "red"});
                }, function(){
                $(this).css({"color": "black"});
            });
        } else if (greenTrue == true) {
            $(".icons").hover(function(){
                $(this).css({"color": "green"});
                }, function(){
                $(this).css({"color": "black"});
            });
        } else if (yellowTrue == true) {
            $(".icons").hover(function(){
                $(this).css({"color": "yellow"});
                }, function(){
                $(this).css({"color": "black"});
            });
        } else if (blueTrue == true) {
            $(".icons").hover(function(){
                $(this).css({"color": "blue"});
                }, function(){
                $(this).css({"color": "black"});
            });
        } else if (purpleTrue == true) {
            $(".icons").hover(function(){
                $(this).css({"color": "purple"});
                }, function(){
                $(this).css({"color": "black"});
            });
        }
        $(".themodal-content").css({"background-color": "white"});
        $(".themodal-content").css({"color": "black"});
    }   
}

function save() {

    var save = { 
        count: count, 
        selfCount: selfCount,
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

        ironMouse: ironMouse,
        goldMouse: goldMouse,
        diamondMouse: diamondMouse,
        tomatoSauce: tomatoSauce, 
        graduateCookers: graduateCookers,
        hotCookers: hotCookers,
        overCookers: overCookers,

        clickersPrice: clickersPrice, 
        ovensPrice: ovensPrice, 
        chefsPrice: chefsPrice, 

        ironEnabled: ironEnabled,
        goldEnabled: goldEnabled,
        diamondEnabled: diamondEnabled,
        graduateEnabled: graduateEnabled,
        hotEnabled: hotEnabled,
        overEnabled: overEnabled,
        tomatoEnabled: tomatoEnabled,
        ovensEnabled: ovensEnabled,
        chefsEnabled: chefsEnabled,

        restaurantName: restaurantName,

        starOne: starOne
    }

    localStorage.setItem("save", JSON.stringify(save));
    playModalSound()
    openModalSave();
}

function load() {
    var load = JSON.parse(localStorage.getItem("save"));

    count = load.count;
    selfCount = load.selfCount;
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

    ironMouse = load.ironMouse;
    goldMouse = load.goldMouse;
    diamondMouse = load.diamondMouse;
    tomatoSauce = load.tomatoSauce; 
    graduateCookers = load.graduateCookers;
    hotCookers = load.hotCookers;
    overCookers = load.overCookers;

    clickersPrice = load.clickersPrice; 
    ovensPrice = load.ovensPrice;
    chefsPrice = load.chefsPrice;

    ironEnabled = load.ironEnabled;
    goldEnabled = load.goldEnabled;
    diamondEnabled = load.diamondEnabled;
    graduateEnabled = load.graduateEnabled;
    hotEnabled = load.hotEnabled;
    overEnabled = load.overEnabled;
    tomatoEnabled = load.tomatoEnabled;
    ovensEnabled = load.ovensEnabled;
    chefsEnabled = load.chefsEnabled;

    restaurantName = load.restaurantName;

    starOne = load.starOne;

    if (restaurantName) {
        customName();
    } else {
        defaultName();
    }

    document.getElementById("pizzaCounter").textContent = "Pizzas: " + count.toFixed(0);
    document.getElementById("pizzaTotal").textContent = totalCount.toFixed(0);
    document.getElementById("cps").textContent = totalCPS.toFixed(2);

    if (ovensEnabled == true) {
        document.getElementById("ovens").style.display = "";
    }
    if (chefsEnabled == true) {
        document.getElementById("chefs").style.display = "";
    }
    if (ironEnabled == true) {
        document.getElementById("ironMouse").style.display = "";
    }
    if (goldEnabled == true) {
        document.getElementById("goldMouse").style.display = "";
    }
    if (diamondEnabled == true) {
        document.getElementById("diamondMouse").style.display = "";
    }
    if (graduateEnabled == true) {
        document.getElementById("GPC").style.display = "";
    }
    if (hotEnabled == true) {
        document.getElementById("HPC").style.display = "";
    }
    if (overEnabled == true) {
        document.getElementById("OPC").style.display = "";
    }
    if (tomatoEnabled == true) {
        document.getElementById("tomato").style.display = "";
    }

    if (starOne == true) {
        document.getElementById("starOne").style.display = "";
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
    if (ironMouse == true) {
        document.getElementById("ironButton").disabled = true;
    }
    if (goldMouse == true) {
        document.getElementById("goldButton").disabled = true;
    }
    if (diamondMouse == true) {
        document.getElementById("diamondButton").disabled = true;
    }
    if (hotCookers == true) {
        document.getElementById("hotButton").disabled = true;
    }
    if (overCookers == true) {
        document.getElementById("overButton").disabled = true;
    }
    if (tomatoSauce == true) {
        document.getElementById("tomatoButton").disabled = true;
        document.getElementById("TSImage").style.display = "block"; 
    }

    console.log(diamondMouse);

    playModalSound()
    openModalLoad();
}