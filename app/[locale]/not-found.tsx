import { Navbar } from "@/components/navbar";
export default function NotFound() {
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-2">
        <Navbar/>
        <h1 className="text-4xl font-bold">404</h1>
        <p>Página não encontrada / Page not found</p>
      </main>
    );
  }