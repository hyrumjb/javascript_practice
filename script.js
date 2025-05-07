document.addEventListener("DOMContentLoaded", () => {
    // Add

    document.getElementById("addHeading").addEventListener("click", addHeading);
    
    function addHeading() {
        alert("Adding heading . . .");
        const newHeading = document.createElement("h2");
        newHeading.textContent = "Here's a New Heading!";
        document.getElementById("newDiv").appendChild(newHeading);
    }

    document.getElementById("addContent").addEventListener("click", () => {
        alert("Adding content . . .");
        const newContent = document.createElement("p");
        newContent.textContent = "Here's some great paragraph content. Honestly, it's life-changing content that I can't get enough of. It's pretty interesting.";
        document.getElementById("newDiv").appendChild(newContent);
    });

    let latestLine = null;

    document.getElementById("addLine").addEventListener("click", () => {
        alert("Adding line . . .");
        const newLine = document.createElement("hr");
        document.getElementById("newDiv").appendChild(newLine);
        latestLine = newLine;
    });

    document.getElementById("styleLine").addEventListener("click", () => {
        alert("Styling line . . .");
        if (latestLine) {
            latestLine.classList.toggle("mini");
        } else {
            alert("No line to style yet.");
        }
    });

    let newClock;

    document.getElementById("clock").addEventListener("click", () => {
        alert("Building clock . . .");

        document.body.querySelectorAll("*").forEach(element => {
            element.classList.toggle("hidden")
        })

        newClock = document.createElement("h2");
        newClock.textContent = new Date().toLocaleTimeString();
        newClock.style.textAlign = "center";
        document.body.appendChild(newClock);

        setInterval(myClock, 500);
    });

    function myClock() {
        if (newClock) {
            newClock.textContent = new Date().toLocaleTimeString();
        }
    }

    document.getElementById("surprise").addEventListener("mouseup", () => {
        for (let i = 0; i < 50; i++) {
            const item = document.createElement("div");
            item.classList.toggle("item");
            item.style.left = `${i * 35}px`;
            item.id = `falling-${i}`;
            document.getElementById("control-center").appendChild(item);
            moveDown(item.id);
        }
    });

    function moveDown(id) {
        const elem = document.getElementById(id);
        let pos = 0;
        const intervalId = setInterval(() => {
            if (pos >= window.innerHeight - 50) {
                clearInterval(intervalId);
            } else {
                pos += 2;
                elem.style.top = pos + "px";
            }
        }, 5);
    }

    // Remove

    document.getElementById("hideOld").addEventListener("click", () => {
        alert("Hiding old content . . .");
        document.querySelectorAll(".old").forEach(element => {
            element.classList.toggle("hidden");
        });
    });

    document.getElementById("hideHeader").addEventListener("click", () => {
        alert("Hiding header and navigation . . .");
        document.querySelectorAll(".old2").forEach(element => {
            element.classList.toggle("hidden");
        });
    });

    document.getElementById("hideLines").addEventListener("click", () => {
        alert("Hiding lines . . .");
        document.querySelectorAll("hr").forEach(element => {
            element.classList.toggle("hidden");
        });
    });

    document.getElementById("deleteText").addEventListener("click", () => {
        document.querySelectorAll("button").forEach(button => {
            button.textContent = "-------";
        });
    });

    // Change

    document.getElementById("colorPs").addEventListener("click", () => {
        alert("Coloring paragraph tags . . .")
        document.querySelectorAll("p").forEach(p => {
            p.style.color = "green";
        });
    });

    document.getElementById("changeImg").addEventListener("click", () => {
        alert("Changing image . . .");
        document.getElementById("main-image").src = "images/steve2.jpg";
    });

    document.getElementById("changeLinks").addEventListener("click", () => {
        alert("Changing links . . .");
        document.querySelectorAll("a").forEach(a => {
            a.href = "https://en.wikipedia.org/wiki/Steve_Carell"
            a.style.color = "red";
        })
    })

    document.getElementById("changeHeadings").addEventListener("click", () => {
        alert("Changing headings . . .")
        document.querySelectorAll("h2").forEach(element => {
            element.textContent = "Steve Carell";
        });
    });
});