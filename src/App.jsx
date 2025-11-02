import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold">Сонар Ержан</a>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            <a href="#services" className="text-slate-600 hover:text-slate-900">Қызметтер</a>
            <a href="#work" className="text-slate-600 hover:text-slate-900">Жобалар</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900">Байланыс</a>
          </nav>
          <a href="#contact" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">Келісейік</a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-600">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Сонар Ержан. Барлық құқықтар қорғалған.</p>
            <div className="flex gap-4">
              <a href="#services" className="hover:text-slate-900">Қызметтер</a>
              <a href="#work" className="hover:text-slate-900">Жобалар</a>
              <a href="#contact" className="hover:text-slate-900">Байланыс</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
