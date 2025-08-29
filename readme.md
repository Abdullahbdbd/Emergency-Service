1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans:

getElementById("id") - returns only one element (id is unique)
getElementsByClassName("class") - returns multiple elements 
erySelector("selector") returns the first matching element 
querySelectorAll("selector") - returns all elements



2. How do you **create and insert a new element into the DOM**?
Ans:

First you need to create a div with document.createElement, then add text inside it with innerText, then add that div with appendChild() | For example:

let div = document.createElement("div");
div.innerText = "Hello World"; 
document.body.appendChild(div);


3. What is **Event Bubbling** and how does it work?
Ans:

When an event occurs on a child element, it propagates up to the parent.
For example: the event propagates from button > div > body.



4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans:

By placing a single event listener on the parent element, it handles the events of its child elements.
==> Useful because: Performance is better and works on dynamic elements.



5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans:

preventDefault() stops the default behavior of the element and 
stopPropagation() prevents the event from going to the parent element.