# Webs educatives

## Comprén

[Obrir Comprén](https://lluchvalencia.github.io/webs-educatives/compren/)

Versió de Comprén per a GitHub Pages, basada en el site original i ampliada amb lectures i orientacions de progrés.

- Prova diagnòstica amb tres textos i 24 preguntes.
- Banc de 44 lectures i 352 preguntes autocorrectives.
- Sis nivells interns i recomanacions segons quatre habilitats lectores.
- Segon intent amb pistes en la pràctica.
- Biblioteca amb cerca i filtres.
- Progrés guardat al navegador de cada alumne. No es transfereix automàticament des del site original ni se sincronitza entre dispositius.
- La pestanya docent s’ha eliminat: esta versió està pensada per a l’alumnat.

Autoria: Àlex Lluch.

## Fitxers i comprovació

La carpeta `compren/` conté el web estàtic, sense dependències de Sites ni serveis externs. Els fitxers inclouen el banc original i l’ampliació de lectures. Es publica des de la branca `main`, amb GitHub Pages.

Per a comprovar el banc:

```sh
cd compren
node audit.mjs
node --check app.js
node --check bank.js
node --check supplement.js
```

Per a provar-lo localment, des de l’arrel del repositori:

```sh
python3 -m http.server 8000
```

Obri `http://localhost:8000/compren/`. Per a afegir lectures, edita `compren/supplement.js` i executa les comprovacions.
