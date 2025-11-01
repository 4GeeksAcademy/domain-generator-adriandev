import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  let pronoun = ['my', 'your', 'the'];
  let adj = ['fast', 'code', 'web', 'new'];
  let noun = ['studio', 'folio', 'scripter', 'cables', 'intern'];
  let extensions = ['.com', '.io', '.er', '.es', '.net'];

  let dominiosGenerados = [];

  pronoun.forEach((pron) => {
    adj.forEach((adj) => {
      noun.forEach((noun) => {
        
        let nombreDeDominios = pron + adj + noun;

        extensions.forEach((ext) => {
          
          let hack = ext.slice(1);
          
          if (noun.endsWith(hack)) {
            let raiz = noun.slice(0, -hack.length);
            
            dominiosGenerados.push(pron + adj + raiz + ext);

          } else {
            let nombreDominiosConExt = nombreDeDominios + ext;

            dominiosGenerados.push(nombreDominiosConExt);
          }
        });
      });
    });
  });

  let contenedor = document.getElementById("lista-dominios");

  contenedor.innerHTML = dominiosGenerados.join("<br>");
};

