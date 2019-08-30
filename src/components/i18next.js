//handling the translations
// import { translate, Trans } from "react-i18next";
import common_bs from "../translations/bs/common.json";
import common_en from "../translations/en/common.json";
import i18next from "i18next";
import LngDetector from "i18next-browser-languagedetector";

i18next.use(LngDetector).init({
  interpolation: { escapeValue: false }, // React already does escaping
  languages: ["bs", "en"],
  fallbackLng: "bs",
  resources: {
    en: {
      common: common_en // 'common' is our custom namespace
    },
    bs: {
      common: common_bs
    }
  }
});

export default i18next;
