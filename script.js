// Aguarda o carregamento completo do documento HTML
document.addEventListener("DOMContentLoaded", () => {
    const alertBtn = document.getElementById("btn-alert");

    // Adiciona um evento de clique ao botão surpresa
    alertBtn.addEventListener("click", () => {
        alert("🎉 Parabéns! Você acabou de criar e interagir com seu próprio site! Que sua jornada no desenvolvimento seja incrível.");
        
        // Efeito bônus: Altera a cor do botão aleatoriamente a cada clique
        const cores = ["#4ec9b0", "#ce9178", "#9cdcfe", "#b5cea8", "#007acc"];
        const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
        alertBtn.style.backgroundColor = corAleatoria;
    });
});