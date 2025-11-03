import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    return (
        <main id="about">
            <h1>{t("aboutTitle")}</h1>
            <p>{t("aboutDescription")}</p>
        </main>
    );
};

export default About;
