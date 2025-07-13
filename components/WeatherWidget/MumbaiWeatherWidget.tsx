import React, { useEffect, useState } from 'react';
import WeatherWidget from './WeatherWidget';

const MUMBAI_COORDS = {
  latitude: 19.0760,
  longitude: 72.8777,
};

function getWeatherIcon(weatherCode: number): string {
  // Simple mapping based on Open-Meteo weather codes
  if (weatherCode >= 0 && weatherCode <= 3) return '/assets/icons/widget/sun.svg'; // Clear/Sunny
  if (weatherCode >= 45 && weatherCode <= 48) return '/assets/icons/widget/cloud.svg'; // Fog
  if (weatherCode >= 51 && weatherCode <= 67) return '/assets/icons/widget/drizzle.svg';
  if (weatherCode >= 71 && weatherCode <= 77) return '/assets/icons/widget/snow.svg';
  if (weatherCode >= 80 && weatherCode <= 99) return '/assets/icons/widget/rain.svg';
  return '/assets/icons/widget/cloud.svg';
}

const MumbaiWeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<{
    temperature: number;
    humidity: number;
    weatherCode: number;
    forecastDetails: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${MUMBAI_COORDS.latitude}&longitude=${MUMBAI_COORDS.longitude}&current_weather=true&hourly=relative_humidity_2m` 
        );
        const data = await response.json();
        const current = data.current_weather;
        // Find the current hour's humidity
        let humidity = 0;
        if (data.hourly && data.hourly.time && data.hourly.relative_humidity_2m) {
          const now = new Date();
          const currentHour = now.toISOString().slice(0, 13); // 'YYYY-MM-DDTHH'
          const index = data.hourly.time.findIndex((t: string) => t.startsWith(currentHour));
          if (index !== -1) {
            humidity = data.hourly.relative_humidity_2m[index];
          }
        }
        setWeather({
          temperature: current.temperature,
          humidity,
          weatherCode: current.weathercode,
          forecastDetails: current.weathercode === 0 ? 'Clear sky' : 'See icon',
        });
      } catch (e) {
        setWeather(null);
      }
      setLoading(false);
    }
    fetchWeather();
  }, []);

  if (loading) return <div>Loading Mumbai weather...</div>;
  if (!weather) return <div>Weather unavailable</div>;

  return (
    <WeatherWidget
      location="Mumbai, India"
      temperature={weather.temperature}
      forecastDetails={weather.forecastDetails}
      humidity={weather.humidity}
      iconSrc={getWeatherIcon(weather.weatherCode)}
    />
  );
};

export default MumbaiWeatherWidget;
