import React from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("welcoпше me")}</h1>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ua")}>Українська</button>
    </div>
  );
};

export default App;
