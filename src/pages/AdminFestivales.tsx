import CardFestival from "@/components/cardFestival";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Festival = {
    id: number | string;
    name: string;
    genre: string;
    startDate: string;
    endDate: string;
    city: string;
    priceRange: string;
};

const festivales: Festival[] = [
    {
        id: 1,
        name: "SunWave Fest",
        genre: "Música alternativa",
        startDate: "2025-07-12",
        endDate: "2025-07-14",
        city: "Barcelona",
        priceRange: "85€ - 120€",
    },
    {
        id: 2,
        name: "RockNation",
        genre: "Rock",
        startDate: "2025-08-05",
        endDate: "2025-08-07",
        city: "Madrid",
        priceRange: "90€ - 130€",
    },
    {
        id: 3,
        name: "ElectroVibes",
        genre: "Electrónica",
        startDate: "2025-09-10",
        endDate: "2025-09-12",
        city: "Valencia",
        priceRange: "70€ - 110€",
    },
    {
        id: 4,
        name: "Jazz & Blues Fest",
        genre: "Jazz y Blues",
        startDate: "2025-10-15",
        endDate: "2025-10-17",
        city: "Sevilla",
        priceRange: "60€ - 100€",
    },
];

export default function AdminFestivales() {
    return (
        <>
            <Header />

            <main className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                    <div>
                        <h1 className="text-2xl font-extrabold">Festivales</h1>
                        <p className="text-sm text-neutral-600">Crea y gestiona eventos.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input id="search" placeholder="Buscar por nombre/ciudad" className="px-3 py-2 rounded-lg border w-64" />
                        <a href="./admin-festival-nuevo.html" className="px-3 py-2 rounded-lg bg-neutral-900 text-white text-sm">Nuevo festival</a>
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-neutral-600">Resultados:</span>
                        <span id="result-count" className="font-medium" aria-live="polite">4</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="sort" className="text-neutral-600">Ordenar</label>
                        <select id="sort" className="px-2 py-1 rounded border">
                            <option value="title-asc">Título (A–Z)</option>
                            <option value="title-desc">Título (Z–A)</option>
                            <option value="start-asc">Fecha inicio (asc)</option>
                            <option value="start-desc">Fecha inicio (desc)</option>
                            <option value="start-asc">Precio desde (asc)</option>
                            <option value="start-desc">Precio desde (desc)</option>
                        </select>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {festivales.map(festivales => (
                        <CardFestival
                            key={festivales.id}
                            id={festivales.id}
                            name={festivales.name}
                            genre={festivales.genre}
                            startDate={festivales.startDate}
                            endDate={festivales.endDate}
                            city={festivales.city}
                            priceRange={festivales.priceRange}
                        />
                    ))}
                </div>
            </main>

            <Footer />
        </>
    );



}