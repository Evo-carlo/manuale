fetch("dati.json")
  .then(response => response.json())
  .then(data => {
    const menu = document.getElementById("menu");
    const contenuto = document.getElementById("contenuto");

    data.capitoli.forEach((capitolo, index) => {
      const btn = document.createElement("button");
      btn.textContent = capitolo.titolo;

      btn.onclick = () => {
        let html = `<h2>${capitolo.titolo}</h2>`;

        if (capitolo.sezioni) {
          capitolo.sezioni.forEach(sezione => {
            html += `<h3>${sezione.titolo}</h3>`;
            html += `<p>${sezione.testo}</p>`;
          });
        } else {
          html += `<p>${capitolo.testo}</p>`;
        }

        contenuto.innerHTML = html;
      };

      menu.appendChild(btn);

      if (index === 0) btn.click();
    });
  });
