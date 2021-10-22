//   Assignment 1//

function check1() {
  let date = new Date();

  let arr = [
    "Sunday",
    "monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var hours = date.getHours();

  var format = hours >= 12 ? "pm" : "am";

  hours = hours % 12;

  let weekday = arr[date.getDay()];

  let aa = `${"Today is:"} ${weekday}<br />${"Current Time is"} 
    ${":"} ${hours}${format} ${":"} ${date.getMinutes()}m 
    ${":"} ${date.getSeconds()}s`;

  var a = (document.getElementById("1").innerHTML = aa);
}

//Assignment 2//

const check2 = () => {
  let newDate = new Date();

  document.getElementById(
    "4"
  ).innerHTML = `${newDate.getMonth()} ${"/"} ${newDate.getDate()}  ${"/"}  ${newDate.getFullYear()}`;
  document.getElementById(
    "3"
  ).innerHTML = `${newDate.getDate()}  ${"-"} ${newDate.getMonth()} ${"-"} ${newDate.getFullYear()}`;
};
