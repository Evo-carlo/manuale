fetch("dati.json")
  .then(response => response.json())
  .then(data => {
    const menu = document.getElementById("menu");
    const contenuto = document.getElementById("contenuto");

    data.capitoli.forEach((capitolo, index) => {
      const btn = document.createElement("button");
      btn.textContent = capitolo.titolo;

      btn.onclick = () => {
        contenuto.innerHTML = `<h2>${capitolo.titolo}</h2><p>${capitolo.testo}</p>`;
      };

      menu.appendChild(btn);

      // mostra il primo capitolo all'avvio
      if (index === 0) btn.click();
    });
  });
