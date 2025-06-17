import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="fixed w-full bg-black shadow z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* 로고 이미지로 교체 */}
        <div>
          <img 
            src="/images/logo_tars_white.png" 
            alt="Tars.AI Logo" 
            className="h-8 md:h-10 w-auto object-contain cursor-pointer"
          />
        </div>

        {/* 모바일 메뉴 버튼 */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">☰</button>
        </div>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden md:flex space-x-6 font-medium items-center">
          {['team', 'products', 'service', 'contact'].map((key) => (
            <li key={key}>
              <Link 
                to={key} 
                smooth={true} 
                duration={500} 
                className="cursor-pointer hover:text-blue-400 text-white"
              >
                {t(`nav.${key}`)}
              </Link>
            </li>
          ))}
          <li>
            <select
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="border rounded bg-black text-white px-1 py-0.5"
              defaultValue={i18n.language}
            >
              <option value="en">EN</option>
              <option value="ko">KO</option>
            </select>
          </li>
        </ul>
      </div>

      {/* 모바일 메뉴 */}
      {open && (
        <ul className="md:hidden px-4 pb-4 space-y-2 font-medium bg-black">
          {['team', 'products', 'service', 'contact'].map((key) => (
            <li key={key}>
              <Link
                to={key}
                smooth={true}
                duration={500}
                className="block text-white hover:text-blue-400"
                onClick={() => setOpen(false)}
              >
                {t(`nav.${key}`)}
              </Link>
            </li>
          ))}
          <li>
            <select
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="border rounded bg-black text-white px-1 py-0.5"
              defaultValue={i18n.language}
            >
              <option value="en">EN</option>
              <option value="ko">KO</option>
            </select>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
