import { Box, Image, Text, Divider, Badge, Button } from "@chakra-ui/react";
import { List } from "../../interfaces/weather-data";
import { weatherImgMapping } from "../../utils/weather-img-mapping";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { OnHoverWeatherCard } from "./OnClickWeatherCardDetails";

type Props = {
  weatherData: List[];
};

export const NextDaysCard = ({ weatherData }: Props) => {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);

  const maxTemp = Math.max(...weatherData.map((item) => item.main.temp));
  const minTemp = Math.min(...weatherData.map((item) => item.main.temp));
  const date = new Date(weatherData[0].dt * 1000);
  const weatherIcon = weatherData[0].weather[0].icon;
  const weatherDescription = weatherData[0].weather[0].description;
  const weatherMain = weatherData[0].weather[0].main;

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Box minW="180px" w={{ base: "full", md: "auto" }} position="relative">
      <Box
        as={motion.div}
        whileHover={{ scale: 1.01 }}
        onClick={handleToggleDetails}
        rounded="lg"
        overflow="hidden"
        bg="#d5dce9"
        position="relative"
      >
        <Image
          h="120px"
          w="full"
          src={weatherImgMapping[weatherMain]}
          objectFit="cover"
          alt="#"
        />

        <Box pos="absolute" top="0" right="0" p="1">
          <Button size="xs" variant="link" onClick={handleToggleDetails}>
            <ChevronDownIcon color="gray.600" fontSize="1.5rem" />
          </Button>
        </Box>

        <Box p={3}>
          <Text fontSize="5xl" fontWeight="bold" textAlign="center">
            {Math.ceil(maxTemp)}&#8451;
          </Text>
        </Box>

        <Box p={3}>
          <Text fontSize="sm" textAlign="center">
            {Math.ceil(minTemp)}&#8451; - {Math.ceil(maxTemp)}&#8451;
          </Text>
        </Box>

        <Divider />

        <Box display="flex" justifyContent="center" mt={4}>
          <img
            src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}
            alt=""
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <Text mt="3" textAlign="center" color={"gray.500"}>
            {weatherDescription}
          </Text>
        </Box>

        <Box h="60px" display="flex" flexDir="column" justifyContent="center">
          <Badge fontSize="md" textAlign="center" fontWeight="semibold">
            {date.toLocaleDateString(t("days-lang"), { weekday: "long" })}
          </Badge>
        </Box>
      </Box>
      <AnimatePresence>
        {showDetails && (
          <OnHoverWeatherCard
            weatherData={weatherData}
            weatherMain={weatherMain}
            handleToggleDetails={handleToggleDetails}
          />
        )}
      </AnimatePresence>
    </Box>
  );
};
