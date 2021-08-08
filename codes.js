//convert the time from minutes to hours

function timeConvert(n) {
var num = n;
var hours = (num / 60);
var rhours = Math.floor(hours);
var minutes = (hours - rhours) * 60;
var rminutes = Math.round(minutes);
return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
}

console.log(timeConvert(555));

9*60+15

// 9 is the hours 60 is the conversion and we added 15 more minutes to it