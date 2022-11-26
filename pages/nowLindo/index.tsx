import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Index() {
    return (
        <div>
            <Header />
            <main
                className="flex flex-col bg-stroh border-y-2 border-y-black
				gap-6 px-6 pb-6"
            >
                <h1 className="text-6xl font-bold mt-12 mx-auto">N.O.W. Lindow</h1>
                <p className="w-2/3 mx-auto text-xl">
                    Das nachhaltigste Gebäude ist eines, das nie gebaut wird.
                    Das zweitnachhaltigste Gebäude ist eines, das keine Schäden
                    hinterlässt und nach seiner Nutzungsphase in biologische
                    oder technische Kreisläufe zurückgegeben wird.
                </p>

                <p className="w-2/3 mx-auto text-xl">
                    Wir stellen uns die Aufgabe N.O.W. Lindo(w)zu bauen, welches
                    vorwiegend aus biologischen Materialien besteht, um einen
                    positiven Beitrag für die notwendige Bauwende zu leisten.
                    Die übrigen Materialen bilden durch ihre
                    Wiederverwendbarkeit und Recyclefähigkeit eine Materialbank
                    und schließen damit den technischen Kreislauf der
                    Zirkularität. So sollen alle Bauteile in unterschiedlichster
                    Form (wieder)genutzt werden können, bis sie ihre
                    individuelle Lebensdauer erreicht haben und einen
                    ökologischen und ökonomischen Mehrwert im nächsten
                    Lebenszyklusschritt schaffen.
                </p>

                <p className="w-2/3 mx-auto text-xl">
                    Während der Nutzungsphase ist die Vermeidung der
                    Umweltverschmutzung aber ebenso wichtig. Das Konzept von
                    N.O.W. Lindo(w) geht weiter als seine vier Außenwände und
                    wird im Sinne der Permakultur in seine Umgebung funktional
                    integriert. So spielt es eine wichtige Rolle als Anbieter
                    und Nutzer von Ressourcen im kleinen Garten, die im
                    Kreislauf funktionieren.
                </p>

                <p className="w-2/3 mx-auto text-xl">
                    Die soziale Nachhaltigkeit und Bezahlbarkeit sind ebenfalls
                    essenzielle Kriterien, die die Menschen in die Lage bringen
                    sollen, ihr eigenes gesundes Haus zu bauen. N.O.W. Lindo(w)
                    schlägt eine Bauform vor, welche bezahlbare lokale
                    Materialien verwendet und das Mitbauen einfach möglich macht
                    und diese Prinzipien kombiniert, um eher ein Zuhause, als
                    ein Objekt zu schaffen.
                </p>

                <p className="w-2/3 mx-auto text-xl">
                    N.O.W. Lindow wurde von Strohtektur konzipiert und entworfen
                </p>
            </main>
            <Footer />
        </div>
    );
}
