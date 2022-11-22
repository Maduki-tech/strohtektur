import Image from "next/image";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Paypal from "../../public/paypal.png";

export default function index() {
    return (
        <div className="">
            <Header />

            <main className="bg-yellow-400 border-y-2 border-y-black">
                <div className="mb-12 mt-10 px-6 flex flex-col gap-8">
                    <h1 className="max-w-3xl">
                        Wir möchten gerne deine Hilfe für die Realisierung
                        dieses Prototyphaus, das das Beste aus allen Aspekten
                        zusammenfassen sollte, und die ewirklich nachhaltigste
                        Lösung für Häuser anbietet.
                    </h1>
                    <h2 className="max-w-xl">
                        Hilf uns unsere Gedanke umzusetzten und das zu Beweisen,
                        das einen ökologischen Weg möglich ist und so mehr
                        Leuten zu überzeugen!
                    </h2>
                </div>

                <div className="grid grid-cols-5 px-6 gap-4">
                    <div className="flex flex-col justify-center items-center bg-white/50 px-4 py-8 gap-6 rounded-lg">
                        <div className="max-w-sm text-center">
                            High Five Strohballen die wir dank Dir kaufen
                            können!
                        </div>
                        <div className="border-2 border-black p-1">25€</div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white/50 px-4 py-8 gap-6 rounded-lg">
                        <div className="max-w-sm text-center">
                            für alles um das Stroh herum, Danke Dir!
                        </div>
                        <div className="border-2 border-black p-1">50€</div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white/50 px-4 py-8 gap-6 rounded-lg">
                        <div className="max-w-sm text-center">
                            Ein Wochenende im Haus, mitten in der Natur und
                            naturlichen Materialen
                        </div>
                        <div className="border-2 border-black p-1">100€</div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white/50 px-4 py-8 gap-6 rounded-lg">
                        <div className="max-w-sm text-center">
                            Eine ganze Woche, und ein mega Danke, für Dich!
                        </div>
                        <div className="border-2 border-black p-1">250€</div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white/50 px-4 py-8 gap-6 rounded-lg">
                        <div className="max-w-sm text-center">
                            vielen Dank für deine kleine oder große
                            Unterstützung
                        </div>
                        <div className="border-2 border-black p-1">...00€</div>
                    </div>
                </div>

                <div className="grid grid-cols-2 justify-items-center mt-6 mb-10">
                    <div className="w-2/3 bg-white/50 p-4 h-56">
                        <p>
                            Spende Dein Beitrag auf folgenges Bankkonto und
                            hinterlass uns eine Email im Verwendungszweck damit
                            wir Dich kontaktieren können.
                        </p>

                        <p>Inhaber: Strohtektur GbR</p>
                        <p> IBAN:DE00 0000 0000 0000 0000 00</p>
                        <p>BIC/SWIFT: AAAAA</p>
                        <p>
                            Verwendungszweck: Spende für Strohhaus,
                            deinemail@mail.com
                        </p>
                    </div>

                    <div className="w-2/3 bg-white/50 p-4 h-56 flex flex-col">
                        <Image
                            src={Paypal}
                            width={200}
                            height={200}
                            alt="Paypal Logo"
                        />
                        <p>Oder gerne auch per Paypal spenden</p>
                        <p>Strohtektur</p>
                        <p>hello@strohtektur.de</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
