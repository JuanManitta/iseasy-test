import { Badge, Box, Image, Text } from "@chakra-ui/react";
import { List } from "../../interfaces/weather-data";
import { weatherImgMapping } from "../../utils/weather-img-mapping";
import { MiniCard } from "./MiniCard";
import { useTranslation } from "react-i18next";

type Props = {
  currentDayWeather: List[];
};
export const CurrentDayCard = ({ currentDayWeather }: Props) => {
  const { t } = useTranslation();

  const maxTemp = Math.max(...currentDayWeather.map((item) => item.main.temp));
  const minTemp = Math.min(...currentDayWeather.map((item) => item.main.temp));
  const icon = currentDayWeather[0].weather[0].icon;

  return (
    <Box
      minW="340px"
      w={{ base: "full", md: "auto" }}
      rounded={"lg"}
      boxShadow="md"
      overflow={"hidden"}
      position="relative"
    >
      <Image
        h={"120px"}
        w={"full"}
        src={weatherImgMapping[currentDayWeather[0].weather[0].main]}
        objectFit="cover"
        alt="#"
      />
      <Box position="absolute" top="50" display="grid">
        <Badge fontWeight="semibold" borderRadius="sm">
          {new Date(currentDayWeather[0].dt * 1000).toLocaleString(
            t("days-lang"),
            {
              weekday: "long",
            }
          )}{" "}
          -{" "}
          {new Date(currentDayWeather[0].dt * 1000).toLocaleString(
            t("month-lang"),
            {
              month: "long",
            }
          )}{" "}
          {new Date(currentDayWeather[0].dt * 1000).getDate()}
        </Badge>
        <Badge fontSize="10px" w="60px" mt="1">
          {new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Badge>
      </Box>

      <Box p={3}>
        <Text textAlign="center" fontSize="5xl" fontWeight="bold">
          {Math.ceil(currentDayWeather[0].main.temp)}&#8451;
        </Text>

        <Box display="flex" justifyContent="space-around" mt="4">
          <Box>
            <Text fontSize="xs">Min: {Math.ceil(minTemp)}&#8451;</Text>
            <Text fontSize="xs">Max: {Math.ceil(maxTemp)}&#8451;</Text>
          </Box>
          <Box>
            <Text fontSize="xs">
              {t("feels-like")}:{" "}
              {Math.ceil(currentDayWeather[0].main.feels_like)}&#8451;
            </Text>
            <Text fontSize="xs">
              {t("humidity")}: {currentDayWeather[0].main.humidity}%
            </Text>
          </Box>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" alignItems={"center"} gap={4}>
        <Text color="gray.500">
          {currentDayWeather[0].weather[0].description}
        </Text>
        <Box>
          <Image
            w="40px"
            src={`http://openweathermap.org/img/wn/${icon}.png`}
            alt=""
          />
        </Box>
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        gap="2"
        p={4}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        {currentDayWeather.map((interval) => {
          return <MiniCard key={interval.dt} interval={interval} />;
        })}
      </Box>
    </Box>
  );
};
