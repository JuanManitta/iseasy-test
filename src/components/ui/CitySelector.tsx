import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { BiLocationPlus } from "react-icons/bi";

type Props = {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
};

const cities = [
  { value: "Barcelona", label: "barcelona" },
  { value: "Paris", label: "paris" },
  { value: "London", label: "london" },
];

export const CitySelector = ({ selectedCity, setSelectedCity }: Props) => {
  const { t } = useTranslation();
  const handleSelectcity = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={<BiLocationPlus />}
        size="xs"
        rightIcon={<ChevronDownIcon />}
      >
        {t(selectedCity)}
      </MenuButton>
      <MenuList>
        {cities.map((city) => (
          <MenuItem
            fontSize="xs"
            key={city.value}
            value={city.value}
            onClick={() => handleSelectcity(city.value)}
          >
            {t(city.label)}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
