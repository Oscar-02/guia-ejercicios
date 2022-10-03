var url = 'https://api.openweathermap.org/data/2.5/forecast?id=3584257&appid=ec758be434c3b9da7a47264f723bc5a6&units=metric';
var city, minTemp, maxTemp;
var days = new Array(5);
var temps = new Int16Array(5);


fetch(url)
.then (response => {
    return response.json();
})
.then (json => {
    city = json["city"]["name"];
    days[0] = getDate(json["list"][4]["dt_txt"]);
    days[1] = getDate(json["list"][12]["dt_txt"]);
    days[2] = getDate(json["list"][20]["dt_txt"]);
    days[3] = getDate(json["list"][28]["dt_txt"]);
    days[4] = getDate(json["list"][36]["dt_txt"]);
    temps[0] = json["list"][4]["main"]["temp"];
    temps[1] = json["list"][12]["main"]["temp"];
    temps[2] = json["list"][20]["main"]["temp"];
    temps[3] = json["list"][28]["main"]["temp"];
    temps[4] = json["list"][36]["main"]["temp"];

    var varDay = "day", varTemp = "temp";
    for (i = 1; i < 6; i++){
        document.getElementById(varDay + i).textContent = getDateString(days[i-1]);
        document.getElementById(varTemp + i).textContent = temps[i-1].toString() + "℃";
    }
    document.getElementById("minValue").textContent = Math.min.apply(Math, temps) + "℃";
    document.getElementById("maxValue").textContent = Math.max.apply(Math, temps) + "℃";
})

function getDate (dateString){
    var date = new Date(dateString);
    return date;
}

function getDateString (date){
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return day + "-" + month + "-" + year;
}