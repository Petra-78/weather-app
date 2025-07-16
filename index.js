
//LOGIC
async function getData() {
    let apiUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/velence,hungary/today?key=5B78CX4HYG46A9BQQEVDXMA6M&include=current&elements=datetime,tempmax,tempmin,temp,humidity,windspeed'
    try {
        const responde = await fetch(apiUrl)
        const json = await responde.json()

        const currentConditions = await json.currentConditions
        const dailyData = await json.days

        const tempmin = await dailyData[0].tempmin
        const tempmax = await dailyData[0].tempmax

        const temp = await currentConditions.temp
        const humidity = await currentConditions.humidity
        const windspeed = await currentConditions.windspeed

        logData(temp, tempmin, tempmax, humidity)
        changeDom(temp, tempmin, tempmax, humidity, windspeed)
        
    }
    catch (err) {
        console.log(err)
    }
}

const checkWeather = (function(currentLocation) {
    currentLocation = search.value
    apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${currentLocation}/today?key=5B78CX4HYG46A9BQQEVDXMA6M&include=current&elements=datetime,tempmax,tempmin,temp,humidity,windspeed`
    getData()

    return {currentLocation}
})()

function logData(temp, tempmin, tempmax, humidity) {
    console.log(`current weather is: ${temp}, min/max: ${tempmin}/${tempmax}, humidity is ${humidity}%`)
}

const search = document.querySelector("input")
const btn = document.querySelector("button")
