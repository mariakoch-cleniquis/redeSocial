document.addEventListener("DOMContentLoaded", () => {
    // 1. Botão de Curtir
    const likeBtn = document.getElementById("like-btn");
    if (likeBtn) {
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
    }

    // 2. Botão de Comentar
    const commentBtn = document.getElementById("comment-btn");
    if (commentBtn) {
        commentBtn.addEventListener("click", () => {
            alert("Abrir comentários.");
        });
    }

    // 3. Botão de Repostar
    const repostBtn = document.getElementById("repost-btn");
    if (repostBtn) {
        repostBtn.addEventListener("click", () => {
            alert("Post repostado!");
        });
    }

    // 4. Botão de Compartilhar
    const shareBtn = document.getElementById("share-btn");
    if (shareBtn) {
        shareBtn.addEventListener("click", () => {
            alert("Enviar por mensagem.");
        });
    }

    // 5. Botão de Salvar
    const saveBtn = document.getElementById("save-btn");
    if (saveBtn) {
        const saveSvg = saveBtn.querySelector("svg");
        let saved = false;

        saveBtn.addEventListener("click", () => {
            saved = !saved;
            if (saved) {
                saveSvg.style.fill = "currentColor";
            } else {
                saveSvg.style.fill = "none";
            }
        });
    }
});