document.getElementById("gerarToken").addEventListener("click", function() {
    const token = Math.random().toString(36).substr(2, 10); // Gera um token aleatório
    localStorage.setItem("avaliacaoToken", token); // Salva o token temporariamente

    const link = `index2.html?token=${token}`;
    document.getElementById("linkGerado").innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
});
