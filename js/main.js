<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rodízio de Placas</title>
    <link rel="icon" type="image/x-icon" href="./img/car_icon.png">
    <style>
        /* Estilo para a estrutura */
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f7fa;
            color: #333;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 650px;
            padding: 30px;
            box-sizing: border-box;
            margin: 20px;
        }

        header {
            text-align: center;
            margin-bottom: 30px;
        }

        header h1 {
            font-size: 1.8em;
            color: #333;
            font-weight: bold;
            letter-spacing: 1px;
            margin-bottom: 20px;
        }

        .content {
            padding: 0 10px;
        }

        .section {
            margin-bottom: 25px;
        }

        label {
            display: inline-block; /* Align labels next to radio buttons */
            font-size: 1.2em;
            margin-bottom: 12px;
            color: #555;
        }

        select, input[type="number"], input[type="radio"] {
            padding: 12px;
            width: 100%;
            font-size: 1em;
            border-radius: 8px;
            border: 1px solid #ddd;
            margin-top: 8px;
            background-color: #f9f9f9;
            transition: all 0.3s ease;
        }

        select:focus, input[type="number"]:focus, input[type="radio"]:focus {
            border-color: #007bff;
            outline: none;
        }

        input[type="radio"] {
            width: auto;
            margin-right: 10px;
            vertical-align: middle; /* Align radio buttons with labels */
        }

        button {
            padding: 14px 24px;
            background-color: #28a745;
            color: white;
            font-size: 1.1em;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            width: 100%;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #218838;
        }

        .message {
            font-size: 1.4em;
            color: #dc3545;
            font-weight: bold;
            text-align: center;
            margin-top: 30px;
        }
    </style>
</head>
<body>

    <div class="container">
        <header>
            <h1>Rodízio de Placas</h1>
        </header>

        <div class="content">
            <div class="section">
                <label for="diaSemana">Dia da semana:</label>
                <select id="diaSemana">
                    <option value="segunda">Segunda-feira</option>
                    <option value="terça">Terça-feira</option>
                    <option value="quarta">Quarta-feira</option>
                    <option value="quinta">Quinta-feira</option>
                    <option value="sexta">Sexta-feira</option>
                </select>
            </div>

            <div class="section">
                <label for="finalPlaca">Final da Placa (1 a 9, 0):</label>
                <input type="number" id="finalPlaca" min="0" max="9" step="1">
            </div>

            <button onclick="verificarRestricoes()">Verificar</button>
            <p></p>
            <div id="opcaoRestricao" class="section" style="display: none;">
                <label>Você passará por uma área restrita (área vermelha ou via limítrofe)?</label>
                <div>
                    <input type="radio" id="areaVermelha" name="opcaoRestricao" value="áreaVermelha"> 
                    <label for="areaVermelha">Área Vermelha</label>
                </div>
                <div>
                    <input type="radio" id="viaLimitrofe" name="opcaoRestricao" value="viaLimítrofe"> 
                    <label for="viaLimitrofe">Via Limítrofe</label>
                </div>
                <div>
                    <input type="radio" id="viaLimitrofe" name="opcaoRestricao" value="nao"> 
                    <label for="nao">Não</label>
                </div>
                <button onclick="verificarOpcaoRestricao()">Continuar</button>
            </div>

            <div id="tipoVeiculo" class="section" style="display: none;">
                <label for="tipo">Você dirige caminhão ou automóvel na via limítrofe?</label>
                <div>
                    <input type="radio" id="caminhao" name="tipoVeiculo" value="caminhão">
                    <label for="caminhao">Caminhão</label>
                </div>
                <div>
                    <input type="radio" id="automovel" name="tipoVeiculo" value="automóvel">
                    <label for="automovel">Automóvel</label>
                </div>
                <button onclick="verificarTipoVeiculo()">Verificar</button>
            </div>

            <div id="mensagem" class="message"></div>
        </div>
    </div>

    <script>
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
            } else if (opcao === "nao") {
                document.getElementById("mensagem").textContent = "Pode circular. Tenha uma boa viagem!";
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
    </script>

</body>
</html>
