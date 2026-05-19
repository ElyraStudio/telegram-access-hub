import { createFileRoute } from "@tanstack/react-router";
import profileImg from "@/assets/profile.jpg";
import provocanteImg from "@/assets/provocante.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Acesso Privado — Malu" },
      { name: "description", content: "Conteúdo exclusivo, atualizações diárias e materiais sem filtros. Entre no canal VIP gratuito." },
    ],
  }),
});

// Seu link oficial do Telegram inserido diretamente
const TELEGRAM_URL = "https://t.me/+5-Vet-vPWUNjYmQ5"; 

function Index() {
  return (
    <main className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-purple-600/30">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="mx-auto flex min-h-screen max-w-md flex-col px-6 pt-12 pb-8">
        {/* Header */}
        <header className="flex flex-col items-center text-center">
          <div className="rounded-full border-2 border-purple-600/50 p-1 bg-[#121214] shadow-[0_0_15px_rgba(147,51,234,0.2)]">
            <img
              src={profileImg}
              alt="Malu"
              width={120}
              height={120}
              className="h-28 w-28 rounded-full object-cover"
            />
          </div>
          <h2 className="mt-5 font-display text-2xl tracking-wider text-white font-medium">
            @eumaluzinhaxs
          </h2>
          <p className="mt-1 text-[10px] uppercase tracking-[0.4em] text-purple-500 font-semibold">
            Private Access
          </p>
        </header>

        {/* Hero */}
        <section className="mt-10 text-center">
          <h1 className="font-display text-4xl leading-tight text-white">
            Acesso VIP aos meus <span className="text-purple-500 italic">Segredos</span>
          </h1>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
            Onde o conteúdo sem censura acontece. Atualizações diárias e os bastidores que o algoritmo do Instagram tenta derrubar.
          </p>
        </section>

        {/* Preview Provocante com Blur Ajustado */}
        <section className="mt-8 relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40 aspect-[4/5] flex items-end justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
          <img 
            src={provocanteImg} 
            alt="Preview VIP" 
            className="absolute inset-0 w-full h-full object-cover blur-md scale-105 pointer-events-none select-none brightness-95 contrast-[1.05]"
          />
          
          {/* Degradê escuro sobreposto */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent" />
          
          <div className="relative z-10 text-center px-4 pb-6 w-full flex flex-col items-center gap-1.5">
            <div className="bg-purple-950/60 border border-purple-500/30 backdrop-blur-md text-purple-300 text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-1">
              Desbloquear no Telegram
            </div>
            <h4 className="font-display text-xl text-white tracking-wide">Mídias Exclusivas</h4>
            <p className="text-xs text-zinc-400 max-w-[260px]">
              Clique abaixo para ver a foto completa e sem filtros dentro do meu grupo gratuito.
            </p>
          </div>
        </section>

        {/* CTA Botão Neon Purple */}
        <section className="mt-5">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-xl bg-purple-600 hover:bg-purple-700 text-white py-4 text-center text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-all active:scale-[0.98]"
          >
            Entrar no Canal VIP
          </a>
          <p className="mt-2.5 text-center text-[11px] text-zinc-500 tracking-wide">
            Acesso imediato 
          </p>
        </section>

        {/* Benefits */}
        <section className="mt-10 grid grid-cols-1 gap-3">
          {[
            { t: "Feed Diário", d: "Fotos e vídeos novos adicionados todas as noites." },
            { t: "Chat Privado", d: "Espaço exclusivo para responder mensagens." },
            { t: "Sem Tarjas", d: "O único lugar com as prévias completas do drive." },
          ].map((b) => (
            <div
              key={b.t}
              className="rounded-xl border border-zinc-900 bg-zinc-950/60 px-5 py-3.5 backdrop-blur-sm"
            >
              <h3 className="font-display text-base text-purple-400">{b.t}</h3>
              <p className="mt-0.5 text-xs text-zinc-400">{b.d}</p>
            </div>
          ))}
        </section>

        <div className="flex-1" />

        {/* Footer */}
        <footer className="mt-12 flex flex-col items-center gap-3 border-t border-zinc-900 pt-6 text-center">
          <div className="flex gap-6 text-[11px] text-zinc-500">
            <a href="#" className="transition-colors hover:text-purple-400">Termos</a>
            <a href="#" className="transition-colors hover:text-purple-400">Privacidade</a>
          </div>
          <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </footer>
      </div>
    </main>
  );
}