"use client";

import { useState } from "react";

export default function DonationBox() {
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);

  function handleDonate() {
    if (!selectedAmount) {
      alert("Por favor, selecione um valor para doar.");
      return;
    }

    if (selectedAmount === "other") {
      const custom = prompt("Digite o valor da doação:");
      if (custom && !isNaN(Number(custom))) {
        alert(`Obrigado pela sua doação de R$ ${custom}!`);
      }
    } else {
      alert(`Obrigado pela sua doação de R$ ${selectedAmount}!`);
    }
  }

  return (
    <aside className="donation-box">
      <h3>Você merece uma explicação.</h3>
      <h4>Um update importante para os leitores no Brasil.</h4>

      <p>
        Por favor, não ignore esta mensagem. Hoje, pedimos que você apoie a independência da Wikipédia. A maioria das pessoas doa porque a Wikipédia é útil. Se a Wikipédia lhe deu R$15 de valor este ano, por favor, reserve um minuto para nos ajudar.
      </p>
      <p>
        Agradecemos aos 2% de leitores que doam. Agradecemos a você.
      </p>

      <p className="donation-question">
        <strong>Quanto você gostaria de doar hoje?</strong>
      </p>

      <div className="donation-amounts">
        {["15", "20", "30", "50", "100", "other"].map(value => (
          <button
            key={value}
            className={`amount-btn ${
              selectedAmount === value ? "selected" : ""
            }`}
            onClick={() => setSelectedAmount(value)}
          >
            {value === "other" ? "Outro" : `R$ ${value}`}
          </button>
        ))}
      </div>

      <button className="donate-btn-main" onClick={handleDonate}>
        Doe agora
      </button>
    </aside>
  );
}
