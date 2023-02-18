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
         "shortName":"ADO"
      },
      "team2":{
         "fullName":"Fiães SC",
         "shortName":"FSC"
      },
      "status":"NOT_STARTED",
      "startTime":"15:00",
      "competition":"Campeonato SABSEG - 2ª Fase",
      "startDate":"Hoje"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Lisboa",
         "shortName":"AFL"
      },
      "team2":{
         "fullName":"AF Porto",
         "shortName":"AFP"
      },
      "status":"NOT_STARTED",
      "startTime":"10:00",
      "competition":"Torneio Interassociações de Futsal Sub-15 2023",
      "startDate":"Hoje"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Setúbal",
         "shortName":"AFS"
      },
      "team2":{
         "fullName":"AF Leiria",
         "shortName":"AFL"
      },
      "status":"NOT_STARTED",
      "startTime":"10:00",
      "competition":"Torneio Interassociações de Futsal Sub-15 2023",
      "startDate":"Hoje"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Madeira",
         "shortName":"AFM"
      },
      "team2":{
         "fullName":"AF Ponta Delgada",
         "shortName":"AFPD"
      },
      "status":"NOT_STARTED",
      "startTime":"10:00",
      "competition":"Torneio Interassociações de Futsal Sub-15 2023",
      "startDate":"Hoje"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Braga",
         "shortName":"AFB"
      },
      "team2":{
         "fullName":"AF Viseu",
         "shortName":"AFV"
      },
      "status":"NOT_STARTED",
      "startTime":"12:15",
      "competition":"Torneio Interassociações de Futsal Sub-15 2023",
      "startDate":"Hoje"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Santarém",
         "shortName":"AFS"
      },
      "team2":{
         "fullName":"AF Évora",
         "shortName":"AFE"
      },
      "status":"NOT_STARTED",
      "startTime":"12:15",
      "competition":"Torneio Interassociações de Futsal Sub-15 2023",
      "startDate":"Hoje"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Bragança",
         "shortName":"AFB"
      },
      "team2":{
         "fullName":"AF Horta",
         "shortName":"AFH"
      },
      "status":"NOT_STARTED",
      "startTime":"12:15",
      "competition":"Torneio Interassociações de Futsal Sub-15 2023",
      "startDate":"Hoje"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Aveiro",
         "shortName":"AFA"
      },
      "team2":{
         "fullName":"AF Coimbra",
         "shortName":"AFC"
      },
      "status":"NOT_STARTED",
      "startTime":"EM DIRETO14:30",
      "competition":"Torneio Interassociações de Futsal Sub-15 2023",
      "startDate":"Hoje"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Algarve",
         "shortName":"AFA"
      },
      "team2":{
         "fullName":"AF Castelo Branco",
         "shortName":"AFCB"
      },
      "status":"NOT_STARTED",
      "startTime":"14:30",
      "competition":"Torneio Interassociações de Futsal Sub-15 2023",
      "startDate":"Hoje"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Beja",
         "shortName":"AFB"
      },
      "team2":{
         "fullName":"AF Vila Real",
         "shortName":"AFVR"
      },
      "status":"NOT_STARTED",
      "startTime":"14:30",
      "competition":"Torneio Interassociações de Futsal Sub-15 2023",
      "startDate":"Hoje"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Angra Heroísmo",
         "shortName":"AFAH"
      },
      "team2":{
         "fullName":"AF Portalegre",
         "shortName":"AFP"
      },
      "status":"NOT_STARTED",
      "startTime":"16:45",
      "competition":"Torneio Interassociações de Futsal Sub-15 2023",
      "startDate":"Hoje"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AF Guarda",
         "shortName":"AFG"
      },
      "team2":{
         "fullName":"AF Viana do Castelo",
         "shortName":"AFVC"
      },
      "status":"NOT_STARTED",
      "startTime":"16:45",
      "competition":"Torneio Interassociações de Futsal Sub-15 2023",
      "startDate":"Hoje"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AD Nogueira Regedoura",
         "shortName":"ADNR"
      },
      "team2":{
         "fullName":"SC Esmoriz",
         "shortName":"SCE"
      },
      "status":"NOT_STARTED",
      "startTime":"15:00",
      "competition":"1.ª Divisão Distrital",
      "startDate":"Hoje"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"AR Aguinense",
         "shortName":"ARA"
      },
      "team2":{
         "fullName":"GD Mealhada",
         "shortName":"GDM"
      },
      "status":"NOT_STARTED",
      "startTime":"15:00",
      "competition":"1.ª Divisão Distrital",
      "startDate":"Hoje"
   },
   {
      "id":"1",
      "team1":{
         "fullName":"SC Bustelo",
         "shortName":"SCB"
      },
      "team2":{
         "fullName":"CCR Válega",
         "shortName":"CCRV"
      },
      "status":"NOT_STARTED",
      "startTime":"15:00",
      "competition":"1.ª Divisão Distrital",
      "startDate":"Hoje"
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
