var questions = [
    { category: "GK", level: "easy", question: "What is the capital of Australia?",
      options: ["Melbourne","Sydney","Canberra","Perth"], answer: 2 },
    { category: "GK", level: "easy", question: "Who wrote the Indian national anthem?",
      options: ["Bankim Chandra Chatterjee","Mahatma Gandhi","Rabindranath Tagore","Sarojini Naidu"], answer: 2 },
    { category: "GK", level: "easy", question: "Which is the largest ocean on Earth?",
      options: ["Pacific Ocean","Indian Ocean","Atlantic Ocean","Arctic Ocean"], answer: 0 },
    { category: "GK", level: "easy", question: "What is the currency of Japan?",
      options: ["Yen","Yuan","Won","Ringgit"], answer: 0 },
    { category: "GK", level: "easy", question: "Who was the first Prime Minister of India?",
      options: ["Lal Bahadur Shastri","Dr. B. R. Ambedkar","Sardar Patel","Jawaharlal Nehru"], answer: 3 },
    { category: "GK", level: "easy", question: "The Taj Mahal is located in which city?",
      options: ["Jaipur","Agra","Delhi","Lucknow"], answer: 1 },
    { category: "GK", level: "easy", question: "What is the capital of Haryana?",
      options: ["Chandigarh","Gurugram","Ambala","Rohtak"], answer: 0 },
    { category: "GK", level: "easy", question: "Which is the longest river in India?",
      options: ["Brahmaputra","Yamuna","Godavari","Ganga"], answer: 3 },
    { category: "Science", level: "easy", question: "What is the chemical symbol of gold?",
      options: ["Au","Go","Ag","Gd"], answer: 0 },
    { category: "Science", level: "easy", question: "Which part of the cell is called the powerhouse of the cell?",
      options: ["Golgi body","Mitochondria","Nucleus","Ribosome"], answer: 1 },
    { category: "Science", level: "easy", question: "Which gas do plants absorb for photosynthesis?",
      options: ["Hydrogen","Oxygen","Nitrogen","Carbon dioxide"], answer: 3 },
    { category: "Science", level: "easy", question: "What is the SI unit of force?",
      options: ["Pascal","Joule","Newton","Watt"], answer: 2 },
    { category: "Science", level: "easy", question: "Which is the hardest natural substance?",
      options: ["Graphite","Quartz","Iron","Diamond"], answer: 3 },
    { category: "Science", level: "easy", question: "Which planet is closest to the Sun?",
      options: ["Mars","Mercury","Earth","Venus"], answer: 1 },
    { category: "Science", level: "easy", question: "What is the pH of pure water at room temperature?",
      options: ["7","14","10","1"], answer: 0 },
    { category: "Science", level: "easy", question: "Approximately what is the speed of light in vacuum?",
      options: ["3 x 10^10 m/s","3 x 10^5 m/s","3 x 10^6 m/s","3 x 10^8 m/s"], answer: 3 },
    { category: "Computer", level: "easy", question: "What does HTML stand for?",
      options: ["HyperTool Multi Language","HyperText Markup Language","High Text Machine Language","Home Text Markup Language"], answer: 1 },
    { category: "Computer", level: "easy", question: "Which of these is a CSS framework?",
      options: ["Laravel","Bootstrap","Django","Flask"], answer: 1 },
    { category: "Computer", level: "easy", question: "Which data structure follows the LIFO principle?",
      options: ["Tree","Stack","Linked list","Queue"], answer: 1 },
    { category: "Computer", level: "easy", question: "What is the time complexity of binary search?",
      options: ["O(n log n)","O(log n)","O(1)","O(n)"], answer: 1 },
    { category: "Computer", level: "easy", question: "Which CSS symbol is used to select an element by its id?",
      options: ["."," *","#","&"], answer: 2 },
    { category: "Computer", level: "easy", question: "Which JavaScript method adds an item to the end of an array?",
      options: ["push()","shift()","concat()","pop()"], answer: 0 },
    { category: "Computer", level: "easy", question: "What is the full form of SQL?",
      options: ["Standard Question Language","Sequential Query Language","Structured Query Language","Simple Query Logic"], answer: 2 },
    { category: "Computer", level: "easy", question: "Which part of a computer is known as its brain?",
      options: ["Monitor","Hard disk","RAM","CPU"], answer: 3 },
    { category: "Maths", level: "easy", question: "What is 15% of 200?",
      options: ["15","20","35","30"], answer: 3 },
    { category: "Maths", level: "easy", question: "What is the square root of 144?",
      options: ["12","14","11","13"], answer: 0 },
    { category: "Maths", level: "easy", question: "What is the sum of the angles of a triangle?",
      options: ["180 degrees","90 degrees","360 degrees","270 degrees"], answer: 0 },
    { category: "Maths", level: "easy", question: "What is the next number: 2, 4, 8, 16, ...?",
      options: ["24","32","18","30"], answer: 1 },
    { category: "Maths", level: "easy", question: "Which is the next prime number after 7?",
      options: ["10","9","13","11"], answer: 3 },
    { category: "Maths", level: "easy", question: "What is the area of a circle of radius r?",
      options: ["pi x d","pi x r x r","2 x pi x r","r x r x r"], answer: 1 },
    { category: "Maths", level: "easy", question: "What is 7 x 8?",
      options: ["54","63","49","56"], answer: 3 },
    { category: "Maths", level: "easy", question: "What is the value of 2 to the power 10?",
      options: ["2048","512","1024","100"], answer: 2 },
    { category: "GK", level: "hard", question: "Which articles of the Indian Constitution deal with the Right to Equality?",
      options: ["Articles 19 to 22","Articles 25 to 28","Articles 23 and 24","Articles 14 to 18"], answer: 3 },
    { category: "GK", level: "hard", question: "In which year was the Battle of Plassey fought?",
      options: ["1757","1857","1764","1699"], answer: 0 },
    { category: "GK", level: "hard", question: "Which Indian state has the longest coastline?",
      options: ["Tamil Nadu","Gujarat","Andhra Pradesh","Maharashtra"], answer: 1 },
    { category: "GK", level: "hard", question: "Kailash Satyarthi shared the 2014 Nobel Peace Prize with whom?",
      options: ["Mother Teresa","Wangari Maathai","Malala Yousafzai","Aung San Suu Kyi"], answer: 2 },
    { category: "GK", level: "hard", question: "What is the smallest country in the world by area?",
      options: ["Liechtenstein","Monaco","Vatican City","San Marino"], answer: 2 },
    { category: "GK", level: "hard", question: "Which Indian mission achieved a soft landing near the Moon's south polar region in 2023?",
      options: ["Chandrayaan-2","Aditya-L1","Chandrayaan-3","Mangalyaan"], answer: 2 },
    { category: "GK", level: "hard", question: "Who was the first woman President of India?",
      options: ["Pratibha Patil","Droupadi Murmu","Indira Gandhi","Sarojini Naidu"], answer: 0 },
    { category: "Science", level: "hard", question: "Which vitamin is synthesised in the skin on exposure to sunlight?",
      options: ["Vitamin A","Vitamin C","Vitamin B12","Vitamin D"], answer: 3 },
    { category: "Science", level: "hard", question: "Which is the most abundant gas in Earth's atmosphere?",
      options: ["Argon","Oxygen","Carbon dioxide","Nitrogen"], answer: 3 },
    { category: "Science", level: "hard", question: "Which type of bond is formed by the sharing of electron pairs between atoms?",
      options: ["Metallic bond","Ionic bond","Covalent bond","Hydrogen bond"], answer: 2 },
    { category: "Science", level: "hard", question: "Which law states that the pressure and volume of a gas are inversely proportional at constant temperature?",
      options: ["Avogadro's law","Ohm's law","Charles's law","Boyle's law"], answer: 3 },
    { category: "Science", level: "hard", question: "Which scientist gave the three laws of planetary motion?",
      options: ["Copernicus","Isaac Newton","Galileo Galilei","Johannes Kepler"], answer: 3 },
    { category: "Science", level: "hard", question: "Which blood group is known as the universal donor?",
      options: ["O negative","B negative","AB positive","A positive"], answer: 0 },
    { category: "Science", level: "hard", question: "What is the SI unit of magnetic flux density?",
      options: ["Tesla","Weber","Henry","Farad"], answer: 0 },
    { category: "Computer", level: "hard", question: "Which sorting algorithm has a worst-case time complexity of O(n log n)?",
      options: ["Quick sort","Bubble sort","Merge sort","Insertion sort"], answer: 2 },
    { category: "Computer", level: "hard", question: "Which HTTP status code means Internal Server Error?",
      options: ["404","301","500","403"], answer: 2 },
    { category: "Computer", level: "hard", question: "What does typeof null return in JavaScript?",
      options: ["object","null","number","undefined"], answer: 0 },
    { category: "Computer", level: "hard", question: "Which layer of the OSI model is responsible for routing packets?",
      options: ["Transport layer","Data link layer","Network layer","Session layer"], answer: 2 },
    { category: "Computer", level: "hard", question: "Which SQL clause filters groups after aggregation?",
      options: ["HAVING","WHERE","ORDER BY","GROUP BY"], answer: 0 },
    { category: "Computer", level: "hard", question: "What does the CSS rule box-sizing: border-box do?",
      options: ["Includes padding and border in the element's width and height","Makes the element a flex container","Adds a margin around the border","Removes the border from the element"], answer: 0 },
    { category: "Computer", level: "hard", question: "Which data structure is typically used for breadth-first search (BFS) of a graph?",
      options: ["Hash table","Heap","Stack","Queue"], answer: 3 },
    { category: "Computer", level: "hard", question: "What does console.log(0.1 + 0.2 === 0.3) print in JavaScript?",
      options: ["false","undefined","NaN","true"], answer: 0 },
    { category: "Maths", level: "hard", question: "What is the derivative of sin(x)?",
      options: ["-cos(x)","-sin(x)","cos(x)","tan(x)"], answer: 2 },
    { category: "Maths", level: "hard", question: "What is the value of 5! (5 factorial)?",
      options: ["24","720","60","120"], answer: 3 },
    { category: "Maths", level: "hard", question: "Two numbers are in the ratio 3:5 and their sum is 64. What is the larger number?",
      options: ["45","40","24","36"], answer: 1 },
    { category: "Maths", level: "hard", question: "What is the sum of the first 20 natural numbers?",
      options: ["190","200","220","210"], answer: 3 },
    { category: "Maths", level: "hard", question: "In how many ways can the letters of the word LEVEL be arranged?",
      options: ["120","60","15","30"], answer: 3 },
    { category: "Maths", level: "hard", question: "What is the integral of 2x with respect to x?",
      options: ["2 + C","x^2 + C","x + C","2x^2 + C"], answer: 1 },
    { category: "Maths", level: "hard", question: "A 120 m long train crosses a pole in 6 seconds. What is its speed in km/h?",
      options: ["80","54","60","72"], answer: 3 }
];

