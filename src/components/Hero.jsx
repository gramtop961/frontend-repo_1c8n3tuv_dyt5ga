import { ArrowRight, Bot, Brain } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-sky-400/10 to-fuchsia-400/10 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-sm text-indigo-600 ring-1 ring-indigo-600/20">
              <Bot className="h-4 w-4" />
              Чат-боттар • ИИ агенттер • Интеграциялар
            </div>
            <h1 className="mt-6 font-semibold tracking-tight text-3xl sm:text-5xl md:text-6xl">
              Сонар Ержан —
              <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
                чат-бот әзірлеуші және ИИ агент интеграторы
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Мен бизнес-процестерді автоматтандыратын, клиентпен өзара әрекетті жақсартатын және жаңа идеяларды іске асыратын
              ақылды шешімдер жасаймын. Диалогтық интерфейстер, көпканалды интеграциялар және генеративті ИИ — менің күшті қырым.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-indigo-700"
              >
                Жобаны бастау
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Қызметтер
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-indigo-600" />
                <span>Көп тілді чат-боттар</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-fuchsia-600" />
                <span>Генеративті ИИ идеялары</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto aspect-square w-full max-w-md rounded-3xl bg-gradient-to-tr from-indigo-600 via-sky-500 to-fuchsia-500 p-1 shadow-2xl">
              <div className="flex h-full w-full items-center justify-center rounded-3xl bg-white/90 backdrop-blur">
                <div className="p-8 text-center">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-2xl bg-indigo-50 ring-1 ring-indigo-100 flex items-center justify-center">
                    <Bot className="h-12 w-12 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-semibold">Сонар Ержан</h3>
                  <p className="mt-2 text-slate-600">AI/ML, чат-бот архитектурасы және өнімдік ойлау</p>
                  <p className="mt-4 text-sm text-slate-500">OpenAI, Telegram/WhatsApp, CRM/ERP, вебхуктар, RAG, агенттік оркестрация</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
