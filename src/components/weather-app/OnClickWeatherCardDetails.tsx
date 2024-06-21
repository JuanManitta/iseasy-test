import { motion } from "framer-motion";
import { Box, Image, Button } from "@chakra-ui/react";
import { IntervalCard } from "./IntervalCard";
import { List } from "../../interfaces/weather-data";
import { weatherImgMapping } from "../../utils/weather-img-mapping";
import { ChevronDownIcon } from "@chakra-ui/icons";

type Props = {
  weatherData: List[];
  weatherMain: string;
  handleToggleDetails: () => void;
};

export const OnClickWeatherCardDetails = ({ weatherData, weatherMain, handleToggleDetails }: Props) => {
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: -90 }}
      position="absolute"
      top="0"
      left="0"
      w="full"
      h="full"
      bg="#d5dce9"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="lg"
      zIndex="10"
      style={{ backfaceVisibility: "hidden" }}
    >
      <Box w="full" h="full">
        <Box
          w={"full"}
          rounded={"lg"}
          overflow={"hidden"}
          bg="#FEF7FA"
          position="relative"
        >
          <Image
            h={"120px"}
            w={"full"}
            src={weatherImgMapping[weatherMain]}
            objectFit="cover"
            alt="#"
          />

          {weatherData.map((interval) => (
            <IntervalCard key={interval.dt} interval={interval} />
          ))}

          <Box pos="absolute" top="0" right="0" p="1">
            <Button size="xs" variant="link" onClick={handleToggleDetails}>
              <ChevronDownIcon color="gray.600" fontSize="1.6rem" />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};