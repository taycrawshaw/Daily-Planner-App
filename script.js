let di

let currentDay = $("#currentDay");
let today = moment()
var todayMain = moment("3/11/20", "DD-MM-YY").format("dddd, MMMM D ");



let save9 = $("#Save9");

currentDay.text(todayMain)

console.log(today);



let hourNum = moment().hour();
console.log(hourNum)

workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
workHoursText = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];



const main = $("main");

for (let i = 0; i < workHours.length; i++) {
const row = $("<div>", {"class": "row"});
const hourTitle = $("<h2>", {"class": "hour"}).text(workHoursText[i]);
const memoArea = $("<textarea>", {"class": "description"});
const saveBtn = $("<i>", {"class": "saveBtn fas fa-save"});
//const textArea = $("<")



row.append(hourTitle, memoArea, saveBtn);

main.append(row)


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





/*
for $("div").each(function (index, element) {
    // element == this
    if (hourNum > parseFloat(hour )) {
$("div").addClass(past);
    }
});

*/





save9.click(function (e) 


{ 

    console.log("ghelooodsad")
    
});




