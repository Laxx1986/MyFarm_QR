import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Kertek és zöldségek listája
const kertek = [
    "Szentmártonkáta", "Nagykáta", "Nagykőrös", "Ópusztaszer",
    "Balatonberény", "Harta", "Solt", "Hajdúhadház"
];

const zoldsegek = [
    "Alma", "Bab", "Batáta", "Batávia lollo saláta", "Bazsalikom", "Borsó", "Burgonya", "Csemegekukorica",
    "Cseresznye", "Csípős paprika", "Cukkini", "Cékla", "Dió", "Fejes káposzta", "Fejes saláta", "Fokhagyma",
    "Füge", "Fürtös paradicsom", "Főzőtök", "Gumós zeller", "Görögdinnye", "Kapor", "Karalábé", "Karfiol",
    "Kelbimbó", "Kelkáposzta", "Koktélparadicsom", "Kígyóuborka", "Körte", "Lilahagyma", "Meggy", "Menta",
    "Mizuna", "Mák", "Mángold", "Oregánó", "Padlizsán", "Pakchoi", "Paszternák", "Patiszón", "Petrezselyem",
    "Petrezselyemgyökér", "Retek", "Rozmaring", "Rukkola", "Spenót", "Szamóca", "Szőlő", "Sárgadinnye",
    "Sárgarépa", "Sóska", "Sütőtök", "Tormalevél", "Tv paprika", "Tárkony", "Tépősaláta", "Vöröshagyma",
    "Vöröskáposzta", "Zsálya", "Újhagyma", "Kínai kel", "Brokkoli", "Leveles kel", "Szilva", "Zöldbab",
    "Földimogyoró", "Főzőhagyma", "Kápia paprika", "Fekete retek", "Uborka", "Római saláta"
];

// Kert nevéből URL-barát slug készítése
const slugify = (name) =>
    name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "");

function KertValaszto() {
    const [kert, setKert] = useState(kertek[0]);
    const [valasztottZoldsegek, setValasztottZoldsegek] = useState([]);
    const [mutatCheckBoxokat, setMutatCheckBoxokat] = useState(false);
    const navigate = useNavigate();

    const handleCheckboxChange = (zoldseg) => {
        setValasztottZoldsegek((prev) =>
            prev.includes(zoldseg)
                ? prev.filter((z) => z !== zoldseg)
                : [...prev, zoldseg]
        );
    };

    const handleGeneralas = () => {
        const kertSlug = slugify(kert);
        // Küldés az új dinamikus útvonalra
        navigate(`/kert/${kertSlug}`, {
            state: {
                kert,
                selectedVegetables: valasztottZoldsegek
            }
        });
    };
    return (
        <div className="p-4 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Kert kiválasztása</h1>
            <select
                value={kert}
                onChange={(e) => setKert(e.target.value)}
                className="mb-4 p-2 border w-full"
            >
                {kertek.map((k) => (
                    <option key={k} value={k}>
                        {k}
                    </option>
                ))}
            </select>
            <button
                className="mt-4 px-4 py-2 bg-gray-400 text-black border border-gray-400 rounded cursor-not-allowed"
                onClick={() => setMutatCheckBoxokat(true)}
            >
                Következő
            </button>

            {mutatCheckBoxokat && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Zöldségek kiválasztása</h2>
                    <div
                        className="grid grid-cols-2 gap-4 max-h-[300px] overflow-y-scroll border p-4 rounded bg-gray-50">
                        {Array.from({length: Math.ceil(zoldsegek.length / 10)}, (_, i) => (
                            <div key={i}>
                                {zoldsegek.slice(i * 10, i * 10 + 10).map((z) => (
                                    <label key={z} className="flex items-center mb-1">
                                        <input
                                            type="checkbox"
                                            checked={valasztottZoldsegek.includes(z)}
                                            onChange={() => handleCheckboxChange(z)}
                                            className="mr-2"
                                        />
                                        {z}
                                    </label>
                                ))}
                            </div>
                        ))}
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-gray-400 text-black border border-gray-400 rounded cursor-not-allowed"

                        onClick={handleGeneralas}
                    >
                        Generálás
                    </button>
                </div>
            )}
        </div>
    );
}

export default KertValaszto;
