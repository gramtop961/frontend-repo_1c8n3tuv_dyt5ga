import { Mail, MessageCircle, Phone, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Байланыс</h2>
          <p className="mt-3 text-slate-600">Жобаңды қысқаша сипатта — 24 сағат ішінде жауап беремін.</p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <form className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm font-medium text-slate-700">Атың</label>
              <input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-indigo-200 focus:ring" placeholder="Ержан" />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
              <input type="email" className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-indigo-200 focus:ring" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-slate-700">Хабарлама</label>
              <textarea rows="4" className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none ring-indigo-200 focus:ring" placeholder="Мақсат, мерзім және бюджет туралы жазыңыз" />
            </div>
            <div className="sm:col-span-2">
              <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700">
                Хатты жіберу
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <a href="mailto:contact@example.com" className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">
              <Mail className="h-4 w-4 text-indigo-600" /> Email
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">
              <MessageCircle className="h-4 w-4 text-green-600" /> Telegram
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50">
              <Phone className="h-4 w-4 text-emerald-600" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
