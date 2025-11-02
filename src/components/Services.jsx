import { Bot, Brain, Rocket, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Чат-бот әзірлеу",
    desc: "Telegram, WhatsApp, Instagram және вебке арналған ақылды боттар. Күрделі сценарийлер, тілдік модельдермен біріктіру, төлемдер және аналитика.",
  },
  {
    icon: Brain,
    title: "ИИ агент интеграциясы",
    desc: "Генеративті ИИ, RAG, құжат қоры, сыртқы API-лар және корпоративтік жүйелермен қауіпсіз орнату.",
  },
  {
    icon: MessageCircle,
    title: "Клиенттік тәжірибе",
    desc: "Диалогтық UX, көптілді қолдау, жеке ұсыныстар және адамға тапсыру (handoff) процестері.",
  },
  {
    icon: Rocket,
    title: "Идея және прототип",
    desc: "Жылдам валидация, MVP, PoC. Нарыққа шығуға дейінгі гипотезаларды тексеру және прототип дайындау.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Қызметтер</h2>
          <p className="mt-3 text-slate-600">Бизнес құнын арттыратын практикалық шешімдер.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600 ring-1 ring-indigo-100">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
