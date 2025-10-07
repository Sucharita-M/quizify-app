// 100+ question pool
const quizData = [
    {question:"Capital of France?", options:["Paris","London","Rome","Berlin"], answer:"Paris"},
    {question:"Which language runs in a browser?", options:["Java","C","Python","JavaScript"], answer:"JavaScript"},
    {question:"CSS stands for?", options:["Cascading Style Sheets","Central Style Sheets","Cascading Simple Sheets","Cars SUVs Sailboats"], answer:"Cascading Style Sheets"},
    {question:"JavaScript launched in?", options:["1996","1995","1994","1997"], answer:"1995"},
    {question:"React developed by?", options:["Google","Facebook","Microsoft","Apple"], answer:"Facebook"},
    {question:"HTML stands for?", options:["HyperText Markup Language","HyperText Markdown Language","HyperText Machine Language","None"], answer:"HyperText Markup Language"},
    {question:"Which symbol is used for comments in JS?", options:["//","/*","#","<!--"], answer:"//"},
    {question:"DOM stands for?", options:["Document Object Model","Data Object Model","Document Oriented Model","Data Oriented Model"], answer:"Document Object Model"},
    {question:"Array method to add element end?", options:["push()","pop()","shift()","unshift()"], answer:"push()"},
    {question:"Array method to remove last element?", options:["pop()","push()","shift()","unshift()"], answer:"pop()"},
    {question:"Which operator is for strict equality?", options:["===","==","=","!=="], answer:"==="},
    {question:"ES6 introduced?", options:["Arrow Functions","Var keyword","HTML5","CSS3"], answer:"Arrow Functions"},
    {question:"What is closure in JS?", options:["Function with lexical scope","Function with global scope","Function with class scope","None"], answer:"Function with lexical scope"},
    {question:"Which method converts JSON to object?", options:["JSON.parse()","JSON.stringify()","Object.fromJSON()","JSON.object()"], answer:"JSON.parse()"},
    {question:"Which company developed JavaScript?", options:["Netscape","Microsoft","Sun Microsystems","Oracle"], answer:"Netscape"},
    {question:"Event listener method?", options:["addEventListener()","addListener()","onEvent()","listen()"], answer:"addEventListener()"},
    {question:"Which symbol used for template literals?", options:["`backtick`","\"double quote\"","'single quote'","$ symbol"], answer:"`backtick`"},
    {question:"Array method to sort?", options:["sort()","order()","arrange()","sequence()"], answer:"sort()"},
    {question:"JavaScript is?", options:["Interpreted","Compiled","Both","None"], answer:"Interpreted"},
    {question:"let vs var?", options:["Block scoped vs Function scoped","Same","Global vs Local","None"], answer:"Block scoped vs Function scoped"},
    {question:"HTML tag for paragraph?", options:["<p>","<h1>","<div>","<span>"], answer:"<p>"},
    {question:"HTML tag for link?", options:["<a>","<link>","<href>","<url>"], answer:"<a>"},
    {question:"CSS property for color?", options:["color","font-color","text-color","background-color"], answer:"color"},
    {question:"CSS property for font size?", options:["font-size","text-size","font-style","size"], answer:"font-size"},
    {question:"CSS selector for id?", options:["#id",".class","*","element"], answer:"#id"},
    {question:"CSS selector for class?", options:[".class","#id","*","element"], answer:".class"},
    {question:"JS function declaration?", options:["function myFunc(){}","def myFunc(){}","func myFunc(){}","fun myFunc(){}"], answer:"function myFunc(){}"},
    {question:"JS variable declaration ES6?", options:["let x;","var x;","const x;","All of these"], answer:"All of these"},
    {question:"JS loops?", options:["for","while","do-while","All of these"], answer:"All of these"},
    {question:"HTML tag for image?", options:["<img>","<picture>","<src>","<image>"], answer:"<img>"},
    {question:"HTML tag for list item?", options:["<li>","<ul>","<ol>","<list>"], answer:"<li>"},
    {question:"HTML tag for unordered list?", options:["<ul>","<ol>","<li>","<list>"], answer:"<ul>"},
    {question:"HTML tag for ordered list?", options:["<ol>","<ul>","<li>","<list>"], answer:"<ol>"},
    {question:"JS method to add element at end of array?", options:["push()","pop()","shift()","unshift()"], answer:"push()"},
    {question:"JS method to remove first element of array?", options:["shift()","unshift()","pop()","push()"], answer:"shift()"},
    {question:"JS method to remove last element of array?", options:["pop()","push()","shift()","unshift()"], answer:"pop()"},
    {question:"JS method to add element at start of array?", options:["unshift()","shift()","push()","pop()"], answer:"unshift()"},
    {question:"JS typeof 123?", options:["number","string","object","undefined"], answer:"number"},
    {question:"JS typeof 'hello'?", options:["string","number","boolean","object"], answer:"string"},
    {question:"JS typeof true?", options:["boolean","string","number","object"], answer:"boolean"},
    {question:"JS typeof null?", options:["object","null","undefined","boolean"], answer:"object"},
    {question:"JS typeof undefined?", options:["undefined","object","number","string"], answer:"undefined"},
    {question:"JS parseInt('123')?", options:["123","'123'","NaN","Error"], answer:"123"},
    {question:"JS parseFloat('12.34')?", options:["12.34","12","NaN","Error"], answer:"12.34"},
    {question:"JS Math.round(4.7)?", options:["5","4","4.7","Error"], answer:"5"},
    {question:"JS Math.floor(4.7)?", options:["4","5","4.7","Error"], answer:"4"},
    {question:"JS Math.ceil(4.2)?", options:["5","4","4.2","Error"], answer:"5"},
    {question:"JS string length?", options:["str.length","str.size","str.count","str.total"], answer:"str.length"},
    {question:"JS string concatenation?", options:["+","&","*","."], answer:"+"},
    {question:"JS array length?", options:["arr.length","arr.size","arr.count","arr.total"], answer:"arr.length"},
    {question:"JS boolean true?", options:["true","True","TRUE","1"], answer:"true"},
    {question:"JS boolean false?", options:["false","False","FALSE","0"], answer:"false"},
    {question:"JS comparison equal?", options:["==","===","!=","!=="], answer:"=="},
    {question:"JS comparison strict equal?", options:["===","==","!=", "!=="], answer:"==="},
    {question:"JS comparison not equal?", options:["!=","!==","==","==="], answer:"!="},
    {question:"JS logical AND?", options:["&&","||","!","&"], answer:"&&"},
    {question:"JS logical OR?", options:["||","&&","!","|"], answer:"||"},
    {question:"JS logical NOT?", options:["!","&&","||","~"], answer:"!"},
    {question:"JS default value undefined?", options:["undefined","null","0","''"], answer:"undefined"},
    {question:"JS function return value?", options:["return value;","return;","value;","None"], answer:"return value;"},
    {question:"JS alert message?", options:["alert('msg')","console.log('msg')","prompt('msg')","confirm('msg')"], answer:"alert('msg')"},
    {question:"JS console output?", options:["console.log()","alert()","prompt()","print()"], answer:"console.log()"},
    {question:"JS get element by id?", options:["document.getElementById()","document.querySelector()","document.getElementsByClassName()","All"], answer:"document.getElementById()"},
    {question:"JS query selector?", options:["document.querySelector()","document.getElementById()","document.getElementsByClassName()","All"], answer:"document.querySelector()"},
    {question:"JS add class to element?", options:["element.classList.add()","element.addClass()","element.className.add()","All"], answer:"element.classList.add()"},
    {question:"JS remove class from element?", options:["element.classList.remove()","element.removeClass()","element.className.remove()","All"], answer:"element.classList.remove()"},
    {question:"JS toggle class?", options:["element.classList.toggle()","element.toggleClass()","element.className.toggle()","All"], answer:"element.classList.toggle()"},
    {question:"JS set timeout?", options:["setTimeout(function, time)","setInterval(function, time)","delay(function,time)","All"], answer:"setTimeout(function, time)"},
    {question:"JS set interval?", options:["setInterval(function, time)","setTimeout(function, time)","delay(function,time)","All"], answer:"setInterval(function, time)"},
    {question:"JS clear timeout?", options:["clearTimeout(id)","clearInterval(id)","stopTimeout(id)","All"], answer:"clearTimeout(id)"},
    {question:"JS clear interval?", options:["clearInterval(id)","clearTimeout(id)","stopInterval(id)","All"], answer:"clearInterval(id)"},
    {question:"JS prompt input?", options:["prompt('message')","alert('message')","confirm('message')","input('message')"], answer:"prompt('message')"},
    {question:"JS confirm dialog?", options:["confirm('message')","alert('message')","prompt('message')","input('message')"], answer:"confirm('message')"},
    {question:"JS default parameter?", options:["function(a=1){}","function(a){}","function default(a){}","None"], answer:"function(a=1){}"},
    {question:"JS arrow function?", options:["const f = () => {}","function f() {}","let f = function() {}","All"], answer:"const f = () => {}"},
    {question:"JS class declaration?", options:["class MyClass {}","function MyClass(){}","let MyClass = {}","All"], answer:"class MyClass {}"},
    {question:"JS object property access?", options:["obj.key","obj['key']","Both","None"], answer:"Both"},
    {question:"JS object method?", options:["obj.method()","obj['method']()","Both","None"], answer:"Both"},
    {question:"JS this keyword?", options:["Refers to object context","Refers to global","Refers to class","None"], answer:"Refers to object context"},
    {question:"JS array map?", options:["arr.map(fn)","arr.forEach(fn)","arr.filter(fn)","All"], answer:"arr.map(fn)"},
    {question:"JS array filter?", options:["arr.filter(fn)","arr.map(fn)","arr.forEach(fn)","All"], answer:"arr.filter(fn)"},
    {question:"JS array forEach?", options:["arr.forEach(fn)","arr.map(fn)","arr.filter(fn)","All"], answer:"arr.forEach(fn)"},
    {question:"JS array find?", options:["arr.find(fn)","arr.map(fn)","arr.filter(fn)","arr.forEach(fn)"], answer:"arr.find(fn)"},
    {question:"JS string split?", options:["str.split(separator)","str.join(separator)","str.concat()","None"], answer:"str.split(separator)"},
    {question:"JS string join?", options:["arr.join(separator)","str.split(separator)","str.concat()","None"], answer:"arr.join(separator)"},
    {question:"JS string includes?", options:["str.includes('text')","str.contains('text')","str.has('text')","None"], answer:"str.includes('text')"},
    {question:"JS string indexOf?", options:["str.indexOf('text')","str.find('text')","str.search('text')","All"], answer:"str.indexOf('text')"},
    {question:"JS template literal?", options:["`Hello ${name}`","'Hello ${name}'","\"Hello ${name}\"","All"], answer:"`Hello ${name}`"}
];

