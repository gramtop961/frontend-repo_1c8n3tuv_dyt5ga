const projects = [
  {
    name: "E-commerce Support Bot",
    tag: "Telegram + RAG",
    desc: "Өнім каталогымен сөйлесетін және тапсырыс мәртебесін тексеретін көптілді көмекші.",
  },
  {
    name: "HR Hiring Agent",
    tag: "Web + CRM",
    desc: "Резюмелерді сүзгілеп, сұхбат слоттарын автоматты жоспарлайтын агент.",
  },
  {
    name: "Ops Automation",
    tag: "WhatsApp + ERP",
    desc: "Қойма қалдықтарын тексеру, шот-фактурасын құру және жеткізу статустарын хабарлау.",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Жобалар мен нәтижелер</h2>
          <p className="mt-3 text-slate-600">Тез іске қосылатын, бизнеске әсері бар шешімдер.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <div key={p.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium text-indigo-700">
                <span className="rounded-md bg-indigo-50 px-2 py-1 ring-1 ring-indigo-100">{p.tag}</span>
              </div>
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