var selectedQuestions = [];   
var currentIndex = 0;         
var score = 0;
var userAnswers = [];         
var timeLeft = 10;
var timer;                    
var answered = false;        
var playerName = "";
var subjectChosen = "";

var TIME_PER_QUESTION = 10;   

function showScreen(screenId) {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "none";
    document.getElementById(screenId).style.display = "block";
}

function shuffleArray(arr) {
    var a = arr.slice();   
    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
    return a;
}

function startQuiz() {
    playerName = document.getElementById("name").value.trim();
    if (playerName === "") {
        playerName = "Student";
    }

    subjectChosen = document.getElementById("subject").value;
    var level = document.getElementById("level").value;
    var count = parseInt(document.getElementById("count").value);

    var filtered = [];
    for (var i = 0; i < questions.length; i++) {
        var q = questions[i];
        var subjectOk = (subjectChosen === "All" || q.category === subjectChosen);
        var levelOk = (level === "All" || q.level === level);
        if (subjectOk && levelOk) {
            filtered.push(q);
        }
    }

    if (count > filtered.length) {
        count = filtered.length;
    }

    selectedQuestions = shuffleArray(filtered).slice(0, count);

    currentIndex = 0;
    score = 0;
    userAnswers = [];

    showScreen("quiz-screen");
    showQuestion();
}

