import { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Paypal from "../../public/paypal.png";

const Index:NextPage=()=> {
    const { t } = useTranslation("common");
    return (
        <div className="">
            <Header />

            <main className="bg-stroh border-y-2 border-y-black">
                <h1 className="text-6xl font-bold mt-12 text-center">
					{t('support')}
                </h1>
                <div className="mb-12 mt-10 px-6 flex flex-col gap-8">
                    <h1 className="max-w-3xl">{t("supText1")}</h1>
                    <h2 className="max-w-xl">{t("supText2")}</h2>
                </div>

                <div className="grid md:grid-cols-5 px-6 gap-4">
                    <div className="flex flex-col justify-center items-center bg-white/50 px-4 py-8 gap-6 rounded-lg">
                        <div className="max-w-sm text-center">{t("25")}</div>
                        <div className="text-xl font-bold underline p-1 w-16 text-center">
                            25€
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white/50 px-4 py-8 gap-6 rounded-lg">
                        <div className="max-w-sm text-center">{t("50")}</div>
                        <div className="text-xl font-bold underline p-1 w-16 text-center">
                            50€
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white/50 px-4 py-8 gap-6 rounded-lg">
                        <div className="max-w-sm text-center">{t("100")}</div>
                        <div className="text-xl font-bold underline p-1 w-16 text-center">
                            100€
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white/50 px-4 py-8 gap-6 rounded-lg">
                        <div className="max-w-sm text-center">{t("250")}</div>
                        <div className="text-xl font-bold underline p-1 w-16 text-center">
                            250€
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white/50 px-4 py-8 gap-6 rounded-lg">
                        <div className="max-w-sm text-center">{t("00")}</div>
                        <div className="text-xl font-bold underline p-1 w-16 text-center">
                            ...00€
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 justify-items-center mt-6 mb-10 gap-10">
                    <div className="md:w-2/3 bg-white/50 p-4 md:h-96 flex flex-col rounded-lg">
                        <p className="max-w-xs">{t("msg")}</p>

                        <p>{t("inhaber")}</p>
                        <p> IBAN:DE00 0000 0000 0000 0000 00</p>
                        <p>BIC/SWIFT: AAAAA</p>
                        <p className="max-w-xs">{t("zweck")}</p>
                    </div>

                    <div className="md:w-2/3 bg-white/50 p-4 md:h-96 flex flex-col justify-center items-center rounded-lg">
                        <Image
                            src={Paypal}
                            width={200}
                            height={200}
                            alt="Paypal Logo"
                        />
                        <p className="max-w-xs">{t("paypalMsg")}</p>
                        <p>Strohtektur</p>
                        <p>hello@strohtektur.de</p>
                        <p>{t("payPalZweck")}</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
export default Index;
