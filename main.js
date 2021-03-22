// Counters - 8
var count = 0;
var selfCount = 0;
var totalCount = 0;
var clickersCount = 0;
var ovensCount = 0;
var chefsCount = 0;
var restaurantCount = 0;
var robotsCount = 0;

// CPS - 12
var mouseCPS = 1;
var clickerCPS = 0;
var ovensCPS = 0;
var chefsCPS = 0;
var restaurantCPS = 0;
var robotsCPS = 0;
var totalCPS = 0;
var tomatoCPS = 0;
var cheeseCPS = 0;
var pepperCPS = 0;
var mushroomsCPS = 0; 
var pepperoniCPS = 0;

// Upgrades Enabled - 23
var tomatoSauce = false;
var cheese = false;
var peppers = false; 
var mushrooms = false;
var pepperoni = false;
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
var diyRobots = false;
var factoryRobots = false;
var selfRobots = false;

// Building Prices - 5
var clickersPrice = 15;
var ovensPrice = 100;
var chefsPrice = 1100;
var restaurantPrice = 12000;
var robotsPrice = 130000;

// Unlock Checkers - 26
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
var diyEnabled = false;
var factoryEnabled = false;
var selfEnabled = false;
var tomatoEnabled = false;
var cheeseEnabled = false;
var peppersEnabled = false;
var mushroomsEnabled = false; 
var pepperoniEnabled = false;
var ovensEnabled = false;
var chefsEnabled = false;
var restaurantEnabled = false;
var robotsEnabled = false;

var restaurantName = ""; 

var darkOn = false;
var orangeTrue = true;
var redTrue = false;
var greenTrue = false; 
var yellowTrue = false; 
var blueTrue = false;
var cyanTrue = false;
var purpleTrue = false;

var starOne = false;

var modal = $("#poorModal");
var modal2 = $("#save");
var modal3 = $("#load");
var modal4 = $("#ando");
var modal5 = $("#newUpgrade");
var modal6 = $("#newBuilding");
var modal7 = $("#cheater");
var modal8 = $("#star"); 
var modal9 = $("#bonusPizzas"); 
var modal10 = $("#x7"); 
var modal11 = $("#x777"); 

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
    var show = $("#pizzaBonus");

    playGoldenSound(); 
    $("#pizzaBonus").css({"top": xPos + "px", "left": yPos + "px"});
    show.addClass("fade-in");
    show.show(); 

    clearInterval(timer); 
    timer = setInterval(randomEvents, randRange(timeArray)); 

    setTimeout(function() {
        show.removeClass("fade-in");
        show.addClass("fade-out");
        setTimeout(function()  {
            show.hide();
        }, 1999);
    }, 7000);
}

