import React, { useState, useEffect } from 'react';

function Weather() {
  const [country, setCountry] = useState('IN'); // Default country set to India
  const [city, setCity] = useState('Kolkata'); // Default city set to Kolkata
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = () => {
    setLoading(true);
    const key = 'c3e393a3cee86eed0b52d624960a62a1'; // Replace with your actual API key
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=en&units=metric&appid=${key}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&lang=en&units=metric&appid=${key}`;

    Promise.all([
      fetch(weatherUrl).then(response => response.json()),
      fetch(forecastUrl).then(response => response.json())
    ])
    .then(([weatherData, forecastData]) => {
      if (weatherData.cod === 200) {
        setWeatherData(weatherData);
        setError(null); // Clear error message if successful
        document.body.style.backgroundImage = `url('https://source.unsplash.com/random/?weather')`;
      } else {
        setError('Wrong city name. Please enter a valid city.');
        setWeatherData(null);
        setForecastData(null);
      }

      if (forecastData.cod === "200") {
        setForecastData(forecastData);
      } else {
        setError('Unable to fetch forecast data');
      }
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchWeather(); // Fetch weather data when the component mounts
  }, []);

  if (loading) return <div className="flex items-center justify-center min-h-screen text-white"><p>Loading...</p></div>;

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://wallpaperbat.com/img/250886-sunny-day-wallpaper.jpg')` }}>
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-black bg-opacity-50">
        <div className="mb-8 mt-20 flex space-x-4">
          <input
            type="text"
            className="h-12 w-60 px-4 text-lg border-none outline-none rounded-lg bg-white text-black"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            type="text"
            className="h-12 w-60 px-4 text-lg border-none outline-none rounded-lg bg-white text-black"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="h-12 w-24 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700"
            onClick={fetchWeather}
          >
            Go
          </button>
        </div>
        {error && (
          <div className="mb-8 text-red-500 text-xl">{error}</div>
        )}
        <div className="flex flex-col lg:flex-row w-full max-w-screen-lg gap-8">
          {weatherData && (
            <div className=" bg-opacity-70 p-6 rounded-lg shadow-lg text-white text-center w-full lg:w-1/2">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt={weatherData.weather[0].description}
                className="w-24 mx-auto mb-4"
              />
              <h1 className="text-3xl font-bold mb-2">{weatherData.name}, {weatherData.sys.country}</h1>
              <h2 className="text-5xl font-bold mb-2">{weatherData.main.temp}°C</h2>
              <p className="text-xl mb-4 capitalize">{weatherData.weather[0].description}</p>
              <ul className="text-lg space-y-2">
                <li>Feels Like: {weatherData.main.feels_like}°C</li>
                <li>Humidity: {weatherData.main.humidity}%</li>
                <li>Wind Speed: {weatherData.wind.speed} m/s</li>
                <li>Pressure: {weatherData.main.pressure} hPa</li>
                <li>Visibility: {weatherData.visibility / 1000} km</li>
                <li>Latitude: {weatherData.coord.lat}</li>
                <li>Longitude: {weatherData.coord.lon}</li>
              </ul>
            </div>
          )}
          {forecastData && (
            <div className="bg-opacity-70 p-6 rounded-lg shadow-lg text-white text-center w-full lg:w-1/2">
              <h2 className="text-2xl font-bold mb-4">4-Day Forecast</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {forecastData.list.filter((_, index) => index % 8 === 0).slice(0, 4).map((item) => (
                  <div key={item.dt} className="bg-blue-400 p-4 rounded-lg shadow-md text-center">
                    <img
                      src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                      alt={item.weather[0].description}
                      className="w-16 mx-auto mb-2"
                    />
                    <p className="text-lg font-bold mb-1">{new Date(item.dt * 1000).toLocaleDateString()}</p>
                    <p className="text-xl mb-1">{item.main.temp}°C</p>
                    <p className="text-sm capitalize">{item.weather[0].description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Weather;
