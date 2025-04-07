function runMe() {
    const messages = [
        "You’re annoying.",
        "You talk too much.",
        "You’re dramatic.",
        "But you’re also stupidly bright.",
        "And warm.",
        "And you make everything fun.",
        "And I think, even if I wanted to,",
        "I wouldn’t be able to stop looking at you.",
        "So, if you’re done fixing this,",
        "maybe we can fix the other thing too."
    ];

    let index = 0;
    const box = document.getElementById("messageBox");
    const runButton = document.querySelector("button");

    // Clear the box and disable button to prevent multiple triggers
    box.innerHTML = "";
    runButton.disabled = true;

    const interval = setInterval(() => {
        if (index < messages.length) {
            const line = document.createElement("p");
            line.textContent = messages[index];
            box.appendChild(line);
            index++;
        } else {
            clearInterval(interval);
            document.getElementById("inputSection").style.display = "block";
        }
    }, 1500);
}

function submitConfession() {
    const input = document.getElementById("confessionInput").value.trim().toLowerCase();
    const box = document.getElementById("messageBox");

    if (input === "i like you" || input === "i love you") {
        // Append “Good.” to the page
        const goodLine = document.createElement("p");
        goodLine.innerHTML = "<strong>Good.</strong>";
        box.appendChild(goodLine);
    

        // After 1 second, trigger the ringing alert
        setTimeout(() => {
            alert("Your phone is ringing...");
        }, 1000); // 2000ms = 2 seconds
    } else {
        const tryLine = document.createElement("p");
        tryLine.textContent = "Try again.";
        box.appendChild(tryLine);
    }
}
