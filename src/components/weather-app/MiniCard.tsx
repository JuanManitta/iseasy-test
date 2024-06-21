import { Box, Card, Divider, Img, Text } from "@chakra-ui/react";
import { List } from "../../interfaces/weather-data";

type Props = {
  interval: List;
};
export const MiniCard = ({ interval }: Props) => {
  return (
    <Card
      variant="filled"
      w="40px"
      p="1"
      display="flex"
      flexDir="column"
      alignItems="center"
      gap="1"
      bg="#d5dce9"
    >
      <Text fontSize="10px">{interval.dt_txt.slice(11, 16)}</Text>
      <Divider />
      <Box>
        <Img
          w="20px"
          src={`http://openweathermap.org/img/wn/${interval.weather[0].icon}.png`}
          alt=""
        />
      </Box>
      <Text fontSize="10px">{Math.ceil(interval.main.temp)}&#8451;</Text>
    </Card>
  );
};
