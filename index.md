---
layout: default
title: Sukhmeet Singh Hora
---

# 👋 About Me
**Proactive Computer Engineering student** with strong communication skills and technical expertise.

# 💼 Experience
- **Engineering Project Coordinator - New Flyer**  
  Developed automation tools and project tracking systems.
- **Engineering Aide - Indus Automation**  
  Designed IoT-based control systems with AWS integration.

# 🚀 Transferable Skills
- **Web Development & Automation:** Experienced in VBA, PHP, and SharePoint to automate workflows and improve efficiency.  
- **Full-Stack Development:** Skilled in Node.js, React, Express, and SQL, with hands-on experience in database management and API integration.  
- **Software Development & Engineering:** Developed solutions using C, C++, Python, JavaScript, and Dart for web and embedded systems.  
- **Project Management:** Created Gantt charts, coordinated teams, and optimized processes to enhance productivity.  
- **Data Analysis & Visualization:** Automated reporting using Power BI, VBA, and Excel Macros for strategic decision-making.  
- **Embedded Systems & IoT:** Experienced with PLC (S7-1200/1500), IoT2050, STM32, and Raspberry Pi, integrating hardware with cloud-based applications. Developed IoT apps using MQTT for real-time communication and AWS IoT solutions for secure remote monitoring and automation.  
- **Problem-Solving & Innovation:** Designed and developed automated tools, predictive models, and workflow optimizations to enhance engineering and software processes. 

# 📂 Projects

### 📱 **PLC Remote Interface App**
Designed and implemented a smartphone application to remotely interface with, control setpoints, and manage outputs of a programmable logic controller using **S71200/1500 PLC, AWS Services, and a cross-platform application**.  
- Programmed the PLC to communicate with AWS IoT Broker using **MQTT protocol**, publishing messages and subscribing to topics.  
- Developed a solution using **IoT2050 built-in Node-RED** to create automated workflows.  
- Created a cross-platform app to **revolutionize pump/lift station management**, integrating AWS for secure remote control and real-time monitoring.  

🎥 **Demo Video Placeholder**  
![Project Video](https://via.placeholder.com/800x400.png?text=Project+Demo)  

---

### 🌊 **Capstone Project (In Progress)**
Developing an **IoT-based Lake/River Depth Measurement and Monitoring System** using sonar technology and cloud integration for **real-time depth monitoring, GPS navigation, path mapping, and ML-based hazard differentiation**.  

🎥 **Demo Video Placeholder**  
![Project Video](https://via.placeholder.com/800x400.png?text=Project+Demo)  

---

### 💼 **Full Stack Career Platform (In Progress)**
Developing a **career platform** with a job portal, recommendation engine, and live quizzing event using **MERN Stack, CI/CD pipelines, Docker containerization, security analysis, and load testing**.  

🎥 **Demo Video Placeholder**  
![Project Video](https://via.placeholder.com/800x400.png?text=Project+Demo)  

---

### 🏒 **Broom Buddy**
Designed a **technology solution for deaf curlers** consisting of a **handheld controller and a broom-mountable LED ring** to convey sweeping instructions using **ESP-Now, power-saving modes, and a 12-bit ADC**.  

🎥 **Demo Video Placeholder**  
![Project Video](https://via.placeholder.com/800x400.png?text=Project+Demo)  

---

### 🛒 **Urban Tech App**
Developed a **user-friendly online store** and static website with:  
✅ Scrolling interface  
✅ Product specifications  
✅ Cart functionality  
✅ Checkout process  
✅ Account management  
✅ Product recommendations  

🎥 **Demo Video Placeholder**  
![Project Video](https://via.placeholder.com/800x400.png?text=Project+Demo)  

---

### ⏱ **Stopwatch (DE-10 FPGA Project)**
Designed and implemented a **Stopwatch** using **DE-10 boards, FPGAs, and Verilog**.  

🎥 **Demo Video Placeholder**  
![Project Video](https://via.placeholder.com/800x400.png?text=Project+Demo)  

---

### 🎵 **MusicOSet**
Designed and implemented a **database system** encapsulating **albums, artists, and songs**, with a front-end **command-line interface for database access and management**.  

🎥 **Demo Video Placeholder**  
![Project Video](https://via.placeholder.com/800x400.png?text=Project+Demo)  

---

# 📄 Resume

📥 **Download my Resume**  
[![Download Resume](https://img.shields.io/badge/Download-Resume-blue?style=for-the-badge&logo=adobeacrobatreader)](Sukhmeet_Singh_Hora_Resume.pdf){:target="_blank"}

💼 **View Online**  
[Click here](Sukhmeet_Singh_Hora_Resume.pdf){:target="_blank"} to view my resume in your browser.

---

## 🎮 Click & Reveal Game  
Click on a box to learn something about me!  

<div class="game-container">
    <div class="box"><span>❓</span></div>
    <div class="box"><span>❓</span></div>
    <div class="box"><span>❓</span></div>
    <div class="box"><span>❓</span></div>
</div>

<button class="reset-btn" onclick="resetGame()">🔄 Reset Game</button>

<script>
document.addEventListener("DOMContentLoaded", function () {
    const facts = [
        "💻 I love Full-Stack Development with MERN!",
        "🔬 I worked on an IoT-based depth monitoring system.",
        "🌍 I enjoy solving real-world engineering problems.",
        "🎨 I created a cross-platform app for pump management!",
        "🚀 I'm skilled in automation using VBA and Power BI!",
        "📊 Data visualization is my superpower!",
        "🤖 I built a project using Raspberry Pi and AWS IoT!",
        "📡 MQTT and PLC programming are part of my expertise."
    ];

    function revealFact(box) {
        const randomIndex = Math.floor(Math.random() * facts.length);
        box.innerHTML = `<span>${facts[randomIndex]}</span>`;
        box.style.backgroundColor = "#28a745"; // Change color after reveal
        box.style.color = "white"; // Keep text readable
        box.classList.add("fade-in"); // Apply fade-in animation
    }

    function resetGame() {
        document.querySelectorAll(".box").forEach((box) => {
            box.innerHTML = "<span>❓</span>";
            box.style.backgroundColor = "#007BFF"; // Reset color
            box.classList.remove("fade-in"); // Remove animation class
        });
    }

    document.querySelectorAll(".box").forEach((box) => {
        box.addEventListener("click", function () {
            revealFact(this);
        });
    });

    window.resetGame = resetGame;
});
</script>

# 📞 Contact
- 📧 [Email Me](mailto:horass@myumanitoba.ca)  
- 🔗 [LinkedIn](https://linkedin.com/in/sukhmeet-hora)  
