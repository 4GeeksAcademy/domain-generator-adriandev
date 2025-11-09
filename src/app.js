import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let pronombres = ['my', 'your', 'the'];
  let adjetivos = ['fast', 'code', 'web', 'new'];
  let sustantivos = ['studio', 'folio', 'scripter', 'cables', 'intern'];
  let extensiones = ['.com', '.io', '.er', '.es', '.net'];
  let dominiosGenerados = [];

  pronombres.forEach((pronombre) => {
    adjetivos.forEach((adjetivo) => {
      sustantivos.forEach((sustantivo) => {
        let nombreDeDominios = pronombre + adjetivo + sustantivo;
        extensiones.forEach((extension) => {
          let hack = extension.slice(1);
          if (sustantivo.endsWith(hack)) {
            let raiz = sustantivo.slice(0, -hack.length);
            dominiosGenerados.push(pronombre + adjetivo + raiz + extension);
          } else {
            let nombreDominiosConExtension = nombreDeDominios + extension;
            dominiosGenerados.push(nombreDominiosConExtension);
          }
        });
      });
    });
  });

  let contenedor = document.getElementById("lista-dominios");
  contenedor.innerHTML = dominiosGenerados.join("<br>");
};


