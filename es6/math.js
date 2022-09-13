let a = Math.ceil(-5.6); 
// console.log(a)
let b = Math.floor(-2.6)
// console.log(b);
let c = Math.round(1.5);//trunc()
// console.log(c);
// const d = new Date();
// console.log(d.getMinutes());
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const d = new Date();
let day = days[d.getDay()];
console.log(day);