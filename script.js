var currentDayEl = $("#currentDay");
var currentDay = moment().format("dddd, MMMM Do")
var hoursInDay = ["#0900-timeblock", "#1000-timeblock", "#1100-timeblock", "#1200-timeblock", "#1300-timeblock", "#1400-timeblock", "#1500-timeblock", "#1600-timeblock", "#1700-timeblock"]

currentDayEl.append(currentDay)

var currentHour = moment().format("H")

function colorBlock() {
    for (var i = 0; i < hoursInDay.length; i++) {
        var timeblock = $(hoursInDay[i])
        var blockValue = timeblock.data('hour')
        // var blockValue = timeblock.data('hour')
        if (blockValue < currentHour) {
            timeblock.addClass("past")
        } else if (blockValue == currentHour) {
            timeblock.addClass("present")
        } else {
            timeblock.addClass("future")
        };
    }
}

colorBlock();

// Saves 0900 hour of text to local storage
var save09 = $("#0900-save")
console.log(save09)
var noteBlock = $("#0900-timeblock")

noteBlock.append(localStorage.getItem("0900"))
save09.on('click', function () {    
    var notes = document.getElementById("0900-timeblock").value;
    // Sets local storage to be the value of the textbox
    localStorage.setItem("0900", notes);
})

// Saves 1000 hour of text to local storage
var save09 = $("#1000-save")
console.log(save09)
var noteBlock = $("#1000-timeblock")

noteBlock.append(localStorage.getItem("1000"))
save09.on('click', function () {    
    var notes = document.getElementById("1000-timeblock").value;
    // Sets local storage to be the value of the textbox
    localStorage.setItem("1000", notes);
})

// Saves 1100 hour of text to local storage
var save09 = $("#1100-save")
console.log(save09)
var noteBlock = $("#1100-timeblock")

noteBlock.append(localStorage.getItem("1100"))
save09.on('click', function () {    
    var notes = document.getElementById("1100-timeblock").value;
    // Sets local storage to be the value of the textbox
    localStorage.setItem("1100", notes);
})

// Saves 1200 hour of text to local storage
var save09 = $("#1200-save")
console.log(save09)
var noteBlock = $("#1200-timeblock")

noteBlock.append(localStorage.getItem("1200"))
save09.on('click', function () {    
    var notes = document.getElementById("1200-timeblock").value;
    // Sets local storage to be the value of the textbox
    localStorage.setItem("1200", notes);
})

// Saves 1300 hour of text to local storage
var save09 = $("#1300-save")
console.log(save09)
var noteBlock = $("#1300-timeblock")

noteBlock.append(localStorage.getItem("1300"))
save09.on('click', function () {    
    var notes = document.getElementById("1300-timeblock").value;
    // Sets local storage to be the value of the textbox
    localStorage.setItem("1300", notes);
})

// Saves 1400 hour of text to local storage
var save09 = $("#1400-save")
console.log(save09)
var noteBlock = $("#1400-timeblock")

noteBlock.append(localStorage.getItem("1400"))
save09.on('click', function () {    
    var notes = document.getElementById("1400-timeblock").value;
    // Sets local storage to be the value of the textbox
    localStorage.setItem("1400", notes);
})

// Saves 1500 hour of text to local storage
var save09 = $("#1500-save")
console.log(save09)
var noteBlock = $("#1500-timeblock")

noteBlock.append(localStorage.getItem("1500"))
save09.on('click', function () {    
    var notes = document.getElementById("1500-timeblock").value;
    // Sets local storage to be the value of the textbox
    localStorage.setItem("1500", notes);
})

// Saves 1600 hour of text to local storage
var save09 = $("#1600-save")
console.log(save09)
var noteBlock = $("#1600-timeblock")

noteBlock.append(localStorage.getItem("1600"))
save09.on('click', function () {    
    var notes = document.getElementById("1600-timeblock").value;
    // Sets local storage to be the value of the textbox
    localStorage.setItem("1600", notes);
})

// Saves 1700 hour of text to local storage
var save09 = $("#1700-save")
console.log(save09)
var noteBlock = $("#1700-timeblock")

noteBlock.append(localStorage.getItem("1700"))
save09.on('click', function () {    
    var notes = document.getElementById("1700-timeblock").value;
    // Sets local storage to be the value of the textbox
    localStorage.setItem("1700", notes);
})
