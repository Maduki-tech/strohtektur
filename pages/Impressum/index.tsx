import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Impressum() {
    return (
        <div>
            <Header />

            <main className="bg-stroh border-y-2 border-y-black h-screen px-6">
                <div className="text-lg">
                    <div className="font-bold">Kontakt</div>
                    <div>Strohtektur GbR</div>
                    <div>info@strohtektur.de</div>
                    <div>0170 308 4202 </div>
                    <div>Erlengrund 27</div>
                    <div>16835 Lindow (Mark)</div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
