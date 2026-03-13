import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import { CircleFlag } from "react-circle-flags";

const ToggleLanguage = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    if (i18n.language === "fr") {
      i18n.changeLanguage("en");
    } else if (i18n.language === "en") {
      i18n.changeLanguage("pt");
    } else {
      i18n.changeLanguage("fr");
    }
  };

  const getFlag = () => {
    switch (i18n.language) {
      case "fr":
        return <CircleFlag countryCode="fr" height="24" width="24" />;
      case "pt":
        return <CircleFlag countryCode="pt" height="24" width="24" />;
      case "en":
        return <CircleFlag countryCode="us" height="24" width="24" />;
      default:
        return <CircleFlag countryCode="fr" height="24" width="24" />;
    }
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleLanguage} className="">
      {getFlag()}
    </Button>
  );
};

export default ToggleLanguage;
