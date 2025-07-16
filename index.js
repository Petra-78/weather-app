const currentDate = new Date();
let hour = currentDate.getHours();

//LOGIC
const apiUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/velence,hungary/today?key=5B78CX4HYG46A9BQQEVDXMA6M&include=current&elements=datetime,tempmax,tempmin,temp,humidity,windspeed'