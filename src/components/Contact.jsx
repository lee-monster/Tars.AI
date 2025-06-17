import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="py-20 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">{t("contact.title")}</h2>
      <p className="mb-6">{t("contact.description")}</p>
      <form className="max-w-md mx-auto space-y-4">
        <input className="w-full border p-2 rounded" placeholder={t("contact.form.name")} />
        <input className="w-full border p-2 rounded" placeholder={t("contact.form.email")} />
        <textarea className="w-full border p-2 rounded" placeholder={t("contact.form.message")} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {t("contact.form.submit")}
        </button>
      </form>
      <p className="mt-6 text-sm">{t("contact.email")}</p>
    </div>
  );
};

export default Contact;
