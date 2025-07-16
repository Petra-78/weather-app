import { changeDom, search } from "./DOM.js"

//LOGIC
let apiUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/velence,hungary/today?key=5B78CX4HYG46A9BQQEVDXMA6M&unitGroup=metric&iconSet=icons2&include=current&elements=datetime,tempmax,tempmin,temp,humidity,windspeed,icon'
async function getData() {
    try {
        const responde = await fetch(apiUrl)
        const json = await responde.json()

        const currentConditions = await json.currentConditions
        const dailyData = await json.days

        const tempmin = await dailyData[0].tempmin
        const tempmax = await dailyData[0].tempmax

        const adress = await json.resolvedAddress
        const temp = await currentConditions.temp
        const humidity = await currentConditions.humidity
        const windspeed = await currentConditions.windspeed
        const icon = await currentConditions.icon

        changeDom(adress, temp, tempmin, tempmax, humidity, windspeed, icon)
        
    }
    catch (err) {
        console.log(err)
    }
}

getData()

function checkWeather(currentLocation) {
    currentLocation = search.value
    apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${currentLocation}/today?key=5B78CX4HYG46A9BQQEVDXMA6M&unitGroup=metric&iconSet=icons2&include=current&elements=datetime,tempmax,tempmin,temp,humidity,windspeed,icon`
    getData()
}

export { checkWeather, getData }