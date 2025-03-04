// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

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
}

