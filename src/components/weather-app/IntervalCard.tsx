import { Box, Img, Text } from "@chakra-ui/react";
import { List } from "../../interfaces/weather-data";
import { useTranslation } from "react-i18next";

type Props = {
  interval: List;
};
export const IntervalCard = ({ interval }: Props) => {
  const { t } = useTranslation();
  return (
    <Box
      key={interval.dt}
      borderBottom="1px solid"
      borderColor="gray.400"
      display="flex"
      justifyContent="space-between"
      alignItems='center'
      borderRadius="xs"
      bg='#d5dce9'
      p={2}
    >
      <Box display="flex" gap="2" alignItems='center'>
        <Box>
          <Img
            w="20px"
            src={`http://openweathermap.org/img/wn/${interval.weather[0].icon}.png`}
            alt={interval.weather[0].description}
          />
        </Box>
        <Box>
          <Text fontSize="10px" fontWeight="semibold">
            {interval.dt_txt.slice(11,16)}
          </Text>
        </Box>
        <Box>
          <Text fontSize="10px">{Math.ceil(interval.main.temp)}&#8451;</Text>
        </Box>
      </Box>
      {/* humedity */}
      <Box>
        <Text fontSize="10px">{t(interval.weather[0].main)}</Text>
      </Box>
    </Box>
  );
};
