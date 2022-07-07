onInit();

//initialize start
function onInit() {
    onSpeedChange();
}

//gravity converter

function convertGravity() {

    var earthGravity = parseFloat(document.getElementById("earth_gravity").value);

    var marsGravity = earthGravity * 2.642589598491;

    document.getElementById("mars_gravity").innerHTML = "The gravity on Mars is " + marsGravity.toFixed(2) + "g.";

}

//miles converter

function convertMiles() {

    var earthMiles = parseFloat(document.getElementById("earth_miles").value);


    var marsMiles = earthMiles * 0.621371;

    document.getElementById("mars_miles").innerHTML = earthMiles + " earth miles equals to " + marsMiles.toFixed(2) + " mars miles.";

}

//food ratio
function foodRatio() {

    var food = parseFloat(document.getElementById("food").value);


    var days = food * 0.621371;

    document.getElementById("food_left").innerHTML = food + " kg of food will last you " + days.toFixed(2) + " days of the journey.";

}

//speed slider
function onSpeedChange() {
    var velocity = parseFloat(document.getElementById("speed_slider").value);
    document.getElementById("speed").innerHTML = " You are travelling at a speed of " + velocity + " miles per second.";

    distanceTravelled();
}


//distance display
function distanceTravelled() {

    var velocity = parseFloat(document.getElementById("speed_slider").value);
    var distance = velocity * 60;

    document.getElementById("distance").innerHTML = " You have travelled a distance of " + distance + " miles so far.";

}
