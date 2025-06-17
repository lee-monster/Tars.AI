import React from "react";
import { useTranslation } from "react-i18next";

const Service = () => {
  const { t } = useTranslation();
  return (
    <div className="py-20 bg-gray-50 text-center px-4">
      <h2 className="text-3xl font-bold mb-4">{t("service.title")}</h2>
      <p className="max-w-2xl mx-auto text-lg">{t("service.description")}</p>
    </div>
  );
};

export default Service;
