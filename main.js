// Counters - 6
var count = 0;
var selfCount = 0;
var totalCount = 0;
var clickersCount = 0;
var ovensCount = 0;
var chefsCount = 0;
var restaurantCount = 0;

// CPS - 9
var mouseCPS = 1;
var clickerCPS = 0;
var ovensCPS = 0;
var chefsCPS = 0;
var restaurantCPS = 0;
var totalCPS = 0;
var tomatoCPS = 0;
var cheeseCPS = 0;
var pepperCPS = 0;

// Upgrades Enabled - 16
var tomatoSauce = false;
var cheese = false;
var peppers = false; 
var ironMouse = false;
var goldMouse = false;
var diamondMouse = false;
var graduateCookers = false;
var hotCookers = false; 
var overCookers = false; 
var bigOvens = false;
var pizzaOvens = false; 
var powerOvens = false;
var commisChefs = false;
var partieChefs = false; 
var masterChefs = false;
var chainRestaurants = false; 
var familyRestaurants = false; 
var franchiseRestaurants = false; 

// Building Prices - 4
var clickersPrice = 15;
var ovensPrice = 100;
var chefsPrice = 1100;
var restaurantPrice = 12000;

// Unlock Checkers - 16
var ironEnabled = false;
var goldEnabled = false;
var diamondEnabled = false;
var graduateEnabled = false;
var hotEnabled = false; 
var overEnabled = false; 
var bigEnabled = false;
var pizzaEnabled = false; 
var powerEnabled = false;
var commisEnabled = false;
var partieEnabled = false;
var masterEnabled = false; 
var chainEnabled = false; 
var familyEnabled = false; 
var franchiseEnabled = false;
var tomatoEnabled = false;
var cheeseEnabled = false;
var peppersEnabled = false; 
var ovensEnabled = false;
var chefsEnabled = false;
var restaurantEnabled = false;

var restaurantName = "";

var modal;
var modal2;
var modal3;
var modal4;
var modal5;
var modal6;
var modal7;
var modal8;
var modal9;
var modal10;
var modal11; 

var darkOn = false;
var orangeTrue = true;
var redTrue = false;
var greenTrue = false; 
var yellowTrue = false; 
var blueTrue = false;
var cyanTrue = false;
var purpleTrue = false;

var starOne = false;

window.setInterval(Timer, 1000); 
window.onload = defaultName;
window.setInterval(autoSave, 60000);

function randRange(data) {
    var newTime = data[Math.floor(data.length * Math.random())]; 
    return newTime; 
}

function randomEvents() {
    var timeArray = new Array(300000, 480000, 600000, 780000, 900000, 1080000, 1200000, 1500000, 1800000);

    var xPos = Math.floor(Math.random() * window.outerHeight);
    var yPos = Math.floor(Math.random() * window.outerWidth);
    var show = document.getElementById("pizzaBonus");

    playGoldenSound(); 
    $("#pizzaBonus").css({"top": xPos + "px", "left": yPos + "px"});
    show.classList.add("fade-in");
    show.style.display = "block"; 

    clearInterval(timer); 
    timer = setInterval(randomEvents, randRange(timeArray)); 

    setTimeout(function() {
        show.classList.remove("fade-in");
        show.classList.add("fade-out");
        setTimeout(function()  {
            show.style.display = "none";
        }, 1999);
    }, 7000);
}

function bonusActivate() {
    var chance;
    var show = document.getElementById("pizzaBonus");

    function calculateChance() {
        chance = Math.random(); 
    }

    function bonusPizzas() {
        var RND = Math.floor(Math.random() * (1000 - 500 + 1)) + 500; 
        count = count + RND; 
        totalCount = totalCount + RND; 
        document.getElementById("bonusPizzasText").textContent = "You got " + RND + " bonus pizzas!"; 
        playModalSound(); 
        bonus(); 
    }

    function x7() {
        clickerCPS = clickerCPS * 7;
        ovensCPS = ovensCPS * 7;
        chefsCPS = chefsCPS * 7;
        restaurantCPS = restaurantCPS * 7;
        CPS(); 
        playModalSound(); 
        x7Modal();
        setTimeout(function() {
            clickerCPS = clickerCPS / 7;
            ovensCPS = ovensCPS / 7;
            chefsCPS = chefsCPS / 7;
            restaurantCPS = restaurantCPS / 7;
            CPS(); 
        }, 77000);
    }

    function x777() {
        mouseCPS = mouseCPS * 777; 
        playModalSound(); 
        x777Modal(); 
        setTimeout(function()  {
            mouseCPS = mouseCPS / 777;
        }, 13000);
    }

    function chanceCheck() {
        if (chance < 0.60) {
            bonusPizzas(); 
        } else if (chance < 0.95) {
            x7(); 
        } else if (chance < 1) {
            x777();
        } else if (chance = 0.00) {
            calculateChance(); 
            chanceCheck(); 
        }
    }

    calculateChance(); 
    chanceCheck(); 

    show.style.display = "none";
}

