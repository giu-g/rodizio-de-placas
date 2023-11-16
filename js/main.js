function verificarRestricoes() {
    var diaSemana = document.getElementById("diaSemana").value;
    var finalPlaca = parseInt(document.getElementById("finalPlaca").value);
    if (
        (diaSemana === "segunda" && (finalPlaca === 1 || finalPlaca === 2)) ||
        (diaSemana === "terça" && (finalPlaca === 3 || finalPlaca === 4)) ||
        (diaSemana === "quarta" && (finalPlaca === 5 || finalPlaca === 6)) ||
        (diaSemana === "quinta" && (finalPlaca === 7 || finalPlaca === 8)) ||
        (diaSemana === "sexta" && (finalPlaca === 9 || finalPlaca === 0))
    ) {
        document.getElementById("mensagem").textContent = "Você não pode circular com o carro hoje.";
    } else {
        document.getElementById("opcaoRestricao").style.display = "block";
    }
}
function verificarOpcaoRestricao() {
    document.getElementById("mensagem").textContent = "";
    var opcao = document.querySelector('input[name="opcaoRestricao"]:checked').value;
    if (opcao === "áreaVermelha") {
        document.getElementById("mensagem").textContent = "Não circulam automóveis nem caminhões na área vermelha das 7h às 10h e das 17h às 20h.";
    } else if (opcao === "viaLimítrofe") {
        document.getElementById("tipoVeiculo").style.display = "block";
    }
}
function verificarTipoVeiculo() {
    document.getElementById("mensagem").textContent = "";
    var tipoVeiculo = document.querySelector('input[name="tipoVeiculo"]:checked').value;
    if (tipoVeiculo === "caminhão") {
        document.getElementById("mensagem").textContent = "Caminhões estão liberados na via limítrofe. Tenha uma boa viagem!";
    } else if (tipoVeiculo === "automóvel") {
        document.getElementById("mensagem").textContent = "Não circulam automóveis na via limítrofe das 7h às 10h e das 17h às 20h.";
    }
}