 
 function getWeather() {

    const cityName = document.getElementById("cityName").value

    axios.get(`api.openweathermap.org/data/2.5/weather?q=karachi&appid=868afe26aed87b569635801db9004f4a
    `)

        .then(function (response) {
            console.log(response);
            console.log(response.data.main.temp);

            document.getElementById("result").innerText = response.data.main.temp;
        })
}