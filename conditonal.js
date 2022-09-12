/**
 * ২.১ কিভাবে কন্ডিশন লিখতে হয়, ছয় রকমের কন্ডিশন (>, <, >=, <=,  ==, !=,  ===, !==) কোনটা কোন জিনিসের জন্য ইউজ করবে। এছাড়াও && বা ।। দিয়ে কিভাবে একাধিক কন্ডিশন এর মধ্যে দুইটাই ফুলফিল করতে হবে আবার দুইটার যেকোন একটা ফুলফিল করতে হবে, সেটা কিভাবে করবে।
 */
let age = 20;
// if(age > 18 && age < 20){// > gaterthan  
//     console.log('You are 18+');
// }
if(age <= 20){
    // console.log('You are not allowed to married');
}
else if(age < 18){// < less than
    console.log('You are not 18+');
}
else if(age >= 18){// gatert than or equal to
    console.log('Perfect age');
}
// == !=
let appleKg = 220;
if(appleKg != '220'){//we are passing a string value
    console.log(true);
}
else{
    // console.log(false);//output is false
}
//===, !== thripple equal check also data type
const orangePrice = 220;
if(orangePrice !== '220'){//passing a string.. !== is check data type also
    console.log(true);//output is true
}else{
    console.log(false);
}
const a = 10;
const b = 12;
if(a < 15 || b > 10){//&&
    console.log('&& check to dubble conditon');
}
//conditonal ternary operator
const myAge = 18;
let ages = (myAge < 22) ? 'You are strong for Sex' : 'You are not';
console.log(ages);