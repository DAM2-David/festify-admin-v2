// src/pages/adminFestivales.tsx

import { useState, useEffect } from "react";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import CardFestivales from "@/components/cardFestival";

// (Asumimos que el tipo Festival está aquí o importado)
type Festival = {
    id: number;
    name: string;
    genre: string;
    startDate: string;
    endDate: string;
    city: string;
    priceRange: string;
}

export default function AdminFestivales() {

    // 'festivales' guardará los datos venidos de la API
    const [festivales, setFestivales] = useState<Festival[]>([]);

    // 'isLoading' nos servirá para mostrar un mensaje de "Cargando..."
    const [isLoading, setIsLoading] = useState(true);

    // 'error' guardará cualquier error si la llamada a la API falla
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {

        const fetchFestivales = async () => {
            try {
                const response = await fetch('http://localhost:8080/festivals');

                if (!response.ok) {
                    throw new Error('No se pudieron obtener los datos');
                }

                const data = await response.json();
                setFestivales(data);

            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Ocurrió un error desconocido');
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchFestivales();

    }, []);


    // Muestra un mensaje mientras los datos se están cargando
    if (isLoading) {
        return (
            <>
                <Header />
                <main className="max-w-7xl mx-auto px-4 py-8">
                    <p className="text-center">Cargando festivales...</p>
                </main>
                <Footer />
            </>
        );
    }

    // Muestra un mensaje si hubo un error
    if (error) {
        return (
            <>
                <Header />
                <main className="max-w-7xl mx-auto px-4 py-8">
                    <p className="text-center text-red-600">Error: {error}</p>
                </main>
                <Footer />
            </>
        );
    }


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
                        <a href="./NuevoFestivales" className="px-3 py-2 rounded-lg bg-neutral-900 text-white text-sm">Nuevo festival</a>
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-neutral-600">Resultados:</span>
                        <span id="result-count" className="font-medium" aria-live="polite">4</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <label for="sort" className="text-neutral-600">Ordenar</label>
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
            </main>

            <main className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {festivales.map(festival => (
                        <CardFestivales
                            key={festival.id}
                            id={festival.id}
                            name={festival.name}
                            genre={festival.genre}
                            startDate={festival.startDate}
                            endDate={festival.endDate}
                            city={festival.city}
                            priceRange={festival.priceRange}
                        />
                    ))}
                </div>
            </main>

            <Footer />
        </>
    );
}