import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiLocationPlus } from "react-icons/bi";

type Props = {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
};

const cities = [
  { value: "Barcelona", label: "Barcelona" },
  { value: "Paris", label: "Paris" },
  { value: "London", label: "London" },
];

export const CitySelector = ({ selectedCity, setSelectedCity }: Props) => {
  const handleSelectcity = (city: string) => {
    console.log(city);

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
        {selectedCity}
      </MenuButton>
      <MenuList>
        {cities.map((city) => (
          <MenuItem
            fontSize='xs'
            key={city.value}
            value={city.value}
            onClick={() => handleSelectcity(city.value)}
          >
            {city.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
