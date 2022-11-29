import { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Flag from "react-world-flags";

const Header: NextPage = () => {
    const [langu, setLangu] = useState("de");
    const router = useRouter();
    const { t } = useTranslation("common");
    return (
        <header className="flex justify-between bg-white h-16 items-center px-2 md:px-6">
            <Link href="/">
                <div className="text-2xl lg:text-4xl font-bold font-serif">
                    Strohtektur
                </div>
            </Link>
            <Link href="/nowLindo">
                <div className="text-md md:text-xl">N.O.W. Lindow</div>
            </Link>
            <div className=" flex gap-4 items-center">
                <Link href="/support">
                    <div className="bg-stroh border-black px-1 py-1 rounded-sm border-2 hover:bg-black hover:text-white">
                        {t("support")}
                    </div>
                </Link>
                <div>
                    {langu === "de" ? (
                        <Link href={router.pathname} locale="en">
                            <Flag
                                code="de"
                                onClick={() => setLangu("us")}
                                width={30}
                                className="hover:cursor-pointer"
                            />
                        </Link>
                    ) : (
                        <Link href={router.pathname} locale="de">
                            <Flag
                                code="gb"
                                onClick={() => setLangu("de")}
                                width={30}
                                className="hover:cursor-pointer"
                            />
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
