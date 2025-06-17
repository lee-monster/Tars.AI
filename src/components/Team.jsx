import React from "react";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();
  return (
    <div className="py-20 bg-gray-100 text-center px-4">
      <h2 className="text-3xl font-bold mb-4">{t("team.title")}</h2>
      <p className="max-w-2xl mx-auto text-lg">{t("team.description")}</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="p-4 bg-white rounded shadow">👨‍🎨 Team - AI엔지니어와 현업 디자이너, 웹 개발진이 함께합니다</div>
      </div>
    </div>
  );
};

export default Team;
