# Webs educatives

## Comprén

[Obrir Comprén](https://lluchvalencia.github.io/webs-educatives/compren/)

Còpia de la versió 3 del site Comprén, de 3 d’octubre de 2026, per a GitHub Pages. Conserva el disseny, els textos i el funcionament de la versió original.

- Prova diagnòstica amb tres textos i 24 preguntes.
- Banc de 40 lectures i 320 preguntes autocorrectives.
- Sis nivells interns i recomanacions segons quatre habilitats lectores.
- Segon intent amb pistes en la pràctica.
- Biblioteca amb cerca i filtres.
- Progrés guardat al navegador de cada alumne. No es transfereix automàticament des del site original ni se sincronitza entre dispositius.
- Panell docent de demostració; no conté dades reals d’alumnat.

Autoria: Àlex Lluch.

## Fitxers i comprovació

La carpeta `compren/` conté el web estàtic, sense dependències de Sites ni serveis externs. Els quatre fitxers del web són idèntics als de la versió original. Es publica des de la branca `main`, amb GitHub Pages.

Per a comprovar el banc:

```sh
cd compren
node audit.mjs
node --check app.js
node --check bank.js
```

Per a provar-lo localment, des de l’arrel del repositori:

```sh
python3 -m http.server 8000
```

Obri `http://localhost:8000/compren/`. Per a afegir lectures, edita `compren/bank.js` i executa les comprovacions.