function bonusActivate() {
    var chance;

    function calculateChance() {
        chance = Math.random(); 
    }

    function bonusPizzas() {
        var RND = Math.floor(Math.random() * (1000 - 500 + 1)) + 500; 
        count = count + RND; 
        totalCount = totalCount + RND; 
        $("#bonusPizzasText").text("You got " + RND + " bonus pizzas!");
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

    $("#pizzaBonus").hide();
}

var start = new Array(300000, 600000, 900000, 1200000);
var timer = setInterval(randomEvents, randRange(start));   
//var timer = setInterval(randomEvents, 1000); 

function openModal() {
    $("#poorModal").show();
}

function openModalSave() {
    $("#save").show();
    autoCLose();
}

function openModalLoad() {
    $("#load").show();
    autoCLose();
}

function autoSave() {
    save(); 
    autoCLose();
}

function detectAndrej() {
    $("#ando").show();
}

function newUpgrade() {
    $("#newUpgrade").show();
}

function newBuilding() {
    $("#newBuilding").show();
}

function cheater() {
    $("#cheater").show();
}

function starOneShow() { 
    $("#star").show();
}

function bonus() {
    $("#bonusPizzas").show();
    autoCLose(); 
}

function x7Modal() {
    $("#x7").show();
    autoCLose(); 
}

function x777Modal() {
    $("#x777").show();
    autoCLose();
}

$("body").click(function(event) {
    if ($(event.target).is(modal)) {
        modal.addClass("themodal-close");
        setTimeout(function() {
            modal.hide();
            modal.removeClass("themodal-close");
        }, 200);
    } else if ($(event.target).is(modal2)) {
        modal2.addClass("themodal-close");
        setTimeout(function() {
            modal2.hide();
            modal2.removeClass("themodal-close");
        }, 200);
    } else if ($(event.target).is(modal3)) {
        modal3.addClass("themodal-close");
        setTimeout(function() {
            modal3.hide();
            modal3.removeClass("themodal-close");
        }, 200);
    } else if ($(event.target).is(modal4)) {
        modal4.addClass("themodal-close");
        setTimeout(function() {
            modal4.hide();
            modal4.removeClass("themodal-close");
        }, 200);
    } else if ($(event.target).is(modal5)) {
        modal5.addClass("themodal-close");
        setTimeout(function() {
            modal5.hide();
            modal5.removeClass("themodal-close");
        }, 200);
    } else if ($(event.target).is(modal6)) {
        modal6.addClass("themodal-close");
        setTimeout(function() {
            modal6.hide();
            modal6.removeClass("themodal-close");
        }, 200);
    } else if ($(event.target).is(modal7)) {
        modal7.addClass("themodal-close");
        setTimeout(function() {
            modal7.hide();
            modal7.removeClass("themodal-close");
        }, 200);
    } else if ($(event.target).is(modal8)) {
        modal8.addClass("themodal-close");
        setTimeout(function() {
            modal8.hide();
            modal8.removeClass("themodal-close");
        }, 200);
    } else if ($(event.target).is(modal9)) {
        modal9.addClass("themodal-close");
        setTimeout(function() {
            modal9.hide();
            modal9.removeClass("themodal-close");
        }, 200);
    } else if ($(event.target).is(modal10)) {
        modal10.addClass("themodal-close");
        setTimeout(function() {
            modal10.hide();
            modal10.removeClass("themodal-close");
        }, 200);
    } else if ($(event.target).is(modal11)) {
        modal11.addClass("themodal-close");
        setTimeout(function() {
            modal11.hide();
            modal11.removeClass("themodal-close");
        }, 200);
    }
})

function autoCLose() {
    setTimeout(function() {
        if (modal2.length) {
            modal2.addClass("themodal-close");
            setTimeout(function() {
                modal2.hide();
                modal2.removeClass("themodal-close");
            }, 200);
        } 
        
        if (modal3.length) {
            modal3.addClass("themodal-close");
            setTimeout(function() {
                modal3.hide();
                modal3.removeClass("themodal-close");
            }, 200);
        } 
        
        if (modal9.length) {
            modal9.addClass("themodal-close");
            setTimeout(function() {
                modal9.hide();
                modal9.removeClass("themodal-close");
            }, 200);
        } 
        
        if (modal10.length) {
            modal10.addClass("themodal-close");
            setTimeout(function() {
                modal10.hide();
                modal10.removeClass("themodal-close");
            }, 200);
        } 
        
        if (modal11.length) {
            modal11.addClass("themodal-close");
            setTimeout(function() {
                modal11.hide();
                modal11.removeClass("themodal-close");
            }, 200);
        }
    }, 2000);
}

function defaultName() {
    $("#name").text("Your Restaurant");
}

function customName() {
    $("#name").text(restaurantName + "'s Restaurant");
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
    $("#pizza").css({
        "filter": "brightness(0.7)",
        "transform": "scale(0.97)"
    });
}

function resizePizzaNormal() {
    $("#pizza").css({
        "filter": "brightness(1)",
        "transform": "scale(1)"
    });
}

function resizePizzaHover() {
    $("#pizza").css({
        "filter": "brightness(1.2)",
        "transform": "scale(1.05)"
    });
}

function dark() {
    darkOn = !darkOn;
    $(document.body).toggleClass("dark");
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
    $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));

    if (count >= 100 && !ovensEnabled) {
        ovensEnabled = true;
        $("#ovens").show();
        playModalSound();
        newBuilding();
    }

    if (count >= 1100 && !chefsEnabled) {
        chefsEnabled = true;
        $("#chefs").show();
        playModalSound();
        newBuilding();
    }

    if (count >= 12000 && !restaurantEnabled) {
        restaurantEnabled = true;
        $("#restaurants").show();
        playModalSound();
        newBuilding();
    }

    if (count >= 130000 && !robotsEnabled) {
        robotsEnabled = true;
        $("#robots").show();
        playModalSound();
        newBuilding();
    }

    if (count >= 1000000 && !tomatoEnabled) {
        restaurantEnabled = true;
        $("#tomato").show();
        playModalSound();
        newUpgrade();
    }

    if (count >= 2000000 && !cheeseEnabled) {
        cheeseEnabled = true;
        $("#cheese").show();
        playModalSound();
        newUpgrade();
    }

    if (count >= 3000000 && !peppersEnabled) {
        peppersEnabled = true;
        $("#cheese").show();
        playModalSound();
        newUpgrade();
    }

    if (count >= 4000000 && !mushroomsEnabled) {
        mushroomsEnabled = true;
        $("#mushrooms").show();
        playModalSound();
        newUpgrade();
    }

    if (count >= 5000000 && !pepperoniEnabled) {
        pepperoniEnabled = true; 
        $("#pepperoni").show();
        playModalSound(); 
        newUpgrade(); 
    }

    if (selfCount >= 100 && !ironEnabled) {
        ironEnabled = true; 
        $("#ironMouse").show();
        playModalSound();
        newUpgrade();
    }

    if (selfCount >= 1000 && !goldEnabled) {
        goldEnabled = true; 
        $("#goldMouse").show();
        playModalSound();
        newUpgrade();
    }

    if (selfCount >= 10000 && !diamondEnabled) {
        diamondEnabled = true; 
        $("#diamondMouse").show();
        playModalSound();
        newUpgrade();
    }

    /*
    if (count >= 10000 && !starOne) {
        starOne = true;
        $("#starOne").show();
        playModalSound()
        starOneShow();
    }
    */
}

