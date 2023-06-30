




function weather() {
  let city = document.getElementById("weather").value;

  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ae1cd46734msh5eedce6a817fec9p1e5048jsnb09ca729c2af",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      let h2_0 = document.getElementsByClassName("h2-0")[0];
      let h2_1 = document.getElementsByClassName("h2-1")[0];
      let h2_2 = document.getElementsByClassName("h2-2")[0];
      h2_0.innerHTML = `Normal temp :${data.temp} <br> Max temp: ${data.max_temp}<br> Min temp : ${data.min_temp} `;
      h2_1.innerHTML = `Cloud pct: ${data.cloud_pct} <br> Feel like: ${data.feels_like}<br> Humdity :${data.humidity}`;
      h2_2.innerHTML=`Wind Speed : ${data.wind_speed} <br> Wind Degrees: ${data.wind_degrees}<br> Sunrise  : ${data.sunrise} <br> Sunset : ${data.sunset}`
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
