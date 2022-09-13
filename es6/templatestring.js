/**
 * ১. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে অবজেক্ট এর প্রপার্টি এর মান কিভাবে বসায় সেটা জানতে হবে। বিশেষ করে নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। বা কোন একটা অবজেক্ট এর প্রপার্টি array সেই array থেকে ভ্যালু এনে কিভাবে টেমপ্লেট স্ট্রিং এর মধ্যে বসাতে পারবে ।
 */
const students = {
  name: "sajib",
  age: 24,
  salary: 3400,
  home: {
    village: "Kazi para",
    post: "Kumira",
    zilla: "Chattogram",
  },
  hobies: ["Developer", "AI Expert", "UI Expert"],
};
const details = `The student name is ${students.name}. His is ${students.age} years old. Her village name is ${students.home.village}. Her hobies is ${students.hobies[0]}.`;
console.log(details);