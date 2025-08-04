//Get the date
var date = new Date();
console.log(date); //show the date in console

//Extract the current date info
var currentMonth = date.getMonth();
var currentDay = date.getDay();
var currentDate = date.getDate();
var currentYear = date.getFullYear();

console.log(currentMonth)
console.log(currentDay)
console.log(currentDate)
console.log(currentYear)

//Important date info
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
];

var title = document.getElementById("title");
title.innerHTML = "❤️ " + months[currentMonth] +" " + currentYear + " ❤️";

//Update calendar Info
var habitTile = document.getElementById("habitTitle");
habitTitle.onclick = function () {
    let habits = prompt("What your habit?", habitTitle.innerHTML);
    if(habits.length == 0){
        habitTitle.innerHTML = "Click to set your habit!";
    }else{
        habitTitle.innerHTML = habits;
    }
}

//Set total days
var daysInTheMonthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var daysInThisMonth = daysInTheMonthList[currentMonth];

var daysCompleted = 0;
var totalDays = document.getElementById("totalDays");


//SetUp calendar days
var dayCount = 0;
var rowCount = 0;
var days = document.getElementsByClassName("days");

for(var i=0; i < days.length; i++){
    var day = days[i].getElementsByClassName("day");
    for (var j=0; j < day.length; j++){
        console.log("days" + dayCount);
        if(dayCount == currentDate - 1){
            day[j].setAttribute("style", "color:rgb(234, 1, 144);")
            day[j].setAttribute("style", "border:2px solid black");
        }

        if (dayCount < daysInThisMonth) {
            day[j].innerHTML = dayCount + 1;
            day[j].setAttribute("id", "day" + (dayCount + 1));
            dayCount++;
        }else {
            day[j].innerHTML = "";
            day[j].setAttribute("style", "background-color:white");
        }
    }
    rowCount++;
}

//Initialize  completetd array
var completed = new Array(31);
for (var i = 0; i < dayCount; i++) {
    var tempString = "" + (currentMonth + 1) + "-" + (i + 1) + "-" + currentYear;
    console.log("storing date: " + tempString);

    var tempDay = localStorage.getItem(tempString);
    console.log("tempday " + tempDay);
    if(tempDay == null || tempDay == "false"){
        localStorage.setItem(tempString, "false");
    }else if (tempDay == "true") {
        daysCompleted++;
    }
    totalDays.innerHTML = daysCompleted + "/" + daysInThisMonth;

}

console.log("completed array: " + completed);
console.log("days completed: " + daysCompleted);

//check storage and update completed array

for (var i = 0; i < currentDate; i++) {
    var tempString = "" + (currentMonth + 1) + "_"
}