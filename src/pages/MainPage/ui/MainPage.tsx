import React from 'react';
import {useTranslation} from "react-i18next";

const MainGame = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("Home Page")}</h1>
        </div>
    );
};

export default MainGame;
