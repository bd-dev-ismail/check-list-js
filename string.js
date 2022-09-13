/**
 * ১. string কি জিনিস। স্ট্রিং কেমনে ডিক্লেয়ার করে। স্ট্রিং থেকে কিভাবে কোন একটা ক্যারেক্টার খুঁজে বের করে। চাইলে স্ট্রিং এর উপরে কি লুপ চালানো যায়। এছাড়াও length, includes, indexOf, toUpperCase, toLowerCase, জানতেই হবে। subString, concat জানলে ভালো। বোনাস হিসেবে জানতে পারো string কি mutable নাকি immutable
 */
let text = 'My Name is Md Ismail Hossen' + ' Hey';
console.log(text.length);
console.log(text.includes('ss'))
console.log(text.indexOf('Md'))
console.log(text.toUpperCase())
console.log(text.toLocaleLowerCase())
console.log(text.substring(0, 13))
console.log(text.concat(' Hello'))
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);