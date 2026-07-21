import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL = `https://wa.me/5527981359051?text=${encodeURIComponent(
  "Olá, quero saber mais sobre a revenda",
)}`;

const links = [
  {
    label: "EXTENSÃO LOVABLE ILIMITADO",
    description: "Crie projetos de forma ilimitada sem gastar créditos",
    href: "https://lovehyro.store",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    highlight: true,
  },
  {
    label: "SUPORTE",
    description: "Fale conosco no WhatsApp",
    href: WHATSAPP_URL,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.73-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29z" />
      </svg>
    ),
    highlight: false,
  },
];

function Index() {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-background px-4 py-12 sm:py-16">
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-glow-orange/25 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-glow-blue/20 blur-[110px]" />
        <div className="absolute right-1/4 top-1/2 h-56 w-56 rounded-full bg-glow-pink/15 blur-[100px]" />
      </div>

      <main className="relative z-10 flex w-full max-w-md flex-col items-center animate-fade-up">
        {/* Logo */}
        <div className="rounded-3xl bg-gradient-to-br from-glow-orange via-glow-pink to-glow-blue p-[2px] shadow-logo">
          <div className="overflow-hidden rounded-[calc(1.5rem-2px)] bg-background">
            <img
              src={logoAsset.url}
              alt="Logo Lovable Infinito"
              className="h-24 w-24 object-cover sm:h-28 sm:w-28"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="mt-6 text-center text-2xl font-extrabold tracking-[0.18em] text-foreground sm:text-3xl">
          LOVABLE{" "}
          <span className="bg-gradient-to-r from-glow-orange via-glow-pink to-glow-blue bg-clip-text text-transparent">
            INFINITO
          </span>
        </h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Lovable ilimitado
        </p>

        {/* Divider */}
        <div className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-glow-pink/60 to-transparent" />

        {/* Links */}
        <nav className="mt-8 flex w-full flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                link.highlight
                  ? "group relative flex items-center gap-4 rounded-2xl p-[2px] gradient-border-animated shadow-btn-glow transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  : "group flex items-center gap-4 rounded-2xl border border-border bg-card p-[2px] transition-all duration-200 hover:-translate-y-0.5 hover:border-glow-pink/40 active:translate-y-0"
              }
            >
              <span className="flex w-full items-center gap-4 rounded-[calc(1rem-1px)] bg-card/95 px-5 py-4 backdrop-blur">
                <span
                  className={
                    link.highlight
                      ? "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-glow-orange to-glow-pink text-primary-foreground"
                      : "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-glow-green"
                  }
                >
                  {link.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-bold tracking-wide text-foreground">
                    {link.label}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {link.description}
                  </span>
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-foreground"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <footer className="mt-12 text-center text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Lovable Infinito
        </footer>
      </main>
    </div>
  );
}
