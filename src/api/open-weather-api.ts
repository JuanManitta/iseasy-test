import axios from 'axios';

export const getWeather = async (city: string, lang: string) => {
    const baseUrl = import.meta.env.VITE_OPEN_WEATHER_BASE_URL;
    const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

    try {
        const { data } = await axios.get(baseUrl, {
            params: {
                q: city,
                appid: apiKey,
                units: 'metric',
                lang: lang,
            },
        });
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};