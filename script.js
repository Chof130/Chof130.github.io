function simular() {
    const credito = Number(
        document.getElementById("credito").value
    );

    const prazo = Number(
        document.getElementById("prazo").value
    );

    const taxa = Number(
        document.getElementById("taxa").value
    );

    const reserva = Number(
        document.getElementById("reserva").value
    );

    const segmento = document.getElementById("segmento").value;

    if (
        !Number.isFinite(credito) ||
        !Number.isFinite(prazo) ||
        !Number.isFinite(taxa) ||
        !Number.isFinite(reserva) ||
        credito <= 0 || prazo <= 0 ||
        taxa < 0 || reserva < 0
    ) {
        alert("Confira os valores informados.");
        return;
    }

    // Estimativa simplificada, não é cálculo oficial.
    const total = credito * (1 + (taxa + reserva) / 100);
    const parcela = total / prazo;

    const moeda = valor =>
        valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

    document.getElementById("parcela").textContent =
        moeda(parcela);

    document.getElementById("detalhes").textContent =
        `Crédito: ${moeda(credito)} | ` +
        `Prazo: ${prazo} meses | Segmento: ${segmento}`;

    document.getElementById("resultado").style.display =
        "block";

    document.getElementById("resultado").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    const mensagem =
        `Olá, Maycon! Fiz uma simulação no seu site.\n\n` +
        `Objetivo: ${segmento}\n` +
        `Crédito desejado: ${moeda(credito)}\n` +
        `Prazo: ${prazo} meses\n` +
        `Parcela estimada: ${moeda(parcela)}\n\n` +
        `Gostaria de receber uma proposta oficial.`;

    const whatsapp = "5595981294876";

    const link =
        `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensagem)}`;

    const botao = document.createElement("a");
    botao.href = link;
    botao.target = "_blank";
    botao.rel = "noopener noreferrer";
    botao.className = "btn";
    botao.textContent = "SOLICITAR PROPOSTA NO WHATSAPP";
    botao.style.marginTop = "20px";

    const resultado = document.getElementById("resultado");

    const antigo = resultado.querySelector(".solicitar");
    if (antigo) antigo.remove();

    botao.classList.add("solicitar");
    resultado.appendChild(botao);
}