// Quiz state
let sessionQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// Start quiz
function startQuiz(totalQuestions = 10){
    score = 0;
    currentQuestionIndex = 0;
    sessionQuestions = getRandomQuestions(totalQuestions);

    document.getElementById("login-container").style.display = "none";
    document.getElementById("result-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";

    showQuestion();
}

// Get random questions
function getRandomQuestions(num){
    const shuffled = [...quizData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

// Show question
function showQuestion(){
    const q = sessionQuestions[currentQuestionIndex];
    document.getElementById("question").innerText = `Q${currentQuestionIndex + 1}: ${q.question}`;

    const optionsEl = document.getElementById("options");
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("option-btn");
        btn.onclick = () => selectAnswer(option);
        optionsEl.appendChild(btn);
    });
}

// Handle answer selection
function selectAnswer(option){
    if(option === sessionQuestions[currentQuestionIndex].answer) score++;
    currentQuestionIndex++;
    if(currentQuestionIndex < sessionQuestions.length){
        showQuestion();
    } else {
        showResult();
    }
}

// Show result
function showResult(){
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    const username = document.getElementById("username").value || "Player";
    document.getElementById("result").innerText = `${username}, you scored ${score} out of ${sessionQuestions.length}`;
}

// Restart button functionality
document.getElementById("restart-btn").addEventListener("click", () => {
    startQuiz(10);
});
