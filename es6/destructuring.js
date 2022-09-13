/**
 * ৪. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
 */
const students = {
  name: "sajib",
  age: 24,
  salary: 3400,
  home: {
    village: "Kazi para",
    post: "Kumira",
    zilla: "Chattogram",
    bari:{
        bariName: 'lokman sow bari'
    }
  },
  hobies: ["Developer", "AI Expert", "UI Expert"],
};
const {bariName} = students?.home?.bari;
console.log(bariName);
const {name, home} = students;
const {village} = home;
const numbers = [11, 22, 44, 33, 55];
const [a,b,balance] = numbers;
console.log(balance);
function sum(a, b =5){
    return a + b;
}
console.log(sum(2));