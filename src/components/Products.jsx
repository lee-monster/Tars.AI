import React from "react";
import { useTranslation } from "react-i18next";

const products = ["designer", "programmer", "chatbot"];

const Products = () => {
  const { t } = useTranslation();
  return (
    <div className="py-20 px-4 text-center bg-white">
      <h2 className="text-3xl font-bold mb-8">{t("products.title")}</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((key) => (
          <div key={key} className="p-6 border rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{t(`products.${key}.title`)}</h3>
            <p>{t(`products.${key}.desc`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
