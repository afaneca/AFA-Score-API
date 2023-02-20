# AFA Score API
Publicly available rest API that extracts live data directly from [AFA TV](https://www.afatv.pt/aominuto)'s website.
Built with Node.JS (TypeScript + Express).


## Endpoints

### GET - [/api/v1/matches](https://afascore.afaneca.com/api/v1/matches)
Returns live scoreboard data extracted directly from [AFA TV](https://www.afatv.pt/aominuto)'s website
````json
[
   {
      "id":"1",
      "team1":{
         "fullName":"AD Ovarense",
         "shortName":"ADO",
         "logoUrl":"https://www.afatv.pt/img/equipas/ovarense_futebol.png"
      },
      "team2":{
         "fullName":"Fiães SC",
         "shortName":"FSC",
         "logoUrl":"https://www.afatv.pt/img/equipas/fiaes.png"
      },
      "scoreboard":{
         "team1Score":"0",
         "team2Score":"0"
      },
      "status":"NOT_STARTED",
      "startTime":"15:00",
      "startDate":"2023-02-18"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Lisboa",
         "shortName":"AFL",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_lisboa.png"
      },
      "team2":{
         "fullName":"AF Porto",
         "shortName":"AFP",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_porto.png"
      },
      "scoreboard":{
         "team1Score":"0",
         "team2Score":"0"
      },
      "status":"NOT_STARTED",
      "startTime":"10:00",
      "startDate":"2023-02-18"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Setúbal",
         "shortName":"AFS",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_setubal.png"
      },
      "team2":{
         "fullName":"AF Leiria",
         "shortName":"AFL",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_leiria.png"
      },
      "scoreboard":{
         "team1Score":"0",
         "team2Score":"0"
      },
      "status":"NOT_STARTED",
      "startTime":"10:00",
      "startDate":"2023-02-18"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Madeira",
         "shortName":"AFM",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_madeira.png"
      },
      "team2":{
         "fullName":"AF Ponta Delgada",
         "shortName":"AFPD",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_ponta_delgada.png"
      },
      "scoreboard":{
         "team1Score":"0",
         "team2Score":"0"
      },
      "status":"NOT_STARTED",
      "startTime":"10:00",
      "startDate":"2023-02-18"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Braga",
         "shortName":"AFB",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_braga.png"
      },
      "team2":{
         "fullName":"AF Viseu",
         "shortName":"AFV",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_viseu.png"
      },
      "scoreboard":{
         "team1Score":"0",
         "team2Score":"0"
      },
      "status":"NOT_STARTED",
      "startTime":"12:15",
      "startDate":"2023-02-18"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Santarém",
         "shortName":"AFS",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_santarem.png"
      },
      "team2":{
         "fullName":"AF Évora",
         "shortName":"AFE",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_evora.png"
      },
      "scoreboard":{
         "team1Score":"0",
         "team2Score":"0"
      },
      "status":"NOT_STARTED",
      "startTime":"12:15",
      "startDate":"2023-02-18"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Bragança",
         "shortName":"AFB",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_braganca.png"
      },
      "team2":{
         "fullName":"AF Horta",
         "shortName":"AFH",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_horta.png"
      },
      "scoreboard":{
         "team1Score":"0",
         "team2Score":"0"
      },
      "status":"NOT_STARTED",
      "startTime":"12:15",
      "startDate":"2023-02-18"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Aveiro",
         "shortName":"AFA",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_aveiro_vector.png"
      },
      "team2":{
         "fullName":"AF Coimbra",
         "shortName":"AFC",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_coimbra.png"
      },
      "scoreboard":{
         "team1Score":"0",
         "team2Score":"0"
      },
      "status":"ONGOING",
      "startTime":"14:30",
      "startDate":"2023-02-18"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Algarve",
         "shortName":"AFA",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_algarve_v2.png"
      },
      "team2":{
         "fullName":"AF Castelo Branco",
         "shortName":"AFCB",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_castelo_branco.png"
      },
      "scoreboard":{
         "team1Score":"0",
         "team2Score":"0"
      },
      "status":"NOT_STARTED",
      "startTime":"14:30",
      "startDate":"2023-02-18"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Beja",
         "shortName":"AFB",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_beja.png"
      },
      "team2":{
         "fullName":"AF Vila Real",
         "shortName":"AFVR",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_vila_real.png"
      },
      "scoreboard":{
         "team1Score":"0",
         "team2Score":"0"
      },
      "status":"NOT_STARTED",
      "startTime":"14:30",
      "startDate":"2023-02-18"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Angra Heroísmo",
         "shortName":"AFAH",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_angra_heroismo.png"
      },
      "team2":{
         "fullName":"AF Portalegre",
         "shortName":"AFP",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_portalegre.png"
      },
      "scoreboard":{
         "team1Score":"0",
         "team2Score":"0"
      },
      "status":"NOT_STARTED",
      "startTime":"16:45",
      "startDate":"2023-02-18"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Guarda",
         "shortName":"AFG",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_guarda.png"
      },
      "team2":{
         "fullName":"AF Viana do Castelo",
         "shortName":"AFVC",
         "logoUrl":"https://www.afatv.pt/img/equipas/af_v_castelo.png"
      },
      "scoreboard":{
         "team1Score":"0",
         "team2Score":"0"
      },
      "status":"NOT_STARTED",
      "startTime":"16:45",
      "startDate":"2023-02-18"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AD Nogueira Regedoura",
         "shortName":"ADNR",
         "logoUrl":"https://www.afatv.pt/img/equipas/nogueira_da_regedoura.png"
      },
      "team2":{
         "fullName":"SC Esmoriz",
         "shortName":"SCE",
         "logoUrl":"https://www.afatv.pt/img/equipas/esmoriz.png"
      },
      "scoreboard":{
         "team1Score":"0",
         "team2Score":"0"
      },
      "status":"NOT_STARTED",
      "startTime":"15:00",
      "startDate":"2023-02-18"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AR Aguinense",
         "shortName":"ARA",
         "logoUrl":"https://www.afatv.pt/img/equipas/aguinense.png"
      },
      "team2":{
         "fullName":"GD Mealhada",
         "shortName":"GDM",
         "logoUrl":"https://www.afatv.pt/img/equipas/gdmealhada.png"
      },
      "scoreboard":{
         "team1Score":"0",
         "team2Score":"0"
      },
      "status":"NOT_STARTED",
      "startTime":"15:00",
      "startDate":"2023-02-18"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"SC Bustelo",
         "shortName":"SCB",
         "logoUrl":"https://www.afatv.pt/img/equipas/bustelo.png"
      },
      "team2":{
         "fullName":"CCR Válega",
         "shortName":"CCRV",
         "logoUrl":"https://www.afatv.pt/img/equipas/valega.png"
      },
      "scoreboard":{
         "team1Score":"0",
         "team2Score":"0"
      },
      "status":"NOT_STARTED",
      "startTime":"15:00",
      "startDate":"2023-02-18"
   }
]
````

