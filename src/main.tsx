import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { theme } from "./chakraUI/theme";
import React from "react";
import './localization/i18n';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </I18nextProvider>
  </React.StrictMode>
);
