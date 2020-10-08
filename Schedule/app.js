const mainBox = $("#main");
mainBox.append(`
	<h1 class="title">
	Розклад занять 1-го курсу ІГ ГІС 
	</h1>
	`);
for (let i = 0; i<5; i++) {
	mainBox.append(
		`<div class="weekday">
		<p class="weekday-name">` + `</p>
		<div class="weekday-lessons">
		`+`
		</div>
		</div>`
		)
}
Date.prototype.getWeek = function() {
	var onejan = new Date(this.getFullYear(),0,1);
	return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
} 
var myDate = new Date();
var weekNumber = myDate.getWeek();
let typeOfWeek;typeOfWeek=weekNumber%2==0?"odd":"even";
const colors = "8cdafe 8cdafe bef2cc fdda9a fedb9b abfdf1 00ad99 fff0ab fea7b0".split( "\n" ).join( " " ).split( " " );
let completeColors = [];
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
for (let p = 0; p < 20; p++) {
	completeColors.push(colors[getRandomInt(colors.length)])
}

const getWeekDays = document.querySelectorAll(".weekday-name");	
const weekdayLessons = $(".weekday-lessons");
fetch('https://raw.githubusercontent.com/kelvinsjs/lessons-database/master/db.json')
.then((response) => {
	return response.json();
})
.then((data) => {
	for (let i = 0; i < weekdayLessons.length; i++) {
		for (let j = 0; j<data[i].lessons.length; j++) {
			if (data[i].lessons[j].aval == "always" || data[i].lessons[j].aval == typeOfWeek) {
				$(weekdayLessons[i]).append(
					`			
					<div class="weekday-lesson">
					<p class="left-side">
					<span class="lesson-start">`+
					data[i].lessons[j].startTime
					+`</span>
					<span class="lesson-end">`+
					data[i].lessons[j].endTime
					+`</span>
					</p>
					<p class="right-side" style="background-color: #`+completeColors[getRandomInt(completeColors.length)]+`">`+
					data[i].lessons[j].name
					+`</p></div>`
					)
			} else {
				continue;
			}
		}
	}
	for (let t = 0; t < data.length; t++) {
		getWeekDays[t].innerText = data[t].weekday;
	}
});
