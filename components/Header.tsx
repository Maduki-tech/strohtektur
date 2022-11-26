import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Flag from "react-world-flags";

export default function Header() {
    const [langu, setLangu] = useState("de");
    const router = useRouter();
    const { t } = useTranslation("common");
    return (
		<header className="flex justify-between bg-white h-16 items-center px-2 md:px-6">
            <Link href="/">
				<div className="text-2xl lg:text-4xl font-bold font-serif">Strohtektur</div>
            </Link>
            <Link href="/nowLindo">
                <div className="text-xs md:text-lg">N.O.W. Lindow</div>
            </Link>
            <div className=" flex gap-4 items-center">
                <Link href="/support">
                    <div className="border-black px-1 py-1 rounded-sm border-2 hover:bg-black hover:text-white">
						Unterstütz uns!
                        {/* {t("supportUs")} */}
                    </div>
                </Link>
                <div>
                    {langu === "de" ? (
                        <Link href={router.pathname} locale="en">
                            <Flag
                                code="de"
                                onClick={() => setLangu("us")}
                                width={50}
                                className="hover:cursor-pointer"
                            />
                        </Link>
                    ) : (
                        <Link href={router.pathname} locale="de">
                            <Flag
                                code="us"
                                onClick={() => setLangu("de")}
                                width={50}
                                className="hover:cursor-pointer"
                            />
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}