function formulas() {
    if (clickersCount >= 1) {
        clickerCPS = 0.1 * clickersCount;
        if (graduateCookers) {
            clickerCPS = clickerCPS * 2;
            if (hotCookers) {
                clickerCPS = clickerCPS * 2;
                if (overCookers) {
                    clickerCPS = clickerCPS * 2;
                }
            }
        }
    }

    if (ovensCount >= 1) {
        ovensCPS = 1 * ovensCount; 
        if (bigOvens) {
            ovensCPS = ovensCPS * 2;
            if (pizzaOvens) {
                ovensCPS = ovensCPS * 2; 
                if (powerOvens) {
                    ovensCPS = ovensCPS * 2; 
                }
            }
        }
    }

    if (chefsCount >= 1) {
        chefsCPS = 8 * chefsCount;
        if (commisChefs) {
            chefsCPS = chefsCPS * 2;
            if (partieChefs) {
                chefsCPS = chefsCPS * 2;
                if (masterChefs) {
                    chefsCPS = chefsCPS * 2;
                }
            }
        }
    }

    if (restaurantCount >= 1) {
        restaurantCPS = 47 * restaurantCount;
        if (chainRestaurants) {
            restaurantCPS = restaurantCPS * 2;
            if (familyRestaurants) {
                restaurantCPS = restaurantCPS * 2;
                if (franchiseRestaurants) {
                    restaurantCPS = restaurantCPS * 2;
                }
            }
        }
    }

    if (robotsCount >= 1) {
        robotsCPS = 260 * robotsCount;
        if (diyRobots) {
            robotsCPS = robotsCPS * 2;
            if (factoryRobots) {
                robotsCPS = robotsCPS * 2;
                if (selfRobots) {
                    robotsCPS = robotsCPS * 2;
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
        $("#clickerCount").text("Count: " + clickersCount);
        count = count - clickersPrice;
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        var formula = 15 * Math.pow(1.15, clickersCount);
        clickersPrice = formula;
        $("#clickersPrice").text("Price: " + clickersPrice.toLocaleString(undefined, {maximumFractionDigits: 0}));

        if (clickersCount >= 1 && !graduateEnabled) {
            graduateEnabled = true;
            $("#GPC").show();
            playModalSound();
            newUpgrade();
        }

        if (clickersCount >= 50 && !hotEnabled) {
            hotEnabled = true;
            $("#HPC").show();
            playModalSound();
            newUpgrade();
        }
        
        if (clickersCount >= 100 && !overEnabled) {
            overEnabled = true;
            $("#OPC").show();
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
        $("#ovensCount").text("Count: " + ovensCount);
        count = count - ovensPrice;
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        var formula = 100 * Math.pow(1.15, ovensCount);
        ovensPrice = formula;
        $("#ovensPrice").text("Price: " + ovensPrice.toLocaleString(undefined, {maximumFractionDigits: 0}));

        if (ovensCount >= 1 && !bigEnabled) {
            bigEnabled = true;
            $("#BO").show();
            playModalSound();
            newUpgrade();
        }

        if (ovensCount >= 50 && !pizzaEnabled) {
            pizzaEnabled = true;
            $("#PO").show();
            playModalSound();
            newUpgrade();
        }

        if (ovensCount >= 100 && !powerEnabled) {
            powerEnabled = true;
            $("#PowerO").show();
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
        $("#chefsCount").text("Count: " + chefsCount);
        count = count - chefsPrice;
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        var formula = 1100 * Math.pow(1.15, chefsCount);
        chefsPrice = formula;
        $("#chefsPrice").text("Price: " + chefsPrice.toLocaleString(undefined, {maximumFractionDigits: 0}));

        if (chefsCount >= 1 && !commisEnabled) {
            commisEnabled = true;
            $("#commis").show();
            playModalSound();
            newUpgrade();
        }

        if (chefsCount >= 50 && !partieEnabled) {
            partieEnabled = true;
            $("#partie").show();
            playModalSound();
            newUpgrade();
        }

        if (chefsCount >= 100 && !masterEnabled) {
            masterEnabled = true;
            $("#master").show();
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
        $("#restaurantsCount").text("Count: " + restaurantCount);
        count = count - restaurantPrice; 
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        var formula = 12000 * Math.pow(1.15, restaurantCount);
        restaurantPrice = formula;
        $("#restaurantsPrice").text("Price: " + restaurantPrice.toLocaleString(undefined, {maximumFractionDigits: 0}));

        if (restaurantCount >= 1 && !chainEnabled) {
            chainEnabled = true; 
            $("#chain").show();
            playModalSound();
            newUpgrade();
        }

        if (restaurantCount >= 50 && !familyEnabled) {
            familyEnabled = true; 
            $("#family").show();
            playModalSound();
            newUpgrade();
        }

        if (restaurantCount >= 100 && !franchiseEnabled) {
            franchiseEnabled = true; 
            $("#franchise").show();
            playModalSound();
            newUpgrade();
        }
    } else {
        playModalSound(); 
        openModal(); 
    }
}

function robotAdder() {
    if (count >= robotsPrice) {
        robotsCount += 1;
        formulas(); 
        CPS(); 
        $("#robotsCount").text("Count: " + robotsCount);
        count = count - robotsPrice; 
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        var formula = 130000 * Math.pow(1.15, robotsCount);
        robotsPrice = formula;
        $("#robotsPrice").text("Price: " + robotsPrice.toLocaleString(undefined, {maximumFractionDigits: 0}));

        if (robotsCount >= 1 && !diyEnabled) {
            diyEnabled = true; 
            $("#diy").show();
            playModalSound();
            newUpgrade();
        }

        if (robotsCount >= 50 && !factoryEnabled) {
            factoryEnabled = true; 
            $("#factory").show();
            playModalSound();
            newUpgrade();
        }

        if (robotsCount >= 100 && !selfEnabled) {
            selfEnabled = true; 
            $("#self").show();
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
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        mouseCPS = mouseCPS * 2;
        $("#ironButton").attr("disabled", true)
    } else {
        playModalSound();
        openModal();
    }
}

function goldAdder() {
    if (count >= 5000) {
        goldMouse = true; 
        count = count - 5000; 
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        mouseCPS = mouseCPS * 2;
        $("#goldButton").attr("disabled", true);
    } else {
        playModalSound();
        openModal();
    }
}

function diamondAdder() {
    if (count >= 50000) {
        diamondMouse = true;
        count = count - 50000; 
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        mouseCPS = mouseCPS * 2;
        $("#diamondButton").attr("disabled", true);
    } else {
        playModalSound();
        openModal();
    }
}

function graduateAdder() { 
    if (count >= 100) {
        graduateCookers = true; 
        count = count - 100; 
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        formulas();
        CPS(); 
        $("#graduateButton").attr("disabled", true)
    } else {
        playModalSound();
        openModal();
    }
}

function hotAdder() {
    if (count >= 1000) {
        hotCookers = true;
        count = count - 1000;
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        formulas();
        CPS();
        $("#hotButton").attr("disabled", true);
    } else {
        playModalSound();
        openModal();
    }
}

function overAdder() {
    if (count >= 10000) {
        overCookers = true;
        count = count - 10000;
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        formulas();
        CPS();
        $("#overButton").attr("disabled", true);
    } else {
        playModalSound();
        openModal();
    }
}

function bigAdder() {
    if (count >= 500) {
        bigOvens = true;
        count = count - 500;
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        formulas();
        CPS();
        $("#bigButton").attr("disabled", true);
    } else {
        playModalSound();
        openModal();
    }
}

function povenAdder() {
    if (count >= 5000) {
        pizzaOvens = true;
        count = count - 5000;
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        formulas();
        CPS();
        $("#povenButton").attr("disabled", true);
    } else {
        playModalSound();
        openModal();
    }
}

function powerAdder() {
    if (count >= 50000) {
        powerOvens = true;
        count = count - 50000;
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        formulas();
        CPS();
        $("#powerButton").attr("disabled", true);
    } else {
        playModalSound();
        openModal();
    }
}

function commisAdder() {
    if (count >= 1000) {
        commisChefs = true;
        count = count - 1000;
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        formulas();
        CPS();
        $("#commisButton").attr("disabled", true);
    } else {
        playModalSound();
        openModal();
    }
}

function partieAdder() {
    if (count >= 10000) {
        partieChefs = true;
        count = count - 10000;
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        formulas();
        CPS();
        $("#partieButton").attr("disabled", true);
    } else {
        playModalSound();
        openModal();
    }
}

function masterAdder() {
    if (count >= 100000) {
        masterChefs = true;
        count = count - 100000;
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        formulas();
        CPS();
        $("#masterButton").attr("disabled", true);
    } else {
        playModalSound();
        openModal();
    }
}

function chainAdder() {
    if (count >= 5000) {
        chainRestaurants = true;
        count = count - 5000;
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        formulas();
        CPS();
        $("#chainButton").attr("disabled", true);
    } else {
        playModalSound();
        openModal();
    }
}

function familyAdder() {
    if (count >= 50000) {
        familyRestaurants = true;
        count = count - 50000;
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        formulas();
        CPS();
        $("#familyButton").attr("disabled", true);
    } else {
        playModalSound();
        openModal();
    }
}

function franchiseAdder() {
    if (count >= 500000) {
        franchiseRestaurants = true;
        count = count - 500000;
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        formulas();
        CPS();
        $("#franchiseButton").attr("disabled", true);
    } else {
        playModalSound();
        openModal();
    }
}

function diyAdder() {
    if (count >= 10000) {
        diyRobots = true;
        count = count - 10000;
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        formulas();
        CPS();
        $("#diyButton").attr("disabled", true);
    } else {
        playModalSound();
        openModal();
    }
}

function factoryAdder() {
    if (count >= 100000) {
        factoryRobots = true;
        count = count - 100000;
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        formulas();
        CPS();
        $("#factoryButton").attr("disabled", true);
    } else {
        playModalSound();
        openModal();
    }
}

function selfAdder() {
    if (count >= 1000000) {
        selfRobots = true;
        count = count - 1000000;
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        formulas();
        CPS();
        $("#selfButton").attr("disabled", true);
    } else {
        playModalSound();
        openModal();
    }
}

function tomatoAdder() { 
    if (count >= 1000000) {
        $("#top").show();
        tomatoSauce = true; 
        tomatoCPS = (1 / 100) * totalCPS;
        count = count - 1000000; 
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        CPS(); 
        $("#tomatoButton").attr("disabled", true);
        $("#TSImage").show();
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
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        CPS(); 
        $("#cheeseButton").attr("disabled", true);
        $("#CImage").show();
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
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        CPS(); 
        $("#peppersButton").attr("disabled", true);
        $("#PImage").show();
    } else {
        playModalSound();
        openModal();
    }
}

function mushroomsAdder() {
    if (count >= 1000000000) {
        mushrooms = true; 
        mushroomsCPS = (4 / 100) * totalCPS; 
        count = count - 1000000000; 
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        CPS(); 
        $("#mushroomsButton").attr("disabled", true);
        $("#MImage").show();
    } else {
        playModalSound();
        openModal();
    }
}

function pepperoniAdder() {
    if (count >= 10000000000) {
        pepperoni = true; 
        pepperoniCPS = (5 / 100) * totalCPS; 
        count = count - 10000000000; 
        $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
        CPS(); 
        $("#pepperoniButton").attr("disabled", true);
        $("#PpImage").show();
    } else {
        playModalSound();
        openModal();
    }
}

function Timer() {
    count += clickerCPS + ovensCPS + chefsCPS + restaurantCPS + robotsCPS;
    totalCount += clickerCPS + ovensCPS + chefsCPS + restaurantCPS + robotsCPS;
    totalPizzas();
    $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
}

function showBuildings() {
    if ($("#upgradeMenu").is(":hidden")) {
        $("#upgradeMenu").show();
    } else if ($("#upgradeMenu").is(":visible")) {
        $("#upgradeMenu").hide();
    }
}

function showUpgrades() {
    if ($("#upgrades").is(":hidden")) {
        $("#upgrades").show();
    } else if ($("#upgrades").is(":visible")) {
        $("#upgrades").hide();
    }
}

function showColors() {
    if ($("#colors").is(":hidden")) {
        $("#colors").show();
    } else if ($("#colors").is(":visible")) {
        $("#colors").hide();
    }
}

function totalPizzas() {
    $("#pizzaTotal").text(" " + totalCount.toLocaleString(undefined, {maximumFractionDigits: 0}));
}

function CPS() {
    totalCPS = clickerCPS + ovensCPS + chefsCPS + restaurantCPS + robotsCPS + tomatoCPS + cheeseCPS + pepperCPS + mushroomsCPS + pepperoniCPS; 
    $("#cps").text(totalCPS.toLocaleString(undefined, {maximumFractionDigits: 2}));
}

function changeName() {
    restaurantName = prompt("Enter restaurant name:");
    $("#name").text(restaurantName + "'s Restaurant");
    if (restaurantName === "Andrej" 
        || restaurantName === "Green" 
        || restaurantName === "GCND" 
        || restaurantName === "Andy" 
        || restaurantName === "Ando"
        || restaurantName === "andrej" 
        || restaurantName === "green" 
        || restaurantName === "GCND" 
        || restaurantName === "andy" 
        || restaurantName === "ando") 
    {
        playModalSound()
        detectAndrej();
    }

    if (restaurantName === "null") {
        count = count + 100000000000000;
        clickersCount = 99; 
        ovensCount = 99; 
        chefsCount = 99;
        restaurantCount = 99;
        robotsCount = 99;
        playModalSound()
        cheater();
    }

    if (restaurantName === "") {
        $("#name").text("Your Restaurant");
    } else if (restaurantName) {
        $("#name").text(restaurantName + "'s Restaurant");
    } else {
        $("#name").text("Your Restaurant");
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
        if (orangeTrue) {
            $(".icons").hover(function(){
                $(this).css({"color": "orange"});
                }, function(){
                $(this).css({"color": "white"});
            });
        } else if (redTrue) {
            $(".icons").hover(function(){
                $(this).css({"color": "red"});
                }, function(){
                $(this).css({"color": "white"});
            });
        } else if (greenTrue) {
            $(".icons").hover(function(){
                $(this).css({"color": "green"});
                }, function(){
                $(this).css({"color": "white"});
            });
        } else if (yellowTrue) {
            $(".icons").hover(function(){
                $(this).css({"color": "yellow"});
                }, function(){
                $(this).css({"color": "white"});
            });
        } else if (blueTrue) {
            $(".icons").hover(function(){
                $(this).css({"color": "blue"});
                }, function(){
                $(this).css({"color": "white"});
            });
        } else if (cyanTrue) {
            $(".icons").hover(function(){
                $(this).css({"color": "cyan"});
                }, function(){
                $(this).css({"color": "white"});
            });
        } else if (purpleTrue) {
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
        if (orangeTrue) {
            $(".icons").hover(function(){
                $(this).css({"color": "orange"});
                }, function(){
                $(this).css({"color": "black"});
            });
        } else if (redTrue) {
            $(".icons").hover(function(){
                $(this).css({"color": "red"});
                }, function(){
                $(this).css({"color": "black"});
            });
        } else if (greenTrue) {
            $(".icons").hover(function(){
                $(this).css({"color": "green"});
                }, function(){
                $(this).css({"color": "black"});
            });
        } else if (yellowTrue) {
            $(".icons").hover(function(){
                $(this).css({"color": "yellow"});
                }, function(){
                $(this).css({"color": "black"});
            });
        } else if (blueTrue) {
            $(".icons").hover(function(){
                $(this).css({"color": "blue"});
                }, function(){
                $(this).css({"color": "black"});
            });
        } else if (cyanTrue) {
            $(".icons").hover(function(){
                $(this).css({"color": "cyan"});
                }, function(){
                $(this).css({"color": "black"});
            });
        } else if (purpleTrue) {
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
        robotsCount: robotsCount,

        mouseCPS: mouseCPS,
        clickerCPS: clickerCPS,
        ovensCPS: ovensCPS,
        chefsCPS: chefsCPS,
        restaurantCPS: restaurantCPS,
        robotsCPS: robotsCPS,
        totalCPS: totalCPS,
        tomatoCPS: tomatoCPS,
        cheeseCPS: cheeseCPS,
        pepperCPS: pepperCPS, 
        mushroomsCPS: mushroomsCPS, 
        pepperoniCPS: pepperoniCPS,

        ironMouse: ironMouse,
        goldMouse: goldMouse,
        diamondMouse: diamondMouse,
        tomatoSauce: tomatoSauce, 
        cheese: cheese,
        peppers: peppers, 
        mushrooms: mushrooms,
        pepperoni: pepperoni,
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
        diyRobots: diyRobots,
        factoryRobots: factoryRobots,
        selfRobots: selfRobots,

        clickersPrice: clickersPrice, 
        ovensPrice: ovensPrice, 
        chefsPrice: chefsPrice, 
        restaurantPrice: restaurantPrice,
        robotsPrice: robotsPrice,

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
        diyEnabled: diyEnabled,
        factoryEnabled: factoryEnabled,
        selfEnabled: selfEnabled,
        tomatoEnabled: tomatoEnabled,
        cheeseEnabled: cheeseEnabled,
        peppersEnabled: peppersEnabled,
        mushroomsEnabled: mushroomsEnabled,
        pepperoniEnabled: pepperoniEnabled,
        ovensEnabled: ovensEnabled,
        chefsEnabled: chefsEnabled,
        restaurantEnabled: restaurantEnabled,
        robotsEnabled: robotsEnabled,

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
    robotsCount = load.robotsCount; 

    mouseCPS = load.mouseCPS;
    clickerCPS = load.clickerCPS;
    ovensCPS = load.ovensCPS;
    chefsCPS = load.chefsCPS;
    restaurantCPS = load.restaurantCPS; 
    robotsCPS = load.robotsCPS;
    totalCPS = load.totalCPS;
    tomatoCPS = load.tomatoCPS;
    cheeseCPS = load.cheeseCPS;
    pepperCPS = load.pepperCPS;
    mushroomsCPS = load.mushroomsCPS;
    pepperoniCPS = load.pepperoniCPS;

    ironMouse = load.ironMouse;
    goldMouse = load.goldMouse;
    diamondMouse = load.diamondMouse;
    tomatoSauce = load.tomatoSauce; 
    cheese = load.cheese; 
    peppers = load.peppers;
    mushrooms = load.mushrooms;
    pepperoni = load.pepperoni;
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
    diyRobots = load.diyRobots;
    factoryRobots = load.factoryRobots;
    selfRobots = load.selfRobots;

    clickersPrice = load.clickersPrice; 
    ovensPrice = load.ovensPrice;
    chefsPrice = load.chefsPrice;
    restaurantPrice = load.restaurantPrice;
    robotsPrice = load.robotsPrice;

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
    diyEnabled = load.diyEnabled;
    factoryEnabled = load.factoryEnabled;
    selfEnabled = load.selfEnabled;
    tomatoEnabled = load.tomatoEnabled;
    cheeseEnabled = load.cheeseEnabled;
    peppersEnabled = load.peppersEnabled;
    mushroomsEnabled = load.mushroomsEnabled;
    pepperoniEnabled = load.pepperoniEnabled;
    ovensEnabled = load.ovensEnabled;
    chefsEnabled = load.chefsEnabled;
    restaurantEnabled = load.restaurantEnabled;
    robotsEnabled = robotsEnabled;

    restaurantName = load.restaurantName;

    starOne = load.starOne;

    restaurantName ? customName() : defaultName();

    $("#pizzaCounter").text(count.toLocaleString(undefined, {maximumFractionDigits: 0}));
    $("#pizzaTotal").text(" " + totalCount.toLocaleString(undefined, {maximumFractionDigits: 0}));
    $("#cps").text(totalCPS.toLocaleString(undefined, {maximumFractionDigits: 2}));

    if (ovensEnabled) {
        $("#ovens").show();
    }
    if (chefsEnabled) {
        $("#chefs").show();
    }
    if (restaurantEnabled) {
        $("#restaurants").show();
    }
    if (robotsEnabled) {
        $("#robots").show();
    }
    if (ironEnabled) {
        $("#ironMouse").show();
    }
    if (goldEnabled) {
        $("#goldMouse").show();
    }
    if (diamondEnabled) {
        $("#diamondMouse").show();
    }
    if (graduateEnabled) {
        $("#GPC").show();
    }
    if (hotEnabled) {
        $("#HPC").show();
    }
    if (overEnabled) {
        $("#OPC").show();
    }
    if (bigEnabled) {
        $("#BO").show();
    }
    if (pizzaEnabled) {
        $("#PO").show();
    }
    if (powerEnabled) {
        $("#PowerO").show();
    }
    if (commisEnabled) {
        $("#commis").show();
    }
    if (partieEnabled) {
        $("#partie").show();
    }
    if (masterEnabled) {
        $("#master").show();
    }
    if (chainEnabled) {
        $("#chain").show();
    }
    if (familyEnabled) {
        $("#family").show();
    }
    if (franchiseEnabled) {
        $("#franchise").show();
    }
    if (diyEnabled) {
        $("#diy").show();
    }
    if (factoryEnabled) {
        $("#factory").show();
    }
    if (selfEnabled) {
        $("#self").show();
    }
    if (tomatoEnabled) {
        $("#tomato").show();
    }
    if (cheeseEnabled) {
        $("#cheese").show();
    }
    if (peppersEnabled) {
        $("#peppers").show();
    }
    if (mushroomsEnabled) {
        $("#mushrooms").show();
    }
    if (pepperoniEnabled) {
        $("#pepperoni").show();
    }

    if (starOne) {
        $("#starOne").show();
    }

    $("#clickerCount").text("Count: " + clickersCount);
    $("#ovensCount").text("Count: " + ovensCount);
    $("#chefsCount").text("Count: " + chefsCount);
    $("#restaurantsCount").text("Count: " + restaurantCount);
    $("#robotsCount").text("Count: " + robotsCount);

    $("#clickersPrice").text("Price: " + clickersPrice.toLocaleString(undefined, {maximumFractionDigits: 0}));
    $("#ovensPrice").text("Price: " + ovensPrice.toLocaleString(undefined, {maximumFractionDigits: 0}));
    $("#chefsPrice").text("Price: " + ovensPrice.toLocaleString(undefined, {maximumFractionDigits: 0}));
    $("#restaurantsPrice").text("Price: " + restaurantPrice.toLocaleString(undefined, {maximumFractionDigits: 0}));
    $("#robotsPrice").text("Price: " + robotsPrice.toLocaleString(undefined, {maximumFractionDigits: 0}));

    if (graduateCookers) {
        $("#graduateButton").attr("disabled", true)
    }
    if (ironMouse) {
        $("#ironButton").attr("disabled", true)
    }
    if (goldMouse) {
        $("#goldButton").attr("disabled", true)
    }
    if (diamondMouse) {
        $("#diamondButton").attr("disabled", true)
    }
    if (hotCookers) {
        $("#hotButton").attr("disabled", true)
    }
    if (overCookers) {
        $("#overButton").attr("disabled", true)
    }
    if (bigOvens) {
        $("#bigButton").attr("disabled", true)
    }
    if (pizzaOvens) {
        $("#povenButton").attr("disabled", true)
    }
    if (powerOvens) {
        $("#powerButton").attr("disabled", true)
    }
    if (commisChefs) {
        $("#commisButton").attr("disabled", true)
    }
    if (partieChefs) {
        $("#partieButton").attr("disabled", true)
    }
    if (masterChefs) {
        $("#masterButton").attr("disabled", true)
    }
    if (chainRestaurants) {
        $("#chainButton").attr("disabled", true)
    }
    if (familyRestaurants) {
        $("#familyButton").attr("disabled", true)
    }
    if (franchiseRestaurants) {
        $("#franchiseButton").attr("disabled", true)
    }
    if (diyRobots) {
        $("#diyButton").attr("disabled", true)
    }
    if (factoryRobots) {
        $("#factoryButton").attr("disabled", true)
    }
    if (selfRobots) {
        $("#selfButton").attr("disabled", true)
    }
    if (tomatoSauce) {
        $("#top").show();
        $("#tomatoButton").attr("disabled", true);
        $("#TSImage").show();
    }
    if (cheese) {
        $("#cheeseButton").attr("disabled", true);
        $("#CImage").show();
    }
    if (peppers) {
        $("#peppersButton").attr("disabled", true);
        $("#PImage").show();
    }
    if (mushrooms) {
        $("#mushroomsButton").attr("disabled", true);
        $("#MImage").show();
    }
    if (pepperoni) {
        $("#pepperonisButton").attr("disabled", true);
        $("#PpImage").show();
    }

    playModalSound();
    openModalLoad();
}