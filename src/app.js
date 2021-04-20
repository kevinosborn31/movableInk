import { convertDate, geoLocation, forecast } from "./utils";

  geoLocation('90210')
  .then((result) => { 
    document.getElementById("cityName").innerHTML = result.city;
    return forecast(result.latitude, result.longitude, '01/24/2020');
  }).then((result) => { 
    // TODO: Iterate through HTML elements and assign appropriate forecast data for improved scalability
    // TODO: Store these as variables to improve readability
    document.getElementById("weeklySummary").innerHTML = result.daily.summary;
    // TODO: Images not working for some reason, need to debug
    document.getElementById("todayImage").src = "img/" + result.daily.data[0].icon + ".png";
    document.getElementById("todaySummary").innerHTML = result.daily.data[0].summary;
    // TODO: Round temperatures to whole number
    document.getElementById("todayHigh").innerHTML = result.daily.data[0].temperatureHigh;
    document.getElementById("todayLow").innerHTML = result.daily.data[0].temperatureLow;
    document.getElementById("tomorrowImage").src = "img/" + result.daily.data[1].icon + ".png";
    document.getElementById("tomorrowSummary").innerHTML = result.daily.data[1].summary;
    document.getElementById("tomorrowHigh").innerHTML = result.daily.data[1].temperatureHigh;
    document.getElementById("tomorrowLow").innerHTML = result.daily.data[1].temperatureLow;
  });

