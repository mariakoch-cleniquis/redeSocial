document.addEventListener("DOMContentLoaded", () => {
    // 1. Botão de Curtir (Começa em 0 e soma a cada clique)
    const likeBtn = document.getElementById("like-btn");
    if (likeBtn) {
        const likeSvg = likeBtn.querySelector("svg");
        const likeCountSpan = document.getElementById("like-count");
        
        let count = 0;

        likeBtn.addEventListener("click", () => {
            count++;
            likeCountSpan.textContent = count;

            // Efeito visual de coração vermelho piscando a cada clique
            likeSvg.style.fill = "#ef4444";
            likeSvg.style.stroke = "#ef4444";
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