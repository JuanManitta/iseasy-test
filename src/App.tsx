import { Box } from "@chakra-ui/react";
import { CitySelector, LangSelector } from "./components/ui";
import { useEffect, useState } from "react";
import { WeatherContainer } from "./components/weather-app";
import { WeatherData } from "./interfaces/weather-data";
import { getWeather } from "./api/open-weather-api";
import { Loading } from "./components/ui/Loading";
import { useTranslation } from "react-i18next";


function App() {
  const { t, i18n } = useTranslation();

  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [selectedCity, setSelectedCity] = useState(t("london"));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getWeather(selectedCity, i18n.language).then((data) => {
      setWeatherData(data);
      setIsLoading(false);
    });
  }, [selectedCity, i18n.language]);

  return (
    <>
      <Box as="header" p='4' px="8" display="flex" justifyContent="space-between">
        <CitySelector
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
        <LangSelector t={t} i18n={i18n} />
      </Box>

      <Box as="main" p="6" maxW="1444px" m="auto">
        {isLoading ? (
          <Loading />
        ) : (
          weatherData && <WeatherContainer weatherData={weatherData} />
        )}
      </Box>
    </>
  );
}

export default App;
