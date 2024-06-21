import { Box } from "@chakra-ui/react";
import { CurrentDayCard } from "./CurrentDayCard";
import { NextDaysCard } from "./NextDaysCard";
import { List, WeatherData } from "../../interfaces/weather-data";
import { useEffect, useState } from "react";

type Props = {
  weatherData: WeatherData;
};
export const WeatherContainer = ({ weatherData }: Props) => {
  const [currentDayWeather, setCurrentDayWeather] = useState<List[]>();
  const [nextDaysComponents, setNextDaysComponents] = useState<JSX.Element[]>();

  useEffect(() => {
    filterWeatherByDays(weatherData);
  }, []);

  const filterWeatherByDays = (weatherData: WeatherData) => {
    const today = new Date().toISOString().split("T")[0];
    const todayWeather = weatherData.list.filter((item) =>
      item.dt_txt.startsWith(today)
    );
    const nextDaysWeather = weatherData.list.filter(
      (item) => !item.dt_txt.startsWith(today)
    );

    const groupedNextDays = groupByDay(nextDaysWeather);
    const nextDaysComponents = Object.keys(groupedNextDays).map((date) => (
      <NextDaysCard key={date} weatherData={groupedNextDays[date]} />
    ));
    setNextDaysComponents(nextDaysComponents);

    setCurrentDayWeather(todayWeather);
  };

  const groupByDay = (weatherData: List[]) => {
    const grouped = weatherData.reduce((acc, item) => {
      const date = new Date(item.dt * 1000).toISOString().split("T")[0];
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(item);
      return acc;
    }, {} as { [key: string]: List[] });

    return grouped;
  };

  return (
    <Box as="section" pt="6" display="flex" flexWrap="wrap" gap="4">
      {currentDayWeather && (
        <CurrentDayCard currentDayWeather={currentDayWeather} />
      )}

      {nextDaysComponents}
    </Box>
  );
};
