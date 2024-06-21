import { Button, Box } from "@chakra-ui/react";
import { TFunction, i18n } from "i18next";
import { MdLanguage } from "react-icons/md";

type Props = {
  i18n: i18n;
  t: TFunction;
};

export const LangSelector = ({ t, i18n }: Props) => {
  const languagues = ["es", "en"];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Box display="flex" gap="2" alignItems="center">
      <MdLanguage size="20px" color="black" />
      {languagues.map((lang) => (
        <Button
        size='xs'
          key={lang}
          onClick={() => changeLanguage(lang)}
          variant={i18n.language === lang ? "solid" : "ghost"}
        >
          {t(lang)} 
        </Button>
      ))}
    </Box>
  );
};
