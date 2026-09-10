window.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.getElementById("like-btn");
    
    if (!likeBtn) return;
    
    const likeSvg = likeBtn.querySelector("svg");
    const likeCountSpan = document.getElementById("like-count");
    
    let liked = false;
    let baseCount = 1200;

    likeBtn.addEventListener("click", () => {
        liked = !liked;

        if (liked) {
            likeSvg.style.fill = "#ef4444";
            likeSvg.style.stroke = "#ef4444";
            likeCountSpan.textContent = baseCount + 1;
        } else {
            likeSvg.style.fill = "none";
            likeSvg.style.stroke = "currentColor";
            likeCountSpan.textContent = baseCount;
        }

        likeSvg.style.transform = "scale(1.3)";
        setTimeout(() => {
            likeSvg.style.transform = "scale(1)";
        }, 150);
    });
});