function showQuestion() {
    clearInterval(timer);
    answered = false;
    timeLeft = TIME_PER_QUESTION;

    var q = selectedQuestions[currentIndex];
    var total = selectedQuestions.length;

    document.getElementById("question-number").textContent = "Question " + (currentIndex + 1) + " of " + total;
    document.getElementById("question-subject").textContent = q.category;
    document.getElementById("question-text").textContent = q.question;
    document.getElementById("progress-bar").style.width = (currentIndex / total * 100) + "%";
    document.getElementById("next-btn").style.display = "none";

    var optionsBox = document.getElementById("options");
    optionsBox.innerHTML = "";
    for (var i = 0; i < q.options.length; i++) {
        var btn = document.createElement("button");
        btn.className = "option";
        btn.textContent = q.options[i];
        btn.setAttribute("data-index", i);
        btn.onclick = function () {
            checkAnswer(parseInt(this.getAttribute("data-index")));
        };
        optionsBox.appendChild(btn);
    }

    startTimer();
}

// ================= TIMER =================
function startTimer() {
    var timeBox = document.getElementById("time");
    timeBox.textContent = timeLeft;
    timeBox.className = "";

    timer = setInterval(function () {
        timeLeft--;
        timeBox.textContent = timeLeft;

        if (timeLeft <= 5) {
            timeBox.className = "low";
        }
        if (timeLeft <= 0) {
            checkAnswer(-1);
        }
    }, 1000);
}