var start = new Array(300000, 600000, 900000, 1200000);
var timer = setInterval(randomEvents, randRange(start));   
//var timer = setInterval(randomEvents, 1000); 

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

function bonus() {
    document.getElementById("bonusPizzas").style.display = "block";
    autoCLose(); 
}

function x7Modal() {
    document.getElementById("x7").style.display = "block";
    autoCLose(); 
}

function x777Modal() {
    document.getElementById("x777").style.display = "block";
    autoCLose();
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
    modal9 = document.getElementById("bonusPizzas"); 
    modal10 = document.getElementById("x7"); 
    modal11 = document.getElementById("x777"); 

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
    } else if (event.target == modal9) {
        modal9.classList.add("themodal-close");
        setTimeout(function() {
            modal9.style.display = "none";
            modal9.classList.remove("themodal-close");
        }, 200);
    } else if (event.target == modal10) {
        modal10.classList.add("themodal-close");
        setTimeout(function() {
            modal10.style.display = "none";
            modal10.classList.remove("themodal-close");
        }, 200);
    } else if (event.target == modal11) {
        modal11.classList.add("themodal-close");
        setTimeout(function() {
            modal11.style.display = "none";
            modal11.classList.remove("themodal-close");
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
        } else if (modal9.style.display == "block") {
            modal9.classList.add("themodal-close");
            setTimeout(function() {
                modal9.style.display = "none";
                modal9.classList.remove("themodal-close");
            }, 200);
        } else if (modal10.style.display == "block") {
            modal10.classList.add("themodal-close");
            setTimeout(function() {
                modal10.style.display = "none";
                modal10.classList.remove("themodal-close");
            }, 200);
        } else if (modal11.style.display == "block") {
            modal11.classList.add("themodal-close");
            setTimeout(function() {
                modal11.style.display = "none";
                modal11.classList.remove("themodal-close");
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

function playGoldenSound() {
    var sound = new Audio(); 
    sound.src = "sounds/goldenPizza.mp3";
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
    $(".orange").toggleClass("orangeWhite"); 
    $(".red").toggleClass("redWhite"); 
    $(".green").toggleClass("greenWhite"); 
    $(".yellow").toggleClass("yellowWhite"); 
    $(".blue").toggleClass("blueWhite"); 
    $(".cyan").toggleClass("cyanWhite"); 
    $(".purple").toggleClass("purpleWhite");
    $(".whiteMode").toggleClass("darkMode"); 

    colorChecker(); 
}

function pizzaAdder() {
    count += mouseCPS;
    totalCount += mouseCPS;
    selfCount += 1;
    totalPizzas();
    document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
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

    if (restaurantEnabled == true) {

    } else if (count >= 12000) {
        restaurantEnabled = true; 
        document.getElementById("restaurants").style.display = "";
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

    if (cheeseEnabled == true) {

    } else if (count >= 2000000) {
        cheeseEnabled = true; 
        document.getElementById("cheese").style.display = ""; 
        playModalSound(); 
        newUpgrade(); 
    }

    if (peppersEnabled == true) {

    } else if (count >= 3000000) {
        peppersEnabled = true; 
        document.getElementById("peppers").style.display = ""; 
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
        ovensCPS = 1 * ovensCount; 
        if (bigOvens == true) {
            ovensCPS = ovensCPS * 2;
            if (pizzaOvens == true) {
                ovensCPS = ovensCPS * 2; 
                if (powerOvens == true) {
                    ovensCPS = ovensCPS * 2; 
                }
            }
        }
    }

    if (chefsCount >= 1) {
        chefsCPS = 8 * chefsCount;
        if (commisChefs == true) {
            chefsCPS = chefsCPS * 2;
            if (partieChefs == true) {
                chefsCPS = chefsCPS * 2;
                if (masterChefs == true) {
                    chefsCPS = chefsCPS * 2;
                }
            }
        }
    }

    if (restaurantCount >= 1) {
        restaurantCPS = 47 * restaurantCount;
        if (chainRestaurants == true) {
            restaurantCPS = restaurantCPS * 2;
            if (familyRestaurants == true) {
                restaurantCPS = restaurantCPS * 2;
                if (franchiseRestaurants == true) {
                    restaurantCPS = restaurantCPS * 2;
                }
            }
        }
    }
}

function clickersAdder() {
    if (count >= clickersPrice) {
        clickersCount += 1;
        formulas();
        CPS();
        document.getElementById("clickerCount").textContent = "Count: " + clickersCount;
        count = count - clickersPrice;
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        var formula = 15 * Math.pow(1.15, clickersCount);
        clickersPrice = formula;
        document.getElementById("clickersPrice").textContent = "Price: " + clickersPrice.toLocaleString(undefined, {maximumFractionDigits: 0});

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
        playModalSound();
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
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        var formula = 100 * Math.pow(1.15, ovensCount);
        ovensPrice = formula;
        document.getElementById("ovensPrice").textContent = "Price: " + ovensPrice.toLocaleString(undefined, {maximumFractionDigits: 0});

        if (bigEnabled == true) {

        } else if (ovensCount >= 1) {
            bigEnabled = true;
            document.getElementById("BO").style.display = "";
            playModalSound();
            newUpgrade();
        }

        if (pizzaEnabled == true) {

        } else if (ovensCount >= 50) {
            pizzaEnabled = true;
            document.getElementById("PO").style.display = "";
            playModalSound();
            newUpgrade();
        }

        if (powerEnabled == true) {

        } else if (ovensCount >= 100) {
            powerEnabled = true;
            document.getElementById("PowerO").style.display = "";
            playModalSound();
            newUpgrade();
        }
    } else {
        playModalSound();
        openModal();
    }
}

function chefsAdder() {
    if (count >= chefsPrice) {
        chefsCount += 1;
        formulas();
        CPS();
        document.getElementById("chefsCount").textContent = "Count: " + chefsCount;
        count = count - chefsPrice;
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        var formula = 1100 * Math.pow(1.15, chefsCount);
        chefsPrice = formula;
        document.getElementById("chefsPrice").textContent = "Price: " + chefsPrice.toLocaleString(undefined, {maximumFractionDigits: 0});

        if (commisEnabled == true) {

        } else if (chefsCount >= 1) {
            commisEnabled = true;
            document.getElementById("commis").style.display = "";
            playModalSound();
            newUpgrade();
        }

        if (partieEnabled == true) {

        } else if (chefsCount >= 50) {
            partieEnabled  = true;
            document.getElementById("partie").style.display = "";
            playModalSound();
            newUpgrade();
        }

        if (masterEnabled == true) {

        } else if (chefsCount >= 100) {
            masterEnabled = true;
            document.getElementById("master").style.display = "";
            playModalSound();
            newUpgrade();
        }
    } else {
        playModalSound();
        openModal();
    }
}

function restaurantAdder() {
    if (count >= restaurantPrice) {
        restaurantCount += 1;
        formulas(); 
        CPS(); 
        document.getElementById("restaurantsCount").textContent = "Count: " + restaurantCount;
        count = count - restaurantPrice; 
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        var formula = 12000 * Math.pow(1.15, restaurantCount);
        restaurantPrice = formula;
        document.getElementById("restaurantsPrice").textContent = "Price: " + restaurantPrice.toLocaleString(undefined, {maximumFractionDigits: 0});

        if (chainEnabled == true) {

        } else if (restaurantCount >= 1) {
            chainEnabled  = true;
            document.getElementById("chain").style.display = "";
            playModalSound();
            newUpgrade();
        }

        if (familyEnabled == true) {

        } else if (restaurantCount >= 50) {
            familyEnabled  = true;
            document.getElementById("family").style.display = "";
            playModalSound();
            newUpgrade();
        }

        if (franchiseEnabled == true) {

        } else if (restaurantCount >= 100) {
            franchiseEnabled = true;
            document.getElementById("franchise").style.display = "";
            playModalSound();
            newUpgrade();
        }
    } else {
        playModalSound(); 
        openModal(); 
    }
}

function ironAdder() {
    if (count >= 500) {
        ironMouse = true; 
        count = count - 500; 
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        mouseCPS = mouseCPS * 2;
        document.getElementById("ironButton").disabled = true;
    } else {
        playModalSound();
        openModal();
    }
}

function goldAdder() {
    if (count >= 5000) {
        goldMouse = true; 
        count = count - 5000; 
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        mouseCPS = mouseCPS * 2;
        document.getElementById("goldButton").disabled = true;
    } else {
        playModalSound();
        openModal();
    }
}

function diamondAdder() {
    if (count >= 50000) {
        diamondMouse = true;
        count = count - 50000; 
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        mouseCPS = mouseCPS * 2;
        document.getElementById("diamondButton").disabled = true;
    } else {
        playModalSound();
        openModal();
    }
}

function graduateAdder() { 
    if (count >= 100) {
        graduateCookers = true; 
        count = count - 100; 
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        formulas();
        CPS(); 
        document.getElementById("graduateButton").disabled = true;
    } else {
        playModalSound();
        openModal();
    }
}

function hotAdder() {
    if (count >= 1000) {
        hotCookers = true;
        count = count - 1000;
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        formulas();
        CPS();
        document.getElementById("hotButton").disabled = true;
    } else {
        playModalSound();
        openModal();
    }
}

function overAdder() {
    if (count >= 10000) {
        overCookers = true;
        count = count - 10000;
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        formulas();
        CPS();
        document.getElementById("overButton").disabled = true;
    } else {
        playModalSound();
        openModal();
    }
}

function bigAdder() {
    if (count >= 500) {
        bigOvens = true;
        count = count - 500;
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        formulas();
        CPS();
        document.getElementById("bigButton").disabled = true;
    } else {
        playModalSound();
        openModal();
    }
}

function povenAdder() {
    if (count >= 5000) {
        pizzaOvens = true;
        count = count - 5000;
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        formulas();
        CPS();
        document.getElementById("povenButton").disabled = true;
    } else {
        playModalSound();
        openModal();
    }
}

function powerAdder() {
    if (count >= 50000) {
        powerOvens = true;
        count = count - 50000;
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        formulas();
        CPS();
        document.getElementById("powerButton").disabled = true;
    } else {
        playModalSound();
        openModal();
    }
}

function commisAdder() {
    if (count >= 1000) {
        commisChefs = true;
        count = count - 1000;
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        formulas();
        CPS();
        document.getElementById("commisButton").disabled = true;
    } else {
        playModalSound();
        openModal();
    }
}

function partieAdder() {
    if (count >= 10000) {
        partieChefs = true;
        count = count - 10000;
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        formulas();
        CPS();
        document.getElementById("partieButton").disabled = true;
    } else {
        playModalSound();
        openModal();
    }
}

function masterAdder() {
    if (count >= 100000) {
        masterChefs = true;
        count = count - 100000;
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        formulas();
        CPS();
        document.getElementById("masterButton").disabled = true;
    } else {
        playModalSound();
        openModal();
    }
}

function chainAdder() {
    if (count >= 5000) {
        chainRestaurants = true;
        count = count - 5000;
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        formulas();
        CPS();
        document.getElementById("chainButton").disabled = true;
    } else {
        playModalSound();
        openModal();
    }
}

function familyAdder() {
    if (count >= 50000) {
        familyRestaurants = true;
        count = count - 50000;
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        formulas();
        CPS();
        document.getElementById("familyButton").disabled = true;
    } else {
        playModalSound();
        openModal();
    }
}

function franchiseAdder() {
    if (count >= 500000) {
        franchiseRestaurants = true;
        count = count - 500000;
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        formulas();
        CPS();
        document.getElementById("franchiseButton").disabled = true;
    } else {
        playModalSound();
        openModal();
    }
}

function tomatoAdder() { 
    if (count >= 1000000) {
        document.getElementById("top").style.display = ""; 
        tomatoSauce = true; 
        tomatoCPS = (1 / 100) * totalCPS;
        count = count - 1000000; 
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        CPS(); 
        document.getElementById("tomatoButton").disabled = true;
        document.getElementById("TSImage").style.display = "block"; 
    } else {
        playModalSound();
        openModal();
    }
}

function cheeseAdder() {
    if (count >= 10000000) {
        cheese = true; 
        cheeseCPS = (2 / 100) * totalCPS; 
        count = count - 10000000; 
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        CPS(); 
        document.getElementById("cheeseButton").disabled = true; 
        document.getElementById("CImage").style.display = "block"; 
    } else {
        playModalSound();
        openModal();
    }
}

function peppersAdder() {
    if (count >= 10000000) {
        peppers = true; 
        pepperCPS = (3 / 100) * totalCPS; 
        count = count - 100000000; 
        document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
        CPS(); 
        document.getElementById("peppersButton").disabled = true; 
        document.getElementById("PImage").style.display = "block"; 
    } else {
        playModalSound();
        openModal();
    }
}

function Timer() {
    count += clickerCPS + ovensCPS + chefsCPS + restaurantCPS;
    totalCount += clickerCPS + ovensCPS + chefsCPS + restaurantCPS;
    totalPizzas();
    document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
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
    document.getElementById("pizzaTotal").textContent = " " + totalCount.toLocaleString(undefined, {maximumFractionDigits: 0});
}

function CPS() {
    totalCPS = clickerCPS + ovensCPS + chefsCPS + restaurantCPS + tomatoCPS + cheeseCPS + pepperCPS; 
    document.getElementById("cps").textContent = totalCPS.toLocaleString(undefined, {maximumFractionDigits: 2});
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
        clickersCount = 99; 
        ovensCount = 99; 
        chefsCount = 99;
        restaurantCount = 99;
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
    cyanTrue = false;
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
    cyanTrue = false;
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
    cyanTrue = false;
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
    cyanTrue = false;
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
    cyanTrue = false;
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

function cyan() {
    orangeTrue = false;
    redTrue = false;
    greenTrue = false; 
    yellowTrue = false; 
    blueTrue = false;
    cyanTrue = true;
    purpleTrue = false;

    colorChecker(); 

    $("hr").css({"border": "10px solid cyan", "border-radius": "5px"});
    $(".fancyBorder").css({"background": "rgba(0, 247, 255, 0.4)"});
    $(".fancybutton").css({"border": "2px solid cyan"});
    $(".fancyBorderPlain").css({"border": "2px solid cyan"});
    $("td, th").css({"border": "2px solid cyan"});

    $(".fancybutton").hover(function(){
        $(this).css({"border": "2px solid cyan", "background-color": "cyan"});
        }, function(){
        $(this).css({"border": "2px solid cyan", "background-color": "transparent"});
    });

    $(".themodal-header").css({"background-color": "cyan"});
}

function purple() {
    orangeTrue = false;
    redTrue = false;
    greenTrue = false; 
    yellowTrue = false; 
    blueTrue = false;
    cyanTrue = false;
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
        } else if (cyanTrue == true) {
            $(".icons").hover(function(){
                $(this).css({"color": "cyan"});
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
        } else if (cyanTrue == true) {
            $(".icons").hover(function(){
                $(this).css({"color": "cyan"});
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
        restaurantCount: restaurantCount,

        mouseCPS: mouseCPS,
        clickerCPS: clickerCPS,
        ovensCPS: ovensCPS,
        chefsCPS: chefsCPS,
        restaurantCPS: restaurantCPS,
        totalCPS: totalCPS,
        tomatoCPS: tomatoCPS,
        cheeseCPS: cheeseCPS,
        pepperCPS: pepperCPS, 

        ironMouse: ironMouse,
        goldMouse: goldMouse,
        diamondMouse: diamondMouse,
        tomatoSauce: tomatoSauce, 
        cheese: cheese,
        peppers: peppers, 
        graduateCookers: graduateCookers,
        hotCookers: hotCookers,
        overCookers: overCookers,
        bigOvens: bigOvens,
        pizzaOvens: pizzaOvens, 
        powerOvens: powerOvens,
        commisChefs: commisChefs,
        partieChefs: partieChefs, 
        masterChefs: masterChefs,
        chainRestaurants: chainRestaurants, 
        familyRestaurants: familyRestaurants, 
        franchiseRestaurants: franchiseRestaurants,

        clickersPrice: clickersPrice, 
        ovensPrice: ovensPrice, 
        chefsPrice: chefsPrice, 
        restaurantPrice: restaurantPrice, 

        ironEnabled: ironEnabled,
        goldEnabled: goldEnabled,
        diamondEnabled: diamondEnabled,
        graduateEnabled: graduateEnabled,
        hotEnabled: hotEnabled,
        overEnabled: overEnabled,
        bigEnabled: bigEnabled,
        pizzaEnabled: pizzaEnabled, 
        powerEnabled: pizzaEnabled,
        commisEnabled: commisEnabled, 
        partieEnabled: partieEnabled, 
        masterEnabled: masterEnabled,
        chainEnabled: chainEnabled, 
        familyEnabled: familyEnabled, 
        franchiseEnabled: franchiseEnabled,
        tomatoEnabled: tomatoEnabled,
        cheeseEnabled: cheeseEnabled,
        peppersEnabled: peppersEnabled,
        ovensEnabled: ovensEnabled,
        chefsEnabled: chefsEnabled,
        restaurantEnabled: restaurantEnabled,

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
    restaurantCount = load.restaurantCount; 

    mouseCPS = load.mouseCPS;
    clickerCPS = load.clickerCPS;
    ovensCPS = load.ovensCPS;
    chefsCPS = load.chefsCPS;
    restaurantCPS = load.restaurantCPS; 
    totalCPS = load.totalCPS;
    tomatoCPS = load.tomatoCPS;
    cheeseCPS = load.cheeseCPS;
    pepperCPS = load.pepperCPS;

    ironMouse = load.ironMouse;
    goldMouse = load.goldMouse;
    diamondMouse = load.diamondMouse;
    tomatoSauce = load.tomatoSauce; 
    cheese = load.cheese; 
    peppers = load.peppers;
    graduateCookers = load.graduateCookers;
    hotCookers = load.hotCookers;
    overCookers = load.overCookers;
    bigOvens = load.bigOvens;
    pizzaOvens = load.pizzaOvens;
    powerOvens = load.powerOvens;
    commisChefs = load.commisChefs; 
    partieChefs = load.partieChefs; 
    masterChefs = load.masterChefs;
    chainRestaurants = load.chainRestaurants; 
    familyRestaurants = load.familyRestaurants;
    franchiseRestaurants = load.franchiseRestaurants;

    clickersPrice = load.clickersPrice; 
    ovensPrice = load.ovensPrice;
    chefsPrice = load.chefsPrice;
    restaurantPrice = load.restaurantPrice;

    ironEnabled = load.ironEnabled;
    goldEnabled = load.goldEnabled;
    diamondEnabled = load.diamondEnabled;
    graduateEnabled = load.graduateEnabled;
    hotEnabled = load.hotEnabled;
    overEnabled = load.overEnabled;
    bigEnabled = load.bigEnabled;
    pizzaEnabled = load.pizzaEnabled; 
    powerEnabled = load.powerEnabled;
    commisEnabled = load.commisEnabled; 
    partieEnabled = load.partieEnabled; 
    masterEnabled = load.masterEnabled;
    chainEnabled = load.chainEnabled; 
    familyEnabled = load.familyEnabled;  
    franchiseEnabled = load.franchiseEnabled;
    tomatoEnabled = load.tomatoEnabled;
    cheeseEnabled = load.cheeseEnabled;
    peppersEnabled = load.peppersEnabled;
    ovensEnabled = load.ovensEnabled;
    chefsEnabled = load.chefsEnabled;
    restaurantEnabled = load.restaurantEnabled;

    restaurantName = load.restaurantName;

    starOne = load.starOne;

    if (restaurantName) {
        customName();
    } else {
        defaultName();
    }

    document.getElementById("pizzaCounter").textContent = count.toLocaleString(undefined, {maximumFractionDigits: 0});
    document.getElementById("pizzaTotal").textContent = " " + totalCount.toLocaleString(undefined, {maximumFractionDigits: 0});
    document.getElementById("cps").textContent = totalCPS.toLocaleString(undefined, {maximumFractionDigits: 2});

    if (ovensEnabled == true) {
        document.getElementById("ovens").style.display = "";
    }
    if (chefsEnabled == true) {
        document.getElementById("chefs").style.display = "";
    }
    if (restaurantEnabled == true) {
        document.getElementById("restaurants").style.display = "";
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
    if (bigEnabled == true) {
        document.getElementById("BO").style.display = "";
    }
    if (pizzaEnabled == true) {
        document.getElementById("PO").style.display = "";
    }
    if (powerEnabled == true) {
        document.getElementById("PowerO").style.display = "";
    }
    if (commisEnabled == true) {
        document.getElementById("commis").style.display = "";
    }
    if (partieEnabled == true) {
        document.getElementById("partie").style.display = "";
    }
    if (masterEnabled == true) {
        document.getElementById("master").style.display = "";
    }
    if (chainEnabled == true) {
        document.getElementById("chain").style.display = "";
    }
    if (familyEnabled == true) {
        document.getElementById("family").style.display = "";
    }
    if (franchiseEnabled == true) {
        document.getElementById("franchise").style.display = "";
    }
    if (tomatoEnabled == true) {
        document.getElementById("tomato").style.display = "";
    }
    if (cheeseEnabled == true) {
        document.getElementById("cheese").style.display = "";
    }
    if (peppersEnabled == true) {
        document.getElementById("peppers").style.display = "";
    }

    if (starOne == true) {
        document.getElementById("starOne").style.display = "";
    }

    document.getElementById("clickerCount").textContent = "Count: " + clickersCount;
    document.getElementById("ovensCount").textContent = "Count: " + ovensCount;
    document.getElementById("chefsCount").textContent = "Count: " + chefsCount;
    document.getElementById("restaurantsCount").textContent = "Count: " + restaurantCount;

    document.getElementById("clickersPrice").textContent = "Price: " + clickersPrice.toLocaleString(undefined, {maximumFractionDigits: 0});
    document.getElementById("ovensPrice").textContent = "Price: " + ovensPrice.toLocaleString(undefined, {maximumFractionDigits: 0});
    document.getElementById("chefsPrice").textContent = "Price: " + chefsPrice.toLocaleString(undefined, {maximumFractionDigits: 0});
    document.getElementById("restaurantsPrice").textContent = "Price: " + restaurantPrice.toLocaleString(undefined, {maximumFractionDigits: 0});

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
    if (bigOvens == true) {
        document.getElementById("bigButton").disabled = true;
    }
    if (pizzaOvens == true) {
        document.getElementById("povenButton").disabled = true;
    }
    if (powerOvens == true) {
        document.getElementById("powerButton").disabled = true;
    }
    if (commisChefs == true) {
        document.getElementById("commisButton").disabled = true;
    }
    if (partieChefs == true) {
        document.getElementById("partieButton").disabled = true;
    }
    if (masterChefs == true) {
        document.getElementById("masterButton").disabled = true;
    }
    if (chainRestaurants == true) {
        document.getElementById("chainButton").disabled = true;
    }
    if (familyRestaurants == true) {
        document.getElementById("familyButton").disabled = true;
    }
    if (franchiseRestaurants == true) {
        document.getElementById("franchiseButton").disabled = true;
    }
    if (tomatoSauce == true) {
        document.getElementById("top").style.display = ""; 
        document.getElementById("tomatoButton").disabled = true;
        document.getElementById("TSImage").style.display = "block"; 
    }
    if (cheese == true) {
        document.getElementById("cheeseButton").disabled = true;
        document.getElementById("CImage").style.display = "block"; 
    }
    if (peppers == true) {
        document.getElementById("peppersButton").disabled = true;
        document.getElementById("PImage").style.display = "block"; 
    }

    playModalSound()
    openModalLoad();
}