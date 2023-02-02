let di

let currentDay = $("#currentDay");
let today = moment()
var todayMain = moment().format("dddd, MMMM D ");



let save9 = $("#Save9");

currentDay.text(todayMain)





let hourNum = moment().hour();



workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
workHoursText = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
const main = $("main");
savedNotes = []


for (let i = 0; i < workHours.length; i++) {
const row = $("<div>", {"class": "row"});
const hourTitle = $("<h2>", {"class": "hour"}).text(workHoursText[i]);
const memoArea = $("<textarea>", {"class": "description"});

const saveBtnbBox = $("<div>", {"class": "saveBtn"})
const saveBtn = $("<i>", {"class": "fas fa-save"});
//const textArea = $("<")




saveBtnbBox.append(saveBtn)
row.append(hourTitle, memoArea, saveBtnbBox);
main.append(row)


////// check local storage for any previous notes, and populate text if so 

let storedNotes = JSON.parse(localStorage.getItem("notes"));

if (storedNotes !== null) {
   
    memoArea.text(storedNotes[i])

} else {
    memoArea.text("")
}






/////// push new notes to array and store in local storage when save button clicked

$(saveBtn).click(function (e) { 
e.preventDefault()
let savedNote = $(memoArea).val().trim();
   
savedNotes[i] = savedNote



localStorage.setItem("notes", JSON.stringify(savedNotes));
});

/// change block colour depending on time

if (hourNum === workHours[i]) {
memoArea.addClass("present")
}
else if (hourNum > workHours[i]) {
memoArea.addClass("past")
} 
else {
memoArea.addClass("future")
}

}


memoArray = []


/*
for $("div").each(function (index, element) {
    // element == this
    if (hourNum > parseFloat(hour )) {
$("div").addClass(past);
    }
});

*/


let area0 = $("#textarea0")
let save0  = $

save9.click(function (e) 


{ 

    console.log("ghelooodsad")
    
});




