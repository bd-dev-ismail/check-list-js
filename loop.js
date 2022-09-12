/**
 * ৪. দুইটা বেসিক লুপ ,এর মধ্যে for loop তোমাকে জানতেই হবে। while লুপটাও দেখে রাখতে পারো। যদিও আমরা এই দুইটা লুপই কম ইউজ করবো। তাও কখনো লাগলে যেন তুমি বুঝে ফেলতে পারো। এছাড়া কখন for of আর কখন for in ইউজ করবে সেটা তুমি জানো।
 */
for(let i = 0; i< 10; i++){
    // console.log(i)
}
let gifts = ["teddy bear", "drone", "doll", "bike"];

for(let i = 0; i < gifts.length; i++){
    // console.log(`${gifts[i]}`)
}
let num = 0;
while(num < 10){
    num++;
    // console.log(num);
}
let count = 50;
while(count > 0){
    count--;
    // console.log(count);
}
let grils = ["teddy bear", "drone", "doll", "bike"];
for(const choice of grils){
    // console.log(choice);
}
const obj = {
    carName: 'Toyota',
    sit: 6,
    engine: 'v8',
    driving: 'left side',
    niceCar: true,
}
for(const car in obj){
    console.log(car);
}