const cheerio = require("cheerio")
const axios = require("axios")
const puppeteer = require("puppeteer")

const url = "https://www.afatv.pt/aominuto"
const gameSelector = ".linhaLista"

const results = []
/* 
    { 
        team1: {
            fullName: "",
            shortName: ""
        },
        team2 : {
            fullName: "",
            shortName: "",
        },
        result: "",
        status: "" // TODO
    }
*/


async function getLiveScores() {
    try{
        const browser = await puppeteer.launch()

        const page = await browser.newPage()
        await page.goto(url)

        const pageData = await page.evaluate(() => {
            return document.documentElement.innerHTML
        })
        scrapeResults(pageData)
        await browser.close()
    } catch(error){
        console.error(error)
    }
}

function scrapeResults(html) {
    const $ = cheerio.load(html)
    $('.linhaLista').each((index, element) => {
        const gameSelector = $(element).find(".golosAoMinutoNomeEquipa")
        const team1 = {
            fullName: $(gameSelector[0]).text(),
            shortName: $(gameSelector[1]).text()
        }
        const team2 = {
            fullName: $(gameSelector[2]).text(),
            shortName: $(gameSelector[3]).text()
        }

        const resultSelector = $(element).find(".resultadoCalendario")
        const result = `${$(resultSelector[0]).text()}-${$(resultSelector[1]).text()}`

        const statusSelector = $(element).find(".resultadoGoloAoMinuto").find("div[class*='estado']")
        const status = $(statusSelector).text()

        results.push({team1: team1, team2: team2, result: result, status: status})
    })

    console.debug(results)
}

getLiveScores()