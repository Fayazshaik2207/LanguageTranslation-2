import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
    const { t } = useTranslation();

    return (
        <header>
            <div className="logo">
                <h2>{t("appTitle")}</h2>
            </div>

            <nav>
                <a href="#home">{t("home")}</a>
                <a href="#about">{t("about")}</a>
            </nav>

            <div className="search-container">
                <input type="text" placeholder={t("searchPlaceholder")} />
                <button>{t("search")}</button>
            </div>

            <LanguageSwitcher />
        </header>
    );
};

export default Header;
