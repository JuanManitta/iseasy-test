import { Box, Img, Text } from "@chakra-ui/react";
import weatherImage from "/weather-loading.svg";
import { useTranslation } from "react-i18next";

export const Loading = () => {
  const { t } = useTranslation();

  return (
    <Box h="400px" display="flex" justifyContent="center" alignItems="center">
      <Box display='flex' flexDir='column' alignItems='center'>

        <Img w={{base:'100px', md:'200px'}} src={weatherImage} alt="Loading"  />
        <Box mt='6'>
          <Text fontWeight='bold' as="span">{t("loading-text")}</Text>
        </Box>

      </Box>
    </Box>
  );
};