## Includes API Server utilities:

* [morgan](https://www.npmjs.com/package/morgan)
  * HTTP request logger middleware for node.js
* [helmet](https://www.npmjs.com/package/helmet)
  * Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
* [dotenv](https://www.npmjs.com/package/dotenv)
  * Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
* [cors](https://www.npmjs.com/package/cors)
  * CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
* [puppeteer](https://www.npmjs.com/package/puppeteer)
  * Puppeteer is a Node.js library which provides a high-level API to control Chrome/Chromium over the DevTools Protocol. 

## Development utilities:

* [typescript](https://www.npmjs.com/package/typescript)
  * TypeScript is a language for application-scale JavaScript.
* [ts-node](https://www.npmjs.com/package/ts-node)
  * TypeScript execution and REPL for node.js, with source map and native ESM support.
* [nodemon](https://www.npmjs.com/package/nodemon)
  * nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [eslint](https://www.npmjs.com/package/eslint)
  * ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
* [typescript-eslint](https://typescript-eslint.io/)
  * Tooling which enables ESLint to support TypeScript.
* [jest](https://www.npmjs.com/package/mocha)
  * Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
* [supertest](https://www.npmjs.com/package/supertest)
  * HTTP assertions made easy via superagent.

## Setup

```
npm install
```

### Lint

```
npm run lint
```

### Test

```
npm run test
```

### Development

```
npm run dev
```
