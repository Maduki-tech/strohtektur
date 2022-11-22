import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="max-h-fit flex justify-around bg-white py-4 items-center">
            <div className="text-xs">
                <div>Kontakt</div>
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
}
