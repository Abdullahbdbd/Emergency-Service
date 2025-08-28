1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans:

getElementById("id") -শুধু একটিমাত্র element ফেরত দেয় (id unique হয়)

getElementsByClassName("class") - একাধিক element ফেরত দেয় 

querySelector("selector")  প্রথম মিলে যাওয়া element ফেরত দেয় 

querySelectorAll("selector") - সব element ফেরত দেয় 

2. How do you **create and insert a new element into the DOM**?

Ans:

প্রথমে document.createElement দিয়ে একটি div তৈরি করতে হবে, তারপর innerText দিয়ে তার ভিতরে text add
 করতে হবে, তারপর appendChild() দিয়ে ওই div টাকে add করতে হবে|যেমন:

let div = document.createElement("div");
div.innerText = "Hello World";  
document.body.appendChild(div);

3. What is **Event Bubbling** and how does it work?

Ans:

যখন কোনো child element-এ event ঘটে, সেটি parent পর্যন্ত উপরে উঠতে থাকে।

যেমন: button > div > body পর্যন্ত event ছড়ায়।

4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans:

Parent element-এ একটাই event listener বসিয়ে, তার child element-এর event গুলো হ্যান্ডেল করা।

==> Useful কারণ: performance ভালো হয় এবং dynamic element-এ কাজ করে।

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans:

preventDefault() element-এর default কাজ বন্ধ করে 

stopPropagation() event-কে parent element-এ যেতে বাধা দেয় 