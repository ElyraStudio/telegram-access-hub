import { createFileRoute } from "@tanstack/react-router";
import profileImg from "@/assets/profile.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Acesso Exclusivo — Canal VIP" },
      { name: "description", content: "Conteúdo sem filtros, atualizações diárias e materiais exclusivos. Entre no canal VIP gratuito." },
    ],
  }),
});

const TELEGRAM_URL = "https://t.me/";

function Index() {
  return (
    <main className="bg-radial-premium min-h-screen text-foreground">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="mx-auto flex min-h-screen max-w-md flex-col px-6 pt-12 pb-8">
        {/* Header */}
        <header className="flex flex-col items-center text-center animate-fade-up">
          <div className="ring-gold rounded-full p-[3px]">
            <img
              src={profileImg}
              alt="Perfil do criador"
              width={120}
              height={120}
              className="h-28 w-28 rounded-full object-cover"
            />
          </div>
          <h2 className="mt-5 font-display text-2xl tracking-wide text-foreground">
            @bastidores
          </h2>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-gold">
            Private Access
          </p>
        </header>

        {/* Hero */}
        <section className="mt-12 text-center animate-fade-up" style={{ animationDelay: "120ms" }}>
          <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Acesso Exclusivo aos <span className="text-gold italic">Bastidores</span>
          </h1>
          <p className="mx-auto mt-5 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
            Onde o conteúdo sem filtros acontece. Atualizações diárias e materiais que não posso postar nas redes sociais.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-10 animate-fade-up" style={{ animationDelay: "240ms" }}>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-gold bg-gradient-gold block w-full rounded-full py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-transform active:scale-[0.98]"
          >
            Entrar no Canal VIP (Grátis)
          </a>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Vagas limitadas · Acesso imediato
          </p>
        </section>

        {/* Benefits */}
        <section className="mt-12 grid grid-cols-1 gap-3 animate-fade-up" style={{ animationDelay: "360ms" }}>
          {[
            { t: "Conteúdo Diário", d: "Novidades todos os dias direto no seu Telegram." },
            { t: "Interação Direta", d: "Converse comigo sem intermediários." },
            { t: "Spoilers Exclusivos", d: "Veja antes de qualquer rede social." },
          ].map((b) => (
            <div
              key={b.t}
              className="shadow-soft rounded-2xl border border-border/60 bg-card/60 px-5 py-4 backdrop-blur"
            >
              <h3 className="font-display text-lg text-foreground">{b.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </section>

        <div className="flex-1" />

        {/* Footer */}
        <footer className="mt-16 flex flex-col items-center gap-3 border-t border-border/50 pt-6 text-center">
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="transition-colors hover:text-gold">Termos de Uso</a>
            <a href="#" className="transition-colors hover:text-gold">Política de Privacidade</a>
          </div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </footer>
      </div>
    </main>
  );
}
