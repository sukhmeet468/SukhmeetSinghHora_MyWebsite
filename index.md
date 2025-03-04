---
layout: home
cover-img: "/assets/img/cover.jpg"
---

<!-- Profile Card in Header -->
<header>
    <div class="profile-card">
        <img src="assets/img/profile.jpg">
        <h2>Sukhmeet Singh Hora</h2>
        <p>Computer Engineer Graduating May 2025</p>
        <p>Embedded Software Programming | Internet of Things | Full Stack Development | Amazon Web Services | VBA & Macros Automation</p>
    </div>
</header>

<link rel="stylesheet" href="style.css">

## 👋 About Me  
Proactive and goal-oriented Computer Engineering student with strong communication skills and a solid foundation in technical and software development. I have gained hands-on engineering experience through both academic projects and professional roles, including my time as an Engineering Intern at Indus Automation and as a Web Developer & Analyst at Manitoba Municipal Relations. Passionate about leveraging my expertise in IoT, Full-Stack Development, AWS, VBA Macros, and Design Solution Programming to develop innovative and efficient solutions for real-world challenges.  

---

💼 **Currently**:  
- Computer Engineering Co-op Student at UoM Graduating May 2025
- Engineering Project Coordinator Co-op Student at **New Flyer**    

---

{% include topskills.html %} 

---

## 💼 Experience  

{% include experience.html %}  

---

## 📂 Projects  

{% include projects.html %}  

---

## 📄 Resume  

💼 **[View](Sukhmeet_Singh_Hora_Resume.pdf){:target="_blank"}**  

---

## 🎮 Click & Reveal Game  
Click on a card to learn something about me!  

<div class="game-container">
    <div class="box" onclick="revealFact(this)">Tap to Reveal</div>
    <div class="box" onclick="revealFact(this)">Tap to Reveal</div>
    <div class="box" onclick="revealFact(this)">Tap to Reveal</div>
    <div class="box" onclick="revealFact(this)">Tap to Reveal</div>
    <div class="box" onclick="revealFact(this)">Tap to Reveal</div>
    <div class="box" onclick="revealFact(this)">Tap to Reveal</div>
    <div class="box" onclick="revealFact(this)">Tap to Reveal</div>
    <div class="box" onclick="revealFact(this)">Tap to Reveal</div>
</div>

<button class="reset-btn" onclick="resetGame()">🔄 Reset Game</button>

<style>
    .game-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
        margin-top: 20px;
    }

    .box {
        width: 150px;
        height: 100px;
        background-color: #007BFF;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.3s;
    }

    .box:hover {
        background-color: #0056b3;
    }

    .fade-in {
        animation: fadeIn 0.5s ease-in-out;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .reset-btn {
        margin-top: 20px;
        padding: 10px 15px;
        font-size: 16px;
        background-color: #dc3545;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
    }

    .reset-btn:hover {
        background-color: #a71d2a;
    }
</style>

<script>
document.addEventListener("DOMContentLoaded", function () {
    let facts = [
        "💻 Experienced in Full-Stack Devlopment!",
        "🔬 Built IoT depth monitoring system.",
        "🌍 Love solving real-world problems.",
        "🎨 Created cross-platform PLC app.",
        "🚀 Built automated Excel templates using VBA and Power BI!",
        "📊 Automated Data visualization is my forte!",
        "🤖 Integrated Raspberry Pi with AWS IoT and BLE",
        "📡 Skilled in MQTT, AWS, and PLCs.",
        "🛠️ Automated BoM management system.",
        "⚡ Developed capacity planning automation.",
        "📈 Streamlined projects with Gantt charts.",
        "🖥️ Built SharePoint tracking system.",
        "📜 Certified in Full-Stack & UX!",
        "📜 Certified in TSPP and Project Management Fundamentals",
        "🕹️ Programmed FPGA boards with Verilog.",
        "🔗 Strong in APIs and CI/CD.",
        "🚦 Designed Urban Tech online store.",
        "🛠️ Optimized AutoCAD with LISP.",
        "🔍 Debugging & problem-solving expert!",
        "🎤 Great at technical presentations!"
    ];

    let usedFacts = [];

    window.revealFact = function (box) {
        if (box.innerHTML !== "Tap to Reveal") return; // Don't reveal again

        if (facts.length === 0) {
            resetGame(); // Auto-reset if all facts are used
            return;
        }

        const randomIndex = Math.floor(Math.random() * facts.length);
        const selectedFact = facts.splice(randomIndex, 1)[0]; // Remove fact from available list
        usedFacts.push(selectedFact); // Store in used list

        box.innerHTML = selectedFact;
        box.style.backgroundColor = "#28a745"; // Green after reveal
        box.style.color = "white";
        box.classList.add("fade-in");
    };

    window.resetGame = function () {
        facts = [...usedFacts]; // Restore facts from used list
        usedFacts = [];

        document.querySelectorAll(".box").forEach((box) => {
            box.innerHTML = "Tap to Reveal";
            box.style.backgroundColor = "#007BFF"; // Reset color
            box.classList.remove("fade-in");
        });
    };
});
</script>

---

## 📞 Contact  

📧 [horass@myumanitoba.ca](mailto:horass@myumanitoba.ca)  
📱 +1 (431) 388-7835  
 

