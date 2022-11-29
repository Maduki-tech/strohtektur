import { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Index: NextPage = () => {
    const { t } = useTranslation("common");
    return (
        <div>
            <Header />
            <main
                className="flex flex-col bg-stroh border-y-2 border-y-black
				gap-6 px-6 pb-6"
            >
                <h1 className="text-6xl font-bold mt-12 mx-auto">
                    N.O.W. Lindow
                </h1>
                <p className="w-2/3 mx-auto text-xl">{t("firstText")}</p>

                <p className="w-2/3 mx-auto text-xl">{t("secondText")}</p>

                <p className="w-2/3 mx-auto text-xl">{t("thirdText")}</p>

                <p className="w-2/3 mx-auto text-xl">{t("fourthText")}</p>

                <p className="w-2/3 mx-auto text-xl">{t("fiftText")}</p>
            </main>
            <Footer />
        </div>
    );
}

export default Index;
