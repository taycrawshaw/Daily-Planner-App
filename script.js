let di

let currentDay = $("#currentDay");
let today = moment()
var todayMain = moment().format("dddd, MMMM D ");

currentDay.text(todayMain)

let hourNum = moment().hour();

// initial arrays that the elements are to be generated from 
workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
workHoursText = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
const main = $("main");
savedNotes = [null, null, null, null, null, null, null, null, null]

// loop to create rows with relevent classes, with titles and text areas, as well as save buttons.
for (let i = 0; i < workHours.length; i++) {
const row = $("<div>", {"class": "row"});
const hourTitle = $("<h2>", {"class": "hour hourTitle"}).text(workHoursText[i]);
const memoArea = $("<textarea>", {"class": "description"}).attr("data-index", workHours[i]);

const saveBtnbBox = $("<div>", {"class": "saveBtn"})
const saveBtn = $("<i>", {"class": "fas fa-save"});

// appending save button to the save button box, and then the title, text areas, and button box to each row.
saveBtnbBox.append(saveBtn)
row.append(hourTitle, memoArea, saveBtnbBox);
main.append(row)


////// check local storage for any previous notes, and populate text if so 

let storedNotes = JSON.parse(localStorage.getItem("notes"));


if (storedNotes !== null) {
    savedNotes[i] = storedNotes[i]
}
    
    memoArea.text(savedNotes[i])

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



