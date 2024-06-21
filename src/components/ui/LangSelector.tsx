import { Button, Box } from "@chakra-ui/react";
import { TFunction, i18n } from "i18next";
import { MdLanguage } from "react-icons/md";
import { useState } from 'react';

type Props = {
  i18n: i18n;
  t: TFunction;
};

export const LangSelector = ({ t, i18n }: Props) => {
  const [selectedLang, setSelectedLang] = useState('en')
  const languagues = ["es", "en"];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang)
  };

  return (
    <Box display="flex" gap="2" alignItems="center">
      <MdLanguage size="20px" color="black" />
      {languagues.map((lang) => (
        <Button
        size='xs'
          key={lang}
          onClick={() => changeLanguage(lang)}
          variant={selectedLang === lang ? "solid" : "ghost"}
        >
          {t(lang)} 
        </Button>
      ))}
    </Box>
  );
};
