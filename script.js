// Funções para mudar tema
function mudarTema(tema) {
    const body = document.body;
    body.setAttribute("data-tema", tema);
    localStorage.setItem("tema", tema);
}

function carregarTema() {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo) {
        document.body.setAttribute("data-tema", temaSalvo);
    }
}

// Funções para o modal
function abrirModal() {
    document.getElementById("modal").style.display = "block";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Funções para a calculadora de média
function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        alert("Por favor, insira notas válidas (entre 0 e 10).");
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;
    document.getElementById("resultado-media").innerText = `Média: ${media.toFixed(2)}`;
}

function limparNotas() {
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("resultado-media").innerText = "";
}

function salvarNotas() {
    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;
    const nota3 = document.getElementById("nota3").value;
    localStorage.setItem("nota1", nota1);
    localStorage.setItem("nota2", nota2);
    localStorage.setItem("nota3", nota3);
}

function carregarNotas() {
    document.getElementById("nota1").value = localStorage.getItem("nota1") || "";
    document.getElementById("nota2").value = localStorage.getItem("nota2") || "";
    document.getElementById("nota3").value = localStorage.getItem("nota3") || "";
}

// Função para copiar o horário
function copiarHorario() {
    const linhas = [];
    const tabela = document.querySelector("table");
    for (const linha of tabela.rows) {
        const celulas = Array.from(linha.cells).map(celula => celula.innerText);
        linhas.push(celulas.join("\t"));
    }
    const texto = linhas.join("\n");
    navigator.clipboard.writeText(texto)
        .then(() => alert("Horário copiado para a área de transferência!"))
        .catch(() => alert("Erro ao copiar o horário."));
}

// Função para voltar ao topo
function voltarAoTopo() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
    const botao = document.getElementById("voltarTopo");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        botao.style.display = "block";
    } else {
        botao.style.display = "none";
    }
};

// Carregar tema e notas ao iniciar
window.onload = function() {
    carregarTema();
    carregarNotas();

    // Função para alternar o menu em dispositivos móveis
function toggleMenu() {
    const menuList = document.getElementById("menuList");
    menuList.classList.toggle("active");
}

// Função para alternar o menu em dispositivos móveis
function toggleMenu() {
    const menuList = document.getElementById("menuList");
    menuList.classList.toggle("active");
}

// Adicionar evento de clique ao ícone do menu
document.getElementById("menuIcon").addEventListener("click", toggleMenu);

// Fechar o menu ao clicar em um link (opcional)
const links = document.querySelectorAll("nav ul li a");
links.forEach(link => {
    link.addEventListener("click", () => {
        const menuList = document.getElementById("menuList");
        if (menuList.classList.contains("active")) {
            menuList.classList.remove("active");
        }
    });
});
};