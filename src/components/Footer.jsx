import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-black text-white text-center py-6 text-sm">
      <p>{t("footer.corp")}</p>
      <p>{t("footer.contact")}</p>
    </footer>
  );
};

export default Footer;
