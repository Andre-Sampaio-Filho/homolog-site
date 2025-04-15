document.getElementById("gerarToken").addEventListener("click", function() {
    const token = Math.random().toString(36).substr(2, 10); // Gera um token aleatório
    localStorage.setItem("avaliacaoToken", token); // Salva o token temporariamente

    const link = `index2.html?token=${token}`;
    document.getElementById("linkGerado").innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
});
document.getElementById("linkGerado").addEventListener("click", function(event) {
    if (event.target.tagName.toLowerCase() === 'a') {
        event.target.style.display = 'none'; // Esconde o link clicado
    }
});

