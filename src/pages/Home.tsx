import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";

export default function Home() {
    return (
        <>
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl font-extrabold mb-4">Festify</h1>
                <p className="text-neutral-600 mb-8 max-w-xl">La plataforma integral de gestión de festivales
                    musicales</p>
            </main>
            <Footer/>
        </>
    );
}
