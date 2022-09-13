/**
 * ৩.১. শূন্য প্যারামিটারওয়ালা একটা অ্যারো ফাংশন কিভাবে লিখে। উদাহরণ হিসাবে তুমি এখন একটা অ্যারো ফাংশন লিখবে যেটা ৯ রিটার্ন করবে।
 */
const arrow = () => 9;
console.log(arrow());//9
/**
 * ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ১২ দিয়ে গুণ করে গুণফল রিটার্ন করবে।
 */
const arrowOne = multiple => multiple * 12;
console.log(arrowOne(2));//24
/**
 * ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে চার দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।
 */
const arrowTwo = (para1, para2) => (para1 + para2) / 4;
console.log(arrowTwo(10, 10));//5
/**
 * ৩.৪ একাধিক লাইনওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৫ যোগ করবে তারপর যোগফল দুইটাকে আবার গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।
 */
const multilineArrow = (num1, num2) =>{
    const plus1 = num1 + 5;
    const plus2 = num2 + 5;
    const multi = plus1 * plus2;
    return multi;
}
const result = multilineArrow(10, 10);
console.log(result);