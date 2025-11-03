import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();

    return (
        <main id="home">
            <h1>{t("homeTitle")}</h1>
            <p>{t("homeDescription")}</p>
        </main>
    );
};

export default Home;