function checkAnswer(selected) {
    if (answered === true) {
        return;   
    }
    answered = true;
    clearInterval(timer);

    var q = selectedQuestions[currentIndex];

    if (selected === q.answer) {
        score++;
    }
    userAnswers.push(selected);

    var buttons = document.getElementById("options").children;
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        if (i === q.answer) {
            buttons[i].classList.add("correct");
        } else if (i === selected) {
            buttons[i].classList.add("wrong");
        }
    }
    
    var nextBtn = document.getElementById("next-btn");
    if (currentIndex === selectedQuestions.length - 1) {
        nextBtn.textContent = "Finish Exam";
    } else {
        nextBtn.textContent = "Next Question";
    }
    nextBtn.style.display = "inline-block";
}

function nextQuestion() {
    if (currentIndex === selectedQuestions.length - 1) {
        showResult();
    } else {
        currentIndex++;
        showQuestion();
    }
}

function showResult() {
    var total = selectedQuestions.length;
    var percentage = Math.round((score / total) * 100);

    // count the questions which user skipped
    var skipped = 0;
    for (var i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === -1) {
            skipped++;
        }
    }
    var wrong = total - score - skipped;

    showScreen("result-screen");
    document.getElementById("result-name").textContent = "Well done, " + playerName;
    document.getElementById("result-score").textContent = percentage + "%";

    var message = "";
    if (percentage >= 80) {
        message = "Excellent work! You are exam ready.";
    } else if (percentage >= 50) {
        message = "Good attempt. A little more practice will improve your score.";
    } else {
        message = "Keep practising. Check the review below and try again.";
    }
    document.getElementById("result-message").textContent = message;

    var subjectText = subjectChosen;
    if (subjectChosen === "All") {
        subjectText = "Mixed";
    }
    document.getElementById("result-details").innerHTML =
        "<span>Correct: " + score + "</span>" +
        "<span>Wrong: " + wrong + "</span>" +
        "<span>Not answered: " + skipped + "</span>" +
        "<span>Subject: " + subjectText + "</span>";

    document.getElementById("review-box").style.display = "none";

    saveScore(percentage, score + "/" + total, subjectText);
    showReview();
    showLeaderboard();
}

function showReview() {
    var html = "<h2>Answer Review</h2>";
    for (var i = 0; i < selectedQuestions.length; i++) {
        var q = selectedQuestions[i];
        var userChoice = userAnswers[i];
        var yourAnswer = "Not answered";
        var cssClass = "wrong-text";

        if (userChoice !== -1) {
            yourAnswer = q.options[userChoice];
        }
        if (userChoice === q.answer) {
            cssClass = "right-text";
        }

        html += "<div class='review-item'>";
        html += "<b>" + (i + 1) + ". " + q.question + "</b><br>";
        html += "Your answer: <span class='" + cssClass + "'>" + yourAnswer + "</span>";
        if (userChoice !== q.answer) {
            html += " &nbsp; Correct answer: <span class='right-text'>" + q.options[q.answer] + "</span>";
        }
        html += "</div>";
    }
    document.getElementById("review-box").innerHTML = html;
}

function getScores() {
    try {
        var data = localStorage.getItem("quizScores");
        if (data === null) {
            return [];
        }
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

function saveScore(percentage, scoreText, subjectText) {
    var scores = getScores();
    scores.push({ name: playerName, percent: percentage, score: scoreText, subject: subjectText });

    scores.sort(function (a, b) {
        return b.percent - a.percent;
    });

    scores = scores.slice(0, 5);

    try {
        localStorage.setItem("quizScores", JSON.stringify(scores));
    } catch (error) {
        console.log("Could not save score");
    }
}

function showLeaderboard() {
    var scores = getScores();
    var body = document.getElementById("leaderboard");
    body.innerHTML = "";

    for (var i = 0; i < scores.length; i++) {
        var row = body.insertRow();
        row.insertCell(0).textContent = i + 1;
        row.insertCell(1).textContent = scores[i].name;   // textContent is safer than innerHTML
        row.insertCell(2).textContent = scores[i].subject;
        row.insertCell(3).textContent = scores[i].score + " (" + scores[i].percent + "%)";
    }
}

function changeTheme() {
    var body = document.body;
    var button = document.getElementById("theme-btn");

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        button.textContent = "Light Mode";
        localStorage.setItem("quizTheme", "dark");
    } else {
        button.textContent = "Dark Mode";
        localStorage.setItem("quizTheme", "light");
    }
}

document.getElementById("start-btn").onclick = startQuiz;
document.getElementById("next-btn").onclick = nextQuestion;
document.getElementById("theme-btn").onclick = changeTheme;

document.getElementById("again-btn").onclick = function () {
    showScreen("start-screen");
};

document.getElementById("review-btn").onclick = function () {
    var box = document.getElementById("review-box");
    if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
};

// load saved theme when page opens
if (localStorage.getItem("quizTheme") === "dark") {
    changeTheme();
}
