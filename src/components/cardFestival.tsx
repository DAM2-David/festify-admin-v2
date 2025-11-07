

interface CardFestivalProps {
    id: number | string;
    name: string;
    genre: string;
    startDate: string;
    endDate: string;
    city: string;
    priceRange: string;
}

export default function CardFestival({
    id,
    name,
    genre,
    startDate,
    endDate,
    city,
    priceRange
}: CardFestivalProps) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const monthYear = start.toLocaleString('es-ES', { month: 'short', year: 'numeric' })
        .replace('.', '') // Quita el punto de "jul."
        .toUpperCase();

    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    const dateString = `${start.toLocaleDateString('es-ES', options)} — ${end.toLocaleDateString('es-ES', options)}`;




    return (
    <article data-festival data-name="SunWave Fest" data-city="Barcelona" data-start="2025-07-12" data-end="2025-07-14"
        className="rounded-xl border p-4 hover:shadow-sm transition shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
        <div className="flex items-start justify-between gap-3">
            <header>
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="mt-1 text-sm text-neutral-600">{genre}</p>
            </header>
            <span className="inline-flex items-center justify-center text-xs font-semibold px-2 py-1 rounded-full bg-neutral-100 border">
                {monthYear}
            </span>
        </div>

        <dl className="mt-4 space-y-2 text-sm">
            <div className="flex items-center gap-2">
                <dt className="text-neutral-500">🗓️</dt>
                <dd>{dateString}</dd>
            </div>
            <div className="flex items-center gap-2">
                <dt className="text-neutral-500">📍</dt>
                <dd>{city}</dd>
            </div>
            <div className="flex items-center gap-2">
                <dt className="text-neutral-500">💶</dt>
                <dd>{priceRange}</dd>
            </div>
        </dl>

        <div className="mt-4 flex items-center justify-end gap-2">
            <a href={`./admin-festival-editar.html?id=${id}`} className="px-2 py-1 rounded border">Editar</a>
            <button className="px-2 py-1 rounded border text-red-700">Eliminar</button>
        </div>
    </article>


    );
}