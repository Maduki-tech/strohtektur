import { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";

const Footer: NextPage = () => {
    const { t } = useTranslation("common");
    return (
        <footer className="max-h-fit flex justify-between bg-white py-4 items-center px-6">
            <Link href="/">
                <div className="text-2xl lg:text-4xl font-bold font-recoleta">
                    Strohtektur
                </div>
            </Link>
            <div className="text-lg bg-stroh/40 p-3 rounded-md">
                <div className="font-bold">{t("contact")}</div>
                <div>Strohtektur GbR</div>
                <div>info@strohtektur.de</div>
                <div>0170 308 4202 </div>
                <div>Erlengrund 27</div>
                <div>16835 Lindow (Mark)</div>
            </div>
            <Link href="/Impressum">
                <div className="text-md underline">Stohtektur Impressum</div>
            </Link>
        </footer>
    );
};

export default Footer;
