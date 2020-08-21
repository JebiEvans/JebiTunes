window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelectorAll(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#ddd",
        "#6860d3",
        "#60b2d3",
    ];

    // Lets get going with the sounds here
    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
              sounds[index].currentTime = 0;
            sounds[index].play() ;

            createBubbles(index);
        });
    });

    // Create a function for bubbles to pop
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
    };
});

// console.log()